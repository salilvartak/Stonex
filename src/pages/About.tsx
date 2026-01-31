import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle2, Factory, Map, History } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">ABOUT INDUSMIN</h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Founded in 2011 with a vision to revolutionize the industrial minerals supply chain through rigorous quality control and transparent ethics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Story */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="flex items-center gap-3 mb-6 text-accent font-bold uppercase tracking-wider">
              <History className="w-6 h-6" /> Our History
            </div>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">Decade of Excellence</h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                IndusMin began as a small processing unit in Rajasthan's mineral belt. Recognizing the gap between raw mine output and industrial requirements, we invested heavily in advanced grinding and beneficiation technology.
              </p>
              <p>
                Today, we operate three dedicated processing plants with a combined capacity of 50,000 MT per annum, serving clients across Europe, Southeast Asia, and the Middle East.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 -z-10" />
            <img 
              src="https://pixabay.com/get/gf44826e978b233769ee1ebd19e87cc948a9c5bd40778a652135cedbcf57c0676aa6365aaca9c92904d701ce16dbd1ac333338eab1aa5ccc9e0477fa93661917f_1280.jpg" 
              alt="Factory exterior" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </AnimatedSection>

        {/* Infrastructure */}
        <AnimatedSection delay={0.2} className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4 text-accent font-bold uppercase tracking-wider">
              <Factory className="w-6 h-6" /> Infrastructure
            </div>
            <h2 className="text-4xl font-display font-bold text-primary">State-of-the-Art Processing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Micronizing Plant",
                desc: "Capable of producing ultra-fine powders up to 2 microns with consistent particle size distribution."
              },
              {
                title: "Magnetic Separation",
                desc: "High-intensity 15,000 gauss magnetic separators to ensure iron-free material for glass & ceramics."
              },
              {
                title: "Quality Laboratory",
                desc: "In-house XRF and whiteness testing equipment to verify every batch before dispatch."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 border-t-4 border-primary hover:border-accent transition-colors group">
                <h3 className="text-xl font-bold font-display text-primary mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Footprint */}
        <AnimatedSection delay={0.3} className="bg-primary text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             {/* Abstract map pattern could go here */}
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6 text-accent font-bold uppercase tracking-wider">
                <Map className="w-6 h-6" /> Global Footprint
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">Serving the Globe</h2>
              <p className="text-gray-400 text-lg mb-8">
                From the ceramic hubs of Morbi to the glass factories of Vietnam, our logistics network ensures timely delivery anywhere in the world.
              </p>
              <ul className="space-y-3">
                {["Export to 12+ Countries", "Near Major Ports (Mundra/Kandla)", "Containerized & Bulk Shipping"].map((pt, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-bold">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-accent mb-2">3</div>
                <div className="text-sm uppercase tracking-wider text-gray-400">Processing Units</div>
              </div>
              <div className="bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-accent mb-2">50K</div>
                <div className="text-sm uppercase tracking-wider text-gray-400">MT Annual Capacity</div>
              </div>
              <div className="bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-sm uppercase tracking-wider text-gray-400">Satisfied Clients</div>
              </div>
              <div className="bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm uppercase tracking-wider text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
