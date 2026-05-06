import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

import img1 from "@/assets/Depositphotos_5111838_xl-2015-min-scaled.jpg";
import img2 from "@/assets/MB-SOLAR-GALAR-BULNES-FIT.jpg";
import img3 from "@/assets/panelesSolares.jpg";
import img4 from "@/assets/paneles-solares-en-casa.jpg";
import img5 from "@/assets/paneles_solares_precios_para_casas_600x600.webp";

const carouselImages = [img1, img2, img3, img4, img5];

// Hoisted to module scope so the array reference is stable across re-renders.
// Without this, the carousel state-change re-runs GooeyText's useLayoutEffect
// (it depends on `texts`) and the morph animation restarts every 5.5s.
const morphTexts = ["Eficiente", "Confiable", "Rentable", "Garantizada"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: d },
  }),
};

/*
 * ─── WhatsApp CTA ────────────────────────────────────────────────────────────
 * Number: +593 95 893 1686  →  wa.me/593958931686
 *
 * To activate: on the primary <a> below, swap href="#contacto" with:
 *   href={`https://wa.me/593958931686?text=${encodeURIComponent("Hola! Me interesa una cotización solar.")}`}
 * and add: target="_blank" rel="noopener noreferrer"
 * ─────────────────────────────────────────────────────────────────────────────
 */

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden h-screen min-h-[600px]">

      {/* ── CAROUSEL BACKGROUND ──────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.img
              src={carouselImages[currentImage]}
              alt=""
              aria-hidden="true"
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "linear" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Left-side dark vignette — keeps text readable, lets image breathe on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/90 via-[#030303]/55 to-transparent pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent pointer-events-none" />
        {/* Top fade for navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ── HERO CONTENT — left, vertically centered ─────────── */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-20">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8">
          <div className="max-w-2xl">

            {/* Intro line */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
              className="text-base md:text-lg font-medium text-white/55 tracking-tight mb-2"
            >
              Tu energía solar,
            </motion.p>

            {/* GooeyText morphing word */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.32}
              className="relative w-full h-[44px] md:h-[56px] mb-1 -mt-1"
            >
              <GooeyText
                texts={morphTexts}
                morphTime={1.4}
                cooldownTime={2.5}
                className="absolute inset-0"
                align="start"
                textClassName="font-black text-solar"
              />
            </motion.div>

            {/* Main H1 */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0.44}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.02] mb-6"
              style={{ letterSpacing: "-0.035em" }}
            >
              para tu{" "}
              <span className="gradient-solar">hogar y empresa.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.54}
              className="text-base md:text-lg text-white/65 leading-relaxed mb-10 max-w-md"
            >
              Venta, instalación y mantenimiento integral de sistemas fotovoltaicos.
              Soluciones a medida para quienes buscan independencia energética real.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.64}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <a
                href="#contacto"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#030303] font-bold text-sm transition-all duration-200 hover:bg-white/90 hover:scale-[1.03] active:scale-[0.98]"
              >
                Solicitar Instalación
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#proyectos"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white font-semibold text-sm transition-all duration-200 hover:border-white/50 hover:bg-white/5 backdrop-blur-sm"
              >
                Ver Proyectos
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Carousel dots — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-20 flex items-center gap-2"
      >
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-500 rounded-full"
            style={{
              width: i === currentImage ? "24px" : "6px",
              height: "6px",
              backgroundColor: i === currentImage
                ? "rgba(255, 107, 26, 0.9)"
                : "rgba(255, 255, 255, 0.3)",
            }}
          />
        ))}
      </motion.div>

      {/* Scroll indicator — centered at bottom */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase font-medium">Explorar</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

    </section>
  );
}
