"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaTiktok, FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { WHATSAPP, CONTACT } from "@/lib/constants";

const iconMap: any = {
  FaTiktok: <FaTiktok />,
  FaFacebook: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaTwitter: <FaTwitter />,
  FaPinterest: <FaPinterest />,
  FaYoutube: <FaYoutube />,
};

export function SiteFooter() {
  const pathname = usePathname();
  const [socials, setSocials] = useState<any[]>([]);

  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const res = await fetch("/api/admin/socials");
        if (res.ok) {
          const data = await res.json();
          setSocials(data.filter((s: any) => s.active));
        }
      } catch (error) {
        console.error("Failed to fetch socials:", error);
      }
    };

    fetchSocials();
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 md:pt-16 pb-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-48 h-24 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/assets/og-logo.png"
                alt="Dolores Silicone"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-purple-100 text-sm leading-relaxed max-w-xs text-center md:text-left">
              Hechas a mano con amor, aportando consuelo y alegría a tus brazos. Cada bebé es una obra maestra única de arte terapéutico.
            </p>
          </div>
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            {socials.map((social) => (
              <a
                key={social._id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-300 overflow-hidden"
              >
                {social.imageUrl ? (
                  <img
                    src={social.imageUrl}
                    alt={social.platform}
                    className="w-full h-full object-cover"
                  />
                ) : social.svgContent ? (
                  <div
                    className="w-5 h-5 fill-current"
                    dangerouslySetInnerHTML={{ __html: social.svgContent }}
                  />
                ) : (
                  iconMap[social.icon] || <span className="text-xs">{social.platform[0]}</span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 md:mb-8">Enlaces rápidos</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { href: "/", label: "Inicio" },
              { href: "/shop", label: "Tienda" },
              { href: "/about", label: "Nosotros" },
              { href: "/gallery", label: "Galería" },
              { href: "/blog", label: "Blog" },
              { href: "/reviews", label: "Opiniones" },
              { href: "/contact", label: "Contacto" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="text-left">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 md:mb-8">Información</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { href: "/faq", label: "Preguntas frecuentes" },
              { href: "/track-order", label: "Seguir pedido" },
              { href: "/shipping-policy", label: "Política de envío" },
              { href: "/returns", label: "Devoluciones" },
              { href: "/privacy", label: "Política de privacidad" },
              { href: "/terms", label: "Términos de servicio" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & WhatsApp */}
        <div className="text-left">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 md:mb-8">Contáctanos</h4>
          <ul className="space-y-4 text-sm text-gray-300 flex flex-col items-start">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-purple-500 shrink-0" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-purple-500 shrink-0" />
              <a href={`tel:${CONTACT.phone}`} className="hover:text-purple-400 transition-colors">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-purple-500 shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-purple-400 transition-colors">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg px-4 py-2 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chatear por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dolores Silicone. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
