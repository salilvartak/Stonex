import { AnimatedSection } from "../components/AnimatedSection";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { products } from "../data/products"; // Using the static data

export default function Products() {
  // Removed isLoading and API hook since data is now static

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-primary text-white py-20 border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 uppercase">OUR PRODUCTS</h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            High-purity minerals processed to meet rigorous industrial standards. 
            Available in lumps, grains, and powder forms (200-400 mesh).
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex-grow w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, idx) => (
            <AnimatedSection key={product.id} delay={idx * 0.1}>
              <Link 
                href={`/products/${product.slug}`} 
                className="group block bg-white h-full shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className="h-64 lg:h-auto overflow-hidden relative">
                     <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                     <img 
                      src={product.hero_image} // Updated from heroImage to hero_image
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {/* Mapping features from the specifications object */}
                        {product.specifications.features?.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mt-auto group-hover:translate-x-2 transition-transform">
                      View Details <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}