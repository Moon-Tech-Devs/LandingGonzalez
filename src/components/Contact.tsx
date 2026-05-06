import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Zap } from "lucide-react";

const WHATSAPP_NUMBER = "593958931686"; // +593 95 893 1686

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

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
      <section id="contacto" className="relative py-28 md:py-36 overflow-hidden bg-[#0c0d11]">
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Left — Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
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

            {/* Right — Video (centered both axes within the column) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center h-full min-h-[300px]"
            >
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.07]">
                <iframe
                  src="https://www.youtube.com/embed/Z4ciUduVWZ0?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=Z4ciUduVWZ0"
                  title="ServiciosGonzalez"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full block border-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-10 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <span className="font-bold text-[14px] tracking-tight text-white/80">
                ServiciosGonzález
              </span>
            </a>

            {/* Nav links */}
            <nav className="flex items-center gap-6">
              {["Inicio", "Nosotros", "Servicios", "Proyectos"].map((label, i) => {
                const hrefs = ["#hero", "#nosotros", "#servicios", "#proyectos"];
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
