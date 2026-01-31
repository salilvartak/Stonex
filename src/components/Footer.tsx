import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="h-10 ">
              <img src="https://i.ibb.co/Kz0TRmTG/logo.png" alt="Logo" className=" h-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-wider text-white">STONE<span className="text-accent">X</span></span>
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] leading-none mt-1">Minerals & Chemicals</span>
            </div>
          </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              India’s premier manufacturer and exporter of high-grade industrial minerals. Serving ceramics, glass, paint, and cosmetic industries worldwide since 2011.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Company Profile</Link></li>
              <li><Link href="/infrastructure" className="hover:text-accent transition-colors">Infrastructure</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products/quartz-sand" className="hover:text-accent transition-colors">Quartz Sand</Link></li>
              <li><Link href="/products/feldspar" className="hover:text-accent transition-colors">Feldspar Powder</Link></li>
              <li><Link href="/products/china-clay" className="hover:text-accent transition-colors">China Clay</Link></li>
              <li><Link href="/products/silica-sand" className="hover:text-accent transition-colors">Silica Sand</Link></li>
              <li><Link href="/products/dolomite" className="hover:text-accent transition-colors">Dolomite</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-sm">G-12, Industrial Area, Phase III,<br />Beawar, Rajasthan - 305901</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-mono">+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm">sales@indusmin.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} IndusMin. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
