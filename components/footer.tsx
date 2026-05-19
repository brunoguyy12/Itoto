"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

const footerLinks = {
  services: [
    { label: "Language Training", href: "#languages" },
    { label: "Test Preparation", href: "#career" },
    { label: "Career Guidance", href: "#career" },
    { label: "Translation Services", href: "#languages" },
    { label: "Professional Development", href: "#development" },
    { label: "ECD Programs", href: "#ecd" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Programs", href: "#programs" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#" },
    { label: "Events", href: "#" },
  ],
};

export function Footer() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white relative">
      {/* Top Pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-orange via-green to-blue" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/ilh-logo.png"
                alt="ITOTO Learning Hub"
                width={180}
                height={100}
                className="h-24 md:h-36 w-auto rounded-full"
              />
            </Link>
            <p className="text-gray-muted mb-6 max-w-sm">{t("description")}</p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@itotolearninghub.com"
                className="flex items-center gap-3 text-gray-muted hover:text-orange transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@itotolearninghub.com</span>
              </a>
              <a
                href="tel:+25761191256"
                className="flex items-center gap-3 text-gray-muted hover:text-orange transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+257 61 191 256</span>
              </a>
              <div className="flex items-center gap-3 text-gray-muted">
                <MapPin className="w-5 h-5" />
                <span>Avenue de l'amitié, No. 11, Bujumbura, Burundi</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, id) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-muted hover:text-orange transition-colors"
                  >
                    {t(`servicesLinks.${id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t("company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, id) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-muted hover:text-orange transition-colors"
                  >
                    {t(`companyLinks.${id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t("resources")}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, id) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-muted hover:text-orange transition-colors"
                  >
                    {t(`resourcesLinks.${id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-muted text-sm">
              © {new Date().getFullYear()} ITOTO Learning Hub. {t("rights")} Guy
              Bruno N.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
                    aria-label={social}
                  >
                    <span className="text-sm font-bold">{social[0]}</span>
                  </a>
                ),
              )}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-muted hover:text-orange transition-colors"
            >
              <span className="text-sm">{t("top")}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-linear-to-r from-orange via-green to-blue" />
    </footer>
  );
}
