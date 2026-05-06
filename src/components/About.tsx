import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import senorH from "@/assets/señorhorizontal.jpg";
import senorV from "@/assets/señorvertical.jpg";

const aboutImages = [senorV, senorH];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  const [imgIdx, setImgIdx] = useState(0);

  const next = () => setImgIdx((i) => (i + 1) % aboutImages.length);
  const prev = () => setImgIdx((i) => (i - 1 + aboutImages.length) % aboutImages.length);

  return (
    <section id="nosotros" className="relative py-28 md:py-36 bg-[#030303]">
      {/* Section A — base black */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-6 h-px bg-electric" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-electric">
            Sobre Nosotros
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              Tu socio de confianza
              <br />
              en{" "}
              <span className="gradient-electric">energía solar</span>
            </motion.h2>

            <motion.div variants={item} className="space-y-5 text-white/55 leading-relaxed">
              <p>
                ServiciosGonzalez nació de la convicción de que la energía limpia y
                asequible debe estar al alcance de todos. Desde nuestros inicios, hemos
                sido el aliado preferido de familias y empresas que buscan independencia
                energética con tecnología de primer nivel.
              </p>
              <p>
                Nuestro equipo de ingenieros certificados diseña cada instalación a
                medida, maximizando el rendimiento y el retorno de inversión en cada
                proyecto. Trabajamos con los fabricantes líderes del mercado global para
                garantizar calidad y durabilidad.
              </p>
              <p>
                Más que instaladores, somos asesores energéticos comprometidos con el
                futuro de nuestros clientes. Acompañamos cada etapa: desde el diseño y
                la instalación hasta el mantenimiento preventivo a largo plazo.
              </p>
            </motion.div>

            <motion.a
              variants={item}
              href="#contacto"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-electric/30 text-electric text-sm font-semibold hover:bg-electric/10 transition-all duration-200"
            >
              Conoce más sobre nosotros
            </motion.a>
          </motion.div>

          {/* Right — image carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <AnimatePresence mode="sync">
                <motion.img
                  key={imgIdx}
                  src={aboutImages[imgIdx]}
                  alt="Equipo ServiciosGonzález"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Subtle bottom gradient — keeps controls legible on bright photos */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              {/* Arrow controls */}
              <button
                onClick={prev}
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Imagen siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {aboutImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    aria-label={`Imagen ${i + 1}`}
                    className="transition-all duration-500 rounded-full"
                    style={{
                      width: i === imgIdx ? "22px" : "6px",
                      height: "6px",
                      backgroundColor: i === imgIdx
                        ? "rgba(255, 107, 26, 0.95)"
                        : "rgba(255, 255, 255, 0.45)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Decorative glow behind the frame */}
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-30 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,107,26,0.4), transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,212,255,0.3), transparent 60%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
