import { Link, useRoute } from "wouter";
import { ArrowLeft, Download, Check, Microscope, Database, Box, Factory } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { products, type Product } from "../data/products"; 
import NotFound from "./not-found";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:slug");
  
  // Find product from static data based on slug
  const product = products.find((p: Product) => p.slug === params?.slug);

  if (!product) return <NotFound />;

  // Criteria for Physical Properties as requested
  const physicalKeys = [
    "Brightness", 
    "Whiteness", 
    "Moisture", 
    "Moisture Content",
    "Specific Gravity", 
    "pH Value", 
    "Bulk Density", 
    "Oil Absorption",
    "Hardness",
    "Color",
    "Melting Point",
    "Loss on Ignition"
  ];

  // Logic to split properties into Physical and Chemical categories
  const physicalProperties = Object.entries(product.specifications.properties).filter(([key]) => 
    physicalKeys.some(pk => key.toLowerCase().includes(pk.toLowerCase()))
  );

  const chemicalProperties = Object.entries(product.specifications.properties).filter(([key]) => 
    !physicalKeys.some(pk => key.toLowerCase().includes(pk.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Product Hero Section */}
      <div className="relative h-[60vh] bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={product.hero_image} 
            alt={product.name} 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>
        
        <div className="absolute top-8 left-4 sm:left-8 z-20">
          <Link href="/products" className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors font-bold uppercase tracking-wider text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <AnimatedSection>
              <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4 uppercase">
                {product.name}
              </h1>
              <div className="flex flex-wrap gap-4 items-center text-white/80">
                {product.specifications.chemicalFormula && (
                  <span className="font-mono bg-white/10 px-3 py-1 border border-white/20">
                    {product.specifications.chemicalFormula}
                  </span>
                )}
                {product.specifications.purity && (
                  <span className="font-bold text-accent uppercase tracking-widest">
                    {product.specifications.purity}
                  </span>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Description</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </AnimatedSection>

            {/* Technical Specifications Tables */}
            <AnimatedSection delay={0.2} className="space-y-12">
              <h2 className="text-4xl font-display font-bold text-primary border-b-2 border-accent inline-block pb-2">Technical Specifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Physical Properties Table */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2 uppercase tracking-tight">
                    <Database className="w-5 h-5 text-accent" /> Physical Properties
                  </h3>
                  <div className="overflow-hidden border border-gray-200 rounded-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-zinc-900 text-white">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Property</th>
                          <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Value</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {physicalProperties.map(([key, value], i) => (
                          <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                            <td className="px-4 py-3 text-sm font-bold text-gray-900">{key}</td>
                            <td className="px-4 py-3 text-sm text-gray-600 font-mono">{String(value)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Chemical Properties Table */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2 uppercase tracking-tight">
                    <Microscope className="w-5 h-5 text-accent" /> Chemical Properties
                  </h3>
                  <div className="overflow-hidden border border-gray-200 rounded-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-zinc-900 text-white">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Component</th>
                          <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Value</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {chemicalProperties.map(([key, value], i) => (
                          <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                            <td className="px-4 py-3 text-sm font-bold text-gray-900">{key}</td>
                            <td className="px-4 py-3 text-sm text-gray-600 font-mono">{String(value)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Particle Size Availability */}
              <div className="space-y-4 mt-12">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2 uppercase tracking-wider">
                  <Box className="w-5 h-5 text-accent" /> Particle Size Availability
                </h3>
                <div className="overflow-hidden border border-gray-200 rounded-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-accent text-primary">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest">Available Grades</th>
                        <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {product.specifications.particleSizes?.map((size, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-6 py-4 text-sm font-bold text-gray-900">{size}</td>
                          <td className="px-6 py-4 text-sm text-gray-500 italic">Available on request for industrial grading</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>

            {/* Industry Applications */}
            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-tighter">Industry Applications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.specifications.applications?.map((app, i) => (
                  <div key={i} className="group p-6 bg-zinc-50 border border-gray-200 hover:border-accent hover:bg-white transition-all duration-300 flex flex-col items-center text-center justify-center">
                    <div className="w-10 h-10 mb-3 bg-white group-hover:bg-accent flex items-center justify-center transition-colors">
                      <Factory className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-primary">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 border border-gray-200 sticky top-24">
              <h3 className="text-xl font-display font-bold text-primary mb-6 uppercase">Ready to Order?</h3>
              <p className="text-gray-500 text-sm mb-6 italic">
                Contact Stonex Enterprises for custom mesh sizes and bulk shipping quotes.
              </p>
              <Link href="/contact">
                <button className="w-full bg-accent hover:bg-accent/90 text-primary font-bold uppercase tracking-wider py-4 px-6 mb-4 transition-colors">
                  Request Quote
                </button>
              </Link>
              <button className="w-full bg-white border border-gray-300 hover:border-primary text-primary font-bold uppercase tracking-wider py-4 px-6 flex items-center justify-center gap-2 transition-all group">
                <Download className="w-4 h-4 group-hover:text-accent" /> Datasheet
              </button>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-2 uppercase tracking-wide">Packaging Options</h4>
                <ul className="space-y-2">
                  {product.specifications.packaging?.map((pack, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full" /> {pack}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}