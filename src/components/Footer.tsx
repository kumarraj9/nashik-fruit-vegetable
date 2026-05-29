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
