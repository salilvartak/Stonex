import { useProduct } from "@/hooks/use-products";
import { Link, useRoute } from "wouter";
import { Loader2, ArrowLeft, Download, Check } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import NotFound from "./not-found";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:slug");
  const { data: product, isLoading, error } = useProduct(params?.slug || "");

  if (isLoading) return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <Loader2 className="w-12 h-12 text-accent animate-spin" />
    </div>
  );

  if (!product && !isLoading) return <NotFound />;

  return (
    <div className="min-h-screen bg-white">
      {/* Product Hero */}
      <div className="relative h-[60vh] bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={product!.heroImage} 
            alt={product!.name} 
            className="w-full h-full object-cover opacity-50"
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
                {product!.name}
              </h1>
              <div className="flex flex-wrap gap-4 items-center text-white/80">
                {product!.specifications.chemicalFormula && (
                  <span className="font-mono bg-white/10 px-3 py-1 border border-white/20">
                    {product!.specifications.chemicalFormula}
                  </span>
                )}
                {product!.specifications.purity && (
                  <span className="font-bold text-accent">
                    {product!.specifications.purity} Purity
                  </span>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Description</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product!.description}
              </p>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Key Characteristics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product!.specifications.characteristics?.map((char, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-100">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-700">{char}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Properties Table */}
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Technical Specifications</h2>
              <div className="overflow-hidden border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Property</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Object.entries(product!.specifications.properties || {}).map(([key, value], i) => (
                      <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 font-mono">{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            {/* Applications */}
            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Applications</h2>
              <div className="flex flex-wrap gap-3">
                {product!.specifications.applications?.map((app, i) => (
                  <span key={i} className="px-4 py-2 bg-primary text-white text-sm font-bold uppercase tracking-wide">
                    {app}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 border border-gray-200 sticky top-24">
              <h3 className="text-xl font-display font-bold text-primary mb-6">Ready to Order?</h3>
              <p className="text-gray-500 text-sm mb-6">
                Contact us for bulk pricing, custom mesh sizes, and shipping quotes.
              </p>
              
              <Link href="/contact">
                <button className="w-full bg-accent hover:bg-accent/90 text-primary font-bold uppercase tracking-wider py-4 px-6 mb-4 transition-colors">
                  Request Quote
                </button>
              </Link>
              
              <button className="w-full bg-white border border-gray-300 hover:border-primary text-primary font-bold uppercase tracking-wider py-4 px-6 flex items-center justify-center gap-2 transition-all group">
                <Download className="w-4 h-4 group-hover:text-accent" /> Download Datasheet
              </button>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-2 uppercase tracking-wide">Available Packaging</h4>
                <ul className="space-y-2">
                  {product!.specifications.packaging?.map((pack, i) => (
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
