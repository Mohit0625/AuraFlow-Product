import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Droplet, Wind, Sun } from "lucide-react";

export default function Tips() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const tip1X = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const tip2X = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const tip3X = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <div ref={ref} className="py-32 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-20 text-center">Rituals & Wisdom</h2>
        
        <div className="space-y-16">
          <motion.div style={{ x: tip1X, opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]) }} className="flex gap-6 items-start bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
            <div className="p-4 bg-[#EAEFEB] rounded-full text-neutral-800">
              <Droplet size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-neutral-900 mb-2">The Cold Rinse</h3>
              <p className="text-neutral-600 leading-relaxed font-sans">
                Always finish your washing ritual with cool water. This simple step helps seal the hair cuticle, locking in moisture from your conditioner and adding an immediate, natural gloss.
              </p>
            </div>
          </motion.div>

          <motion.div style={{ x: tip2X, opacity: useTransform(scrollYProgress, [0.2, 0.5], [0, 1]) }} className="flex gap-6 items-start bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 text-right flex-row-reverse">
            <div className="p-4 bg-[#EAEFEB] rounded-full text-neutral-800">
              <Wind size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-neutral-900 mb-2">Gentle Drying</h3>
              <p className="text-neutral-600 leading-relaxed font-sans">
                Avoid aggressive towel rubbing after a shower. Instead, gently squeeze excess water out with a micro-fiber towel or an old cotton t-shirt to prevent frizz and breakage.
              </p>
            </div>
          </motion.div>

          <motion.div style={{ x: tip3X, opacity: useTransform(scrollYProgress, [0.4, 0.7], [0, 1]) }} className="flex gap-6 items-start bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
            <div className="p-4 bg-[#EAEFEB] rounded-full text-neutral-800">
              <Sun size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-neutral-900 mb-2">UV Protection</h3>
              <p className="text-neutral-600 leading-relaxed font-sans">
                Just like your skin, your hair needs protection from prolonged sun exposure. Wear a hat during peak daylight hours or apply our leave-in conditioner to shield your strands from UV damage.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
