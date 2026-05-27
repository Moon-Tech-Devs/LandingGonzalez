import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { VideoCarousel } from "@/components/VideoCarousel";

const CONTACT_VIDEOS = [
  "https://wedworbjgejmvqcqcuhn.supabase.co/storage/v1/object/public/GonzalezVids/WhatsApp%20Video%202026-05-13%20at%208.47.32%20PM.mp4",
  "https://wedworbjgejmvqcqcuhn.supabase.co/storage/v1/object/public/GonzalezVids/WhatsApp%20Video%202026-05-13%20at%208.47.36%20PM%20(1).mp4",
  "https://wedworbjgejmvqcqcuhn.supabase.co/storage/v1/object/public/GonzalezVids/WhatsApp%20Video%202026-05-13%20at%208.47.39%20PM%20(1).mp4",
  "https://wedworbjgejmvqcqcuhn.supabase.co/storage/v1/object/public/GonzalezVids/WhatsApp%20Video%202026-05-13%20at%208.47.39%20PM.mp4",
  "https://wedworbjgejmvqcqcuhn.supabase.co/storage/v1/object/public/GonzalezVids/WhatsApp%20Video%202026-05-13%20at%208.47.40%20PM.mp4",
  "https://wedworbjgejmvqcqcuhn.supabase.co/storage/v1/object/public/GonzalezVids/WhatsApp%20Video%202026-05-13%20at%208.47.41%20PM.mp4",
];

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
    <section id="contacto" className="relative py-28 md:py-36 overflow-hidden bg-ash">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
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
              <VideoCarousel videos={CONTACT_VIDEOS} />
            </motion.div>
          </div>
        </div>
    </section>
  );
}
