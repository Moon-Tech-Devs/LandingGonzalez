import { motion } from "framer-motion";

import proj1 from "@/assets/horizontal-18.jpeg";
import proj2 from "@/assets/horizontal-08.jpeg";
import proj3 from "@/assets/horizontal-09.jpeg";
import proj4 from "@/assets/horizontal-16.jpeg";
import proj5 from "@/assets/horizontal-21.jpeg";
import proj6 from "@/assets/horizontal-07.jpeg";

const images = [proj1, proj2, proj3, proj4, proj5, proj6];
const track = [...images, ...images];

export function Projects() {
  return (
    <section id="proyectos" className="relative py-28 md:py-36 overflow-hidden bg-bone">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-solar">
              Portafolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Proyectos que
            <br />
            <span className="gradient-solar">hablan por sí solos</span>
          </motion.h2>
        </div>

        {/* Infinite carousel — images only */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="absolute -inset-8 -z-10 rounded-[2.5rem] blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(255,107,26,0.45) 0%, rgba(255,107,26,0.12) 45%, transparent 72%)",
            }}
          />

          <div
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-black/[0.08] glow-solar"
            style={{
              boxShadow:
                "0 0 50px rgba(255,107,26,0.35), 0 0 100px rgba(255,107,26,0.12), 0 12px 40px rgba(0,0,0,0.12)",
            }}
          >
            <div
              className="flex h-full animate-marquee motion-reduce:animate-none will-change-transform"
              style={{ width: `${track.length * 100}%` }}
            >
              {track.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="h-full shrink-0 object-cover"
                  style={{ width: `${100 / track.length}%` }}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
