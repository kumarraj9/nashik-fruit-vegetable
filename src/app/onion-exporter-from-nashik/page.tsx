import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  MessageSquare, 
  ShieldCheck, 
  Ship, 
  Calendar, 
  Award, 
  Phone, 
  CheckCircle2, 
  Truck, 
  FileCheck, 
  Layers, 
  Globe2, 
  Thermometer, 
  Package, 
  Clock, 
  Sparkles, 
  HelpCircle,
  TrendingUp,
  MapPin,
  Check
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { onionPrices } from "@/data/onion-prices";
import OnionPriceBulletin from "@/components/OnionPriceBulletin";
import DailyRatesSection from "@/components/DailyRatesSection";

export const metadata: Metadata = {
  title: "Nashik Red Onion Exporter India | Lasalgaon APMC Grade A Red Onions",
  description: "Direct exporter of Nashik Red Onions (Garva, Dark Red) from Lasalgaon APMC, Maharashtra. Complete size grading 25mm to 80mm+, 5-6 month shelf life, 0% export duty, reefer container shipping to Dubai, Malaysia & global ports.",
  keywords: [
    "nashik onion exporters",
    "onion export companies in india",
    "onion exporter from mumbai",
    "onion exporter in nashik",
    "onion exporters in maharashtra",
    "red onion exporters in india",
    "onion exporter india",
    "lasalgaon onion market export price",
    "garva onion nashik export quality",
    "hs code 07031010 indian onion"
  ]
};

