import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.1]);

  return (
    <div ref={ref} className="py-32 bg-[#EAEFEB] overflow-hidden flex items-center justify-center min-h-[70vh]">
      <motion.div 
        style={{ y: quoteY, opacity }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 leading-relaxed mb-12">
          "Since using Aura Flow, my hair feels alive again. It's not just a shampoo; it's a recalibration of my entire morning ritual."
        </h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" 
              alt="Customer named Eleanor" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="text-center mt-2">
            <p className="font-sans font-semibold text-neutral-900 text-lg">Eleanor V.</p>
            <p className="font-sans text-sm text-neutral-600 tracking-wider uppercase mt-1">Verified Buyer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
