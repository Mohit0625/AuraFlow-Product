import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-[#EAEFEB] flex items-center justify-center pt-20"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1614859324967-bdf32bfbc08b?q=80&w=2000&auto=format&fit=crop')",
          y: backgroundY,
        }}
      />
      
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{ y: textY, opacity: textOpacity }}
      >
        <span className="text-sm uppercase tracking-[0.3em] text-neutral-600 mb-6 font-sans">
          Nature's Essence
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-neutral-900 mb-6 drop-shadow-sm">
          Aura Flow
        </h1>
        <p className="text-xl md:text-2xl text-neutral-800 font-serif italic max-w-xl mb-12">
          Revitalize your roots. Nourish your soul.
        </p>
      </motion.div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAF8] z-20 pointer-events-none" />
    </div>
  );
}
