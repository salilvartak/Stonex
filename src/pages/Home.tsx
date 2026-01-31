import { Link } from "wouter";
import { 
  ArrowRight, Box, Globe2, Truck, CheckCircle2, Paintbrush, 
  Zap, Database, Construction, Microscope, Factory, Trees, 
  Droplets, HardHat, ShieldCheck, Award, Users,Sprout,Cpu,History,SearchCheck,Pickaxe,DollarSign,HousePlus
} from "lucide-react";
import { products } from "../data/products";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";

export default function Home() {
  const stats = [
    { label: "Established", value: "2011", icon: HousePlus },
    { label: "Annual Production", value: "50k+ Tons", icon: Factory },
    { label: "Global Clients", value: "200+", icon: Globe2 },
    { label: "Plant/Mines", value: "12", icon: Pickaxe },
  ];

  const features = [
    {
      title: "Sustainability",
      desc: "Our ISO 9001:2015 certified processes ensure consistent purity and particle size distribution for every batch.",
      icon: Sprout
    },
    {
      title: "Advance Technology ",
      desc: "Robust supply chain management delivering premium minerals to over 15 countries with guaranteed timelines.",
      icon: Cpu
    },
    {
      title: "Best Quality Product",
      desc: "Specialized micronizing capabilities to meet specific industrial requirements across diverse sectors.",
      icon: ShieldCheck
    },
    {
      title: "Timely Delivery",
      desc: "Dedicated technical team providing mineralogical consultation and performance optimization.",
      icon: History
    },
    {
      title: "Loyalty",
      desc: "Dedicated technical team providing mineralogical consultation and performance optimization.",
      icon: Users
    },
    {
      title: "Quality Assured",
      desc: "Dedicated technical team providing mineralogical consultation and performance optimization.",
      icon: SearchCheck
    },
    {
      title: "Profession Worker",
      desc: "Dedicated technical team providing mineralogical consultation and performance optimization.",
      icon: Pickaxe
    },
    {
      title: "Competitive Price",
      desc: "Dedicated technical team providing mineralogical consultation and performance optimization.",
      icon: DollarSign
    }
  ];

  const industries = [
    { title: "Paints & Coatings", icon: Paintbrush, desc: "High-purity fillers for superior finish and durability." },
    { title: "Plastics & Polymers", icon: Zap, desc: "Enhanced mechanical properties and cost efficiency." },
    { title: "Rubber", icon: Database, desc: "Reinforcing fillers for various rubber compounds." },
    { title: "Paper", icon: Construction, desc: "Improving opacity and brightness in paper production." },
    { title: "Glass & Ceramics", icon: Microscope, desc: "High silica quartz for crystal-clear glass." },
    { title: "Construction", icon: HardHat, desc: "Essential minerals for high-strength concrete." },
    { title: "Agriculture", icon: Trees, desc: "Mineral-rich additives for fertilizers." },
    
    
    { title: "Countertops", icon: Factory, desc: "Premium quartz grits for engineered stone." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
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
              Based in Rajasthan, Stonex Enterprises is a premier Indian manufacturer and supplier of high-quality mineral fillers and extenders. We specialize in Quartz (powder/grits), Calcite, Dolomite, and Talc, prized for their superior metallurgical properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/infrastructure" className="bg-accent hover:bg-white text-primary px-8 py-4 font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group">
                View Our Locations <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STAT BAR */}
      <section className="bg-primary border-y border-white/10 relative z-30 -mt-12 mx-4 sm:mx-8 lg:mx-auto max-w-7xl w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
              <stat.icon className="w-8 h-8 text-accent mb-4" />
              <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Why Stonex Minerals</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
                Setting the Standard in Industrial Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-12">
                Since 2011, we have been at the forefront of the mineral industry, combining advanced processing technology with sustainable mining practices.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white shadow-lg flex items-center justify-center text-accent">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
                      {/*<p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>*/}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative">
              <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                  alt="Quality control" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 right-0 bg-accent p-12 hidden md:block">
                  <p className="text-primary font-display font-black text-6xl leading-none">12+</p>
                  <p className="text-primary font-bold uppercase tracking-tighter text-sm">Years of Trust</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. CORE PRODUCTS */}
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

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Industries We Serve</h2>
            <div className="h-1 w-24 bg-accent mx-auto" />
            <h4 className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Stonex Enterprises are leading Manufacturer 
              and Supplier of Premium Quality of Minerals Filler and Extender. with the use of latest technology, 
              we deliver excellent quality products that find their applications in various industrial products.</h4>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {industries.map((industry, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05} className="bg-primary p-8 hover:bg-white group transition-all duration-300">
                <industry.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{industry.title}</h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors leading-relaxed">
                  {industry.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}