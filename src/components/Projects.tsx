import { motion, type Variants } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Residencia Familiar — Quito Norte",
    type: "Residencial · 8 kWp",
    location: "Quito, Ecuador",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Planta Industrial — Guayaquil",
    type: "Industrial · 120 kWp",
    location: "Guayaquil, Ecuador",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Villa Privada — Cumbayá",
    type: "Residencial · 15 kWp",
    location: "Cumbayá, Ecuador",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Centro Comercial — Cuenca",
    type: "Comercial · 200 kWp",
    location: "Cuenca, Ecuador",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Oficinas Corporativas — Quito",
    type: "Comercial · 45 kWp",
    location: "Quito, Ecuador",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Hotel Boutique — Otavalo",
    type: "Hostelería · 30 kWp",
    location: "Otavalo, Ecuador",
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80&auto=format&fit=crop",
    featured: false,
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Projects() {
  return (
    <section id="proyectos" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 w-[800px] h-[400px] opacity-[0.035]"
          style={{
            background: "radial-gradient(ellipse, #00D4FF, transparent)",
            transform: "translate(-50%, 30%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-6 h-px bg-electric" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-electric">
                Portafolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Proyectos que
              <br />
              <span className="gradient-electric">hablan por sí solos</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#contacto"
            className="shrink-0 flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors group"
          >
            Ver todos los proyectos
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.featured ? "sm:col-span-2 lg:col-span-1" : ""}`}
              style={{ aspectRatio: project.featured ? "16/9" : "4/3" }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-solar/0 group-hover:bg-solar/10 transition-colors duration-300" />

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 group-hover:ring-white/15 transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-solar mb-1">
                      {project.type}
                    </p>
                    <h3 className="text-[15px] font-bold text-white leading-snug mb-1.5">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[12px] text-white/50">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
