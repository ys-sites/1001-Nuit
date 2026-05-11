import { useRef, useEffect } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number; decay: number;
  r: number; g: number; b: number;
}

// ─── Singleton scroll-direction tracker ─────────────────────────────────────
const scrollState = {
  y: typeof window !== "undefined" ? window.scrollY : 0,
  dir: "down" as "up" | "down",
  inited: false,
};

function ensureScrollTracker() {
  if (scrollState.inited || typeof window === "undefined") return;
  scrollState.inited = true;
  scrollState.y = window.scrollY;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      scrollState.dir = y > scrollState.y ? "down" : "up";
      scrollState.y = y;
    },
    { passive: true }
  );
}

// ─── Pixel sampler ───────────────────────────────────────────────────────────
// Renders every text node from `el` onto an offscreen canvas using Range rects
// so each word is placed at its exact screen position. Then reads pixel data
// to seed the particle burst.
function samplePixels(el: HTMLElement, fallbackColor: string): Particle[] {
  const rect = el.getBoundingClientRect();
  if (!rect.width || !rect.height) return [];

  const W = Math.ceil(rect.width);
  const H = Math.ceil(rect.height);
  const oc = document.createElement("canvas");
  oc.width = W;
  oc.height = H;
  const ctx = oc.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];

  const range = document.createRange();
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let node: Node | null;

  while ((node = walker.nextNode())) {
    const tn = node as Text;
    if (!tn.textContent?.trim()) continue;
    const parent = tn.parentElement;
    if (!parent) continue;

    const cs = window.getComputedStyle(parent);

    // ShinyText uses `-webkit-text-fill-color: transparent` (gradient clip).
    // Fall back to the explicitly supplied textColor so particles are visible.
    const webkitFill = cs.getPropertyValue("-webkit-text-fill-color");
    const color =
      webkitFill === "transparent" ||
      cs.color === "rgba(0, 0, 0, 0)" ||
      cs.color === "transparent"
        ? fallbackColor
        : cs.color;

    ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";

    // Walk word by word, get each word's real screen rect via Range
    const text = tn.textContent;
    const re = /\S+/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      try {
        range.setStart(tn, m.index);
        range.setEnd(tn, m.index + m[0].length);
        for (const r of Array.from(range.getClientRects())) {
          ctx.fillText(m[0], r.left - rect.left, r.top - rect.top);
        }
      } catch {
        /* range errors are safe to ignore */
      }
    }
  }

  // Sample every STEP px – enough for a dense particle cloud, cheap enough for 60 fps
  const { data } = ctx.getImageData(0, 0, W, H);
  const particles: Particle[] = [];
  const STEP = 4;

  for (let py = 0; py < H; py += STEP) {
    for (let px = 0; px < W; px += STEP) {
      const i = (py * W + px) * 4;
      if (data[i + 3] < 100) continue;

      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 10;
      particles.push({
        x: px, y: py,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5, // subtle upward bias
        alpha: 1,
        decay: 0.01 + Math.random() * 0.02,
        r: data[i], g: data[i + 1], b: data[i + 2],
      });
    }
  }
  return particles;
}

// ─── Component ───────────────────────────────────────────────────────────────
interface Props {
  children: any;
  /** Tailwind / CSS classes applied to the animated inner div */
  className?: string;
  /** Tailwind / CSS classes applied to the outer positioning wrapper */
  wrapperClassName?: string;
  /** Seconds before the rise-up transition starts after the element enters view */
  delay?: number;
  /**
   * Colour used for pixel sampling when the child uses gradient text
   * (ShinyText, etc.). Defaults to dark charcoal.
   */
  textColor?: string;
}

export default function ScrollTextReveal({
  children,
  className = "",
  wrapperClassName = "",
  delay = 0,
  textColor = "#1a1c19",
}: Props) {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const textRef  = useRef<HTMLDivElement>(null);
  const cvRef    = useRef<HTMLCanvasElement>(null);
  const psRef    = useRef<Particle[]>([]);
  const rafRef   = useRef<number | null>(null);
  const state    = useRef<"hidden" | "visible" | "dispersing">("hidden");

  useEffect(() => {
    ensureScrollTracker();
    const wrap = wrapRef.current;
    const text = textRef.current;
    const cv   = cvRef.current;
    if (!wrap || !text || !cv) return;

    // ── Enter: smooth rise-up ─────────────────────────────────────────────
    const enter = () => {
      if (state.current === "visible") return;
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
      cv.style.display = "none";
      psRef.current = [];
      state.current = "visible";
      text.style.transition =
        `opacity 0.7s ease ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`;
      text.style.opacity   = "1";
      text.style.transform = "translateY(0px)";
    };

    // ── Exit: pixel dispersion (scroll UP) or simple fade (scroll DOWN) ───
    const exit = () => {
      if (state.current !== "visible") return;
      state.current = "hidden";

      if (scrollState.dir === "up") {
        // Pixel dispersion ─────────────────────────────────────────────────
        state.current = "dispersing";
        const r = text.getBoundingClientRect();
        cv.width  = Math.ceil(r.width);
        cv.height = Math.ceil(r.height);
        cv.style.width  = r.width  + "px";
        cv.style.height = r.height + "px";
        cv.style.display = "block";
        psRef.current = samplePixels(text, textColor);

        // Hide the DOM text immediately so only particles are visible
        text.style.transition = "none";
        text.style.opacity    = "0";

        const drawCtx = cv.getContext("2d");
        if (!drawCtx || psRef.current.length === 0) {
          cv.style.display = "none";
          state.current = "hidden";
          return;
        }

        const tick = () => {
          drawCtx.clearRect(0, 0, cv.width, cv.height);
          let alive = 0;

          for (const p of psRef.current) {
            if (p.alpha <= 0) continue;
            alive++;
            p.x  += p.vx;  p.y  += p.vy;
            p.vx *= 0.97;  p.vy *= 0.97;
            p.alpha -= p.decay;
            drawCtx.globalAlpha = Math.max(0, p.alpha);
            drawCtx.fillStyle   = `rgb(${p.r},${p.g},${p.b})`;
            drawCtx.fillRect(Math.round(p.x), Math.round(p.y), 4, 4);
          }

          drawCtx.globalAlpha = 1;

          if (alive > 0) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            cv.style.display = "none";
            state.current    = "hidden";
            psRef.current    = [];
          }
        };

        rafRef.current = requestAnimationFrame(tick);

      } else {
        // Simple upward exit when scrolling down past the element
        text.style.transition = "opacity 0.45s ease, transform 0.45s ease";
        text.style.opacity    = "0";
        text.style.transform  = "translateY(-24px)";
      }
    };

    // IntersectionObserver – rootMargin pulls the trigger slightly before
    // the element fully leaves from the bottom, so the dispersion starts
    // while it is still partially on screen.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? enter() : exit())),
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );

    io.observe(wrap);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [delay, textColor]);

  return (
    <div ref={wrapRef} className={wrapperClassName} style={{ position: "relative" }}>
      <div
        ref={textRef}
        className={className}
        style={{ opacity: 0, transform: "translateY(60px)" }}
      >
        {children}
      </div>
      <canvas
        ref={cvRef}
        style={{
          position: "absolute",
          top: 0, left: 0,
          pointerEvents: "none",
          display: "none",
        }}
      />
    </div>
  );
}
