import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent flex items-center justify-center font-display font-bold text-2xl text-primary group-hover:bg-white transition-colors">
              I
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-wider text-white">INDUS<span className="text-accent">MIN</span></span>
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] leading-none mt-1">Minerals & Chemicals</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={cn(
                "font-medium text-sm tracking-wide uppercase transition-colors hover:text-accent relative py-2",
                location === link.href ? "text-accent" : "text-gray-300"
              )}>
                {link.label}
                {location === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="flex items-center gap-2 bg-white/10 hover:bg-accent hover:text-primary px-5 py-2.5 transition-all duration-300 font-bold uppercase text-sm tracking-wider border border-white/20 hover:border-accent group">
              <Phone className="w-4 h-4 group-hover:fill-current" />
              <span>Get Quote</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-3 py-3 font-display font-medium uppercase tracking-wider text-base",
                  location === link.href ? "text-accent bg-white/5" : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
