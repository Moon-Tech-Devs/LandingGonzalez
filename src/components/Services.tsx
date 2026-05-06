import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sun, Wrench, Zap } from "lucide-react";
import { BentoGridShowcase } from "@/components/ui/bento-grid-showcase";
import { cn } from "@/lib/utils";

const projects = [
  { name: "Residencia Manta", body: "14.8 kWp con respaldo inteligente." },
  { name: "Planta Industrial SME", body: "220 kWp para optimizar costos." },
  { name: "Condominio Vista Pacifico", body: "Energia comun con monitoreo central." },
];

const statuses = [
  { label: "Eficiencia de Paneles", value: "98%", tone: "ok" },
  { label: "Bateria Principal", value: "Carga Completa", tone: "ok" },
  { label: "Estado del Inversor", value: "Optimo", tone: "ok" },
  { label: "Consumo Red", value: "Minimo", tone: "warn" },
  { label: "Autonomia", value: "17h estimadas", tone: "ok" },
];

function MarqueeProjects() {
  return (
    <div className="flex flex-col">
      {projects.map((project, idx) => (
        <figure
          key={`${project.name}-${idx}`}
          className="mb-2 rounded-xl border border-white/10 bg-black/35 p-2.5 backdrop-blur-sm"
        >
          <figcaption className="text-[13px] font-semibold text-white">{project.name}</figcaption>
          <blockquote className="mt-0.5 text-[11px] leading-relaxed text-slate-200/85">{project.body}</blockquote>
        </figure>
      ))}
    </div>
  );
}

function MonitoringList() {
  return (
    <div className="h-full">
      <div className="space-y-1.5">
        {statuses.map((status, idx) => (
          <motion.div
            key={status.label}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-2.5 py-1.5"
          >
            <div className="flex min-w-0 items-center gap-2">
              <span
                className={cn(
                  "size-1.5 rounded-full shrink-0",
                  status.tone === "ok" ? "bg-[#FFAB40] shadow-[0_0_6px_rgba(255,171,64,0.8)]" : "bg-white/80"
                )}
              />
              <span className="truncate text-[11px] text-slate-200">{status.label}</span>
            </div>
            <span className="justify-self-end text-right text-[11px] font-semibold text-white">{status.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MaintenanceCalendar() {
  const days = ["L", "M", "X", "J", "V", "S", "D"];
  const month = [
    "", "", 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, "", "", "",
  ];

  return (
    <div className="h-full">
      <div className="rounded-lg border border-white/10 bg-black/30 p-2.5 backdrop-blur-sm">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#FFAB40]">Octubre 2026</p>
          <p className="text-[9px] text-slate-200">Limpieza Anual</p>
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-center text-[9px] text-slate-200/75">
          {days.map((d) => (
            <span key={d}>{d}</span>
          ))}
          {month.map((d, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded py-0.5",
                d === 22
                  ? "bg-[#FF6B1A] font-semibold text-white shadow-[0_0_14px_rgba(255,107,26,0.55)]"
                  : "text-slate-200"
              )}
            >
              {d}
            </div>
          ))}
        </div>
        <p className="mt-1.5 text-[9px] text-slate-200/85">22 Oct: Service Checkup y calibracion de inversor.</p>
      </div>
    </div>
  );
}

type ServiceCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  cta?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

function ServiceCard({
  icon: Icon,
  title,
  description,
  cta,
  href,
  className,
  children,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm",
        className
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-2.5 flex size-8 items-center justify-center rounded-lg bg-[#FF6B1A]/12 text-[#FF6B1A]">
          <Icon className="size-4" />
        </div>

        <h3 className="text-lg font-bold tracking-tight text-white leading-tight">{title}</h3>
        <p className="mt-1 text-[12px] leading-relaxed text-slate-200/85">{description}</p>

        <div className="mt-3 flex-1 min-h-0">{children}</div>

        {cta && href ? (
          <a
            href={href}
            className="mt-3 inline-flex w-fit items-center gap-1.5 text-[12px] font-semibold text-[#FFAB40] transition-colors hover:text-[#FF6B1A]"
          >
            {cta}
            <ArrowRight className="size-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicios" className="relative py-28 md:py-36 overflow-hidden bg-[#0c0d11]">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF6B1A, transparent)", transform: "translate(30%, -30%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-6 h-px bg-solar" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-solar">
              Nuestros Servicios
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
            Soluciones solares{" "}
            <span className="gradient-solar">completas</span>
          </motion.h2>
        </div>

        <BentoGridShowcase
          className="auto-rows-[minmax(150px,auto)] gap-3"
          integration={
            <ServiceCard
              icon={Sun}
              title="Proyectos Realizados"
              description="Instalaciones premium para hogares y empresas en todo Ecuador."
              cta="Ver portafolio"
              href="#proyectos"
              className="md:min-h-[330px]"
            >
              <MarqueeProjects />
            </ServiceCard>
          }
          trackers={
            <ServiceCard
              icon={ShieldCheck}
              title="Monitoreo 24/7"
              description="Control continuo de rendimiento, bateria e inversor."
            >
              <MonitoringList />
            </ServiceCard>
          }
          statistic={
            <ServiceCard
              icon={Zap}
              title="Ahorro Inteligente"
              description="Reduccion de factura electrica con alta estabilidad operativa."
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/10 bg-black/25 p-2.5">
                  <p className="text-[9px] uppercase tracking-wide text-slate-200/80">Ahorro estimado</p>
                  <p className="mt-0.5 text-xl font-black text-white">90%</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/25 p-2.5">
                  <p className="text-[9px] uppercase tracking-wide text-slate-200/80">Retorno</p>
                  <p className="mt-0.5 text-xl font-black text-white">4-6 años</p>
                </div>
              </div>
            </ServiceCard>
          }
          productivity={
            <ServiceCard
              icon={Wrench}
              title="Mantenimiento Programado"
              description="Agenda preventiva para proteger su inversion a largo plazo."
            >
              <MaintenanceCalendar />
            </ServiceCard>
          }
        />
      </div>
    </section>
  );
}
