import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Thermometer, 
  Truck, 
  FileCheck, 
  Layers, 
  Maximize2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Control & Cold Chain Logistics | Nashik Export Desk",
  description: "Learn about our strict agricultural export pipeline: post-harvest curing, mechanized sorting, cold-chain preservation, and documented customs clearance at Nhava Sheva port.",
};

export default function LogisticsPage() {
  const steps = [
    {
      title: "1. Order Booking & Proforma Invoice",
      desc: "Commercial negotiation sets the FOB/CIF terms. We issue a formal Proforma Invoice (PI) detailing product specs, weight, packaging layout, target port of discharge, and payment conditions."
    },
    {
      title: "2. Harvesting & Packing House Processing",
      desc: "Produce is harvested from certified Nashik farms. In the packing house, crops undergo grading, washing (tomatoes), curing and skin-drying (onions), and manual inspection to isolate defectives."
    },
    {
      title: "3. Government Phytosanitary Inspection",
      desc: "Authorized plant quarantine inspectors examine the graded cargo. They issue a formal Phytosanitary Certificate confirming the consignment is free from pests and conforms to destination health standards."
    },
    {
      title: "4. Certificate of Origin & Custom Filings",
      desc: "We generate the Chamber of Commerce Certificate of Origin, Shipping Bill, and customs documentation. Import-Export Code (IEC) filings are pre-cleared for smooth cargo movement."
    },
    {
      title: "5. Cold-Chain Port Loading (JNPT, Mumbai)",
      desc: "Cargo is loaded into custom-sealed 20ft or 40ft refrigerated (Reefer) containers. It travels via express roads to Nhava Sheva Port (JNPT), Mumbai, for direct boarding onto sea vessels."
    }
  ];

  const processes = [
    {
      icon: Layers,
      title: "Mechanized Sorting & Grading",
      bullets: [
        "Size Grading: Onions sorted to 45mm+ & 55mm+ standard bulbing; pomegranates sorted by gram-weights.",
        "Washing & Curing: Tomatoes are sanitarily washed and air-dried. Onions undergo strict field-curing to dry skins.",
        "Damage Screening: Manual sorting lines discard cracked, sunburnt, moldy, or double-bulbed units."
      ]
    },
    {
      icon: Thermometer,
      title: "Post-Harvest Cold Chain Preservation",
      bullets: [
        "Pre-Cooling: Rapid removal of field heat at our warehouse to slow down respiration rates.",
        "Controlled Atmospheres: Reefers set to 5-10°C (pomegranates) and 10-12°C (tomatoes) to avoid chill-injury.",
        "Humidity Control: Constant 90-95% Relative Humidity maintained to keep arils juicy and prevent skin dehydration."
      ]
    }
  ];

  return (
    <div className="w-full bg-[#fdfdfd] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-10 mb-16 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
            <Truck className="w-3.5 h-3.5 text-accent" />
            <span>JNPT Mumbai Cold Chain Export</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
            Quality Control & Cold Chain
          </h1>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-3xl">
            Transporting highly perishable fresh crops across oceans requires an unbroken logistics chain. Here is how we preserve Nashik's freshness from harvest to global discharge.
          </p>
        </div>

        {/* Section 1: Main Content and Warehouse Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
            <Image
              src="/images/logistics_cold_chain.png"
              alt="Cold Storage Logistics Facility"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-md">
              Nhava Sheva Route Route-Ready
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-905 font-display border-l-4 border-accent pl-3">
              Packing House Operations
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
              Our operations are centered in Nashik, Maharashtra, which allows us to source crops from local mandis and farms in hours. Once at our terminal, produce enters a structured processing layout designed for export safety compliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {processes.map((proc, index) => {
                const Icon = proc.icon;
                return (
                  <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-3 shadow-sm">
                    <div className="flex items-center space-x-2 text-primary">
                      <Icon className="w-5 h-5 text-accent" />
                      <h3 className="font-bold text-sm text-slate-900">{proc.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {proc.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-xs text-slate-600 font-sans">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 2: Timeline Pipeline */}
        <div className="bg-primary-dark text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-emerald-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-950/80 via-transparent to-transparent" />
          
          <div className="relative z-10 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-sans">Step-by-Step Logistics Flow</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">The Standard Export Pipeline</h2>
              <div className="w-12 h-0.5 bg-accent mx-auto mt-2" />
            </div>

            {/* Timeline */}
            <div className="relative border-l-2 border-emerald-800/80 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[33px] sm:-left-[41px] top-1 bg-accent border-4 border-primary-dark w-5 h-5 rounded-full flex items-center justify-center transition-all group-hover:scale-110" />
                  
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base text-emerald-300 font-display">{step.title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-sans max-w-3xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Document callout banner */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 text-emerald-400 shrink-0">
                  <FileCheck className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-0.5 text-left">
                  <h4 className="font-bold text-sm">Documentation Accuracy Guaranteed</h4>
                  <p className="text-[10px] text-slate-400">We prevent demurrage/customs delay by pre-clearing all phytosanitary, Origin, and shipping bills.</p>
                </div>
              </div>
              
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-1.5 shrink-0"
              >
                <span>Initiate Export Order</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
