import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/#hero" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Preguntas", href: "/#faq" },
  { label: "Contacto", href: "/#contacto" },
];

const legalLinks = [
  { label: "Términos y condiciones", to: "/terminos" },
  { label: "Política de privacidad", to: "/privacidad" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-night border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">

        {/* Top — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
              <span className="font-bold text-[15px] tracking-tight text-white">
                ServiciosGonzález
              </span>
            <p className="text-[13px] text-white/55 leading-relaxed max-w-[260px]">
              Energía solar profesional para hogares, empresas e industrias en
              todo el Ecuador.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href="https://wa.me/593958931686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-solar" />
                +593 95 893 1686
              </a>
              {/*<a
                href="mailto:info@serviciosgonzalez.ec"
                className="flex items-center gap-2.5 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-solar" />
                info@serviciosgonzalez.ec
              </a>*/}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Atención
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-[13px] text-white/65">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-solar shrink-0" />
                <span>Manta, Ecuador<br />Cobertura nacional</span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-white/65">
                <Clock className="w-3.5 h-3.5 mt-0.5 text-solar shrink-0" />
                <span>Lun – Vie · 8:00 – 18:00<br />Sáb · 9:00 – 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom band */}
        <div className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-white/35">
            © {year} ServiciosGonzález. Todos los derechos reservados.
          </p>
          <p className="text-[12px] text-white/30">
            Desarrollado por{" "}
            <a
              href="https://codidevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-solar transition-colors"
            >
              Codidevs.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
