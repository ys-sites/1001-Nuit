import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
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
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "flex justify-between items-center bg-[#0a0b0a]/70 backdrop-blur-xl border border-[#333330] rounded-2xl p-2 pr-2 md:pr-4 shadow-2xl",
        className,
      )}
    >
      <div className="flex items-center">
        <button className="p-2 mr-2 md:mr-4 border border-[#333330] rounded-[14px] hover:bg-white/10 transition-colors">
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
          {lang === "fr" ? "Restaurant" : "Our Restaurant"}
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
  );
}
