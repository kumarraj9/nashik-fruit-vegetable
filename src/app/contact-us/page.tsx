import type { Metadata } from "next";
import { Phone, Mail, MapPin, Anchor, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request FOB/CIF Quote | Nashik Fruit and Vegetable Company",
  description: "Contact our agricultural export desk. Request container pricing (FOB/CIF) for Nashik Red Onions, Tomatoes, and Bhagwa Pomegranates. Direct shipping from Nhava Sheva (JNPT) to international destinations.",
  keywords: [
    "Contact Nashik Onion Exporter",
    "Request Onion Wholesale Price",
    "Agricultural Export Quote India",
    "B2B Agricultural Supplier contact",
    "Nhava Sheva Sea Shipping rate"
  ]
};

export default function ContactPage() {
  return (
    <div className="w-full bg-slate-50 py-12 sm:py-20 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-xs font-bold uppercase tracking-widest text-primary font-sans">B2B Trade Desk</h1>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mt-1">
            Request an Export FOB/CIF Quote
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-4 text-xs sm:text-sm leading-relaxed">
            Fill in the procurement requirements sheet below. Our logistics division will inspect shipping schedules and issue a detailed Proforma invoice.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Business Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-8 flex-grow">
              <h2 className="text-xl font-bold font-display text-slate-900 border-l-4 border-primary pl-3">
                Official Coordinates
              </h2>
              
              <ul className="space-y-6 text-xs sm:text-sm">
                <li className="flex items-start">
                  <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 text-primary shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-905 uppercase text-[10px] tracking-wider mb-1 font-sans">Corporate Office</h3>
                    <p className="text-slate-600 leading-relaxed font-sans">{siteConfig.contact.address}</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 text-primary shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-905 uppercase text-[10px] tracking-wider mb-1 font-sans">Call Trade Desk</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-slate-600 hover:text-primary transition-colors font-bold font-sans">
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-sans">Mon - Sat (9:00 AM - 6:00 PM IST)</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 text-primary shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-905 uppercase text-[10px] tracking-wider mb-1 font-sans">Email Inquiries</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 hover:text-primary transition-colors font-semibold font-sans">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start border-t border-slate-100 pt-6">
                  <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-200 text-slate-600 shrink-0 mr-4">
                    <Anchor className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-905 uppercase text-[10px] tracking-wider mb-1 font-sans">Export Docks</h3>
                    <p className="text-slate-600 font-sans leading-relaxed">
                      Custom Clearance & Loading: <span className="font-bold text-slate-800">JNPT / Nhava Sheva Port, Mumbai, India.</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Micro Trust Banner */}
            <div className="bg-[#022c22] text-white p-6 rounded-2xl border border-emerald-950 flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Accredited Operations</p>
                <p className="text-xs text-slate-200">APEDA, FSSAI, IEC verified trade lanes.</p>
              </div>
              <Check className="w-8 h-8 text-accent bg-white/10 p-1.5 rounded-full shrink-0 border border-white/5" />
            </div>
          </div>

          {/* Column 2: Advanced B2B Quote Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
