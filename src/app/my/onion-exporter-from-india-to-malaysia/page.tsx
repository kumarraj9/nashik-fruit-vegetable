import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Anchor, Compass, ClipboardCheck, ArrowRight, Ship, FileCheck, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Indian Red Onion Exporters to Malaysia | Nashik Onion Exporters",
  description: "Nashik Fruit and Vegetable Company is one of the leading onion export companies in india. As an established onion exporter from mumbai/JNPT, we supply fresh red onions to Port Klang & Penang. A trusted onion exporter in nashik, maharashtra.",
  keywords: [
    "nashik onion exporters",
    "onion export companies in india",
    "onion exporter from mumbai",
    "onion exporter in nashik",
    "onion exporters in maharashtra",
    "red onion exporters in india",
    "onion exporter india",
    "Port Klang onion importer",
    "MAQIS onion import document"
  ]
};

export default function MalaysiaExportPage() {
  const specs = [
    { label: "Variety", value: "Nashik Dark Red / Light Red Onion" },
    { label: "Sizing Preferred", value: "45mm+ & 55mm+ Grade A export grading" },
    { label: "Packing Sizes", value: "9kg, 10kg, 20kg mesh bags (custom printing available)" },
    { label: "Shipment Load", value: "29 MT per 40ft Reefer Container (approx)" },
    { label: "Storage Temp", value: "+4°C to +6°C temperature-controlled" },
    { label: "Ventilation & RH", value: "65% - 70% Relative Humidity, 15 cbm/hr airflow" }
  ];

  const malaysianPorts = [
    {
      port: "Port Klang (Kuala Lumpur)",
      transit: "9 - 11 Days Sea Transit",
      desc: "Malaysia's primary trade gateway. Excellent customs clearance speeds for perishable cargo."
    },
    {
      port: "Penang Port (Butterworth)",
      transit: "10 - 12 Days Sea Transit",
      desc: "Servicing the northern Malaysian wholesale networks and APMC food distributors."
    },
    {
      port: "Johor Port (Pasir Gudang)",
      transit: "11 - 13 Days Sea Transit",
      desc: "Connecting directly to the southern peninsula and Johor Bahru wholesale markets."
    }
  ];

  const complianceSteps = [
    {
      title: "MAQIS Import Permit Guidance",
      desc: "We verify and coordinate with Malaysian importers to ensure import permits issued by the Malaysian Agricultural Food Inspection Service (MAQIS) are active and pre-linked."
    },
    {
      title: "Phytosanitary Clearance",
      desc: "Consignments undergo full inspection by the Plant Quarantine Division of India. A certified Phytosanitary Certificate is issued and attached to the sea waybills."
    },
    {
      title: "APEDA & Custom Export Filings",
      desc: "Full pre-customs clearance is done at JNPT Nhava Sheva. We issue the Bill of Lading, Certificate of Origin, Packing List, and certified commercial invoice."
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
                <span className="text-sm">🇲🇾</span>
                <span>Malaysia Trade Desk • Direct Sourcing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-tight">
                Premium Red Onion Exporters <br />
                <span className="text-emerald-400">in India Supplying Malaysia</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
                As one of the premier onion export companies in india, we specialize in shipping fresh red onions directly from Mumbai port to Port Klang, Penang, and Johor. We connect Malaysian wholesale buyers with prime crops from Nashik, Maharashtra.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#rfq-form"
                  className="bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl text-center shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-accent/20 flex items-center justify-center space-x-2"
                >
                  <span>Request FOB / CIF Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick stats panel */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm space-y-4">
              <h3 className="text-sm font-bold tracking-widest text-emerald-400 uppercase">Transit Performance</h3>
              <div className="divide-y divide-white/10 text-xs">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">Direct Shipping Line</span>
                  <span className="font-bold text-white">JNPT (Mumbai) to Klang</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">Average Ocean Transit</span>
                  <span className="font-bold text-white">9 to 12 Days</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">Humidity controls</span>
                  <span className="font-bold text-white">Reefer Dehumidification</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">Import Clearance</span>
                  <span className="font-bold text-white">100% MAQIS Compliance</span>
                </div>
              </div>
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
                Quality Sourcing from Premier Nashik Onion Exporters
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                When looking for a reliable onion exporter in nashik, quality consistency is paramount. As leading onion exporters in maharashtra, we operate modern sorting houses in the heart of the Nashik agricultural belt. This allows us to grade onions specifically to match stringent Malaysian market sizing and skin quality demands.
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

            {/* Malaysian Port Details Cards */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-bold text-slate-900 text-lg border-l-4 border-primary pl-3 font-display">
                Express Logistics by a Leading Onion Exporter from Mumbai
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We operate as a prime onion exporter india, managing refrigerated cargo containers (FCL Reefers) directly from JNPT (Nhava Sheva) in Mumbai to Port Klang and Penang. Our shipping lines offer direct transit with automated humidity control.
              </p>
              
              <div className="space-y-4">
                {malaysianPorts.map((port, i) => (
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
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Malaysia Customs & MAQIS Compliance */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary font-sans">Import Compliance</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mt-1">
              Malaysian Customs & Import Clearance Documentation
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
                  Export Trade desk coordinates
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We handle complete sea containers (FCL) of red onions from Nashik. Send your volume requirements (Tons / Container count), target delivery port in Malaysia, and pricing terms preferred (FOB Mumbai or CIF Port Klang/Penang).
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
