import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Moon } from "lucide-react";
import {
  getSchedule,
  formatSlots,
  nextOpenToday,
  DAY_NAMES_EN,
  DAY_NAMES_FR,
} from "./lib/useIsOpen";

export default function ClosedPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [now, setNow] = useState(new Date());

  /* Keep clock ticking */
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const todayIdx = now.getDay();
  const todaySchedule = getSchedule(todayIdx);
  const nextOpen = nextOpenToday(lang);

  const t = {
    en: {
      closed: "We're Currently Closed",
      subtitle: "Sorry, we're not taking orders right now.",
      today: "Today's Hours",
      todayHours: formatSlots(todaySchedule, "en"),
      reopen: nextOpen
        ? `We reopen today at ${nextOpen}`
        : "We are closed for the rest of today. See you tomorrow!",
      schedule: "Weekly Schedule",
      back: "Back to Home",
      order: "Try Order Online",
    },
    fr: {
      closed: "Nous sommes fermés",
      subtitle: "Désolé, nous n'acceptons pas de commandes en ce moment.",
      today: "Horaires d'aujourd'hui",
      todayHours: formatSlots(todaySchedule, "fr"),
      reopen: nextOpen
        ? `Nous rouvrons aujourd'hui à ${nextOpen}`
        : "Nous sommes fermés pour le reste de la journée. À demain !",
      schedule: "Horaires de la semaine",
      back: "Retour à l'accueil",
      order: "Commander en ligne",
    },
  }[lang];

  const days = lang === "en" ? DAY_NAMES_EN : DAY_NAMES_FR;

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

        {/* Today's hours card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white/5 border border-[#cfbe91]/20 rounded-[1.5rem] p-6 flex flex-col gap-3"
        >
          <div className="flex items-center gap-2 text-[#cfbe91]">
            <Clock size={16} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
              {t.today}
            </span>
          </div>
          <p className="font-serif text-2xl text-[#efe7d2]">{t.todayHours}</p>
          <p className="text-[#efe7d2]/50 text-sm">{t.reopen}</p>
        </motion.div>

        {/* Full weekly schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white/[0.03] border border-[#efe7d2]/10 rounded-[1.5rem] p-6 flex flex-col gap-1"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#efe7d2]/40 mb-3">
            {t.schedule}
          </p>
          {days.map((dayName, idx) => {
            const sched = getSchedule(idx);
            const isToday = idx === todayIdx;
            return (
              <div
                key={idx}
                className={`flex justify-between items-center py-2 px-3 rounded-xl transition-colors ${
                  isToday ? "bg-[#cfbe91]/10 border border-[#cfbe91]/20" : ""
                }`}
              >
                <span
                  className={`text-sm font-medium ${
                    isToday ? "text-[#cfbe91]" : "text-[#efe7d2]/60"
                  }`}
                >
                  {dayName}
                  {isToday && (
                    <span className="ml-2 text-[9px] uppercase tracking-widest opacity-70">
                      ({lang === "en" ? "Today" : "Aujourd'hui"})
                    </span>
                  )}
                </span>
                <span
                  className={`text-sm font-serif ${
                    sched.closed
                      ? "text-[#efe7d2]/30"
                      : isToday
                      ? "text-[#cfbe91]"
                      : "text-[#efe7d2]/70"
                  }`}
                >
                  {formatSlots(sched, lang)}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => navigate("/")}
          className="px-8 py-3.5 bg-[#c8b88a] text-[#0a0b0a] text-[11px] tracking-[0.25em] font-bold uppercase rounded-full hover:bg-[#efe7d2] transition-all duration-300"
        >
          ← {t.back}
        </motion.button>
      </div>
    </div>
  );
}
