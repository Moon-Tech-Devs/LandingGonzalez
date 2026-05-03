import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin, Send, Zap } from "lucide-react";

const WHATSAPP_NUMBER = "593958931686"; // +593 95 893 1686

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ─── WhatsApp Redirect ───────────────────────────────────────────────────
    // When ready to enable, uncomment the block below and remove the fallback alert.
    //
    // const text = encodeURIComponent(
    //   `Hola ServiciosGonzalez! 👋\n\n` +
    //   `Nombre: ${form.name}\n` +
    //   `Email: ${form.email}\n` +
    //   `Teléfono: ${form.phone}\n\n` +
    //   `Mensaje: ${form.message}`
    // );
    // window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    //
    // ─────────────────────────────────────────────────────────────────────────

    // Temporary feedback during testing — remove when uncommenting WhatsApp redirect above
    alert(`Formulario listo para enviar a WhatsApp (${WHATSAPP_NUMBER}). Descomenta el bloque de redirección en Contact.tsx para activarlo.`);
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/25 outline-none focus:border-electric/50 focus:bg-white/[0.06] transition-all duration-200";

  return (
    <>
      {/* ── Contact Section ─────────────────────────────────────────────── */}
      <section id="contacto" className="relative py-28 md:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04]"
            style={{
              background: "radial-gradient(circle, #FF6B1A, transparent)",
              transform: "translate(40%, -40%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-6 h-px bg-solar" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-solar">
              Contacto
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-16"
            style={{ letterSpacing: "-0.03em" }}
          >
            Hablemos de tu
            <br />
            <span className="gradient-solar">proyecto solar</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Info */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-8"
            >
              <motion.p variants={item} className="text-[15px] text-white/55 leading-relaxed max-w-md">
                ¿Listo para reducir tu factura eléctrica? Escríbenos y en menos de 24 horas
                te enviamos una cotización personalizada sin costo ni compromiso.
              </motion.p>

              {/* Contact cards */}
              <motion.div variants={item} className="space-y-3">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "stalingonzalez@gmail.com",
                    href: "mailto:stalingonzalez@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "WhatsApp",
                    value: "+593 95 893 1686",
                    href: `https://wa.me/${WHATSAPP_NUMBER}`,
                  },
                  {
                    icon: MapPin,
                    label: "Ubicación",
                    value: "Ecuador — Atención a nivel nacional",
                    href: undefined,
                  },
                ].map((contact) => (
                  <div
                    key={contact.label}
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:border-white/10 transition-colors duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-solar/10 flex items-center justify-center shrink-0">
                      <contact.icon className="w-4 h-4 text-solar" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/35 font-medium uppercase tracking-wider mb-0.5">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-[14px] font-medium text-white/80 hover:text-white transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-[14px] font-medium text-white/80">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.a
                variants={item}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 transition-all duration-200 w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                Chatear por WhatsApp
              </motion.a>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-7 space-y-4 border border-white/[0.07]"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-white/40 uppercase tracking-wider block mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-white/40 uppercase tracking-wider block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-white/40 uppercase tracking-wider block mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+593 ..."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-white/40 uppercase tracking-wider block mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto: tipo de propiedad, consumo mensual aproximado, ciudad..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-solar hover:opacity-90 active:scale-[0.98] text-white font-semibold text-[14px] transition-all duration-200"
                  style={{ boxShadow: "0 0 28px rgba(255,107,26,0.35)" }}
                >
                  <Send className="w-4 h-4" />
                  Enviar Cotización
                </button>

                <p className="text-[11px] text-white/25 text-center leading-relaxed">
                  Al enviar, el formulario redirige a WhatsApp para una respuesta inmediata.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-solar to-orange-400 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" fill="white" />
              </div>
              <span className="font-bold text-[14px] tracking-tight text-white/80">
                Servicios<span className="text-solar">González</span>
              </span>
            </a>

            {/* Nav links */}
            <nav className="flex items-center gap-6">
              {["Inicio", "Nosotros", "Servicios", "Proyectos", "Contacto"].map((label, i) => {
                const hrefs = ["#hero", "#nosotros", "#servicios", "#proyectos", "#contacto"];
                return (
                  <a
                    key={label}
                    href={hrefs[i]}
                    className="text-[12px] text-white/35 hover:text-white/70 transition-colors"
                  >
                    {label}
                  </a>
                );
              })}
            </nav>

            {/* Copyright */}
            <p className="text-[12px] text-white/25">
              © {new Date().getFullYear()} ServiciosGonzalez
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
