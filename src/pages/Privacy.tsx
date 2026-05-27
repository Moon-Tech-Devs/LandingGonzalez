const sections = [
  {
    id: "informacion",
    title: "1. Información que recopilamos",
    body: "Recopilamos información personal que usted nos proporciona voluntariamente al solicitar una cotización, completar formularios de contacto o contratar nuestros servicios. Esto incluye nombre completo, correo electrónico, número telefónico, dirección del inmueble, datos de consumo eléctrico y, cuando corresponde, información de facturación. Adicionalmente, recopilamos información técnica de navegación (dirección IP, tipo de dispositivo, páginas visitadas) a través de cookies y tecnologías similares.",
  },
  {
    id: "uso",
    title: "2. Cómo usamos la información",
    body: "Utilizamos la información recopilada para responder a sus consultas, elaborar cotizaciones personalizadas, ejecutar los servicios contratados, emitir facturación, realizar seguimiento posventa, enviar comunicaciones relacionadas con sus proyectos y cumplir con obligaciones legales aplicables. Con su consentimiento expreso, también podremos enviarle información comercial sobre nuevos servicios o promociones.",
  },
  {
    id: "cookies",
    title: "3. Cookies y tecnologías similares",
    body: "Nuestro sitio utiliza cookies propias y de terceros para mejorar la experiencia de navegación, recordar preferencias, analizar el tráfico y medir el rendimiento del sitio. Usted puede configurar su navegador para rechazar las cookies, pero esto puede afectar la funcionalidad de algunas secciones del sitio. Al continuar navegando acepta el uso de cookies conforme a esta política.",
  },
  {
    id: "terceros",
    title: "4. Compartir información con terceros",
    body: "No vendemos, alquilamos ni cedemos información personal a terceros con fines comerciales. Únicamente compartimos datos con proveedores que nos ayudan a prestar el servicio (plataformas de mensajería, procesadores de pago, servicios de hosting), instituciones financieras en caso de financiamiento, autoridades regulatorias como ARCONEL o la empresa distribuidora correspondiente cuando es necesario para la conexión del sistema, y autoridades competentes cuando la ley así lo exija.",
  },
  {
    id: "seguridad",
    title: "5. Seguridad",
    body: "Implementamos medidas técnicas, administrativas y físicas razonables para proteger su información personal contra acceso no autorizado, pérdida, alteración o divulgación. Sin embargo, ningún sistema de transmisión por internet o de almacenamiento electrónico es completamente seguro, por lo que no podemos garantizar seguridad absoluta.",
  },
  {
    id: "derechos",
    title: "6. Derechos del titular (LOPDP)",
    body: "Conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP), usted tiene derecho a acceder, rectificar, actualizar, eliminar, oponerse al tratamiento, limitar el uso, portar y revocar el consentimiento sobre sus datos personales. Para ejercer estos derechos, puede enviar una solicitud al correo info@serviciosgonzalez.ec indicando claramente el derecho que desea ejercer y adjuntando documento de identidad.",
  },
  {
    id: "retencion",
    title: "7. Retención de datos",
    body: "Conservamos sus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades descritas en esta política y con las obligaciones legales, contables y tributarias aplicables. Cuando los datos ya no sean necesarios serán eliminados o anonimizados de forma segura.",
  },
  {
    id: "menores",
    title: "8. Menores de edad",
    body: "Nuestros servicios y este sitio web están dirigidos a personas mayores de edad. No recopilamos de forma consciente información personal de menores. Si tomamos conocimiento de que hemos recopilado datos de un menor sin el consentimiento de su representante legal, procederemos a eliminarlos.",
  },
  {
    id: "cambios",
    title: "9. Cambios a esta política",
    body: "Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o en la normativa aplicable. Publicaremos cualquier modificación en esta misma página actualizando la fecha de \"Última actualización\". Le recomendamos revisar esta política regularmente.",
  },
  {
    id: "contacto",
    title: "10. Contacto",
    body: "Si tiene preguntas, comentarios o quejas relacionadas con esta Política de Privacidad o con el tratamiento de sus datos personales, puede escribirnos a info@serviciosgonzalez.ec o comunicarse al WhatsApp +593 95 893 1686.",
  },
];

export function Privacy() {
  return (
    <main className="bg-night min-h-screen text-white">
      <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-36 pb-28 md:pt-44 md:pb-36">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-solar">
            Documento Legal
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Política de <span className="gradient-solar">privacidad</span>
        </h1>

        <p className="mt-4 text-[13px] text-white/40">
          Última actualización: mayo de 2026
        </p>

        <p className="mt-8 text-[15px] text-white/65 leading-relaxed">
          En ServiciosGonzález valoramos su privacidad y nos comprometemos a
          proteger sus datos personales conforme a la Ley Orgánica de
          Protección de Datos Personales del Ecuador (LOPDP) y la normativa
          internacional aplicable. Esta política explica qué información
          recopilamos, cómo la usamos y los derechos que le asisten.
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <section id={section.id} key={section.id} className="scroll-mt-32">
              <h2 className="text-[22px] md:text-2xl font-semibold text-white mb-3 tracking-tight">
                {section.title}
              </h2>
              <p className="text-[15px] text-white/65 leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
