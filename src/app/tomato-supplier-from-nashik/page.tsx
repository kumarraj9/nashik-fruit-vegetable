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
import DailyRatesSection from "@/components/DailyRatesSection";

export const metadata: Metadata = {
  title: "Nashik Tomato Supplier & Exporter India | Fresh Grade A Tomatoes",
  description: "Direct exporter of Grade-A Fresh Tomatoes (Abhinav, US 440, Saaho) from Pimpalgaon Baswant & Nashik APMC. Turning/Breaker maturity stages, 40mm to 85mm+ sizing, heavy plastic crates & CFB boxes, reefer shipping to Dubai, Malaysia & GCC.",
  keywords: [
    "nashik tomato supplier",
    "tomato exporter from india",
    "indian fresh tomato exporter",
    "pimpalgaon tomato market export rate",
    "tomato exporters in maharashtra",
    "grade a fresh tomato export",
    "indian tomato export to dubai",
    "hs code 07020000 tomato",
    "fresh tomato wholesale price india",
    "hybrid tomato supplier nashik"
  ]
};

export default function TomatoProductPage() {
  const product = siteConfig.products.tomato;
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
        "name": "Nashik Tomato Supplier & Exporter",
        "item": "https://nashikfruitandvegetable.com/tomato-supplier-from-nashik/"
      }
    ]
  };

  // 2. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fresh Tomato (Export Grade A)",
    "image": "https://nashikfruitandvegetable.com/images/tomato_export.png",
    "description": "Premium fresh farm-grown Grade-A export tomatoes (Abhinav, US 440, Saaho hybrids) from Pimpalgaon Baswant & Nashik. Harvested at turning/breaker stage, packed in durable 10kg/15kg plastic crates or corrugated boxes for reefer container shipping.",
    "sku": "TOMATO-NSK-002",
    "mpn": "HS-07020000",
    "countryOfOrigin": "IN",
    "brand": {
      "@type": "Brand",
      "name": "Nashik Fruit and Vegetable Company"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://nashikfruitandvegetable.com/tomato-supplier-from-nashik/",
      "priceCurrency": "USD",
      "price": "0.00",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "0.00",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": "false"
      },
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "shippingDestination": [
          { "@type": "DefinedRegion", "addressCountry": "AE" },
          { "@type": "DefinedRegion", "addressCountry": "MY" },
          { "@type": "DefinedRegion", "addressCountry": "LK" },
          { "@type": "DefinedRegion", "addressCountry": "OM" },
          { "@type": "DefinedRegion", "addressCountry": "QA" }
        ]
      }
    }
  };

  // 3. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What maturity stage are tomatoes harvested for international sea export?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Export tomatoes are harvested strictly at the Turning / Breaker maturity stage (10% to 30% pinkish tint at blossom end). This ensures maximum cellular firmness and allows natural ripening during transit so tomatoes arrive at destination ports (Dubai, Malaysia, Sri Lanka) with vibrant crimson red color, firm texture, and zero bruising."
        }
      },
      {
        "@type": "Question",
        "name": "How is chilling injury prevented in refrigerated containers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tomatoes are sensitive to low temperatures. We maintain refrigerated reefer containers at precisely +10°C to +12°C (+50°F to +54°F) with 85% to 90% Relative Humidity and continuous air circulation (15-20 CBM/hr). Setting temperatures below +10°C can cause chilling injury, loss of aroma, and uneven ripening."
        }
      },
      {
        "@type": "Question",
        "name": "Which packaging options are available for wholesale tomato shipments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide heavy-duty ventilated plastic crates (10kg, 14kg, and 15kg) with interlocking stacking ribs that prevent fruit crushing during sea transit. For air cargo and premium hypermarkets, we supply 5-ply/7-ply corrugated CFB boxes (5kg, 7kg, 10kg) and 500g/1kg retail punnets."
        }
      },
      {
        "@type": "Question",
        "name": "What is the container loading capacity and Minimum Order Quantity (MOQ)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard export MOQ is 1x40ft High Cube Reefer Container, which accommodates approximately 1,400 to 1,600 plastic crates (14 to 16 metric tonnes). We also load 1x20ft Reefer Containers (approx 7 to 8 metric tonnes) and air freight pallet consignments for urgent wholesale requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What statutory export documents accompany each tomato shipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every shipment includes an APEDA Registration Certificate, Government Phytosanitary Health Certificate, Chamber of Commerce Certificate of Origin, FSSAI Food Safety License, NABL-accredited Pesticide Residue (MRL) Lab Analysis Report, Bill of Lading, Packing List, and Commercial Invoice."
        }
      }
    ]
  };

  const maturityStages = [
    {
      stage: "Stage 1: Mature Green",
      color: "Full Glossy Green (No Pink)",
      firmness: "Extremely Firm (>5.5 kg/cm²)",
      idealFor: "Ultra-Long Ocean Transit (14 - 20 Days)",
      desc: "Harvested at physiological maturity with mature seed jelly. Maximum cellular strength designed for extended deep-sea freight routes where fruits ripen slowly under voyage control.",
      badge: "Extended Sea Freight"
    },
    {
      stage: "Stage 2: Breaker / Turning",
      color: "10% - 30% Pink at Blossom End",
      firmness: "Firm Export Grade (>4.5 kg/cm²)",
      idealFor: "Middle East & SE Asia (4 - 10 Days)",
      desc: "The international benchmark for export cargo. Develops full rich red color and optimum natural sweetness upon vessel docking in Jebel Ali, Port Klang, and Colombo without softening.",
      badge: "Top Export Choice",
      highlight: true
    },
    {
      stage: "Stage 3: Pink / Light Red",
      color: "30% - 90% Vibrant Pinkish Red",
      firmness: "Medium-High Firmness (>3.8 kg/cm²)",
      idealFor: "Fast Transit Routes (2 - 4 Days)",
      desc: "Selected for nearby maritime routes (Sri Lanka, Maldives) or domestic Tier-1 express cold-chain logistics. Immediate shelf appeal for hypermarkets and wholesale vendors.",
      badge: "Fast Sea Transit"
    },
    {
      stage: "Stage 4: Full Red Ripe",
      color: "100% Deep Crimson Glossy Red",
      firmness: "Table Fresh (>3.0 kg/cm²)",
      idealFor: "Air Cargo & Hotel Supply (24 - 48 Hrs)",
      desc: "Fully mature with peak lycopene content, intense tomato aroma, and juicy pulp. Shipped via temperature-controlled air freight directly to 5-star hotels and gourmet chains in Dubai and Gulf capitals.",
      badge: "Air Freight Express"
    }
  ];

  const sizeGrades = [
    {
      range: "40mm - 50mm",
      label: "Small / Catering Grade",
      weight: "70g - 90g per fruit",
      markets: "Institutional Catering, Soups, Pickling & Canning",
      desc: "Uniform compact diameter, dense internal locules, and thick skin. Ideal for institutional food services and commercial processing.",
      tag: "Catering & Processing"
    },
    {
      range: "50mm - 60mm",
      label: "Standard Export Grade A",
      weight: "90g - 120g per fruit",
      markets: "Dubai (UAE), Saudi Arabia, Malaysia, Qatar, Oman",
      desc: "The universal benchmark for commercial export. Uniform spherical/oval shape, smooth glossy rind, balanced acidity, and zero micro-cracking.",
      tag: "Gulf & Asian Benchmark",
      highlight: true
    },
    {
      range: "60mm - 70mm",
      label: "Large Select Grade A+",
      weight: "120g - 150g per fruit",
      markets: "Supermarket Retail Shelves, High-End Grocery Chains",
      desc: "Hand-graded large fruits with thick pericarp walls and high meat-to-gel ratio. Excellent table presentation for retail display cases.",
      tag: "Premium Supermarket"
    },
    {
      range: "70mm - 85mm+",
      label: "Jumbo Salad Grade",
      weight: "150g - 200g+ per fruit",
      markets: "Horeca Sector, 5-Star Hotels, Luxury Dining",
      desc: "Extra-large jumbo size engineered for high-yield slicing. High solids content ensures clean cuts without excessive water dripping.",
      tag: "Executive Salad"
    }
  ];

  const varieties = [
    {
      name: "Abhinav (Syngenta)",
      type: "Semi-Determinate Hybrid",
      features: "Square-round shape, very thick fruit walls, uniform deep red, exceptional transit durability.",
      badge: "Highest Export Share"
    },
    {
      name: "US 440 (Nunhems)",
      type: "Determinate Bush Hybrid",
      features: "Flat-round globe, rich lycopene red color, dense internal chambers, high firmness.",
      badge: "Firmness Standard"
    },
    {
      name: "Saaho (3251)",
      type: "Semi-Determinate",
      features: "Attractive firm calyx, excellent firmness retention under reefer transit, blemish-free skin.",
      badge: "Strong Calyx"
    },
    {
      name: "Vaishnavi & Aryan",
      type: "High-Yield Hybrid",
      features: "Heat tolerant, uniform size distribution, thick outer cuticle resistant to transit friction.",
      badge: "High Yield"
    }
  ];

  const packagingTypes = [
    {
      title: "Perforated Plastic Crates",
      specs: "10 kg, 14 kg & 15 kg Heavy Duty",
      desc: "Food-grade HDPE ventilated crates with interlocking structural ribs. Prevents compressive crushing of lower layers inside reefer containers.",
      badge: "Standard Ocean Pack"
    },
    {
      title: "Corrugated CFB Cartons",
      specs: "5 kg, 7 kg & 10 kg 5-Ply / 7-Ply",
      desc: "Telescopic boxes with multi-directional ventilation eyelets, food-safe paper dividers, and moisture-resistant internal wax coating.",
      badge: "Export Cartons"
    },
    {
      title: "Retail Clamshell Punnets",
      specs: "500g & 1 kg Clear Vented Trays",
      desc: "Pre-packed transparent clamshell punnets with private label barcode stickers for direct retail hypermarket shelving in GCC countries.",
      badge: "Hypermarket Retail"
    },
    {
      title: "Palletized Reefer Stuffing",
      specs: "Heat-Treated Euro / ISO Pallets",
      desc: "Pre-palletized crates secured with heavy-duty corner boards and breathable strapping for rapid, damage-free forklift port handling.",
      badge: "Port Logistics"
    }
  ];

  const shippingDestinations = [
    { destination: "Dubai (Jebel Ali / Port Rashid)", transit: "4 - 6 Days", mode: "Direct Sea Reefer" },
    { destination: "Sri Lanka (Colombo Port)", transit: "3 - 4 Days", mode: "Fast Sea Reefer" },
    { destination: "Malaysia (Port Klang / Penang)", transit: "8 - 10 Days", mode: "Direct Sea Reefer" },
    { destination: "Oman (Sohar Port) & Qatar (Hamad Port)", transit: "5 - 7 Days", mode: "Gulf Express Sea" },
    { destination: "Air Freight (Dubai, Doha, Maldives)", transit: "24 - 48 Hours", mode: "Express Air Cold Chain" }
  ];

  const faqs = [
    {
      q: "Why are Nashik and Pimpalgaon tomatoes preferred for international exports?",
      a: "Nashik's Pimpalgaon Baswant belt possesses rich volcanic loam soils and high day-to-night temperature variations. This unique microclimate produces tomatoes with thicker pericarp fruit walls (fruit firmness > 4.5 kg/cm²), lower seed-cavity moisture, higher lycopene density, and natural resistance against cracking and vibration damage during ocean transit."
    },
    {
      q: "What is the recommended maturity stage for shipments to Dubai and the GCC?",
      a: "For 4-6 day sea voyages out of JNPT Nhava Sheva to Jebel Ali, we recommend the 'Turning / Breaker' maturity stage (10% to 30% pinkish tint). By the time the container clears Dubai customs and reaches wholesale distribution markets, the fruit has developed an even, glossy crimson red color with complete pulp firmness."
    },
    {
      q: "How do you protect tomatoes from chilling injury and rot in reefer containers?",
      a: "Tomatoes are sensitive to chilling injury below +10°C. We maintain refrigerated reefer containers precisely at +10°C to +12°C with 85% to 90% Relative Humidity. Our technicians configure continuous air exchanges (15-20 CBM/hr) to actively vent ethylene gas and eliminate pocket moisture condensation."
    },
    {
      q: "Which packaging type is better: heavy plastic crates or corrugated boxes?",
      a: "Heavy-duty ventilated plastic crates (10kg / 14kg / 15kg) are preferred for sea container shipments because their rigid interlocking construction absorbs ship vibration without crushing fruits. For air cargo consignments or retail supermarkets, 5-ply ventilated corrugated CFB cartons or 1kg punnets provide optimal branding and display aesthetics."
    },
    {
      q: "What export documentation is provided with every consignment?",
      a: "Every shipment includes a full statutory documentation set: APEDA Registration, Government Phytosanitary Health Certificate, Chamber of Commerce Certificate of Origin, FSSAI License, NABL-accredited MRL Pesticide Residue Analysis Report, Ocean Bill of Lading, Packing List, and certified Commercial Invoice."
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
            <span>APEDA & FSSAI Certified Merchant Exporter • Pimpalgaon Baswant & Nashik APMC</span>
          </div>
        </div>

        {/* SECTION 1: Main Product Hero & Quick Trade Callouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Main Image Container */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-[24rem] sm:h-[32rem] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xl group">
              <Image
                src={product.imageUrl}
                alt="Nashik Fresh Tomato Export Quality Grade A"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-md shadow-lg border border-white/20">
                Direct from Pimpalgaon APMC Belt
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10">
                HS Code: 07020000
              </div>
            </div>

            {/* Quick Trade Specs Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center">
                  <Ship className="w-4 h-4 text-emerald-600 mr-2" />
                  Wholesale Shipping Terms
                </h3>
                <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded">Grade A Export</span>
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
                    3 - 5 Days from Order Confirmation
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Reefer Temp</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <Thermometer className="w-3.5 h-3.5 text-accent mr-1 shrink-0" />
                    +10°C to +12°C (85-90% RH)
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Container Load</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <Package className="w-3.5 h-3.5 text-accent mr-1 shrink-0" />
                    14 - 16 MT per 40ft HC (Crates)
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
                <span>India's Leading Tomato Production Belt</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
                Nashik Tomato Supplier & Exporter <br />
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
                  Why Importers Demand Nashik & Pimpalgaon Tomatoes:
                </span>
                <p className="text-slate-700">
                  The Pimpalgaon Baswant, Dindori, and Nashik belts form Asia's preeminent tomato cultivation corridor. Fertile Deccan volcanic soil coupled with wide diurnal temperature differences fosters thick pericarp fruit walls (fruit firmness pressure &gt; 4.5 kg/cm²), dense internal locules, low free-moisture leakage, and high natural lycopene. This eliminates transit cracking and pressure damage during reefer ocean voyages to Dubai, the GCC, and Southeast Asia.
                </p>
              </div>
            </div>

            {/* Price Quote CTA Box */}
            <div className="bg-[#022c22] text-white p-6 sm:p-8 rounded-2xl border border-emerald-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 card-shadow">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="font-bold text-base uppercase tracking-wider text-emerald-300 font-display">Get Current FOB / CIF Container Quote</h3>
                <p className="text-xs text-slate-300 font-sans">Direct pricing out of JNPT Nhava Sheva based on your maturity stage, packaging style, and target port.</p>
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

            {/* Quality Commitment Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Purity</span>
                <span className="text-xs font-bold text-slate-800">100% Grade A</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Maturity</span>
                <span className="text-xs font-bold text-emerald-700">Breaker / Turning</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Defects</span>
                <span className="text-xs font-bold text-slate-800">&lt; 1% Tolerance</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Residue</span>
                <span className="text-xs font-bold text-emerald-700">MRL Tested</span>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 2: Pimpalgaon Origin Stats Banner */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">400,000+ MT</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Annual Regional Output</p>
              <p className="text-[11px] text-slate-400">Maharashtra's premier tomato belt</p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display">Pimpalgaon</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Asia's Key Tomato APMC</p>
              <p className="text-[11px] text-slate-400">Daily auction hub & modern packhouses</p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">15 - 20 Days</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Reefer Transit Shelf Life</p>
              <p className="text-[11px] text-slate-400">Maintained under +10°C to +12°C</p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display">&gt; 4.5 kg/cm²</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Fruit Firmness Pressure</p>
              <p className="text-[11px] text-slate-400">Thick pericarp with zero transit cracking</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: 4-Stage Maturity & Color Harvest Guide */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Calendar className="w-4 h-4 text-accent" />
              <span>International Color & Maturity Index</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Export Ripeness & Harvesting Stages
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              We harvest strictly according to USDA & international color stage classifications. By synchronizing harvest maturity with ocean transit duration, tomatoes arrive at destination ports in prime crimson red condition with complete firmness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maturityStages.map((stage, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm ${
                  stage.highlight 
                    ? "bg-emerald-950 text-white border-emerald-800 shadow-xl ring-2 ring-emerald-400" 
                    : "bg-white text-slate-900 border-slate-200 hover:border-emerald-300"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      stage.highlight ? "bg-amber-400 text-slate-950 font-black" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {stage.badge}
                    </span>
                  </div>
                  <h3 className={`text-base font-bold font-display ${stage.highlight ? "text-white" : "text-slate-900"}`}>
                    {stage.stage}
                  </h3>
                  <div className={`text-xs font-semibold ${stage.highlight ? "text-emerald-300" : "text-emerald-700"}`}>
                    Color: {stage.color}
                  </div>
                  <p className={`text-xs leading-relaxed ${stage.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {stage.desc}
                  </p>
                </div>

                <div className={`pt-3 border-t text-xs space-y-1 ${stage.highlight ? "border-emerald-800 text-slate-300" : "border-slate-100 text-slate-500"}`}>
                  <div className="flex justify-between">
                    <span className="font-bold">Cell Firmness:</span>
                    <span className="font-semibold text-emerald-400">{stage.firmness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Best Transit:</span>
                    <span>{stage.idealFor}</span>
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
              Export Caliber & Diameter Classifications
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Automated mechanical roller sizers sort fresh tomatoes by millimeter diameter and weight. This guarantees 100% uniformity per box to satisfy retail and food-service quality audits in the Gulf, SE Asia, and Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                      {grade.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 font-display border-b border-slate-100 pb-2">
                    {grade.label}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-800">
                    Weight: {grade.weight}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {grade.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-700 block mb-0.5">Primary Target Markets:</span>
                  <span>{grade.markets}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4B: Commercial Export Hybrid Varieties */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-6 shadow-sm">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Award className="w-4 h-4 text-accent" />
              <span>Certified Commercial Hybrids</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Export Hybrid Varieties Cultivated in Nashik
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              We contract-grow specific global hybrid varieties known for high total soluble solids (TSS), thick rind membranes, deep red internal arils, and superior transportability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varieties.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                    {item.badge}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 font-display">{item.name}</h3>
                  <span className="text-[11px] font-semibold text-slate-500 block">{item.type}</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.features}</p>
                </div>
                <div className="pt-2 border-t border-slate-200 text-[10px] font-bold text-emerald-700 flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1 text-accent" />
                  <span>Sea Transit Qualified</span>
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
              <span>Zero-Damage Packaging Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Export Crates, Cartons & Private Labeling
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Because tomatoes are tender fruits, our packaging engineering focuses on zero compressive load on fruit skin and continuous airflow dissipation to preserve freshness.
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
                <span>Reefer Cold Chain Protocol</span>
              </div>
              <h3 className="text-2xl font-extrabold font-display">
                Container Microclimate Control
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Tomatoes require precise thermal management. Unlike onions or potatoes, temperatures below +10°C cause irreversible chilling injury, pitting, and off-flavors.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Transit Temperature</span>
                  <span className="text-emerald-400 font-extrabold text-base font-display">+10°C to +12°C</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Relative Humidity</span>
                  <span className="text-emerald-400 font-extrabold text-base font-display">85% - 90% RH</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Ventilation Exchange</span>
                  <span className="text-emerald-400 font-extrabold text-base font-display">15 - 20 CBM/hr</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">40ft Reefer Capacity</span>
                  <span className="text-emerald-400 font-extrabold text-base font-display">~14 - 16 MT</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-800 text-[11px] text-slate-300 flex items-center justify-between">
              <span>Departure Port: <strong>JNPT (Nhava Sheva, Mumbai)</strong></span>
              <span className="text-amber-400 font-bold">Pre-Cooled Cargo</span>
            </div>
          </div>

          {/* Right: Sea & Air Transit Routes */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <Globe2 className="w-4 h-4 text-accent" />
                <span>Primary Export Lanes</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                Fast Ocean & Air Transit Times
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Our facilities sit directly on the Mumbai-Agra National Highway with rapid 4-hour corridor access to JNPT port terminals and Mumbai Air Cargo.
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
              * Measured from vessel sail or air pallet clearance at Mumbai. Pre-cooling documentation issued.
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
              Consolidated specification matrix for quality control inspectors, quarantine officers, and commercial import procurement managers.
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
              Every container consignment is cleared with full regulatory documentation to ensure hassle-free port clearance at Jebel Ali, Port Klang, Colombo, and regional entry points.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">APEDA Registration</span>
                <span className="text-slate-400 text-[11px]">Official Indian Agri Export body licensing</span>
              </div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Phytosanitary Certificate</span>
                <span className="text-slate-400 text-[11px]">Govt Plant Quarantine health inspection</span>
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
                <span className="font-bold text-white block">MRL Pesticide Lab Test</span>
                <span className="text-slate-400 text-[11px]">NABL accredited laboratory residue test</span>
              </div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Ocean B/L & Commercial Invoice</span>
                <span className="text-slate-400 text-[11px]">Seaway Bill, Packing List & Proforma Invoice</span>
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
              Frequently Asked B2B Tomato Export Questions
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
