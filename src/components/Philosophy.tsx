import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Philosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <div ref={ref} className="py-32 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ y: imgY }} className="relative h-[500px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop" 
            alt="Natural spa leaves" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
        <motion.div style={{ y: textY }} className="flex flex-col justify-center px-4 md:px-8">
          <span className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6 font-sans">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">
            Balance in every single drop.
          </h2>
          <p className="text-lg text-neutral-600 font-sans leading-relaxed mb-6">
            We believe that true enduring beauty stems from holistic harmony. Aura Flow was born from a desire to bridge the gap between clinical efficacy and raw, natural purity.
          </p>
          <p className="text-lg text-neutral-600 font-sans leading-relaxed">
            Every formulation is a testament to this balance—stripping away harsh synthetics to reveal ingredients that honor your hair's natural ecosystem without compromise.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
