import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  TrendingUp, 
  Compass, 
  Tractor, 
  ThermometerSnowflake, 
  Scale, 
  FileText,
  Anchor
} from "lucide-react";
import { siteConfig } from "@/config/site";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  const advantages = [
    {
      icon: Tractor,
      title: "Direct Farm Sourcing",
      desc: "Sourced directly from partner farms in Nashik (India's agri capital), ensuring first-day freshness and direct cost savings without middleman markups."
    },
    {
      icon: Scale,
      title: "Mechanized Sorting & Grading",
      desc: "Operated with automated weight sizing, color sorting, and skin-drying lines to guarantee uniform batches matching strict export standards."
    },
    {
      icon: ThermometerSnowflake,
      title: "Cold Chain Management",
      desc: "Post-harvest pre-cooling and temperature-controlled storage lines matching global cold shipping requirements (5-12°C depending on produce)."
    },
    {
      icon: FileText,
      title: "Customs Clearance & Documentation",
      desc: "Seamless handling of Proforma Invoices, Phytosanitary Inspections, Certificates of Origin, and custom clearances for hassle-free port loading."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#022c22] overflow-hidden">
        {/* Animated Background Slider */}
        <HeroSlider />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-24">
          <div className="max-w-3xl space-y-6">
            {/* Trust Badge Pin */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>APEDA Registered • FSSAI License Assured</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Direct From Nashik Farms <br />
              <span className="text-emerald-400">To Global Markets</span>
            </h1>
            
            <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl font-sans">
              Premium Grade Onions, Tomatoes & Pomegranates sourced from India's agricultural capital and shipped securely to Dubai, Sri Lanka, Malaysia, and domestic wholesale markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl text-center shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-accent/20 flex items-center justify-center space-x-2"
              >
                <span>Request FOB/CIF Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Preconfigured download simulation */}
              <a
                href="/docs/export_catalog_mock.pdf"
                target="_blank"
                download="Nashik_Exporters_Product_Catalog.pdf"
                className="bg-white/10 hover:bg-white/15 text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl text-center border border-white/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Export Product Catalog</span>
              </a>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-lg text-white">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-display text-accent">100%</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Export Quality Graded</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-display text-accent">JNPT</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1"> Nhava Sheva Loading</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-display text-accent">Cold Chain</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Assured Transit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Core Commodities Banner Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary font-sans">Core Commodities</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mt-1">
              Premium Grade Nashik Produce
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
            <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
              We cultivate, sort, pack, and export three core fresh agricultural commodities. Select a product to view technical specifications, packaging sizes, and trade terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Onion Card */}
            <div className="bg-white rounded-2xl overflow-hidden card-shadow card-hover border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="relative h-60 w-full bg-slate-100">
                  <Image
                    src={siteConfig.products.onion.imageUrl}
                    alt={siteConfig.products.onion.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-md">
                    High Pungency
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-slate-900">{siteConfig.products.onion.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Variety: Nashik Dark Red / Light Red</p>
                  <p className="text-slate-600 text-xs leading-relaxed mt-3.5">
                    {siteConfig.products.onion.tagline}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/onion-exporter-from-nashik"
                  className="w-full bg-slate-50 hover:bg-emerald-50 hover:text-primary text-slate-800 text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl border border-slate-200 hover:border-emerald-200 transition-all duration-200 flex items-center justify-center space-x-1.5"
                >
                  <span>View Export Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tomato Card */}
            <div className="bg-white rounded-2xl overflow-hidden card-shadow card-hover border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="relative h-60 w-full bg-slate-100">
                  <Image
                    src={siteConfig.products.tomato.imageUrl}
                    alt={siteConfig.products.tomato.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-md">
                    Long Shelf Life
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-slate-900">{siteConfig.products.tomato.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Grade: Export Grade A</p>
                  <p className="text-slate-600 text-xs leading-relaxed mt-3.5">
                    {siteConfig.products.tomato.tagline}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/tomato-supplier-from-nashik"
                  className="w-full bg-slate-50 hover:bg-emerald-50 hover:text-primary text-slate-800 text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl border border-slate-200 hover:border-emerald-200 transition-all duration-200 flex items-center justify-center space-x-1.5"
                >
                  <span>View Export Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pomegranate Card */}
            <div className="bg-white rounded-2xl overflow-hidden card-shadow card-hover border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="relative h-60 w-full bg-slate-100">
                  <Image
                    src={siteConfig.products.pomegranate.imageUrl}
                    alt={siteConfig.products.pomegranate.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-md">
                    Premium Bhagwa
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-slate-900">{siteConfig.products.pomegranate.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Variety: 100% Bhagwa</p>
                  <p className="text-slate-600 text-xs leading-relaxed mt-3.5">
                    {siteConfig.products.pomegranate.tagline}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/pomegranate-supplier-from-nashik"
                  className="w-full bg-slate-50 hover:bg-emerald-50 hover:text-primary text-slate-800 text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl border border-slate-200 hover:border-emerald-200 transition-all duration-200 flex items-center justify-center space-x-1.5"
                >
                  <span>View Export Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Footprint Section */}
      <section className="py-20 bg-white bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary font-sans">Global Trade Lanes</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mt-1">
              Our Logistics & Supply Footprint
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
            <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
              We manage structured cold chain cargo routes loading directly out of Nhava Sheva (JNPT) Mumbai port to target locations with optimized sea and air schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.destinations.map((dest, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-primary" />
                
                <div className="pl-4 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">
                      <span>Lane 0{index + 1}</span>
                      <Anchor className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-slate-950 mb-1.5">{dest.country}</h3>
                    <p className="text-xs text-slate-600 font-semibold mb-6">{dest.type}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Transit:</span>
                      <span className="font-bold text-slate-800">{dest.transitTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Discharge Port:</span>
                      <span className="font-bold text-emerald-800">{dest.transitPort}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Advantages */}
      <section className="py-20 bg-primary-dark text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/70 via-primary-dark to-primary-dark/80 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-sans">Strict Wholesale Protocols</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mt-1">
              Why Bulk Buyers Partner With Us
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div key={index} className="flex space-x-5 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/8 transition-all duration-300">
                  <div className="bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/20 shrink-0 h-fit">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-white">{adv.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{adv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Trust Signals & Accreditations */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary font-sans">Accredited Compliance</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mt-1">
              Export Certifications & Quality Assurances
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* APEDA Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 card-shadow text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-primary border border-emerald-100">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">APEDA Registered</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Registered under the Agricultural & Processed Food Products Export Development Authority.
              </p>
              <span className="inline-block text-[10px] font-bold text-primary bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 mt-2">
                ID: {siteConfig.trustSignals.apeda.badgeId}
              </span>
            </div>

            {/* FSSAI Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 card-shadow text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-primary border border-emerald-100">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">FSSAI License</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Licensed under the Food Safety and Standards Authority of India for safe bulk handling.
              </p>
              <span className="inline-block text-[10px] font-bold text-primary bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 mt-2">
                {siteConfig.trustSignals.fssai.badgeId}
              </span>
            </div>

            {/* IEC Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 card-shadow text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-primary border border-emerald-100">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">IEC Compliant</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                DGFT authorized Import-Export Code (IEC) holder, clearing trade lanes worldwide.
              </p>
              <span className="inline-block text-[10px] font-bold text-primary bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 mt-2">
                {siteConfig.trustSignals.iec.badgeId}
              </span>
            </div>

            {/* Phytosanitary Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 card-shadow text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-primary border border-emerald-100">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Phytosanitary Assured</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Every shipment is inspected and cleared for plant-health, ensuring cargo acceptance.
              </p>
              <span className="inline-block text-[10px] font-bold text-primary bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 mt-2">
                100% Certificate Assured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lead Generation Form Promo section */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-display">
            Ready to secure a direct shipment quote?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Send us your port destination and volume requirements. Our export department will issue an FOB/CIF Proforma Invoice estimate within 12 business hours.
          </p>
          <div className="pt-4 flex justify-center space-x-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Configure Import Quote
            </Link>
            <Link
              href="/products"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all border border-slate-200"
            >
              Browse Specifications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
