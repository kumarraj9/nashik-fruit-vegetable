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
          <div className="flex items-center space-x-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center hover:text-accent transition-colors">
              <Phone className="w-3 h-3 mr-1" />
              {siteConfig.contact.phone}
            </a>
            <span className="text-emerald-600">|</span>
            <span className="flex items-center">
              <Globe className="w-3 h-3 mr-1 text-emerald-400" />
              FOB / CIF Global Shipments
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
                    href="/products"
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                      pathname === "/products" || pathname.endsWith("-from-nashik") ? "text-primary-light font-bold" : "text-slate-700 hover:text-primary"
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
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 transform origin-top transition-all duration-200">
                    <Link
                      href="/products"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-[10px] font-bold text-slate-400 hover:text-primary uppercase tracking-widest"
                    >
                      All Commodities
                    </Link>
                    <div className="h-px bg-slate-100 my-1" />
                    <Link
                      href="/onion-exporter-from-nashik"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors"
                    >
                      🧅 Nashik Red Onion
                    </Link>
                    <Link
                      href="/tomato-supplier-from-nashik"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors"
                    >
                      🍅 Fresh Tomato
                    </Link>
                    <Link
                      href="/pomegranate-supplier-from-nashik"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors"
                    >
                      🍎 Bhagwa Pomegranate
                    </Link>
                  </div>
                )}
              </div>

              {/* Logistics Link */}
              <Link
                href="/logistics"
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                  pathname.startsWith("/logistics") ? "text-primary-light font-bold" : "text-slate-700 hover:text-primary"
                }`}
              >
                Logistics & QC
                {pathname.startsWith("/logistics") && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light rounded-full" />
                )}
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                  pathname.startsWith("/contact") ? "text-primary-light font-bold" : "text-slate-700 hover:text-primary"
                }`}
              >
                Contact Us
                {pathname.startsWith("/contact") && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light rounded-full" />
                )}
              </Link>

              <Link
                href="/contact"
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
                    pathname === "/products" || pathname.endsWith("-from-nashik") ? "bg-emerald-50/50 text-primary" : ""
                  }`}
                >
                  <span>Product</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isMobileProductOpen ? "rotate-180" : ""}`} />
                </button>

                {isMobileProductOpen && (
                  <div className="pl-6 space-y-1 bg-slate-50/50 py-1.5 rounded-lg border border-slate-100">
                    <Link
                      href="/products"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-xs font-bold text-slate-500 hover:text-primary uppercase tracking-wider"
                    >
                      All Commodities
                    </Link>
                    <Link
                      href="/onion-exporter-from-nashik"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-sm text-slate-600 hover:text-primary font-medium"
                    >
                      <span>🧅 Nashik Red Onion</span>
                    </Link>
                    <Link
                      href="/tomato-supplier-from-nashik"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-sm text-slate-600 hover:text-primary font-medium"
                    >
                      <span>🍅 Fresh Tomato</span>
                    </Link>
                    <Link
                      href="/pomegranate-supplier-from-nashik"
                      onClick={() => { setIsOpen(false); setIsMobileProductOpen(false); }}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-sm text-slate-600 hover:text-primary font-medium"
                    >
                      <span>🍎 Bhagwa Pomegranate</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Logistics */}
              <Link
                href="/logistics"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all ${
                  pathname.startsWith("/logistics") ? "bg-emerald-50 text-primary font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                <span>Logistics & QC</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all ${
                  pathname.startsWith("/contact") ? "bg-emerald-50 text-primary font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-primary"
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
                href="/contact"
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
