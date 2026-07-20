import { useRef, useEffect, useState, ReactNode } from "react";

interface ScrollTextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  textColor?: string;
}

/**
 * ScrollTextReveal – scroll-triggered reveal animation.
 * On desktop (≥1024px / lg breakpoint): animates in on scroll.
 * On mobile/tablet (<1024px): content is immediately fully visible, no animation.
 */
export default function ScrollTextReveal({
  children,
  className = "",
  delay = 0,
}: ScrollTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [visible, setVisible] = useState(false);

  // Detect desktop on mount and on resize
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
      if (!e.matches) setVisible(true); // on mobile, always visible
    };
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Intersection observer only runs on desktop
  useEffect(() => {
    if (!isDesktop) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // apply delay before marking visible
          const timer = setTimeout(() => setVisible(true), delay * 1000);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isDesktop, delay]);

  // On mobile: just render children directly with no transition
  if (!isDesktop) {
    return <div className={className}>{children}</div>;
  }

  // On desktop: apply the opacity/translate reveal
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: visible
          ? `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`
          : "none",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
