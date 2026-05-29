import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Anchor, Compass, ClipboardCheck, ArrowRight, Ship, FileCheck, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Indian Red Onion Exporters to Dubai | Jebel Ali Port Wholesale",
  description: "Nashik Fruit and Vegetable Company is one of the premier fresh onion exporters in india. As an established onion exporter from mumbai/JNPT, we supply export quality onion from nashik directly to Dubai.",
  keywords: [
    "onion exporter india",
    "export price of onion in india",
    "export quality onion nashik",
    "fresh onion exporters in india",
    "nashik onion exporters",
    "onion export companies in india",
    "onion exporter from mumbai",
    "onion exporter in nashik",
    "Dubai onion importer",
    "Jebel Ali onion import"
  ]
};

export default function DubaiExportPage() {
  const specs = [
    { label: "Variety", value: "Nashik Dark Red / Light Red Garva Onion" },
    { label: "Sizing Preferred in UAE", value: "55mm+ (Large) & 45mm+ (Medium) export quality onion nashik" },
    { label: "Packing Sizes", value: "9kg, 10kg, 18kg, 20kg mesh bags (custom branding available)" },
    { label: "Shipment Load", value: "29 MT per 40ft Reefer Container (approx)" },
    { label: "Storage Temp", value: "+4°C to +6°C temperature-controlled reefers" },
    { label: "Ventilation & RH", value: "65% - 70% Relative Humidity, 15 cbm/hr airflow" }
  ];

  const uaePorts = [
    {
      port: "Jebel Ali Port (Dubai)",
      transit: "4 - 6 Days Sea Transit",
      desc: "The largest marine terminal in the Middle East. Fast-track customs clearance for refrigerated cargo."
    },
    {
      port: "Port Rashid (Dubai)",
      transit: "5 - 7 Days Sea Transit",
      desc: "Servicing traditional wholesale trading markets in Deira and Al Aweer fruit market."
    },
    {
      port: "Sharjah Port (Khalid / Hamriyah)",
      transit: "5 - 8 Days Sea Transit",
      desc: "Alternative entry gateway serving northern emirate distribution networks."
    }
  ];

  const complianceSteps = [
    {
      title: "Dubai Municipality FIRS Portal",
      desc: "We coordinate with local UAE food importers to pre-register cargo parameters in the Food Import and Re-export System (FIRS) for automated inspections."
    },
    {
      title: "Phytosanitary Certification",
      desc: "Every shipment is cleared by the Plant Quarantine division of India, certifying the produce is insect-free and matches Gulf standards."
    },
    {
      title: "Customs Documentation Pack",
      desc: "We provide computerized Bill of Lading, Chamber of Commerce Certificate of Origin, detailed packing list, and certified commercial invoices."
    }
  ];

  return (
    <div className="w-full bg-[#fdfdfd]">
      
      {/* 1. Localization Hero Section */}
      <section className="relative bg-[#022c22] py-20 sm:py-28 overflow-hidden text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6 text-left">
              {/* Country Badge */}
              <div className="inline-flex items-center space-x-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="text-sm">🇦🇪</span>
                <span>Dubai Trade Desk • Direct Sourcing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-tight">
                Fresh Onion Exporters <br />
                <span className="text-emerald-400">in India Supplying Dubai</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
                Looking for a trusted **onion exporter india**? We specialize in shipping premium red onions directly to Jebel Ali Port, Dubai. Our operations supply hypermarkets and wholesale markets at Al Aweer with fresh, high-pungency red onions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#rfq-form"
                  className="bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl text-center shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-accent/20 flex items-center justify-center space-x-2"
                >
                  <span>Inquire FOB / CIF Dubai Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-4 relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shadow-xl">
              <Image
                src="/images/malaysia_onion_hero.png"
                alt="B2B Cargo Container Shipping to Dubai Jebel Ali"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Commodity Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Specs Table */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display">
                Premium Sourcing from Trusted Nashik Onion Exporters
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As one of the most reliable **onion export companies in india**, we supply Grade-A quality red onions sourced directly from farmers. If you require a licensed **onion exporter in nashik**, our sorting facility isolates high-dryness bulb layers that tolerate temperature changes during sea transit.
              </p>
              
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white font-sans text-xs">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {specs.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                        <td className="px-6 py-4 text-slate-500 font-bold uppercase tracking-wider w-1/3 border-r border-slate-100">{spec.label}</td>
                        <td className="px-6 py-4 text-slate-800">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Jebel Ali / Dubai Port Details Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-bold text-slate-900 text-lg border-l-4 border-primary pl-3 font-display">
                Express Shipping by a Leading Onion Exporter from Mumbai
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We operate as an authorized **onion exporter from mumbai**, executing customs clearance and reefer logistics out of Nhava Sheva (JNPT). Shipping transits to UAE are direct and highly optimized.
              </p>
              
              <div className="space-y-4">
                {uaePorts.map((port, i) => (
                  <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 shadow-sm space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center">
                        <Ship className="w-4 h-4 mr-2 text-primary shrink-0" />
                        {port.port}
                      </h4>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded border border-emerald-200">
                        {port.transit}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{port.desc}</p>
                  </div>
                ))}

                {/* Transit Performance Summary Card */}
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-3.5 shadow-sm">
                  <h4 className="text-[11px] font-bold tracking-widest text-primary uppercase border-b border-slate-200 pb-2">Export Quality Parameters</h4>
                  <div className="divide-y divide-slate-200/60 text-xs text-slate-700">
                    <div className="py-2 flex justify-between">
                      <span className="text-slate-500 font-sans">Primary Loading Port</span>
                      <span className="font-bold text-slate-950 font-sans">JNPT (Mumbai), India</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-slate-500 font-sans">Sea Voyage Duration</span>
                      <span className="font-bold text-slate-950 font-sans">4 to 6 Days (Direct Line)</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-slate-500 font-sans">Nashik Sourcing Hub</span>
                      <span className="font-bold text-slate-950 font-sans">Lasalgaon & Yeola Mandi</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-slate-500 font-sans">Clearance Support</span>
                      <span className="font-bold text-slate-950 font-sans">Dubai Municipality Portal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Dubai Customs & Municipality Compliance */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary font-sans">Gulf Compliance</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mt-1">
              UAE Customs & Import Clearance Documentation
            </p>
            <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceSteps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100 text-primary">
                  <FileCheck className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">{step.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RFQ Submission Form */}
      <section id="rfq-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Sourcing details column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-8 flex-grow">
                <h3 className="text-xl font-bold font-display text-slate-900 border-l-4 border-primary pl-3">
                  Indian Onion Sourcing Desk
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We supply premium **nashik onion exporters** crops to global wholesale buyers. To inquire about the current **export price of onion in india**, please submit your required mesh bag sizes, target container counts, and payment conditions (L/C or TT).
                </p>

                <ul className="space-y-4 text-xs sm:text-sm">
                  <li className="flex items-center space-x-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>L/C (Letter of Credit) & Advance payment terms</span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pre-shipment SGS or Bureau Veritas audit support</span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct WhatsApp support for wholesale updates</span>
                  </li>
                </ul>
              </div>

              {/* Accreditations Ribbon */}
              <div className="bg-[#022c22] text-white p-6 rounded-2xl border border-emerald-950 flex items-center justify-between shadow-sm">
                <div>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">APEDA Certified Exporter</p>
                  <p className="text-xs text-slate-200">Registered with Government of India trade bodies.</p>
                </div>
                <ShieldCheck className="w-8 h-8 text-accent bg-white/10 p-1.5 rounded-full shrink-0 border border-white/5" />
              </div>
            </div>

            {/* RFQ Form column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-lg">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
