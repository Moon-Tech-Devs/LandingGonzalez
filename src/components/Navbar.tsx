import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, Sun } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
];

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // 0 → 1 over the first 90px of scroll — drives all the blur transitions
  const progress = Math.min(scrollY / 90, 1);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300"
      style={{
        paddingTop: `${20 - progress * 8}px`,
        paddingBottom: `${20 - progress * 8}px`,
        backgroundColor: `rgba(3, 3, 3, ${progress * 0.82})`,
        backdropFilter: `blur(${progress * 28}px) saturate(${1 + progress * 0.9})`,
        WebkitBackdropFilter: `blur(${progress * 28}px) saturate(${1 + progress * 0.9})`,
        borderBottom: `1px solid rgba(255, 255, 255, ${progress * 0.055})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-8">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group flex-shrink-0">
            <span className="font-bold text-[15px] tracking-[-0.02em] text-white leading-none">
              ServiciosGonzález
            </span>
          </a>

          {/* Desktop nav links — right of logo */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200 tracking-[-0.01em] relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-solar group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contacto"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-[13px] font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #FF6B1A 0%, #FF8C42 100%)",
                boxShadow: "0 0 24px rgba(255,107,26,0.38), 0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              Contáctanos!
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(3, 3, 3, 0.96)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              borderTop: "1px solid rgba(255,255,255,0.055)",
            }}
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-white py-2.5 text-sm font-medium tracking-[-0.01em] transition-colors border-b border-white/[0.045] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #FF6B1A 0%, #FF8C42 100%)",
                  boxShadow: "0 0 20px rgba(255,107,26,0.35)",
                }}
              >
                <Sun className="w-3.5 h-3.5" />
                Cotización Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
