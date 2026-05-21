import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Aceptación de los términos",
    body: "Al acceder y utilizar el sitio web de ServiciosGonzález y contratar cualquiera de nuestros servicios, usted acepta cumplir con los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le solicitamos abstenerse de utilizar el sitio o nuestros servicios.",
  },
  {
    title: "2. Servicios prestados",
    body: "ServiciosGonzález ofrece servicios de diseño, suministro, instalación, monitoreo y mantenimiento de sistemas de energía solar fotovoltaica para clientes residenciales, comerciales e industriales en el territorio del Ecuador. El alcance específico de cada proyecto se establece en la cotización y contrato individual firmado entre las partes.",
  },
  {
    title: "3. Cotizaciones y precios",
    body: "Las cotizaciones tienen una vigencia de 30 días calendario desde su emisión, salvo que se indique lo contrario por escrito. Los precios pueden variar en función de la disponibilidad de equipos, fluctuaciones del mercado internacional y cambios regulatorios. Cualquier modificación al alcance original requerirá una cotización adicional.",
  },
  {
    title: "4. Obligaciones del cliente",
    body: "El cliente se compromete a proporcionar información veraz sobre su consumo eléctrico, condiciones del inmueble y necesidades técnicas. Debe permitir el acceso al sitio de instalación en las fechas acordadas y mantener las condiciones de seguridad necesarias para la ejecución de los trabajos. Cualquier permiso requerido por terceros (copropietarios, municipios, etc.) es responsabilidad del cliente, salvo acuerdo expreso en contrario.",
  },
  {
    title: "5. Garantías",
    body: "Los equipos suministrados cuentan con las garantías otorgadas por sus fabricantes, las cuales se trasladan íntegramente al cliente. La mano de obra de instalación tiene una garantía adicional de dos (2) años contados desde la fecha de puesta en marcha del sistema. Esta garantía no cubre daños causados por mal uso, fenómenos naturales extraordinarios, intervención de terceros no autorizados o falta de mantenimiento conforme a las recomendaciones técnicas.",
  },
  {
    title: "6. Limitación de responsabilidad",
    body: "ServiciosGonzález no será responsable por pérdidas indirectas, lucro cesante o daños consecuenciales derivados del uso o imposibilidad de uso del sistema, salvo en los casos expresamente establecidos por la legislación ecuatoriana. La responsabilidad máxima por cualquier reclamo se limita al valor del contrato suscrito con el cliente.",
  },
  {
    title: "7. Propiedad intelectual",
    body: "Todo el contenido del sitio web —incluyendo textos, imágenes, logotipos, gráficos, diseños y software— es propiedad de ServiciosGonzález o sus licenciantes y está protegido por las leyes ecuatorianas e internacionales de propiedad intelectual. Queda prohibida su reproducción, distribución o uso comercial sin autorización previa por escrito.",
  },
  {
    title: "8. Modificaciones",
    body: "ServiciosGonzález se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento. Los cambios entrarán en vigencia desde su publicación en el sitio web. Se recomienda revisar esta sección periódicamente. El uso continuado del sitio luego de las modificaciones implica la aceptación de las mismas.",
  },
  {
    title: "9. Ley aplicable y jurisdicción",
    body: "Estos Términos y Condiciones se rigen por las leyes de la República del Ecuador. Cualquier controversia derivada de su interpretación o aplicación será sometida a la jurisdicción de los jueces competentes de la ciudad de Quito, renunciando expresamente las partes a cualquier otro fuero.",
  },
  {
    title: "10. Contacto",
    body: "Para consultas relacionadas con estos Términos y Condiciones puede comunicarse al correo electrónico info@serviciosgonzalez.ec o al WhatsApp +593 95 893 1686.",
  },
];

export function Terms() {
  return (
    <main className="bg-night min-h-screen text-white">
      <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-36 pb-28 md:pt-44 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-solar">
            Documento Legal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Términos y <span className="gradient-solar">condiciones</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-[13px] text-white/40"
        >
          Última actualización: mayo de 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-[15px] text-white/65 leading-relaxed"
        >
          Los presentes Términos y Condiciones regulan el acceso y uso del sitio
          web de ServiciosGonzález, así como la contratación de nuestros
          servicios de energía solar fotovoltaica en el Ecuador. Le invitamos a
          leerlos con atención antes de utilizar nuestros servicios.
        </motion.p>

        <div className="mt-14 space-y-12">
          {sections.map((section, idx) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: Math.min(idx * 0.03, 0.2) }}
            >
              <h2 className="text-[22px] md:text-2xl font-semibold text-white mb-3 tracking-tight">
                {section.title}
              </h2>
              <p className="text-[15px] text-white/65 leading-relaxed">
                {section.body}
              </p>
            </motion.section>
          ))}
        </div>
      </article>
    </main>
  );
}
