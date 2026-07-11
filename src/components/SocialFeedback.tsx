import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Instagram, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

interface VideoItem {
  id: number;
  src: string;
  link: string;
}

const VIDEOS: VideoItem[] = [
  { id: 2, src: "/video/insta_2.mp4", link: "https://www.instagram.com/reel/DZWAQRGhzzf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 7, src: "/video/insta_7.mp4", link: "https://www.instagram.com/reel/DadczovOwRA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 3, src: "/video/insta_3.mp4", link: "https://www.instagram.com/reel/DZxViJ6RVwS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 4, src: "/video/insta_4.mp4", link: "https://www.instagram.com/reel/DaB-H8DB9JE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 5, src: "/video/insta_5.mp4", link: "https://www.instagram.com/reel/DaET_OjPpaa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 6, src: "/video/insta_6.mp4", link: "https://www.instagram.com/reel/DaN298HRRrv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 1, src: "/video/insta_1.mp4", link: "https://www.instagram.com/reel/DYkJVLNg0tR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 8, src: "/video/insta_8.mp4", link: "https://www.instagram.com/reel/DakoLM3xz-C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
];

const BACKGROUND_IMAGES = [
  { src: "/HeroShot.webp", size: "w-24 h-24 md:w-32 md:h-32", pos: "top-[10%] left-[5%]" },
  { src: "/menu/Drinks/Mango Matcha Latte.webp", size: "w-28 h-28 md:w-40 md:h-40", pos: "top-[40%] left-[2%]" },
  { src: "/menu/Main Dish/General Tao's Chicken.webp", size: "w-32 h-32 md:w-44 md:h-44", pos: "bottom-[5%] left-[8%]" },
  { src: "/menu.webp", size: "w-24 h-24 md:w-36 md:h-36", pos: "top-[12%] right-[4%]" },
  { src: "/dessert.webp", size: "w-28 h-28 md:w-36 md:h-36", pos: "top-[45%] right-[2%]" },
  { src: "/drink.webp", size: "w-32 h-32 md:w-40 md:h-40", pos: "bottom-[8%] right-[6%]" },
  { src: encodeURI("/buffet promotion.png"), size: "w-24 h-24 md:w-32 md:h-32", pos: "bottom-[45%] left-[12%]" },
  { src: "/Beef Balls in Hong Kong Style Curry (12 pcs).webp", size: "w-28 h-28 md:w-36 md:h-36", pos: "top-[25%] right-[15%]" },
  { src: "/Crispy Chicken Wings with Potato Salad or Fries.webp", size: "w-24 h-24 md:w-32 md:h-32", pos: "bottom-[30%] right-[14%]" },
];

function VideoCard({
  video,
  activeVideoId,
  setActiveVideoId,
}: {
  video: VideoItem;
  activeVideoId: number | null;
  setActiveVideoId: (id: number | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const isCurrentActive = activeVideoId === video.id;

  // Pause if another video starts playing
  useEffect(() => {
    if (!isCurrentActive && videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isCurrentActive, isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      if (isCurrentActive) {
        setActiveVideoId(null);
      }
    } else {
      setActiveVideoId(video.id);
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => console.log("Video play interrupted:", err));
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setActiveVideoId(null);
  };

  return (
    <div
      onClick={togglePlay}
      className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
    >
      <video
        ref={videoRef}
        src={`${video.src}#t=1.0`}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onEnded={handleEnded}
      />

      {/* Top Gradient Header with Logo Badge */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex justify-between items-center z-10 pointer-events-none">
        <a
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 pointer-events-auto hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="bg-gradient-to-tr from-[#cfbe91] to-[#efe7d2] p-0.5 rounded-full">
            <div className="bg-black w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
              <img src="/logo.webp" alt="1001 Nuits Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="text-white text-xs font-semibold tracking-wide drop-shadow">
            @1001nu1t
          </span>
        </a>
      </div>

      {/* Center Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20 z-10 pointer-events-none">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white transform scale-95 group-hover:scale-100 transition-all duration-300">
            <Play size={26} className="fill-white translate-x-[2px]" />
          </div>
        </div>
      )}

      {/* Pause Button Indicator on hover when playing */}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/20 transition-opacity duration-300 z-10 pointer-events-none">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-[#333330] flex items-center justify-center text-white">
            <Pause size={26} className="fill-white" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function SocialFeedback({ lang = "en" }: { lang?: "en" | "fr" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  // Triple videos array to support infinite scrolling feel
  const tripledVideos = [...VIDEOS, ...VIDEOS, ...VIDEOS];

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      // Center scroll to the middle third of the tripled array
      setTimeout(() => {
        container.scrollLeft = container.scrollWidth / 3;
      }, 100);
    }
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const thirdWidth = container.scrollWidth / 3;

    // Reset scroll if user wanders into the first or last copy
    if (scrollLeft < thirdWidth * 0.5) {
      container.scrollLeft = scrollLeft + thirdWidth;
    } else if (scrollLeft > thirdWidth * 1.5 + container.clientWidth) {
      container.scrollLeft = scrollLeft - thirdWidth;
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const card = container.querySelector(".video-card-container");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24; // gap-6 in tailwind is 24px
    const scrollAmount = cardWidth + gap;

    const currentScroll = container.scrollLeft;
    const thirdWidth = container.scrollWidth / 3;

    if (direction === "left") {
      if (currentScroll <= 10) {
        container.scrollLeft = thirdWidth + currentScroll;
      }
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else {
      if (currentScroll >= thirdWidth * 2 - container.clientWidth - 10) {
        container.scrollLeft = currentScroll - thirdWidth;
      }
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-24 bg-[#0a0b0a] text-[#efe7d2] border-t border-[#333330] overflow-hidden">
      {/* Gentle Floating Background Images */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {BACKGROUND_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${img.size} ${img.pos} rounded-full overflow-hidden opacity-20 blur-[2px] hover:opacity-60 hover:blur-none transition-all duration-700 pointer-events-auto`}
            animate={{
              y: [0, idx % 2 === 0 ? 15 : -15, 0],
              x: [0, idx % 3 === 0 ? -10 : 10, 0],
              rotate: [0, idx % 2 === 0 ? 5 : -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.7,
            }}
            style={{ willChange: "transform, opacity, filter" }}
          >
            <img
              src={img.src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Eyebrow and Header */}
        <div className="text-center mb-16">
          <span className="text-[#cfbe91] font-bold tracking-[0.25em] text-xs sm:text-sm uppercase mb-4 block">
            {lang === "fr" ? "Vu sur les réseaux sociaux" : "As Seen On Social Media"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest leading-[0.9] text-[#efe7d2]">
            Viral <span className="text-[#cfbe91]">Feedback</span>
          </h2>
          <p className="text-[#efe7d2]/60 text-sm sm:text-base font-medium max-w-md mx-auto mt-4 leading-relaxed">
            {lang === "fr"
              ? "Les créateurs culinaires de Montréal ne cessent d'en parler."
              : "Montreal food creators can't stop talking about us."}
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="max-w-5xl mx-auto relative px-4 sm:px-12">
          {/* Scroll Container */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory hide-scrollbar animate-fadeIn"
            style={{ scrollbarWidth: "none" }}
          >
            {tripledVideos.map((video, idx) => (
              <motion.div
                key={`${video.id}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="video-card-container snap-center shrink-0 w-[85%] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
              >
                <VideoCard
                  video={video}
                  activeVideoId={activeVideoId}
                  setActiveVideoId={setActiveVideoId}
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 sm:-left-4 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#cfbe91]/30 bg-black/60 backdrop-blur-md flex items-center justify-center text-[#cfbe91] hover:bg-[#cfbe91] hover:text-[#0a0b0a] transition-all z-20"
            aria-label="Previous videos"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 sm:-right-4 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#cfbe91]/30 bg-black/60 backdrop-blur-md flex items-center justify-center text-[#cfbe91] hover:bg-[#cfbe91] hover:text-[#0a0b0a] transition-all z-20"
            aria-label="Next videos"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
