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
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nashikfruitandvegetable.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://nashikfruitandvegetable.com/contact-us/"
      }
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Nashik Fruit and Vegetable Company",
    "description": "Request container export quotes (FOB/CIF) for Nashik Red Onions, Fresh Tomatoes, and Bhagwa Pomegranates.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Nashik Fruit and Vegetable Company",
      "telephone": "+917083960822",
      "email": "suraj@nashikfruitandvegetablecompany.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "APMC Market Yard, Pimpalgaon Baswant",
        "addressLocality": "Nashik",
        "addressRegion": "Maharashtra",
        "postalCode": "422209",
        "addressCountry": "IN"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can I receive a Proforma Invoice (PI) for onion export?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upon submitting your container volume, size preference (e.g. 55mm+), packing style, and target port of discharge via our form or WhatsApp, our trade desk issues a formal Proforma Invoice within 2 to 4 business hours."
        }
      }
    ]
  };

  return (
    <div className="w-full bg-slate-50 py-12 sm:py-20 bg-grid-pattern">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

                <li className="border-t border-slate-100 pt-6">
                  <h3 className="font-bold text-slate-900 uppercase text-[10px] tracking-wider mb-3 font-sans">Official Channels & Media</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2.5 bg-red-50 hover:bg-red-100 border border-red-200/60 rounded-xl text-red-700 transition-all text-center group"
                    >
                      <svg className="w-5 h-5 fill-red-600 mb-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="text-[10px] font-bold font-sans">YouTube</span>
                      <span className="text-[9px] text-red-600/70 font-mono">@nashikfruits</span>
                    </a>

                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2.5 bg-pink-50 hover:bg-pink-100 border border-pink-200/60 rounded-xl text-pink-700 transition-all text-center group"
                    >
                      <svg className="w-5 h-5 fill-pink-600 mb-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-[10px] font-bold font-sans">Instagram</span>
                      <span className="text-[9px] text-pink-600/70 font-mono">@nashikfruits</span>
                    </a>

                    <a
                      href={siteConfig.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 rounded-xl text-emerald-800 transition-all text-center group"
                    >
                      <svg className="w-5 h-5 fill-emerald-600 mb-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span className="text-[10px] font-bold font-sans">WhatsApp</span>
                      <span className="text-[9px] text-emerald-700/70 font-mono">Chat Direct</span>
                    </a>
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
