import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "200+", label: "Proyectos completados", color: "text-solar" },
  { icon: Award, value: "15 Años", label: "En el mercado solar", color: "text-electric" },
  { icon: Users, value: "98%", label: "Clientes satisfechos", color: "text-solar" },
  { icon: ShieldCheck, value: "50 MW+", label: "Potencia instalada", color: "text-electric" },
];

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
  return (
    <section id="nosotros" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)", transform: "translate(-50%, -50%)" }}
        />
      </div>

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

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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
                {/* Placeholder — replace with your company story */}
                ServiciosGonzalez nació de la convicción de que la energía limpia y
                asequible debe estar al alcance de todos. Desde nuestros inicios, hemos
                sido el aliado preferido de familias y empresas que buscan independencia
                energética con tecnología de primer nivel.
              </p>
              <p>
                {/* Placeholder — replace with your differentiators */}
                Nuestro equipo de ingenieros certificados diseña cada instalación a
                medida, maximizando el rendimiento y el retorno de inversión en cada
                proyecto. Trabajamos con los fabricantes líderes del mercado global para
                garantizar calidad y durabilidad.
              </p>
              <p>
                {/* Placeholder — replace with your commitment */}
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

          {/* Right — stats grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="glass rounded-2xl p-6 hover:border-white/10 transition-colors duration-300 group"
              >
                <stat.icon className={`w-5 h-5 ${stat.color} mb-4 opacity-80 group-hover:opacity-100 transition-opacity`} />
                <div className={`text-3xl font-black tracking-tight mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-[13px] text-white/45 font-medium leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* Large accent card */}
            <motion.div
              variants={item}
              className="col-span-2 rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,107,26,0.12) 0%, rgba(0,212,255,0.08) 100%)",
                border: "1px solid rgba(255,107,26,0.2)",
              }}
            >
              <div className="relative z-10">
                <p className="text-[13px] text-white/50 uppercase tracking-widest font-semibold mb-2">
                  Nuestra promesa
                </p>
                <p className="text-lg font-bold text-white leading-snug">
                  "Cada instalación es una inversión que trabajamos para que dure décadas."
                </p>
              </div>
              <div
                className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #FF6B1A, transparent)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
