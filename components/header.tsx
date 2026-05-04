"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: t("home"), href: "#home" },
    { label: t("services"), href: "#services" },
    { label: t("about"), href: "#about" },
    { label: t("programs"), href: "#programs" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    isScrolled
                      ? "text-dark hover:text-orange"
                      : "text-dark hover:text-orange"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="ITOTO Learning Hub"
              width={240}
              height={120}
              className={`transition-all duration-300 w-auto ${isScrolled ? "h-20 md:h-24" : "h-44 md:h-48"}`}
              priority
              loading="eager"
            />
          </Link>

          {/* CTA Buttons + Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LocaleSwitcher />
            <Button
              variant="outline"
              className="border-orange text-orange hover:bg-orange hover:text-white"
              asChild
            >
              <Link href="#contact">{t("contact")}</Link>
            </Button>
            <Button
              className="bg-orange hover:bg-orange-dark text-white"
              asChild
            >
              <Link href="#services">{t("getStarted")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-dark" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border-light shadow-xl">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-border-light last:border-0"
                >
                  <Link
                    href={item.href}
                    className="block py-3 font-medium text-dark hover:text-orange"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="flex items-center justify-between pt-4 pb-2">
                <span className="text-sm text-gray">Language:</span>
                <LocaleSwitcher />
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  variant="outline"
                  className="w-full border-orange text-orange hover:bg-orange hover:text-white"
                  asChild
                >
                  <Link href="#contact">{t("contact")}</Link>
                </Button>
                <Button
                  className="w-full bg-orange hover:bg-orange-dark text-white"
                  asChild
                >
                  <Link href="#services">{t("getStarted")}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
