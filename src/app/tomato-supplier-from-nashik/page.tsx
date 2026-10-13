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
  Check,
  Sprout,
  Users,
  Compass
} from "lucide-react";
import { siteConfig } from "@/config/site";
import DailyRatesSection from "@/components/DailyRatesSection";

export const metadata: Metadata = {
  title: "Export-Quality Tomatoes Sourced from Trusted Farms | Export to Dubai, Bangladesh & Nepal",
  description: "B2B supplier of export-quality fresh tomatoes sourced directly from trusted partner farms in Nashik & Pimpalgaon. Grade A hybrid varieties (Abhinav, US 440, Saaho) at breaker/turning stage. Fast reefer sea shipping to Dubai (UAE) and express overland routes to Bangladesh and Nepal.",
  keywords: [
    "export-quality tomatoes sourced from trusted farms",
    "tomato export to dubai",
    "tomato export to bangladesh",
    "tomato export to nepal",
    "nashik tomato supplier",
    "tomato exporter from india",
    "indian fresh tomato exporter",
    "pimpalgaon tomato market export rate",
    "tomato exporters in maharashtra",
    "grade a fresh tomato export india",
    "hs code 07020000 tomato",
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
        "name": "Export-Quality Tomatoes from Trusted Farms",
        "item": "https://nashikfruitandvegetable.com/tomato-supplier-from-nashik/"
      }
    ]
  };

  // 2. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Export-Quality Fresh Tomato (Grade A)",
    "image": "https://nashikfruitandvegetable.com/images/tomato_export.png",
    "description": "Export-quality fresh tomatoes sourced from trusted farms across the Pimpalgaon & Nashik belts. Graded at breaker/turning stage for export to Dubai (UAE), Bangladesh, and Nepal. Packed in heavy-duty 10kg/14kg plastic crates and 5kg/10kg CFB cartons.",
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
          { "@type": "DefinedRegion", "addressCountry": "AE", "name": "Dubai (UAE)" },
          { "@type": "DefinedRegion", "addressCountry": "BD", "name": "Bangladesh" },
          { "@type": "DefinedRegion", "addressCountry": "NP", "name": "Nepal" },
          { "@type": "DefinedRegion", "addressCountry": "MY", "name": "Malaysia" },
          { "@type": "DefinedRegion", "addressCountry": "LK", "name": "Sri Lanka" },
          { "@type": "DefinedRegion", "addressCountry": "OM", "name": "Oman" },
          { "@type": "DefinedRegion", "addressCountry": "QA", "name": "Qatar" }
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
        "name": "How are export-quality tomatoes sourced from trusted farms in Nashik?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We partner directly with over 200+ certified farmer clusters across the Pimpalgaon Baswant, Dindori, and Niphad agricultural belts. Our field agronomists monitor Good Agricultural Practices (GAP), drip irrigation schedules, and residue-free crop health. Tomatoes are harvested early in the morning (6:00 AM - 10:00 AM) to maintain low core pulp temperature and graded through automated packhouse sorting lines to eliminate blemishes, cracks, and blossom-end rot."
        }
      },
      {
        "@type": "Question",
        "name": "How are fresh tomatoes exported from Nashik to Dubai (UAE)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Dubai, shipments depart from JNPT / Nhava Sheva Port, Mumbai via 40ft High Cube refrigerated reefer containers arriving at Jebel Ali Port in 4 to 6 days. We set container temperatures strictly at +10°C to +12°C with 85-90% Relative Humidity. For urgent hotel and retail hypermarket orders, express air freight consignments land at Dubai International (DXB) within 24 to 48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What is the procedure and transit time for tomato export to Bangladesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tomato exports to Bangladesh operate via express cross-border road logistics. Ventilated and refrigerated trucks travel from our Nashik packhouses directly to Petrapole - Benapole Land Customs Station (LCS), Ghojadanga, or Hili border checkpoints within 2 to 3 days, feeding wholesale markets in Dhaka, Chittagong, and Khulna with unbroken freshness."
        }
      },
      {
        "@type": "Question",
        "name": "How are fresh tomatoes shipped from Nashik to Nepal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Nepal, tomatoes are transported via direct overland logistics corridors through Raxaul - Birgunj and Sonauli - Bhairahawa border crossings. Transit takes approximately 2 to 3 days to reach the Kalimati Fruit & Vegetable Market in Kathmandu and Pokhara, utilizing high-durability plastic crates engineered for mountain road transport."
        }
      },
      {
        "@type": "Question",
        "name": "What maturity stage is best for export to Dubai, Bangladesh, and Nepal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend the 'Breaker / Turning' stage (10% to 30% pink tint at the blossom end) for sea voyages to Dubai and long overland routes to Bangladesh and Nepal. This guarantees maximum cellular firmness during travel and allows the fruit to naturally transition to vibrant crimson red upon arrival at destination markets."
        }
      }
    ]
  };

  const keyExportMarkets = [
    {
      country: "Dubai (UAE) & Gulf",
      flag: "🇦🇪",
      routeType: "Ocean Reefer & Air Cargo",
      transit: "4 - 6 Days (Sea) | 24 - 48 Hrs (Air)",
      port: "Jebel Ali Port / Dubai Int'l (DXB)",
      packaging: "10kg / 14kg Plastic Crates & 5kg CFB Boxes",
      desc: "Direct reefer container shipments out of JNPT Nhava Sheva. Microclimate managed at +10°C to +12°C to prevent chilling injury, arriving with perfect gloss and firmness for supermarkets and Horeca buyers.",
      highlight: true
    },
    {
      country: "Bangladesh",
      flag: "🇧🇩",
      routeType: "Express Cross-Border Road Logistics",
      transit: "2 - 3 Days Direct Land Route",
      port: "Petrapole - Benapole / Ghojadanga LCS",
      packaging: "14kg & 15kg Heavy-Duty Ventilated Crates",
      desc: "Fast overland transit connecting Nashik packhouses directly to Dhaka, Chittagong, and Khulna mandis. Harvested at Turning stage to withstand land border customs clearance in peak condition.",
      highlight: true
    },
    {
      country: "Nepal",
      flag: "🇳🇵",
      routeType: "Cross-Border Overland Transport",
      transit: "2 - 3 Days Direct Road Logistics",
      port: "Raxaul - Birgunj & Sonauli - Bhairahawa",
      packaging: "14kg Heavy Plastic Stackable Crates",
      desc: "Direct overland freight to Kathmandu (Kalimati Market) and Pokhara. We load high-firmness hybrid varieties (Abhinav & US 440) specifically proven to resist hilly road vibration.",
      highlight: true
    }
  ];

  const trustedFarmPractices = [
    {
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      title: "200+ Contracted Farmer Clusters",
      desc: "Direct partnerships with progressive growers across Pimpalgaon, Dindori, and Niphad. Zero middlemen, ensuring complete batch traceability from field to container."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "Morning Harvest (6 AM - 10 AM)",
      desc: "Tomatoes are hand-picked in the cool early morning hours to keep core pulp temperature low, minimizing moisture loss and physiological stress before packhouse arrival."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "NABL MRL Residue Testing",
      desc: "Strict adherence to international Maximum Residue Limits (MRL). Every export batch is tested in APEDA-recognized NABL laboratories for 100% food safety assurance."
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-600" />,
      title: "4-Stage Conveyor Sorting",
      desc: "Automated cleaning, roller grading by millimeter diameter, and manual culling of sunburns, blossom-end rot, and surface abrasions. Only flawless Grade A fruits are packed."
    }
  ];

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
      idealFor: "Dubai, Bangladesh & Nepal (2 - 6 Days)",
      desc: "The premier export benchmark. Arrives at Jebel Ali, Dhaka, and Kathmandu with vibrant crimson red color, firm bite, and maximum natural sweetness without softening.",
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
      desc: "Fully mature with peak lycopene content, intense tomato aroma, and juicy pulp. Shipped via air cargo directly to 5-star hotels and luxury dining in Dubai and Gulf capitals.",
      badge: "Air Freight Express"
    }
  ];

  const sizeGrades = [
    {
      range: "40mm - 50mm",
      label: "Small / Catering Grade",
      weight: "70g - 90g per fruit",
      markets: "Bangladesh Mandis, Institutional Catering, Processing",
      desc: "Uniform compact diameter, dense internal locules, and thick skin. Highly demanded for catering and commercial food prep.",
      tag: "Catering & Processing"
    },
    {
      range: "50mm - 60mm",
      label: "Standard Export Grade A",
      weight: "90g - 120g per fruit",
      markets: "Dubai (UAE), Saudi Arabia, Nepal, Qatar, Oman",
      desc: "The universal benchmark for commercial export. Uniform spherical/oval shape, smooth glossy rind, balanced acidity, and zero micro-cracking.",
      tag: "Gulf & Regional Benchmark",
      highlight: true
    },
    {
      range: "60mm - 70mm",
      label: "Large Select Grade A+",
      weight: "120g - 150g per fruit",
      markets: "Dubai Supermarkets, High-End Grocery Chains",
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
      features: "Square-round shape, very thick fruit walls, uniform deep red, exceptional transit durability across mountain and sea routes.",
      badge: "Export Standard"
    },
    {
      name: "US 440 (Nunhems)",
      type: "Determinate Bush Hybrid",
      features: "Flat-round globe, rich lycopene red color, dense internal chambers, high firmness preventing transit crush.",
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
      desc: "Food-grade HDPE ventilated crates with interlocking structural ribs. Ideal for Dubai ocean reefers and Bangladesh / Nepal road transport.",
      badge: "Export Workhorse"
    },
    {
      title: "Corrugated CFB Cartons",
      specs: "5 kg, 7 kg & 10 kg 5-Ply / 7-Ply",
      desc: "Telescopic boxes with multi-directional ventilation eyelets, food-safe paper dividers, and moisture-resistant internal wax coating.",
      badge: "Dubai Hypermarkets"
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
    { destination: "Dubai (Jebel Ali / Port Rashid)", transit: "4 - 6 Days", mode: "Direct Sea Reefer (+10°C to +12°C)" },
    { destination: "Dubai International (DXB Air Cargo)", transit: "24 - 48 Hours", mode: "Express Air Cold Chain" },
    { destination: "Bangladesh (Benapole / Petrapole Border)", transit: "2 - 3 Days", mode: "Express Land Customs Road Route" },
    { destination: "Nepal (Birgunj / Raxaul & Bhairahawa)", transit: "2 - 3 Days", mode: "Direct Overland Road Transport" },
    { destination: "Sri Lanka (Colombo Port)", transit: "3 - 4 Days", mode: "Fast Sea Reefer" },
    { destination: "Malaysia (Port Klang / Penang)", transit: "8 - 10 Days", mode: "Direct Sea Reefer" },
  ];

  const faqs = [
    {
      q: "How do you ensure export-quality tomatoes are sourced only from trusted farms?",
      a: "Our procurement model is built on direct tie-ups with 200+ registered farmer clusters in the Pimpalgaon Baswant, Dindori, and Nashik belts. We deploy in-house agricultural supervisors who oversee seed selection (Abhinav, US 440), drip irrigation, and zero-residue pest management. Harvesting takes place exclusively in the cool morning hours (6:00 AM - 10:00 AM) to maintain low core temperature. At our packhouse, fruits undergo 4-tier sorting and roller grading to remove all blemishes and ensure only 100% Grade A tomatoes reach export containers."
    },
    {
      q: "What is your procedure and schedule for exporting tomatoes to Dubai (UAE)?",
      a: "For Dubai, cargo is pre-cooled at our packhouse, packed in heavy-duty 10kg/14kg ventilated plastic crates or 5kg CFB boxes, and loaded into 40ft High Cube reefer containers set to +10°C to +12°C with 85-90% RH. Containers depart from JNPT Nhava Sheva (Mumbai) and dock at Jebel Ali Port within 4 to 6 days. For urgent hypermarket or 5-star hotel requirements, express air cargo pallets fly out of Mumbai (BOM) to Dubai (DXB) within 24 to 48 hours."
    },
    {
      q: "How do you handle fresh tomato exports to Bangladesh?",
      a: "We operate dedicated cross-border road logistics from Nashik to Bangladesh. Trucks loaded with 14kg/15kg heavy plastic crates transit via National Highway corridors directly to Land Customs Stations (LCS) including Petrapole - Benapole, Ghojadanga, and Hili check-posts within 2 to 3 days. Tomatoes are picked at the Turning/Breaker stage so they clear border customs and reach Dhaka and Chittagong wholesale mandis in fresh, firm, and undamaged condition."
    },
    {
      q: "How are tomatoes transported overland to Nepal?",
      a: "For Nepal, shipments travel overland from our Pimpalgaon sorting centers through the Raxaul - Birgunj border and Sonauli - Bhairahawa border checkpoints. Total transit time is approximately 2 to 3 days to Kathmandu's Kalimati Fruit & Vegetable Market and Pokhara. We specifically select thick-walled hybrid varieties (Abhinav and US 440) that resist compression and vibration over hilly roads."
    },
    {
      q: "How do you prevent chilling injury and skin decay during refrigerated transport?",
      a: "Tomatoes are sensitive to cold shock. Exposure to temperatures below +10°C causes chilling injury, surface pitting, and failure to ripen evenly. We maintain refrigerated reefer containers strictly at +10°C to +12°C with 85% to 90% Relative Humidity. Our technicians configure continuous air exchanges (15-20 CBM/hr) to actively vent ethylene gas and prevent moisture condensation inside the container."
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
                alt="Export-Quality Tomatoes Sourced from Trusted Farms in Nashik"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-md shadow-lg border border-white/20">
                Sourced from Trusted Farms
              </div>
              <div className="absolute bottom-4 left-4 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[11px] font-bold px-3 py-1.5 rounded-lg border border-emerald-500/30">
                Export to Dubai • Bangladesh • Nepal
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
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Loading Points</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-accent mr-1 shrink-0" />
                    JNPT Mumbai / Land Borders
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Lead Time</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <Clock className="w-3.5 h-3.5 text-accent mr-1 shrink-0" />
                    2 - 4 Days from Order Confirmation
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
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Export Routes</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <Compass className="w-3.5 h-3.5 text-accent mr-1 shrink-0" />
                    Dubai (Sea/Air) • BD & NP (Road)
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
                <span>Export-Quality Tomatoes Sourced from Trusted Farms</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
                Nashik Fresh Tomato Supplier <br />
                <span className="text-emerald-700">Export to Dubai, Bangladesh & Nepal</span>
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
                  Farm-Gate Freshness & Cross-Border Delivery:
                </span>
                <p className="text-slate-700">
                  Every batch of export-quality tomatoes is sourced directly from trusted partner farms in Pimpalgaon Baswant and Nashik. With thick pericarp fruit walls (fruit firmness pressure &gt; 4.5 kg/cm²), dense internal chambers, and balanced acidity, our tomatoes maintain peak cellular firmness during ocean reefer voyages to <strong>Dubai (UAE)</strong> and express cross-border road transits to <strong>Bangladesh</strong> and <strong>Nepal</strong>.
                </p>
              </div>
            </div>

            {/* Price Quote CTA Box */}
            <div className="bg-[#022c22] text-white p-6 sm:p-8 rounded-2xl border border-emerald-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 card-shadow">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="font-bold text-base uppercase tracking-wider text-emerald-300 font-display">Get Current FOB / CIF Container & Truck Quote</h3>
                <p className="text-xs text-slate-300 font-sans">Direct quotes for shipments to Dubai (Jebel Ali / Air Cargo), Bangladesh (Benapole Border), and Nepal (Birgunj Border).</p>
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

            {/* Quick Export Corridor Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
                <span className="text-xl block">🇦🇪</span>
                <span className="text-xs font-bold text-slate-900 block">Export to Dubai (UAE)</span>
                <span className="text-[10px] text-emerald-700 font-medium">Jebel Ali Sea & Air Cargo</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
                <span className="text-xl block">🇧🇩</span>
                <span className="text-xs font-bold text-slate-900 block">Export to Bangladesh</span>
                <span className="text-[10px] text-emerald-700 font-medium">Petrapole-Benapole LCS</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
                <span className="text-xl block">🇳🇵</span>
                <span className="text-xs font-bold text-slate-900 block">Export to Nepal</span>
                <span className="text-[10px] text-emerald-700 font-medium">Birgunj & Bhairahawa Land Borders</span>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 2: Major Export Corridors Spotlight (Dubai, Bangladesh, Nepal) */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Globe2 className="w-4 h-4 text-accent" />
              <span>Dedicated Trade Lanes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Primary Export Destinations: Dubai, Bangladesh & Nepal
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              We specialize in synchronized logistics connecting Nashik packhouses directly with major consumption centers across the Middle East and neighboring South Asian nations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyExportMarkets.map((market, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{market.flag}</span>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {market.routeType}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    {market.country}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-accent shrink-0" />
                    <span>Transit: {market.transit}</span>
                  </div>
                  <div className="text-xs font-medium text-slate-500 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                    <span>Entry: {market.port}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                    {market.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <span className="font-bold text-slate-700 block">Recommended Packaging:</span>
                  <span>{market.packaging}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Sourced from Trusted Farms (Quality Foundation) */}
        <section className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-emerald-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 space-y-8">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Sprout className="w-4 h-4 text-amber-400" />
                <span>Agricultural Excellence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                Export-Quality Tomatoes Sourced from Trusted Farms
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Consistency is the cornerstone of our export business. We cultivate long-standing grower partnerships across the Nashik and Pimpalgaon agricultural belts, ensuring every harvest meets stringent international quality, residue, and sizing standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustedFarmPractices.map((practice, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3 backdrop-blur-sm">
                  <div className="p-2.5 bg-emerald-500/20 rounded-xl w-fit border border-emerald-500/30">
                    {practice.icon}
                  </div>
                  <h3 className="text-sm font-bold font-display text-white">{practice.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{practice.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: 4-Stage Maturity & Color Harvest Guide */}
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
              We harvest strictly according to USDA & international color classifications. By matching fruit maturity to the specific destination transit window (Dubai sea vs. Bangladesh overland road), tomatoes arrive at destination markets with optimal firmness and uniform red coloration.
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
                    <span className="font-bold">Best Route:</span>
                    <span>{stage.idealFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Size & Mechanical Export Grading Grid */}
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
              Automated mechanical roller sizers sort fresh tomatoes by millimeter diameter and weight. This guarantees 100% uniformity per box to satisfy retail and food-service quality audits in Dubai, Bangladesh, Nepal, and Southeast Asia.
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

        {/* SECTION 5B: Commercial Export Hybrid Varieties */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-6 shadow-sm">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Award className="w-4 h-4 text-accent" />
              <span>Certified Commercial Hybrids</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Export Hybrid Varieties Cultivated on Trusted Farms
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
                  <span>Sea & Overland Qualified</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Bulk Packaging Options & Private Labeling */}
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
              Because tomatoes are tender fruits, our packaging engineering focuses on zero compressive load on fruit skin and continuous airflow dissipation to preserve freshness across road and sea routes.
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

        {/* SECTION 7: Reefer Container Shipping & Destination Transit Times */}
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
              <span>Loading: <strong>JNPT Mumbai & Land Customs Points</strong></span>
              <span className="text-amber-400 font-bold">Pre-Cooled Cargo</span>
            </div>
          </div>

          {/* Right: Sea, Road & Air Transit Routes */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <Globe2 className="w-4 h-4 text-accent" />
                <span>Multimodal Export Lanes</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                Fast Ocean, Road & Air Transit Times
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Our facilities sit on the Mumbai-Agra National Highway corridor, allowing quick 4-hour transfers to JNPT port terminals and direct access to overland freight corridors for Bangladesh and Nepal.
              </p>

              <div className="space-y-2.5">
                {shippingDestinations.map((dest, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                    <div className="font-bold text-slate-900 flex items-center">
                      <Truck className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
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
              * Measured from dispatch at Nashik packhouse to port docking or border customs clearance.
            </div>
          </div>

        </section>

        {/* SECTION 8: Comprehensive Parameter Specs Table */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display border-l-4 border-accent pl-3">
              Full Technical Product Specifications
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Consolidated specification matrix for quality control inspectors, quarantine officers, and commercial import procurement managers in Dubai, Bangladesh, and Nepal.
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

        {/* SECTION 9: Document Checklist & Trade Certifications */}
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
              Every container and truckload consignment is cleared with full regulatory documentation to ensure seamless clearance at Jebel Ali, Benapole, Birgunj, and regional customs checkpoints.
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
                <span className="font-bold text-white block">B/L & Border Consignment Notes</span>
                <span className="text-slate-400 text-[11px]">Ocean Bill of Lading, Truck Lorry Receipts & PI</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: B2B Frequently Asked Questions */}
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
