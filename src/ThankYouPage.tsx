import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, DollarSign } from "lucide-react";
import ShinyText from "./components/ui/ShinyText";

export default function ThankYouPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [lang, setLang] = useState<"en" | "fr">("en");

  // Parse conversion parameters
  const valueParam = searchParams.get("value");
  const currencyParam = searchParams.get("currency");

  const conversionValue = valueParam ? parseFloat(valueParam) : 1.0;
  const conversionCurrency = currencyParam || "CAD";

  // Trigger Google Ads Conversion Event
  useEffect(() => {
    if (typeof window !== "undefined") {
      const gtag = (window as any).gtag;
      if (typeof gtag === "function") {
        gtag("event", "conversion", {
          send_to: "AW-18185114030/TeIKCLzXzcMcEK6jq99D",
          value: conversionValue,
          currency: conversionCurrency,
        });
        console.log(
          `[Google Ads Conversion] Event fired successfully. Value: ${conversionValue}, Currency: ${conversionCurrency}`
        );
      } else {
        console.warn(
          "[Google Ads Conversion] window.gtag is not defined or not a function. Ensure the Google Tag script is loaded."
        );
      }
    }
  }, [conversionValue, conversionCurrency]);

  const t = {
    en: {
      title: "Thank You!",
      subtitle: "Your request or order has been processed successfully.",
      detailsTitle: "Conversion Details",
      valueLabel: "Value tracked:",
      currencyLabel: "Currency:",
      backBtn: "Back to Home",
      successMsg: "We appreciate your business!",
    },
    fr: {
      title: "Merci !",
      subtitle: "Votre demande ou commande a été traitée avec succès.",
      detailsTitle: "Détails de la conversion",
      valueLabel: "Valeur suivie :",
      currencyLabel: "Devise :",
      backBtn: "Retour à l'accueil",
      successMsg: "Nous apprécions votre confiance !",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-[#0a0b0a] text-[#efe7d2] flex flex-col items-center justify-center relative overflow-hidden px-6 py-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#cfbe91]/5 blur-[120px]" />
      </div>

      {/* Language Toggle */}
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
        {t.backBtn}
      </motion.button>

      <div className="max-w-lg w-full flex flex-col items-center text-center gap-10 relative z-10">
        {/* Success Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-20 rounded-full bg-[#cfbe91]/10 border border-[#cfbe91]/20 flex items-center justify-center"
        >
          <CheckCircle2 size={36} className="text-[#cfbe91]" strokeWidth={1.2} />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3"
        >
          <p className="text-[#cfbe91] text-[11px] uppercase tracking-[0.3em] font-bold">
            1001 Nuits
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-[#efe7d2]">
            <ShinyText text={t.title} color="#efe7d2" shineColor="#cfbe91" speed={3} />
          </h1>
          <p className="text-[#efe7d2]/60 text-sm md:text-base font-light max-w-sm mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Dynamic conversion info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white/5 border border-[#cfbe91]/20 rounded-[1.5rem] p-6 flex flex-col gap-4 text-left"
        >
          <div className="flex items-center gap-2 text-[#cfbe91] border-b border-[#cfbe91]/10 pb-3 mb-1">
            <DollarSign size={16} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
              {t.detailsTitle}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#efe7d2]/60 font-medium">{t.valueLabel}</span>
            <span className="font-serif text-xl text-[#cfbe91] lining-nums">
              {conversionValue.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#efe7d2]/60 font-medium">{t.currencyLabel}</span>
            <span className="font-serif text-lg text-[#efe7d2] uppercase tracking-wide">
              {conversionCurrency}
            </span>
          </div>
        </motion.div>

        {/* Return Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => navigate("/")}
          className="px-8 py-3.5 bg-[#c8b88a] text-[#0a0b0a] text-[11px] tracking-[0.25em] font-bold uppercase rounded-full hover:bg-[#efe7d2] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {t.backBtn}
        </motion.button>
      </div>
    </div>
  );
}
