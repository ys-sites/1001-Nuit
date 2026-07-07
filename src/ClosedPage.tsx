import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Moon } from "lucide-react";

export default function ClosedPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState<"en" | "fr">("en");

  const t = {
    en: {
      closed: "We're Currently Closed",
      subtitle: "Sorry, we're not taking orders right now.",
      back: "Back to Home",
    },
    fr: {
      closed: "Nous sommes fermés",
      subtitle: "Désolé, nous n'acceptons pas de commandes en ce moment.",
      back: "Retour à l'accueil",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-[#0a0b0a] text-[#efe7d2] flex flex-col items-center justify-center relative overflow-hidden px-6 py-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#cfbe91]/5 blur-[120px]" />
      </div>

      {/* Lang toggle */}
      <div className="absolute top-6 right-6 flex gap-2 z-10">
        {(["en", "fr"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border transition-all duration-200 ${
              lang === l
                ? "bg-[#cfbe91] text-[#0a0b0a] border-[#cfbe91]"
                : "border-[#efe7d2]/20 text-[#efe7d2]/50 hover:border-[#cfbe91]/50"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-[#efe7d2]/50 hover:text-[#efe7d2] transition-colors text-xs tracking-widest uppercase font-medium"
      >
        <ArrowLeft size={14} />
        {t.back}
      </motion.button>

      <div className="max-w-lg w-full flex flex-col items-center text-center gap-10 relative z-10">
        {/* Moon icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-20 rounded-full bg-[#cfbe91]/10 border border-[#cfbe91]/20 flex items-center justify-center"
        >
          <Moon size={36} className="text-[#cfbe91]" strokeWidth={1.2} />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3"
        >
          <p className="text-[#cfbe91] text-[11px] uppercase tracking-[0.3em] font-bold">
            1001 Nuits
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#efe7d2]">
            {t.closed}
          </h1>
          <p className="text-[#efe7d2]/50 text-sm md:text-base font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => navigate("/")}
          className="px-8 py-3.5 bg-[#c8b88a] text-[#0a0b0a] text-[11px] tracking-[0.25em] font-bold uppercase rounded-full hover:bg-[#efe7d2] transition-all duration-300"
        >
          ← {t.back}
        </motion.button>
      </div>
    </div>
  );
}