export default function OnionProductPage() {
  const product = siteConfig.products.onion;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(product.whatsappText)}`;

  // 1. Breadcrumb Schema
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
        "name": "Produce Catalog",
        "item": "https://nashikfruitandvegetable.com/products/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Nashik Red Onion Exporter",
        "item": "https://nashikfruitandvegetable.com/onion-exporter-from-nashik/"
      }
    ]
  };

  // 2. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Nashik Red Onion (Export Grade A)",
    "image": "https://nashikfruitandvegetable.com/images/onion_export.png",
    "description": "Premium export-grade Nashik Red Onions (Garva, Dark Red & Light Red varieties). Sourced directly from Lasalgaon APMC Market with size grading 25mm to 80mm+ for Middle East, SE Asia, and global wholesale buyers.",
    "sku": "ONION-NSK-001",
    "mpn": "HS-07031010",
    "brand": {
      "@type": "Brand",
      "name": "Nashik Fruit and Vegetable Company"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://nashikfruitandvegetable.com/onion-exporter-from-nashik/",
      "priceCurrency": "USD",
      "price": "0.00",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "0.00",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": "false"
      },
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  // 3. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why are Nashik Red Onions preferred for international export?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nashik onions are cultivated in rich volcanic basalt soil along Maharashtra's Godavari belt. They possess high soluble solids (Brix 11-13%), strong natural pungency, multi-layered dry outer skins, and exceptional shelf resilience (up to 6 months for the Garva crop), allowing long-distance ocean voyages without decay."
        }
      },
      {
        "@type": "Question",
        "name": "What are the size options available for Nashik onion exports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer precise mechanical size grading: 25-35mm (Small/Sambar), 35-45mm (Medium B), 45-55mm (Standard Grade A - Gulf/Malaysia favorite), 50-70mm (Large Garva), 55mm+ and 60-80mm+ (Jumbo Super Grade)."
        }
      },
      {
        "@type": "Question",
        "name": "What container shipping conditions are used for fresh red onions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cargo is shipped in 40ft High-Cube Refrigerated or Ventilated containers set to +4°C to +6°C temperature, 65%-70% Relative Humidity, and 15-20 CBM/hr continuous airflow. A standard 40ft container carries approximately 28 to 29 metric tonnes."
        }
      },
      {
        "@type": "Question",
        "name": "What export documentation is provided with every shipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every shipment includes APEDA Registration, FSSAI License, Government Phytosanitary Certificate, Chamber of Commerce Certificate of Origin, Bill of Lading, Packing List, and certified Commercial Invoice. Third-party SGS inspection is available on request."
        }
      },
      {
        "@type": "Question",
        "name": "What is the current export duty status on Indian onions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 20% export duty on Indian onions was officially removed, significantly lowering FOB/CIF price points for international importers in Dubai, Malaysia, Sri Lanka, and Asian markets."
        }
      }
    ]
  };

  const cropSeasons = [
    {
      name: "1. Garva / Rabi Crop (Summer)",
      harvest: "Harvest: Apr - Jun (Stored till Nov)",
      color: "Deep Crimson Red / Golden Skin",
      shelfLife: "5 - 6 Months Ambient Storage",
      desc: "The undisputed king of export onions. Cultivated with minimal moisture content and thick natural skin layers. Naturally storable for up to 6 months without rot or sprouting, making it the #1 choice for long ocean shipping.",
      badge: "Highest Export Demand"
    },
    {
      name: "2. Late Kharif Crop (Winter)",
      harvest: "Harvest: Jan - Mar",
      color: "Bright Pinkish Red",
      shelfLife: "2 - 3 Months Storage",
      desc: "Harvested during cooler winter months. Offers medium-thick skin, vibrant glossy appearance, and excellent bulb firmness. Ideal for rapid transit routes like Middle East & SE Asia.",
      badge: "High Firmness Grade"
    },
    {
      name: "3. Kharif Crop (Monsoon)",
      harvest: "Harvest: Oct - Dec",
      color: "Dark Red / Purple Tint",
      shelfLife: "Fresh Consumption / 1-2 Months",
      desc: "Fresh monsoon harvest bringing high moisture content, intense aromatic pungency, and juicy texture. Best suited for immediate wholesale market distribution and quick sea lanes.",
      badge: "Fresh Season Harvest"
    }
  ];

  const sizeGrades = [
    {
      range: "25mm - 35mm",
      label: "Small / Sambar Grade",
      markets: "Southeast Asia, Sri Lanka, UK Pickling Trade",
      desc: "Compact, highly pungent bulbs popular for traditional Asian gravies, pickling, and retail small-mesh packaging.",
      tag: "Pickling & Sambar"
    },
    {
      range: "35mm - 45mm",
      label: "Medium Grade B",
      markets: "Regional Middle East, Domestic APMC Markets",
      desc: "Versatile medium size widely utilized by institutional caterers, food processors, and supermarket chains.",
      tag: "Economy Grade"
    },
    {
      range: "45mm - 55mm",
      label: "Standard Export Grade A",
      markets: "Dubai (UAE), Malaysia, Singapore, Oman, Qatar",
      desc: "The global benchmark size. Perfectly uniform bulbing, tight dry skin, and ideal weight for commercial food prep.",
      tag: "B2B Export Benchmark",
      highlight: true
    },
    {
      range: "50mm - 70mm",
      label: "Large Garva Premium",
      markets: "Gulf Wholesale Markets, Central Asian Buyers",
      desc: "Selected from premium Garva crops. Excellent skin adhesion and long shelf stability under temperature control.",
      tag: "Garva Premium"
    },
    {
      range: "55mm+ / 60mm+",
      label: "Super Grade A+",
      markets: "UAE Wholesale Hubs, Europe, Hypermarkets",
      desc: "Hand-picked large diameter onions with rich dark red skin. Preferred for commercial restaurant slicing.",
      tag: "Super Wholesale"
    },
    {
      range: "60mm - 80mm+",
      label: "Jumbo Select Grade",
      markets: "High-End Middle East Markets & Hotel Chains",
      desc: "Extra-large jumbo size with thick outer coats, offering maximum yield per bulb for food service buyers.",
      tag: "Jumbo Executive"
    }
  ];

  const packagingTypes = [
    {
      title: "Leno / Mesh Mesh Bags",
      specs: "3 kg, 5 kg, 9 kg, 10 kg, 18 kg, 20 kg, 25 kg, 50 kg",
      desc: "High-ventilation knitted mesh bags in vibrant Red or Pink colors. Allows max airflow to prevent moisture buildup.",
      badge: "Most Popular"
    },
    {
      title: "Hessian Jute Bags",
      specs: "25 kg, 50 kg Heavy Duty Jute",
      desc: "Natural eco-friendly jute fibers offering superior insulation against ambient heat during non-reefer transit.",
      badge: "Eco Maritime"
    },
    {
      title: "Custom Branded Bags",
      specs: "Custom Printing & Barcode Labeling",
      desc: "Private label printing with importer brand logo, country of origin text, gross weight, and retail barcodes.",
      badge: "Private Label"
    },
    {
      title: "Palletized Container Stuffing",
      specs: "Standard Euro & Wooden Pallets",
      desc: "Pre-palletized and shrink-wrapped mesh bags for fast forklift unloading at destination port terminals.",
      badge: "Port Logistics"
    }
  ];

  const shippingDestinations = [
    { destination: "Dubai (Jebel Ali / Port Rashid)", transit: "4 - 6 Days", mode: "Direct Sea Reefer" },
    { destination: "Malaysia (Port Klang / Penang)", transit: "9 - 11 Days", mode: "Direct Sea Reefer" },
    { destination: "Sri Lanka (Colombo Port)", transit: "3 - 4 Days", mode: "Fast Sea Freight" },
    { destination: "Singapore & Vietnam", transit: "10 - 12 Days", mode: "Ocean Container" },
    { destination: "Oman, Qatar & Kuwait", transit: "5 - 7 Days", mode: "Gulf Express Sea" },
  ];

  const faqs = [
    {
      q: "Why are Nashik Red Onions considered the best in Asia?",
      a: "Nashik's unique black-red volcanic soil and climatic conditions produce onions with higher dry matter (Brix 11-13%), strong natural pungency, and multi-layered dry outer skins. This gives them superior cooking flavor and up to 6 months of natural shelf life."
    },
    {
      q: "What is the minimum order quantity (MOQ) for onion export?",
      a: "Our standard MOQ is 1x40ft High Cube Reefer Container (carrying approximately 28 to 29 metric tonnes). For trial orders, we can also load 1x20ft Container (approx 13 metric tonnes)."
    },
    {
      q: "How are prices quoted for international buyers?",
      a: "We quote competitive rates on FOB (Free On Board) Nhava Sheva / JNPT Port, Mumbai, as well as CIF (Cost, Insurance, and Freight) terms to your target destination port (e.g. Jebel Ali, Port Klang, Colombo)."
    },
    {
      q: "How do you protect onions from sprouting or decay during sea transit?",
      a: "All cargo undergoes post-harvest field curing to dry outer skins. Onions are packed in high-ventilation leno mesh bags and shipped in refrigerated containers maintained at +4°C to +6°C with 65-70% Relative Humidity and 15-20 CBM/hr continuous airflow."
    },
    {
      q: "What export documents do you provide for customs clearance?",
      a: "We supply a complete export documentation set: APEDA registration, FSSAI license, Government Phytosanitary Certificate, Chamber of Commerce Certificate of Origin, Bill of Lading, Packing List, Fumigation Certificate, and Commercial Invoice."
    }
  ];

  return (
    <div className="w-full bg-[#fdfdfd] py-8 sm:py-16">
      {/* 1. Insert Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Back Navigation & APEDA Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <Link 
            href="/products/" 
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-primary uppercase tracking-wider transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
            Back to Produce Catalog
          </Link>
          <div className="flex items-center space-x-3 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>APEDA & FSSAI Certified Merchant Exporter • Lasalgaon APMC</span>
          </div>
        </div>

        {/* SECTION 1: Main Product Hero & Quick Trade Callouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Main Image Container */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-[24rem] sm:h-[32rem] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xl group">
              <Image
                src={product.imageUrl}
                alt="Nashik Red Onion Export Quality Grade A"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-md shadow-lg border border-white/20">
                Direct from Lasalgaon APMC
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10">
                HS Code: 07031010
              </div>
            </div>

            {/* Quick Trade Specs Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center">
                  <Ship className="w-4 h-4 text-emerald-600 mr-2" />
                  Wholesale Shipping Terms
                </h3>
                <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded">0% Export Duty</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Loading Port</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-accent mr-1 shrink-0" />
                    JNPT / Nhava Sheva (Mumbai)
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Lead Time</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <Clock className="w-3.5 h-3.5 text-accent mr-1 shrink-0" />
                    5 - 7 Days from Order Confirmation
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Reefer Temp</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <Thermometer className="w-3.5 h-3.5 text-accent mr-1 shrink-0" />
                    +4°C to +6°C (65-70% RH)
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Container Load</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <Package className="w-3.5 h-3.5 text-accent mr-1 shrink-0" />
                    28 - 29 MT per 40ft HC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Title, Description & Action CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Asia's Premier Onion Export Origin</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
                Nashik Red Onion Exporter <br />
                <span className="text-emerald-700">Direct From India</span>
              </h1>
              
              <p className="text-sm font-bold text-accent uppercase tracking-wide">
                {product.tagline}
              </p>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {product.description}
              </p>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs leading-relaxed space-y-1">
                <span className="font-bold block text-amber-950 flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 mr-1.5 shrink-0" />
                  Why Importers Demand Nashik Origin:
                </span>
                <p className="text-slate-700">
                  Nashik onions possess a distinct volcanic basalt soil composition from Maharashtra's Western Ghats. This yields an exceptionally high Brix solid content (11-13%), intense aroma, crisp flesh, and tight multi-layered dry outer skins that prevent dehydration and rot during sea voyages.
                </p>
              </div>
            </div>

            {/* Price Quote CTA Box */}
            <div className="bg-[#022c22] text-white p-6 sm:p-8 rounded-2xl border border-emerald-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 card-shadow">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="font-bold text-base uppercase tracking-wider text-emerald-300 font-display">Get Current FOB / CIF Container Quote</h3>
                <p className="text-xs text-slate-300 font-sans">Direct pricing out of JNPT Nhava Sheva based on your target port and size grading.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-accent/30 text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Quote</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl border border-white/20 transition-all duration-200 flex items-center justify-center space-x-2 text-center"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Direct Call</span>
                </a>
              </div>
            </div>

            {/* Live Onion Price Bulletin */}
            <OnionPriceBulletin initialPrices={onionPrices} />
          </div>

        </div>

        {/* SECTION 2: Lasalgaon Origin Stats Banner */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">40%</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Of India's Onion Crop</p>
              <p className="text-[11px] text-slate-400">Produced in Maharashtra & Nashik district</p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display">Lasalgaon</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Asia's Largest APMC Market</p>
              <p className="text-[11px] text-slate-400">Primary auction hub for global exports</p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">5 - 6 Months</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Garva Ambient Shelf Life</p>
              <p className="text-[11px] text-slate-400">Low moisture for long sea voyages</p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display">0% Duty</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Export Duty Lifted</p>
              <p className="text-[11px] text-slate-400">Restoring maximum pricing edge</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: 3-Crop Season & Harvest Calendar */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Calendar className="w-4 h-4 text-accent" />
              <span>Year-Round Harvest Availability</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              The 3-Harvest Season Advantage of Nashik
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Unlike other international producing regions that harvest once a year, Maharashtra cultivates onions in three distinct seasonal cycles, ensuring unbroken supply to global importers year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cropSeasons.map((season, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm ${
                  idx === 0 
                    ? "bg-emerald-950 text-white border-emerald-800 shadow-xl" 
                    : "bg-white text-slate-900 border-slate-200 hover:border-emerald-300"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      idx === 0 ? "bg-amber-400 text-slate-950" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {season.badge}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold font-display ${idx === 0 ? "text-white" : "text-slate-900"}`}>
                    {season.name}
                  </h3>
                  <div className={`text-xs font-semibold ${idx === 0 ? "text-emerald-300" : "text-emerald-700"}`}>
                    {season.harvest}
                  </div>
                  <p className={`text-xs leading-relaxed ${idx === 0 ? "text-slate-300" : "text-slate-600"}`}>
                    {season.desc}
                  </p>
                </div>

                <div className={`pt-3 border-t text-xs space-y-1 ${idx === 0 ? "border-emerald-800 text-slate-300" : "border-slate-100 text-slate-500"}`}>
                  <div className="flex justify-between">
                    <span className="font-bold">Bulb Color:</span>
                    <span>{season.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Shelf Stability:</span>
                    <span className="font-semibold text-emerald-400">{season.shelfLife}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Size & Mechanical Export Grading Grid */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Layers className="w-4 h-4 text-accent" />
              <span>Precision Grading Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Export Size & Diameter Classifications
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Our automated mechanical sizing lines categorize bulbs by millimeter diameter to meet exact regional buyer requirements across Gulf, Asian, and European wholesale hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sizeGrades.map((grade, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 space-y-4 flex flex-col justify-between ${
                  grade.highlight 
                    ? "bg-emerald-50/70 border-emerald-300 shadow-md ring-1 ring-emerald-400" 
                    : "bg-white border-slate-200/80 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-display text-slate-950">
                      {grade.range}
                    </span>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200">
                      {grade.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 font-display border-b border-slate-100 pb-2">
                    {grade.label}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {grade.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-700 block mb-0.5">Primary Target Destinations:</span>
                  <span>{grade.markets}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Bulk Packaging Options & Private Labeling */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-8">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Package className="w-4 h-4 text-accent" />
              <span>Export Packaging Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Custom Bags, Mesh & Private Labeling
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We package in high-tensile leno mesh bags designed to prevent humidity accumulation and outer skin abrasion during ocean container voyages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagingTypes.map((pkg, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                    {pkg.badge}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 font-display">{pkg.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pkg.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-700">
                  Specs: {pkg.specs}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Reefer Container Shipping & Destination Transit Times */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Container Cold Chain Settings */}
          <div className="lg:col-span-6 bg-[#022c22] text-white p-6 sm:p-8 rounded-3xl border border-emerald-800 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                <Thermometer className="w-4 h-4 text-emerald-400" />
                <span>Reefer Cargo Specifications</span>
              </div>
              <h3 className="text-2xl font-extrabold font-display">
                Container Microclimate Control
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Proper temperature and humidity management is crucial to avoid moisture condensation, mold growth, or premature sprouting during ocean transit.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Temperature</span>
                  <span className="text-emerald-400 font-extrabold text-base font-display">+4°C to +6°C</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Relative Humidity</span>
                  <span className="text-emerald-400 font-extrabold text-base font-display">65% - 70% RH</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Airflow Rate</span>
                  <span className="text-emerald-400 font-extrabold text-base font-display">15 - 20 CBM/hr</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">40ft Reefer Payload</span>
                  <span className="text-emerald-400 font-extrabold text-base font-display">~28 - 29 MT</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-800 text-[11px] text-slate-300 flex items-center justify-between">
              <span>Departure Terminal: <strong>JNPT (Nhava Sheva, Mumbai)</strong></span>
              <span className="text-amber-400 font-bold">Pre-Cured & Dried Bulbs</span>
            </div>
          </div>

          {/* Right: Sea Transit Routes */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <Globe2 className="w-4 h-4 text-accent" />
                <span>Primary Export Lanes</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                Fast Ocean Sea Transit Times
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Our strategic proximity to JNPT Port (Mumbai) enables fast container stuffing and direct vessel boarding to major Asian ports.
              </p>

              <div className="space-y-3">
                {shippingDestinations.map((dest, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                    <div className="font-bold text-slate-900 flex items-center">
                      <Ship className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      {dest.destination}
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-emerald-700 block">{dest.transit}</span>
                      <span className="text-[10px] text-slate-400">{dest.mode}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              * Transit durations measured from vessel departure at JNPT Nhava Sheva. Customs pre-filings provided.
            </div>
          </div>

        </section>

        {/* SECTION 7: Comprehensive Parameter Specs Table */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display border-l-4 border-accent pl-3">
              Full Technical Product Specifications
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Consolidated specification matrix for quality inspection teams, procurement managers, and commercial trade contracts.
            </p>
          </div>
          
          <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-sm bg-white">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Specification Parameter</th>
                  <th>Export Standard Details</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec, index) => (
                  <tr key={index}>
                    <td className="font-bold text-slate-800">{spec.parameter}</td>
                    <td className="text-slate-700">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 8: Document Checklist & Trade Certifications */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 border border-slate-800 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
              <FileCheck className="w-4 h-4 text-accent" />
              <span>Full Export Assurance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Export Compliance & Documentation Pack
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Every container shipment is accompanied by complete statutory documentation required for smooth port clearance by destination customs authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">APEDA Registration</span>
                <span className="text-slate-400 text-[11px]">Official Indian Agri Export Body license</span>
              </div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Phytosanitary Certificate</span>
                <span className="text-slate-400 text-[11px]">Govt Plant Quarantine health clearance</span>
              </div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Certificate of Origin</span>
                <span className="text-slate-400 text-[11px]">Chamber of Commerce verified origin</span>
              </div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">FSSAI Food Safety License</span>
                <span className="text-slate-400 text-[11px]">Food Safety & Standards Authority India</span>
              </div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Bill of Lading & Invoice</span>
                <span className="text-slate-400 text-[11px]">Ocean Bill of Lading, Packing List & PI</span>
              </div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Third-Party Inspection</span>
                <span className="text-slate-400 text-[11px]">Optional SGS / Intertek inspection on request</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: B2B Frequently Asked Questions */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-widest">
              <HelpCircle className="w-4 h-4 text-accent" />
              <span>Buyer Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Frequently Asked B2B Export Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <h3 className="font-bold text-sm text-slate-900 font-display flex items-start">
                  <span className="text-emerald-700 font-extrabold mr-2">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Daily Rates & Footer Inquiry Section */}
      <div className="mt-16">
        <DailyRatesSection />
      </div>
    </div>
  );
}
