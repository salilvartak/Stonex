import { Link } from "wouter";
import { ArrowRight, Box, Globe2, Truck, CheckCircle2 } from "lucide-react";
import { useProducts } from "@/hooks/use-products";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function Home() {
  const { data: products, isLoading } = useProducts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          {/* Industrial mining abstract background */}
          <img 
            src="https://pixabay.com/get/ge7824b8308a5e4ca77345984b179bc7cd108ad81af5a1cbf81df6595f02800243975cd9286c1ec0ae68714502811d30469a3bf9677c5d9f12f36a287dfb97301_1280.jpg" 
            alt="Mining operation" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-accent/90 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Est. 2011 • ISO 9001:2015 Certified
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-8">
              PREMIUM <br />
              <span className="text-stroke text-transparent stroke-white">INDUSTRIAL</span> <br />
              MINERALS
            </h1>
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed mb-10 border-l-4 border-accent pl-6">
              We process and export high-grade Quartz, Feldspar, and China Clay for global ceramic and glass industries. Uncompromising quality since day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="bg-accent hover:bg-white text-primary px-8 py-4 font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group">
                View Our Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="border border-white/30 hover:border-white text-white hover:bg-white hover:text-primary px-8 py-4 font-bold uppercase tracking-wider transition-all flex items-center justify-center">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "13+" },
              { label: "Metric Tons / Yr", value: "50K+" },
              { label: "Countries Served", value: "12+" },
              { label: "Happy Clients", value: "200+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left border-r border-black/10 last:border-0 pr-4">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-primary/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white industrial-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-primary mb-4">Core Products</h2>
              <div className="h-1 w-24 bg-accent" />
            </div>
            <Link href="/products" className="text-primary font-bold uppercase tracking-wider hover:text-accent transition-colors flex items-center gap-2 mt-4 md:mt-0">
              See All Inventory <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-gray-100 animate-pulse" />
              ))
            ) : products?.slice(0, 3).map((product, idx) => (
              <AnimatedSection key={product.id} delay={idx * 0.1}>
                <Link href={`/products/${product.slug}`} className="group block h-full">
                  <div className="bg-white border border-gray-200 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 z-10 transition-colors duration-300" />
                      <img 
                        src={product.heroImage} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-xs font-mono text-gray-500 mb-2">IND-{product.id.toString().padStart(3, '0')}</div>
                      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{product.name}</h3>
                      <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed mb-6">{product.description}</p>
                      <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary border-b border-primary pb-1 group-hover:border-accent transition-colors">
                        View Specifications
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-800/30 -skew-x-12 transform translate-x-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-display font-bold mb-6">Why Industries Trust Us</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We don't just supply minerals; we provide consistency. Our state-of-the-art processing facility ensures that every batch meets rigorous chemical and physical specifications.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Quality Control", text: "In-house laboratory testing for every shipment." },
                  { title: "Global Logistics", text: "Seamless export network to 12+ countries." },
                  { title: "Custom Processing", text: "Tailored mesh sizes and chemical compositions." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="bg-zinc-800 p-6 border-l-4 border-accent">
                    <Box className="w-8 h-8 text-accent mb-4" />
                    <h5 className="font-bold mb-2">Bulk Capacity</h5>
                    <p className="text-xs text-gray-400">Ready stock for immediate dispatch</p>
                  </div>
                  <div className="bg-zinc-800 p-6 border-l-4 border-accent">
                    <Globe2 className="w-8 h-8 text-accent mb-4" />
                    <h5 className="font-bold mb-2">Export Ready</h5>
                    <p className="text-xs text-gray-400">Documentation & shipping handled</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-zinc-800 p-6 border-l-4 border-accent">
                    <Truck className="w-8 h-8 text-accent mb-4" />
                    <h5 className="font-bold mb-2">Fast Logistics</h5>
                    <p className="text-xs text-gray-400">Road, rail, and sea connectivity</p>
                  </div>
                  {/* factory worker image */}
                  <div className="h-40 bg-zinc-800 overflow-hidden relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                      alt="Factory worker" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">READY TO PLACE AN ORDER?</h2>
          <p className="text-primary/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
            Contact us today for current pricing, samples, and technical datasheets.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors shadow-xl">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
