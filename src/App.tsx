/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import ProductShowcase from "./components/ProductShowcase";
import Ingredients from "./components/Ingredients";
import Sustainability from "./components/Sustainability";
import Tips from "./components/Tips";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="antialiased selection:bg-[#2A3B32] selection:text-white">
      <Hero />
      <Philosophy />
      <ProductShowcase />
      <Ingredients />
      <Sustainability />
      <Tips />
      <Testimonials />
      <Footer />
    </div>
  );
}
