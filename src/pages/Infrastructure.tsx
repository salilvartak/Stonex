import { 
  MapPin, Truck, FlaskConical, Settings, Hammer, Factory, 
  CheckCircle2, ShieldCheck, Box, ChevronRight, Globe2, Zap 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from "../components/AnimatedSection";

const MACHINERY = [
  'Ball Mills',
  'Raymond Mills',
  'Micronizers',
  '28 Roller Mills with Classifier Machines',
  'Multi-Grain Sorting Machines',

  'Automatic Stearic Acid Powder Coating Machines'
];

const MINES = [
  'Balgopal Microns LLP – Amet, Rajsamand, Rajasthan',
  'Natural Minerals Resources – Kotadi, Dariba, Rajasthan',
  'Raj Microns Ltd – Makrana, Rajasthan',
  'RR Global Industries – Baroda, Nasirabad, Rajasthan',
  'RRR Microns – Baroda, Nasirabad, Rajasthan',
  'Stonex Enterprises – Baroda, Nasirabad, Rajasthan',
  'RD Microns LLP – Sanwar, Fatehnagar, Rajasthan',
  'Adv Techno Mine & Minerals – Kotadi, Dariba, Rajasthan'
];

const LAB_TESTS = [
  'Whiteness & Brightness Analysis',
  'Particle Size Distribution',
  'Moisture Content',
  'Bulk Density',
  'Chemical Composition Verification',
  'Oil Absorption & pH Value'
];

const INFRA_BENEFITS = [
  'Reliable raw material sourcing',
  'Advanced production technology',
  'Consistent quality output',
  'Large-scale production capability',
  'Timely delivery & bulk handling',
  'Long-term operational stability'
];

export default function Infrastructure() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
            alt="Infrastructure" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-white">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/90 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Industrial Backbone
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              INFRASTRUCTURE <br />
              & CAPABILITY
            </h1>
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed border-l-4 border-accent pl-6">
              Stonex Enterprises has developed a strong and reliable infrastructure to support the manufacturing of premium quality industrial mineral fillers and extenders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing & Plants */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Operations</h2>
              <h3 className="text-4xl font-display font-bold text-primary mb-8 leading-tight">
                Manufacturing Plants
              </h3>
              <div className="space-y-6 text-lg text-gray-600 mb-10 leading-relaxed">
                <p>
                  We operate multiple manufacturing plants across Rajasthan, strategically located near high-quality mineral reserves to ensure efficient sourcing and processing.
                </p>
                <p>
                  Our infrastructure includes mines, processing plants, advanced machinery, warehouse facilities, and in-house quality testing laboratories, ensuring consistent quality and timely supply.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {['Consistent particle size', 'High purity and whiteness', 'Customized micron sizes', 'Export-ready packaging'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-primary font-semibold">
                    <CheckCircle2 className="text-accent w-5 h-5" /> {item}
                  </div>
                ))}
              </div>
              <div className="bg-primary p-6 inline-block text-white">
                <p className="text-sm uppercase tracking-widest text-accent mb-1 font-bold">Total Production Capacity</p>
                <p className="text-2xl font-display font-bold">__________ MT Per Month</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative">
              <div className="aspect-square bg-gray-200 relative overflow-hidden group">
                <img 
                  src="https://www.manufacturingtodayindia.com/cloud/2021/11/17/KYRHaTn6-8-ITC.jpg" 
                  alt="Plant" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Machinery Grid */}
      <section className="py-24 bg-[#f8f9fa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">Plant & Machinery</h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advanced manufacturing units are equipped with modern indigenous and imported machinery, enabling precise grinding, classification, and coating.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MACHINERY.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05} className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-all group">
                <Settings className="w-10 h-10 text-accent mb-6 group-hover:rotate-90 transition-transform duration-500" />
                <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{item}</h4>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-12 italic max-w-4xl mx-auto">
            These machines allow us to manufacture Calcite Powder, Dolomite Powder, Quartz Powder, Quartz Grits, Talc Powder, Coated Calcite Powder, and Coated Dolomite Powder with consistent quality standards.
          </p>
        </div>
      </section>

      {/* Mines Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <AnimatedSection>
                <Hammer className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-4xl font-display font-bold mb-6 text-white">Mines & Sources</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  We source premium-grade raw minerals from trusted and verified mining partners across Rajasthan, ensuring consistent availability of high-grade minerals.
                </p>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {MINES.map((mine, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.05} className="bg-white/5 border border-white/10 p-4 flex items-start gap-4 hover:bg-white/10 transition-colors">
                  <MapPin className="text-accent w-5 h-5 flex-shrink-0 mt-1" />
                  <span className="text-sm font-medium">{mine}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Quality Control */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Logistics Card */}
            <AnimatedSection className="group relative overflow-hidden border-2 border-primary bg-white transition-all duration-500 hover:shadow-2xl flex flex-col">
              <div className="bg-primary p-8 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div className="bg-accent p-3 text-primary">
                    <Truck className="h-8 w-8" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                    <MapPin className="h-3 w-3" /> Strategic Hub
                  </div>
                </div>
                <h3 className="mb-2 font-display text-4xl font-bold">Logistics & Distribution</h3>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent/80">Centralized Operations</p>
              </div>

              <div className="p-8 flex-grow">
                <div className="mb-8 border-l-4 border-accent pl-6">
                  <p className="text-lg leading-relaxed text-gray-600">
                    To support efficient distribution, we maintain a well-organized warehouse facility located in <span className="font-bold text-primary">Nashik, Maharashtra</span>.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: "Safe Bulk Storage", desc: "Climate-controlled specialized mineral storage.", icon: Box },
                    { title: "Rapid Dispatch", desc: "24/7 loading capabilities for urgent industrial needs.", icon: Zap },
                    { title: "Global Reach", desc: "Direct connectivity to major shipping ports and highways.", icon: Globe2 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 border border-gray-100 p-4 transition-colors hover:bg-gray-50">
                      <item.icon className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <div>
                        <h4 className="font-bold text-primary">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rotate-12 opacity-[0.03] transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110">
                <Truck className="h-full w-full text-primary" />
              </div>
            </AnimatedSection>

            {/* Quality Card */}
            <AnimatedSection className="border-2 border-primary p-12 group flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <FlaskConical className="w-10 h-10 text-accent" />
                <h3 className="text-3xl font-display font-bold text-primary">Quality Control</h3>
              </div>
              <p className="text-gray-600 mb-8 text-lg">Quality assurance is a core part of our operations. We maintain an in-house laboratory to test raw materials and finished products at every stage of production.</p>
              <div className="grid grid-cols-1 gap-3 mt-auto">
                <h4 className="font-bold text-sm text-primary uppercase border-b border-gray-100 pb-3 tracking-widest mb-2">Laboratory Testing Includes:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {LAB_TESTS.map((test, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 text-primary text-sm font-bold">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" /> {test}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Locate Us On Map</h2>
            <div className="h-1 w-24 bg-accent mx-auto" />
          </AnimatedSection>
          <div className="w-full h-80 md:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl grayscale transition-all duration-700 hover:grayscale-0 border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1!2d73.7!3d19.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU0JzAwLjAiTiA3M8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Stonex Enterprises Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 text-white">
            <h2 className="text-4xl font-display font-bold mb-4">Why Our Infrastructure Matters</h2>
            <div className="h-1 w-24 bg-accent mx-auto" />
          </AnimatedSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {INFRA_BENEFITS.map((benefit, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05} className="bg-primary p-10 hover:bg-white group transition-all duration-300">
                <ShieldCheck className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                  {benefit}
                </h4>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}