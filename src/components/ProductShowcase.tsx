import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ProductShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#FAFAF8]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Left Text */}
        <div className="absolute left-8 lg:left-32 w-1/3 flex flex-col justify-center h-full z-10">
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0]),
              y: useTransform(scrollYProgress, [0, 0.4], [50, -50])
            }}
            className="mb-8"
          >
            <h3 className="text-3xl font-serif text-neutral-800 mb-4">Deep Cleanse Shampoo</h3>
            <p className="text-neutral-600 font-sans leading-relaxed">
              Purify your scalp with our gentle, sulfate-free formula. Designed to remove buildup while maintaining your hair's natural moisture balance.
            </p>
          </motion.div>
        </div>

        {/* Center Product Image */}
        <motion.div 
          className="relative z-20 w-64 md:w-80 h-[500px]"
          style={{ y: bottleY, scale }}
        >
          <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop" 
            alt="Aura Flow Shampoo Product" 
            className="w-full h-full object-cover rounded-[100px] shadow-2xl"
          />
          {/* Subtle reflection/glow */}
          <div className="absolute -inset-4 bg-[#EAEFEB] blur-3xl opacity-30 -z-10 rounded-full" />
        </motion.div>

        {/* Right Text */}
        <div className="absolute right-8 lg:right-32 w-1/3 flex flex-col justify-center h-full z-10 text-right">
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]),
              y: useTransform(scrollYProgress, [0.4, 0.8], [50, -50])
            }}
            className="mb-8"
          >
            <h3 className="text-3xl font-serif text-neutral-800 mb-4">Silkening Conditioner</h3>
            <p className="text-neutral-600 font-sans leading-relaxed text-right text-balance">
              Lock in hydration and smooth your strands. Infused with botanical extracts that leave your hair brilliantly soft and manageable.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
