import { motion, type Variants } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta instalar paneles solares en mi hogar?",
    a: "El costo depende del tamaño del sistema, el consumo mensual y el tipo de instalación. Un sistema residencial promedio en Ecuador parte desde USD 4.500 para hogares pequeños y escala según la potencia requerida. Realizamos un estudio sin costo para entregarte una cotización exacta basada en tu planilla de luz.",
  },
  {
    q: "¿Cuánto puedo ahorrar en mi planilla de luz?",
    a: "La mayoría de nuestros clientes reducen su planilla entre un 70% y un 95% desde el primer mes. El ahorro depende de la radiación solar de tu zona, el dimensionamiento del sistema y tu patrón de consumo. El retorno de la inversión suele estar entre 4 y 7 años, y los paneles siguen produciendo energía por más de 25 años.",
  },
  {
    q: "¿Cuánto tiempo dura el proceso de instalación?",
    a: "Una instalación residencial estándar se completa en 2 a 4 días una vez aprobado el diseño. El proceso integral —visita técnica, diseño, permisos, compra de equipos e instalación— toma entre 3 y 6 semanas. Te acompañamos en cada paso y coordinamos todos los trámites con la empresa eléctrica.",
  },
  {
    q: "¿Qué pasa si hay un corte de luz o se nubla?",
    a: "En días nublados los paneles siguen produciendo energía, aunque a menor capacidad. Si tu sistema cuenta con banco de baterías, mantendrás energía durante cortes de red de forma automática. Para sistemas conectados a la red sin baterías, recomendamos respaldo de baterías cuando la continuidad eléctrica es crítica.",
  },
  {
    q: "¿Qué garantía tienen los paneles y el sistema?",
    a: "Los paneles que instalamos cuentan con garantía de producto de 12 a 15 años y garantía de rendimiento de 25 a 30 años, garantizando al menos un 85% de eficiencia al final de ese período. Los inversores tienen entre 5 y 10 años de garantía del fabricante, ampliables. Nuestra mano de obra tiene 2 años de garantía adicional.",
  },
  {
    q: "¿Necesito mantenimiento? ¿Cada cuánto?",
    a: "Los sistemas solares requieren mantenimiento mínimo. Recomendamos una limpieza de paneles y revisión técnica al menos una vez al año para asegurar máxima eficiencia. Ofrecemos planes de mantenimiento preventivo con monitoreo remoto del sistema las 24 horas para detectar cualquier anomalía a tiempo.",
  },
  {
    q: "¿Existe financiamiento o formas de pago a plazos?",
    a: "Sí. Trabajamos con varias entidades financieras del Ecuador que ofrecen créditos verdes a tasas preferenciales, con plazos de hasta 60 meses. También aceptamos pago directo, transferencias y tarjetas de crédito con diferidos. En muchos casos, la cuota mensual del crédito es menor que tu planilla de luz actual.",
  },
  {
    q: "¿Los paneles funcionan con la regulación de ARCONEL en Ecuador?",
    a: "Sí. Todas nuestras instalaciones cumplen con la regulación ARCONEL Nro. 003/18 sobre microgeneración fotovoltaica y el marco normativo vigente. Realizamos los trámites de calificación ante la empresa distribuidora correspondiente para que tu sistema pueda inyectar excedentes a la red bajo el esquema de net-metering.",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function FAQ() {
  return (
    <section id="faq" className="relative py-28 md:py-36 overflow-hidden bg-night">
      {/* Subtle radial accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-0 w-[600px] h-[400px] opacity-[0.03]"
          style={{
            background: "radial-gradient(ellipse, #FF6B1A, transparent)",
            transform: "translate(-30%, -50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-solar">
                Preguntas Frecuentes
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Lo que nuestros
              <br />
              <span className="gradient-solar">clientes preguntan</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-[15px] text-white/55 leading-relaxed max-w-md"
            >
              Resolvemos las dudas más comunes sobre energía solar, instalación,
              ahorros y financiamiento en Ecuador.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#contacto"
              className="group mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-white hover:text-solar transition-colors"
            >
              ¿Aún tienes dudas? Conversemos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Right — accordion */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="border-t border-white/[0.06]"
          >
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                variants={item}
                className="group border-b border-white/[0.06] [&[open]>summary>.faq-icon]:rotate-45"
              >
                <summary className="flex items-start justify-between gap-6 py-6 cursor-pointer list-none text-left">
                  <h3 className="text-[16px] md:text-[17px] font-semibold text-white/90 group-hover:text-white transition-colors leading-snug">
                    {faq.q}
                  </h3>
                  <span className="faq-icon shrink-0 mt-0.5 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 transition-transform duration-300">
                    <Plus className="w-4 h-4" />
                  </span>
                </summary>
                <div className="pb-7 pr-12">
                  <p className="text-[14.5px] text-white/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
