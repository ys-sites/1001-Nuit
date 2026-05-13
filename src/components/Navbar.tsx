import { useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar({
  className,
  lang = "en",
  setLang,
}: {
  className?: string;
  lang?: "en" | "fr";
  setLang?: (lang: "en" | "fr") => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "flex justify-between items-center bg-[#0a0b0a]/70 backdrop-blur-xl border border-[#333330] rounded-2xl p-2 pr-2 md:pr-4 shadow-2xl",
          className,
        )}
      >
        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 mr-2 md:mr-4 border border-[#333330] rounded-[14px] hover:bg-white/10 transition-colors lg:hidden"
          >
            <Menu size={20} className="text-[#efe7d2]" />
          </button>

          <div
            className="font-serif text-[18px] md:text-xl xl:text-2xl whitespace-nowrap tracking-[0.2em] uppercase mr-3 lg:mr-4 xl:mr-10 text-[#efe7d2] hover:opacity-80 transition-opacity cursor-pointer flex items-baseline gap-1"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="lining-nums">1001</span> <span>NUITS</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-[11px] xl:text-[13px] font-bold tracking-[0.15em] xl:tracking-[0.18em] uppercase text-[#efe7d2] whitespace-nowrap">
          <button
            onClick={() => scrollTo("menu")}
            className="transition-colors hover-underline-animation hover:text-[#cfbe91]"
          >
            {lang === "fr" ? "Menu" : "Menu"}
          </button>
          <button
            onClick={() => scrollTo("testimonials")}
            className="transition-colors hover-underline-animation hover:text-[#cfbe91]"
          >
            {lang === "fr" ? "Avis" : "Testimonials"}
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="transition-colors hover-underline-animation hover:text-[#cfbe91]"
          >
            {lang === "fr" ? "Notre Restaurant" : "Our Restaurant"}
          </button>
          <button
            onClick={() => scrollTo("private-events")}
            className="transition-colors hover-underline-animation hover:text-[#cfbe91]"
          >
            {lang === "fr" ? "Événements" : "Private Events"}
          </button>
          <button
            onClick={() => scrollTo("reservation")}
            className="transition-colors hover-underline-animation hover:text-[#cfbe91]"
          >
            {lang === "fr" ? "Réservation" : "Reservation"}
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-3 ml-auto">
          {setLang && (
            <div className="flex bg-[#1a1c19]/80 border border-[#333330] rounded-full p-1 text-[10px] tracking-widest font-bold font-sans">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-2 py-1 md:px-3 md:py-1.5 rounded-full transition-all uppercase whitespace-nowrap",
                  lang === "en"
                    ? "bg-[#cfbe91] text-[#0a0b0a]"
                    : "text-[#efe7d2] hover:text-[#cfbe91]",
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className={cn(
                  "px-2 py-1 md:px-3 md:py-1.5 rounded-full transition-all uppercase whitespace-nowrap",
                  lang === "fr"
                    ? "bg-[#cfbe91] text-[#0a0b0a]"
                    : "text-[#efe7d2] hover:text-[#cfbe91]",
                )}
              >
                FR
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay — rendered via portal to escape overflow:hidden + transform parent */}
      {menuOpen && createPortal(
        <div className="fixed inset-0 z-[200] bg-[#0a0b0a]/97 backdrop-blur-2xl flex flex-col lg:hidden">
          <div className="flex justify-between items-center p-6 border-b border-[#333330]">
            <div
              className="font-serif text-xl tracking-[0.2em] uppercase text-[#efe7d2] cursor-pointer flex items-baseline gap-1"
              onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
            >
              <span className="lining-nums">1001</span> <span>NUITS</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 border border-[#333330] rounded-[14px] hover:bg-white/10 transition-colors"
            >
              <X size={20} className="text-[#efe7d2]" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
            {[
              { id: "menu", en: "Menu", fr: "Menu" },
              { id: "testimonials", en: "Testimonials", fr: "Avis" },
              { id: "about", en: "Our Restaurant", fr: "Notre Restaurant" },
              { id: "private-events", en: "Private Events", fr: "Événements" },
              { id: "reservation", en: "Reservation", fr: "Réservation" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-serif text-left text-3xl sm:text-4xl text-[#efe7d2] hover:text-[#cfbe91] transition-colors tracking-wide"
              >
                {lang === "fr" ? item.fr : item.en}
              </button>
            ))}
          </nav>

          {setLang && (
            <div className="p-8 flex justify-start border-t border-[#333330]">
              <div className="flex bg-[#1a1c19]/80 border border-[#333330] rounded-full p-1 text-[10px] tracking-widest font-bold font-sans">
                <button
                  onClick={() => setLang("en")}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all uppercase",
                    lang === "en"
                      ? "bg-[#cfbe91] text-[#0a0b0a]"
                      : "text-[#efe7d2] hover:text-[#cfbe91]",
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("fr")}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all uppercase",
                    lang === "fr"
                      ? "bg-[#cfbe91] text-[#0a0b0a]"
                      : "text-[#efe7d2] hover:text-[#cfbe91]",
                  )}
                >
                  FR
                </button>
              </div>
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
