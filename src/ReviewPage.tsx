import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ArrowLeft, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GOOGLE_REVIEW_URL = "https://g.page/r/CfOqKjHKSlrMEAI/review";

type Stage = "rating" | "comment" | "thanks";

export default function ReviewPage() {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const [stage, setStage] = useState<Stage>("rating");
  const [comment, setComment] = useState("");

  const handleStarClick = (star: number) => {
    setSelected(star);
    if (star === 5) {
      // Gate-pass: go straight to Google
      window.location.href = GOOGLE_REVIEW_URL;
    } else {
      setStage("comment");
    }
  };

  const handleSubmit = () => {
    // Data intentionally goes nowhere — just show thank-you
    setStage("thanks");
  };

  const starLabel = (n: number) => {
    const labels = ["", "Poor", "Fair", "Good", "Great", "Amazing!"];
    return labels[n] ?? "";
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.025]">
        <p className="font-serif text-[18vw] uppercase text-[#1a1c19] whitespace-nowrap leading-none tracking-widest">
          1001 NUITS
        </p>
      </div>

      {/* Back button */}
      <Link
        to="/"
        className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 text-[#1a1c19]/40 hover:text-[#8a7a4a] transition-colors text-sm tracking-widest uppercase font-medium"
      >
        <ArrowLeft size={16} />
        <span>Back</span>
      </Link>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 flex flex-col items-center gap-3"
      >
        <div className="w-32 h-16 rounded-xl overflow-hidden border border-[#1a1c19]/10 bg-[#0a0b0a]">
          <img src="/logo.jpg" alt="1001 Nuits" className="w-full h-full object-contain" />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">

        {/* ── STAGE 1: STAR RATING ─────────────────────────────────── */}
        {stage === "rating" && (
          <motion.div
            key="rating"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-lg w-full"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1c19] mb-3 tracking-wide">
              How was your experience?
            </h1>
            <p className="text-[#1a1c19]/50 text-sm md:text-base mb-10 font-medium tracking-wide">
              Tap a star to share your feedback
            </p>

            {/* Stars */}
            <div
              className="flex gap-3 md:gap-4 mb-6"
              onMouseLeave={() => setHovered(0)}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHovered(star)}
                  onClick={() => handleStarClick(star)}
                  className="focus:outline-none"
                  aria-label={`${star} star${star > 1 ? "s" : ""}`}
                >
                  <Star
                    size={52}
                    className={`transition-colors duration-150 drop-shadow-lg ${
                      star <= (hovered || selected)
                        ? "fill-[#cfbe91] text-[#cfbe91]"
                        : "fill-transparent text-[#1a1c19]/15"
                    }`}
                  />
                </motion.button>
              ))}
            </div>

            {/* Star label */}
            <AnimatePresence mode="wait">
              {(hovered || selected) > 0 && (
                <motion.p
                  key={hovered || selected}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#8a7a4a] font-serif text-2xl tracking-wider h-8"
                >
                  {starLabel(hovered || selected)}
                </motion.p>
              )}
            </AnimatePresence>


          </motion.div>
        )}

        {/* ── STAGE 2: COMMENT FORM ────────────────────────────────── */}
        {stage === "comment" && (
          <motion.div
            key="comment"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-lg w-full"
          >
            {/* Show selected stars */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={28}
                  className={
                    s <= selected
                      ? "fill-[#cfbe91] text-[#cfbe91]"
                      : "fill-transparent text-[#efe7d2]/15"
                  }
                />
              ))}
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1c19] mb-3 tracking-wide">
              Tell us more
            </h2>
            <p className="text-[#1a1c19]/50 text-sm mb-8 max-w-sm">
              We value your feedback. What could we have done better?
            </p>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience..."
              rows={5}
              className="w-full bg-white border border-[#1a1c19]/10 focus:border-[#cfbe91]/60 text-[#1a1c19] placeholder-[#1a1c19]/30 rounded-2xl p-5 text-sm leading-relaxed resize-none outline-none transition-colors duration-200 font-sans mb-6 shadow-sm"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-3 bg-[#c8b88a] text-[#0a0b0a] font-bold uppercase tracking-widest text-sm py-4 rounded-2xl hover:bg-[#efe7d2] transition-colors duration-200"
            >
              <Send size={16} />
              Submit Feedback
            </motion.button>

            <button
              onClick={() => { setStage("rating"); setSelected(0); }}
              className="mt-4 text-[#1a1c19]/30 hover:text-[#1a1c19]/60 text-xs uppercase tracking-widest transition-colors"
            >
              ← Change rating
            </button>
          </motion.div>
        )}

        {/* ── STAGE 3: THANK YOU ───────────────────────────────────── */}
        {stage === "thanks" && (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-md w-full"
          >
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
              className="mb-8"
            >
              <CheckCircle size={72} className="text-[#8a7a4a]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1c19] mb-4 tracking-wide">
              Thank you!
            </h2>
            <p className="text-[#1a1c19]/60 text-base leading-relaxed mb-10 max-w-sm">
              Your feedback has been received. We truly appreciate you taking the time to share your experience with us — it helps us continue to improve.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-[#8a7a4a]/40 hover:border-[#8a7a4a] text-[#8a7a4a] px-8 py-3.5 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-200"
            >
              <ArrowLeft size={14} />
              Back to 1001 Nuits
            </Link>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
