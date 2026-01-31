import { Link } from "wouter";
import { ArrowRight, Box, Globe2, Truck, CheckCircle2, Paintbrush, Zap, Database, Construction, Microscope, Factory, Trees, Droplets, HardHat } from "lucide-react";
import { products } from "../data/products";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";

export default function Home() {
  const industries = [
    { title: "Paints & Coatings", icon: Paintbrush, desc: "High-purity fillers for superior finish and durability." },
    { title: "Plastics & Polymers", icon: Zap, desc: "Enhanced mechanical properties and cost efficiency." },
    { title: "Rubber", icon: Database, desc: "Reinforcing fillers for various rubber compounds." },
    { title: "Paper", icon: Construction, desc: "Improving opacity and brightness in paper production." },
    { title: "Glass & Ceramics", icon: Microscope, desc: "High silica quartz for crystal-clear glass." },
    { title: "Construction", icon: HardHat, desc: "Essential minerals for high-strength concrete." },
    { title: "Agriculture", icon: Trees, desc: "Mineral-rich additives for fertilizers." },
    { title: "Pharmaceuticals", icon: Droplets, desc: "Pharma-grade minerals for safe production." },
    { title: "Electronics", icon: Zap, desc: "Specialty quartz for electronic components." },
    { title: "Countertops", icon: Factory, desc: "Premium quartz grits for engineered stone." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[90vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <img 
            src="https://img.freepik.com/premium-photo/power-plant-industrial-twilight_41204-21379.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Mining operation" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/90 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Est. 2011 • ISO 9001:2015 Certified
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-8">
              PREMIUM <br />
              INDUSTRIAL <br />
              MINERALS
            </h1>
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed mb-10 border-l-4 border-accent pl-6">
              India's leading manufacturer of high-grade Calcite, Dolomite, and Quartz. Delivering excellence across global industries since 2011.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="bg-accent hover:bg-white text-primary px-8 py-4 font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group">
                View Our Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="border border-white/30 hover:border-white text-white hover:bg-white hover:text-primary px-8 py-4 font-bold uppercase tracking-wider transition-all flex items-center justify-center">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white industrial-grid overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-primary mb-4">Core Products</h2>
              <div className="h-1 w-24 bg-accent" />
            </div>
          </AnimatedSection>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto pb-12 px-4 sm:px-6 lg:px-8 gap-8 scrollbar-hide snap-x snap-mandatory">
            {products.map((product, idx) => (
              <div key={product.id} className="min-w-[300px] md:min-w-[400px] snap-center">
                <AnimatedSection delay={idx * 0.05}>
                  <Link href={`/products/${product.slug}`} className="group block h-full">
                    <div className="bg-white border border-gray-200 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                      <div className="h-64 overflow-hidden relative">
                        <img src={product.hero_image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{product.name}</h3>
                        <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed mb-6">{product.description}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}