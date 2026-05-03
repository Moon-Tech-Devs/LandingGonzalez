import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const stats = [
  { value: "200+", label: "Instalaciones" },
  { value: "98%", label: "Satisfacción" },
  { value: "15 Años", label: "De Garantía" },
  { value: "50 MW+", label: "Instalados" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay: d },
  }),
};

/*
 * ─── WhatsApp CTA ────────────────────────────────────────────────────────────
 * Number: +593 95 893 1686  →  wa.me/593958931686
 *
 * To activate: on the primary <a> below, swap href="#contacto" with:
 *   href={`https://wa.me/593958931686?text=${encodeURIComponent("Hola! Me interesa una cotización solar.")}`}
 * and add: target="_blank" rel="noopener noreferrer"
 *
 * Keep this commented until testing is complete.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export function Hero() {
  return (
    <section id="hero">
      <AuroraBackground className="min-h-screen h-auto py-28 md:py-0 md:h-screen">

        {/*
         *  ↓  CRITICAL: `text-white` here overrides `text-slate-950` that
         *  AuroraBackground sets on its wrapper — without this, ALL text is
         *  nearly invisible against the dark background.
         */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center text-white">


          {/*
           *  THREE-PART HEADING — reads as one coherent sentence regardless
           *  of which Gooey word appears:
           *
           *  "Tu energía solar [EFICIENTE / CONFIABLE / RENTABLE / GARANTIZADA]
           *   para tu hogar y empresa."
           *
           *  All four words are feminine adjectives agreeing with "energía".
           *  Each covers a service pillar:
           *    Eficiente   → Installation performance
           *    Confiable   → Maintenance / reliability
           *    Rentable    → Sales / ROI
           *    Garantizada → Warranty / quality
           */}

          {/* Part 1 — static intro line */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            className="text-lg md:text-xl font-semibold text-white/50 tracking-tight mb-3 pb-6 padding-bg"
          >
            Tu energía solar,
          </motion.p>

          {/*
           *  Part 2 — GooeyText isolated in its own block.
           *
           *  ROOT CAUSE FIX: GooeyText renders two `position:absolute` spans
           *  inside a `position:relative` div. They MUST live in an explicit
           *  block container with defined dimensions — NEVER inline inside a
           *  heading text node (that causes the "floating word" bug).
           *
           *  Default GooeyText font sizes:
           *    mobile  → text-6xl  = 60px  → container h-[72px]
           *    desktop → text-[60pt] = 80px → container md:h-[104px]
           *
           *  Only override color + weight via textClassName (size stays default
           *  to avoid twMerge ambiguity with the hardcoded responsive classes).
           */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.32}
            className="relative w-full h-[30px] md:h-[20px] mb-3"
          >
            <GooeyText
              texts={["Eficiente", "Confiable", "Rentable", "Garantizada"]}
              morphTime={1.4}
              cooldownTime={2.5}
              className="absolute inset-0"
              textClassName="font-black text-solar"
            />
          </motion.div>

          {/* Part 3 — static closing H1 */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.44}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none mb-7"
            style={{ letterSpacing: "-0.035em" }}
          >
            para tu{" "}
            <span className="gradient-solar">hogar y empresa.</span>
          </motion.h1>

          {/* Subtext — covers all 3 pillars: sales, install, maintenance */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.56}
            className="max-w-md text-balance text-base md:text-[17px] text-slate-300 leading-relaxed mb-10"
          >
            Venta, instalación y mantenimiento integral de sistemas fotovoltaicos.
            Soluciones a medida para quienes buscan independencia energética real.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.66}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 md:mb-20"
          >
            {/* Primary — swap href to WhatsApp when ready (see comment at top) */}
            <a
              href="#contacto"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-solar text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.03] active:scale-[0.98]"
              style={{ boxShadow: "0 0 32px rgba(255,107,26,0.45)" }}
            >
              Solicitar Instalación
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#proyectos"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/75 font-semibold text-sm transition-all duration-200 hover:text-white hover:border-white/30 backdrop-blur-sm"
            >
              Ver Proyectos
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.76}
            className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-4 px-3 border-r border-white/[0.06] last:border-r-0">
                <span className="text-xl font-black tracking-tight text-white">{stat.value}</span>
                <span className="text-[11px] text-slate-400 font-medium mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator — explicit white color so it doesn't inherit text-slate-950 */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-[20px] tracking-[0.2em] uppercase font-medium">Explorar</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>

      </AuroraBackground>
    </section>
  );
}
