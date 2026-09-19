import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, Anchor, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white border-t-4 border-accent">
      {/* Trust Compliance Section */}
      <div className="border-b border-white/10 bg-black/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-sans">Verified Global Export Compliance</h3>
            <p className="text-sm text-slate-300 mt-1">Authorized for wholesale fresh cargo export to Gulf Cooperation Council (GCC) & Southeast Asian markets.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-accent mb-1" />
              <span className="text-xs font-bold text-slate-200">APEDA Registered</span>
              <span className="text-[10px] text-slate-400 mt-0.5">{siteConfig.trustSignals.apeda.badgeId}</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-accent mb-1" />
              <span className="text-xs font-bold text-slate-200">FSSAI Certified</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Lic: 11524000000000</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-accent mb-1" />
              <span className="text-xs font-bold text-slate-200">IEC Compliant</span>
              <span className="text-[10px] text-slate-400 mt-0.5">DGFT Regulated</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-accent mb-1" />
              <span className="text-xs font-bold text-slate-200">Phytosanitary Assured</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Plant Health Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Brief */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col">
              <span className="text-lg font-bold font-display tracking-tight text-white uppercase leading-none">
                Nashik Fruit & Veg
              </span>
              <span className="text-[9px] text-emerald-300 tracking-wider font-bold uppercase mt-1 font-sans leading-none">
                Company Exporters
              </span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Direct from India's agricultural heartland. We maintain an unbroken cold chain from Nashik farms to Mumbai ports (JNPT) to international destination shelves.
            </p>
            <div className="flex items-center space-x-2 text-emerald-300 text-xs font-bold bg-white/5 p-2 rounded-lg border border-white/5 inline-flex">
              <Anchor className="w-4 h-4 text-accent" />
              <span>Logistics: JNPT, Nhava Sheva (Mumbai)</span>
            </div>

            {/* Social Media & Direct Desk Links */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block font-display">
                Official Channels
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 bg-red-600/90 hover:bg-red-600 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-all shadow-sm"
                  title="YouTube Channel - @nashikfruits"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </a>

                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-all shadow-sm"
                  title="Instagram Profile - @nashikfruits"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-all shadow-sm"
                  title="WhatsApp Direct Desk"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-accent pl-2 font-display">Export Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-accent transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-emerald-500" />
                  Home Portal
                </Link>
              </li>
              <li>
                <Link href="/about-us/" className="hover:text-accent transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-emerald-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products/" className="hover:text-accent transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-emerald-500" />
                  Produce Catalog
                </Link>
              </li>
              <li>
                <Link href="/onion-exporter-from-nashik/" className="hover:text-accent transition-colors flex items-center font-semibold text-emerald-300">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-accent" />
                  Red Onion Specs
                </Link>
              </li>
              <li>
                <Link href="/tomato-supplier-from-nashik/" className="hover:text-accent transition-colors flex items-center font-semibold text-emerald-300">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-accent" />
                  Tomato Specs
                </Link>
              </li>
              <li>
                <Link href="/pomegranate-supplier-from-nashik/" className="hover:text-accent transition-colors flex items-center font-semibold text-emerald-300">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-accent" />
                  Bhagwa Pomegranate Specs
                </Link>
              </li>
              <li>
                <Link href="/logistics/" className="hover:text-accent transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-emerald-500" />
                  Logistics & QC Pipeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-accent pl-2 font-display">Central Office Info</h4>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-accent transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Export Footprint Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-accent pl-2 font-display">Target Markets</h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              We handle cold-storage shipping routes out of Mumbai docks directly to:
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-bold px-2 py-1 bg-white/10 rounded text-slate-200 border border-white/5">Dubai (UAE)</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-white/10 rounded text-slate-200 border border-white/5">Sri Lanka</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-white/10 rounded text-slate-200 border border-white/5">Malaysia</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-white/10 rounded text-slate-200 border border-white/5">Domestic India</span>
            </div>
            <p className="text-[10px] text-emerald-400 font-medium mt-4">
              * FOB / CIF shipping options available.
            </p>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
          <p className="text-center md:text-left">
            © {currentYear} {siteConfig.name}. All Rights Reserved. Sourced directly from Nashik, MH, India.
            <br className="hidden md:inline" />
            <span className="text-[10px] text-slate-500 mt-1 block">
              Website made by <span className="text-slate-400 font-semibold">Growthverse Media</span>
            </span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-medium text-[11px]">
            <Link href="/contact-us/" className="hover:text-white transition-colors">Inquire FOB/CIF Pricing</Link>
            <span>•</span>
            <Link href="/logistics/" className="hover:text-white transition-colors">Cold Chain Standards</Link>
            <span>•</span>
            <Link href="/products/" className="hover:text-white transition-colors">Product Specifications</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
