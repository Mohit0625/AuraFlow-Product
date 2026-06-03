import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Ingredients() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const img2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const img3Y = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);

  return (
    <div ref={ref} className="relative py-32 bg-[#EAEFEB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">Powered by Nature</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto font-sans">
            We meticulously source the finest natural ingredients to nurture your hair from root to tip. Complete transparency, zero compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          
          <motion.div style={{ y: img1Y }} className="flex flex-col items-center">
            <div className="w-48 h-64 md:w-64 md:h-80 overflow-hidden rounded-t-[100px] mb-8 shadow-xl">
              <img 
                src="https://unsplash.com/photos/clear-glass-cruet-bottle-uOBApnN_K7w" 
                alt="Argan Oil" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif text-neutral-900 mb-3">Argan Oil</h3>
            <p className="text-neutral-600 text-center text-sm px-4">
              Rich in vitamins, minerals, and antioxidants to tame frizz and add vibrant shine.
            </p>
          </motion.div>

          <motion.div style={{ y: img2Y }} className="flex flex-col items-center md:mt-24">
            <div className="w-48 h-64 md:w-64 md:h-80 overflow-hidden rounded-[100px] mb-8 shadow-xl">
              <img 
                src="https://unsplash.com/photos/white-pillar-candle-on-brown-wooden-coaster-eDj-bODzFx8" 
                alt="Coconut Extract" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif text-neutral-900 mb-3">Coconut Extract</h3>
            <p className="text-neutral-600 text-center text-sm px-4">
              Deeply structural hydration that penetrates the hair shaft to prevent breakage.
            </p>
          </motion.div>

          <motion.div style={{ y: img3Y }} className="flex flex-col items-center">
            <div className="w-48 h-64 md:w-64 md:h-80 overflow-hidden rounded-b-[100px] mb-8 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=600&auto=format&fit=crop" 
                alt="Aloe Vera" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif text-neutral-900 mb-3">Green Tea</h3>
            <p className="text-neutral-600 text-center text-sm px-4">
              Soothes the scalp and promotes healthy hair growth by reducing shedding.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Background decoration */}
      <motion.div 
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 45]), opacity: 0.03 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-neutral-900 rounded-full z-0 pointer-events-none"
      />
    </div>
  );
}
