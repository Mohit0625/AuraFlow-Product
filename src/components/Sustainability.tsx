import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Sustainability() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 z-0 h-[140%]"
        style={{
          y: bgY,
          backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#2A3B32]/60 z-10" />
      
      <motion.div 
        style={{ scale: textScale, opacity: textOpacity }}
        className="relative z-20 text-center px-4 max-w-3xl"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-[#FAFAF8]/80 mb-6 font-sans block">
          Conscious Beauty
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#FAFAF8] mb-8 leading-tight drop-shadow-md">
          Return to the Earth
        </h2>
        <p className="text-xl md:text-2xl text-[#FAFAF8]/90 font-serif italic mb-10 drop-shadow-sm">
          100% Recyclable. Ocean-safe. Cruelty-free forever.
        </p>
      </motion.div>
    </div>
  );
}
