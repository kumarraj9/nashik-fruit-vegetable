"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, Phone, Globe, ChevronRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Trust Ribbon */}
      <div className="bg-primary-dark text-white text-[11px] font-sans font-medium py-1.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <span className="flex items-center text-emerald-300">
              <Shield className="w-3 h-3 mr-1" />
              APEDA Registered
            </span>
            <span className="flex items-center text-emerald-300">
              <Shield className="w-3 h-3 mr-1" />
              FSSAI Certified
            </span>
            <span className="flex items-center text-emerald-300">
              <Shield className="w-3 h-3 mr-1" />
              IEC Compliant
            </span>
            <span className="flex items-center text-emerald-300">
              <Shield className="w-3 h-3 mr-1" />
              Phytosanitary Assured
            </span>
          </div>
          <div className="flex items-center space-x-3.5">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center hover:text-accent transition-colors">
              <Phone className="w-3 h-3 mr-1" />
              {siteConfig.contact.phone}
            </a>
            <span className="text-emerald-700">|</span>
            <div className="flex items-center space-x-2">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-red-500 transition-colors p-0.5"
                title="YouTube - @nashikfruits"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-pink-400 transition-colors p-0.5"
                title="Instagram - @nashikfruits"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors p-0.5"
                title="WhatsApp - Trade Desk"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
            <span className="text-emerald-700">|</span>
            <span className="flex items-center text-slate-300">
              <Globe className="w-3 h-3 mr-1 text-emerald-400" />
              FOB / CIF Shipments
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white/80 backdrop-blur-sm py-4 border-b border-emerald-900/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo / Brand Name */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Nashik Fruit Vegetable Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] sm:text-base font-black font-display tracking-tight text-primary-dark uppercase leading-none">
                  Nashik Fruit Vegetable
                </span>
                <span className="text-[10px] sm:text-[11px] text-emerald-800 tracking-widest font-extrabold uppercase mt-1.5 font-sans leading-none">
                  Company
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home Link */}
              <Link
                href="/"
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                  pathname === "/" ? "text-primary-light font-bold" : "text-slate-700 hover:text-primary"
                }`}
              >
                Home
                {pathname === "/" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light rounded-full" />
                )}
              </Link>

              {/* Product Dropdown Link */}
              <div
                className="relative py-2"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="flex items-center space-x-1 cursor-pointer">
                  <Link
                    href="/products/"
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                      pathname === "/products/" || pathname.endsWith("-from-nashik/") ? "text-primary-light font-bold" : "text-slate-700 hover:text-primary"
                    }`}
                  >
                    Product
                  </Link>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-slate-500 hover:text-primary focus:outline-none p-0.5"
                    aria-label="Toggle products dropdown"
                  >
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 z-50 transform origin-top transition-all duration-200">
                    <Link
                      href="/products/"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-[10px] font-bold text-slate-400 hover:text-primary uppercase tracking-widest"
                    >
                      All Commodities
                    </Link>
                    <div className="h-px bg-slate-100 my-1" />
                    <Link
                      href="/onion-exporter-from-nashik/"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors"
                    >
                      🧅 Nashik Red Onion
                    </Link>
                    <Link
                      href="/tomato-supplier-from-nashik/"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors"
                    >
                      🍅 Fresh Tomato
                    </Link>
                    <Link
                      href="/pomegranate-supplier-from-nashik/"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors"
                    >
                      🍎 Bhagwa Pomegranate
                    </Link>
                    <div className="h-px bg-slate-100 my-1.5" />
                    <div className="px-4 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Target Markets
                    </div>
                    <Link
                      href="/ae/onion-exporter-from-india-to-dubai/"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors"
                    >
                      🇦🇪 Supply to Dubai (UAE)
                    </Link>
                    <Link
                      href="/my/onion-exporter-from-india-to-malaysia/"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors"
                    >
                      🇲🇾 Supply to Malaysia
                    </Link>
                  </div>
                )}
              </div>

              {/* Logistics Link */}
              <Link
                href="/logistics/"
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                  pathname.startsWith("/logistics") ? "text-primary-light font-bold" : "text-slate-700 hover:text-primary"
                }`}
              >
                Logistics & QC
                {pathname.startsWith("/logistics") && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light rounded-full" />
                )}
              </Link>

              {/* About Us Link */}
              <Link
                href="/about-us/"
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                  pathname.startsWith("/about-us") ? "text-primary-light font-bold" : "text-slate-700 hover:text-primary"
                }`}
              >
                About Us
                {pathname.startsWith("/about-us") && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light rounded-full" />
                )}
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact-us/"
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                  pathname.startsWith("/contact-us") ? "text-primary-light font-bold" : "text-slate-700 hover:text-primary"
                }`}
              >
                Contact Us
                {pathname.startsWith("/contact-us") && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light rounded-full" />
                )}
              </Link>

              <Link
                href="/contact-us/"
                className="bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-dark hover:text-primary-light p-2 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`md:hidden fixed inset-0 top-[60px] sm:top-[85px] z-40 bg-white border-t border-slate-100 transition-all duration-300 transform ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white h-full flex flex-col justify-between overflow-y-auto">
            <div className="space-y-2">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all ${
                  pathname === "/" ? "bg-emerald-50 text-primary font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Product Collapsible */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all text-slate-700 hover:bg-slate-50 hover:text-primary ${
                    pathname === "/products/" || pathname.endsWith("-from-nashik/") ? "bg-emerald-50/50 text-primary" : ""
                  }`}
                >
                  <span>Product</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isMobileProductOpen ? "rotate-180" : ""}`} />
                </button>

                {isMobileProductOpen && (
                  <div className="pl-6 space-y-1 bg-slate-50/50 py-1.5 rounded-lg border border-slate-100">
                    <Link
                      href="/products/"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-xs font-bold text-slate-500 hover:text-primary uppercase tracking-wider"
                    >
                      All Commodities
                    </Link>
                    <Link
                      href="/onion-exporter-from-nashik/"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-sm text-slate-600 hover:text-primary font-medium"
                    >
                      <span>🧅 Nashik Red Onion</span>
                    </Link>
                    <Link
                      href="/tomato-supplier-from-nashik/"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-sm text-slate-600 hover:text-primary font-medium"
                    >
                      <span>🍅 Fresh Tomato</span>
                    </Link>
                    <Link
                      href="/pomegranate-supplier-from-nashik/"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-sm text-slate-600 hover:text-primary font-medium"
                    >
                      <span>🍎 Bhagwa Pomegranate</span>
                    </Link>
                    <div className="h-px bg-slate-200/60 my-1 mx-4" />
                    <div className="px-4 py-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Target Markets
                    </div>
                    <Link
                      href="/ae/onion-exporter-from-india-to-dubai/"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-sm text-slate-600 hover:text-primary font-medium"
                    >
                      <span>🇦🇪 Supply to Dubai (UAE)</span>
                    </Link>
                    <Link
                      href="/my/onion-exporter-from-india-to-malaysia/"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-sm text-slate-600 hover:text-primary font-medium"
                    >
                      <span>🇲🇾 Supply to Malaysia</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Logistics */}
              <Link
                href="/logistics/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all ${
                  pathname.startsWith("/logistics") ? "bg-emerald-50 text-primary font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                <span>Logistics & QC</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* About Us */}
              <Link
                href="/about-us/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all ${
                  pathname.startsWith("/about-us") ? "bg-emerald-50 text-primary font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Contact */}
              <Link
                href="/contact-us/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all ${
                  pathname.startsWith("/contact-us") ? "bg-emerald-50 text-primary font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-2 text-center text-[10px] text-slate-500 font-medium">
                <div className="bg-slate-50 p-2 rounded-md border border-slate-100">APEDA Registered</div>
                <div className="bg-slate-50 p-2 rounded-md border border-slate-100">FSSAI License</div>
                <div className="bg-slate-50 p-2 rounded-md border border-slate-100">IEC Registered</div>
                <div className="bg-slate-50 p-2 rounded-md border border-slate-100">Phytosanitary Cert</div>
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center space-x-2 w-full py-3 border border-emerald-900/10 rounded-lg text-slate-800 font-bold text-sm bg-slate-50 hover:bg-slate-100 transition-all"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call: {siteConfig.contact.phone}</span>
              </a>
              <Link
                href="/contact-us/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all"
              >
                Request FOB/CIF Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
