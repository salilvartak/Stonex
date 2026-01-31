// src/components/Navbar.tsx
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Adjusted for mobile scale */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="h-6 md:h-8">
              <img src="https://i.ibb.co/Kz0TRmTG/logo.png" alt="Logo" className="h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base md:text-lg leading-none tracking-wider text-white">
                STONE<span className="text-accent">X</span>
              </span>
              <span className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-[0.2em] leading-none mt-1">
                Minerals & Chemicals
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Hidden on mobile */}
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

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/contact" className="md:hidden p-2 bg-accent text-primary rounded-full">
              <Phone className="w-5 h-5" />
            </Link>
            
            {/* Desktop CTA */}
            <Link href="/contact" className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-accent hover:text-primary px-5 py-2.5 transition-all duration-300 font-bold uppercase text-sm tracking-wider border border-white/20 hover:border-accent group">
              <Phone className="w-4 h-4 group-hover:fill-current" />
              <span>Get Quote</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 bg-zinc-900 z-40 md:hidden flex flex-col p-6 space-y-4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-4 text-2xl font-display font-bold uppercase tracking-wider border-b border-white/5",
                  location === link.href ? "text-accent" : "text-gray-300"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}