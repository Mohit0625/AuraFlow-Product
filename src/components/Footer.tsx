export default function Footer() {
  return (
    <footer className="bg-[#2A3B32] text-[#FAFAF8] py-20 px-8 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-serif mb-6">Aura Flow</h2>
        <p className="text-neutral-400 font-sans mb-12 max-w-md mx-auto">
          Elevate your daily routine into a grounding ritual. Pure ingredients, pristine results.
        </p>
        <div className="flex gap-8 justify-center mb-12">
          <a href="#" className="text-neutral-400 hover:text-white transition-colors">Shop</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors">Story</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors">Journal</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Aura Flow Premium Hair Care. All rights reserved.
        </p>
      </div>
      
      {/* Decorative large text */}
      <h1 className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-serif font-bold text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
        AURA FLOW
      </h1>
    </footer>
  );
}
