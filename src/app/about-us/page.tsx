import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Award, Globe, Users, Check, ArrowRight, Zap, Target } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | Nashik Fruit and Vegetable Company",
  description: "Learn about India's leading B2B exporter of premium Nashik Red Onions, Fresh Tomatoes, and Bhagwa Pomegranates. Discover our farm sourcing, sorting facilities, and international logistics.",
  keywords: [
    "About Nashik Fruit and Vegetable",
    "Onion Exporter Profile India",
    "B2B Agricultural Sourcing Company",
    "APEDA Registered Exporter MH",
    "Bhagwa Pomegranate Supplier Profile"
  ]
};

export default function AboutUsPage() {
  const stats = [
    { value: "15+", label: "Target Countries" },
    { value: "10,000+ MT", label: "Volume Exported" },
    { value: "200+", label: "Partner Farms" },
    { value: "100%", label: "Phytosanitary Clearance" }
  ];

  const pillars = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Quality First",
      desc: "Every onion, tomato, and pomegranate undergoes multi-stage grading and sorting. We strictly export Grade-A premium produce matching global market standards."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Global Supply Chain",
      desc: "Operating secure logistics pathways from Nashik packhouses to Mumbai docks (JNPT) and onwards to UAE, Malaysia, Sri Lanka, and Singapore."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Farmer Partnerships",
      desc: "We work directly with certified growers in the Nashik agricultural belt, ensuring fair-trade practices, crop sustainability, and reliable sourcing."
    }
  ];

  return (
    <div className="w-full bg-[#fdfdfd]">
      
      {/* 1. Hero Header Section */}
      <section className="relative bg-[#022c22] py-20 sm:py-28 overflow-hidden text-white">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Rooted in Quality • Sourced with Integrity</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-6 leading-tight">
            Nashik's Premier B2B <br className="hidden sm:inline" />
            <span className="text-emerald-400">Agricultural Exporter</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            We bridge the gap between India's richest agricultural belt and international wholesale markets, delivering fresh, quality-graded onions, tomatoes, and pomegranates.
          </p>
        </div>
      </section>

      {/* 2. Stats Banner */}
      <section className="bg-white border-y border-slate-100 py-12 relative -mt-6 sm:-mt-8 mx-4 sm:mx-8 md:mx-auto max-w-6xl rounded-2xl shadow-xl z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1 px-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-display">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Core Pillars */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary font-sans">Our Foundation</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mt-1">
              The Pillars of Our Operations
            </p>
            <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">{pillar.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Target className="w-4 h-4 text-accent" />
                <span>Our Heritage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display leading-tight">
                Harvesting Trust from the Fertile Soils of Nashik
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nashik is globally recognized as the agricultural powerhouse of India. Supported by rich volcanic black soil, optimal micro-climates, and generational farming expertise, Nashik produce is famous for its high pungency (onions), solid firmness (tomatoes), and rich crimson arils (Bhagwa pomegranates).
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to bring this premium produce directly to global importers, **Nashik Fruit and Vegetable Company** operates as a trusted B2B supply chain partner. We source from certified farmers, manage sorting houses, and orchestrate strict cold-chain logistics to Nhava Sheva (JNPT) port in Mumbai.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                <li className="flex items-center space-x-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Farm-to-Port Sourcing</span>
                </li>
                <li className="flex items-center space-x-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>APEDA & FSSAI Compliant</span>
                </li>
                <li className="flex items-center space-x-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Cold Chain Packing</span>
                </li>
                <li className="flex items-center space-x-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent Contract Pricing</span>
                </li>
              </ul>
            </div>

            {/* Certifications Card */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="font-bold text-slate-900 text-lg border-l-4 border-primary pl-3 font-display">
                Compliance & Licensing
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                As a registered Indian Merchant Exporter, we maintain complete legal and agricultural certifications required for international clearance:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-start space-x-3.5">
                  <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-100 text-primary shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-950 uppercase tracking-wide">APEDA License</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Agricultural & Processed Food Products Export Development Authority registration.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-start space-x-3.5">
                  <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-100 text-primary shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-950 uppercase tracking-wide">FSSAI Registration</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Food Safety and Standards Authority of India food hygiene compliance.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 flex items-start space-x-3.5">
                  <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-100 text-primary shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-950 uppercase tracking-wide">Phytosanitary Certification</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Mandatory health & pest-free clearance for all export consignments.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Direct Call-to-Action Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-display">
            Partner with a Trusted Indian Supplier
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            From bulk onions to fresh tomatoes and pomegranates, we issue custom FOB (JNPT, Mumbai) and CIF quotes based on your volume requirements.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              href="/contact-us/"
              className="bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <span>Connect with our Trade Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
