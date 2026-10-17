import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  MessageSquare, 
  ShieldCheck, 
  Plane, 
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
  Compass,
  Mountain,
  Sun,
  Snowflake
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Saputara Strawberry Supplier | Fresh Strawberries Exporter from Dang & Nashik Hills",
  description: "B2B supplier of export-quality fresh strawberries sourced directly from Saputara hill station (1,000m altitude). Winter Dawn, Sweet Charlie & Camarosa varieties with 9-12% Brix sweetness. Pre-cooled within 2 hours, packed in 250g clamshell punnets. Express air cargo to Dubai & GCC, temperature-controlled reefer road logistics to Indian metros.",
  keywords: [
    "strawberry supplier from saputara",
    "saputara strawberry exporter",
    "fresh strawberry supplier india",
    "dang strawberry farm export",
    "winter dawn strawberry exporter",
    "indian fresh strawberries export to dubai",
    "camarosa strawberries saputara",
    "strawberry punnet bulk wholesale",
    "hs code 08101000 strawberry",
    "strawberry packaging clamshell punnets",
    "surgana strawberry suppliers",
    "fresh berries exporter from maharashtra gujarat"
  ]
};

export default function StrawberryProductPage() {
  const product = siteConfig.products.strawberry;
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
        "name": "Fresh Strawberry Supplier from Saputara",
        "item": "https://nashikfruitandvegetable.com/strawberry-supplier-from-saputara/"
      }
    ]
  };

  // 2. Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fresh Saputara Strawberry (Export Grade A)",
    "image": "https://nashikfruitandvegetable.com/images/strawberry_export.png",
    "description": "High-altitude export-quality fresh strawberries sourced from the misty hills of Saputara and Surgana-Dang border. Hand-picked at dawn, pre-cooled within 2 hours, and packed in clear 200g/250g clamshell punnets. Winter Dawn, Sweet Charlie, and Camarosa varieties with Brix 9-12%.",
    "sku": "STRAWBERRY-SAP-004",
    "mpn": "HS-08101000",
    "countryOfOrigin": "IN",
    "brand": {
      "@type": "Brand",
      "name": "Nashik Fruit and Vegetable Company"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://nashikfruitandvegetable.com/strawberry-supplier-from-saputara/",
      "priceCurrency": "USD",
      "price": "0.00",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceType": "https://schema.org/InvoicePrice",
        "priceCurrency": "USD",
        "unitText": "Metric Ton / Kilogram (FOB / CIF / Air Freight)"
      },
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-11-01",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": [
          { "@type": "DefinedRegion", "addressCountry": "AE" },
          { "@type": "DefinedRegion", "addressCountry": "SA" },
          { "@type": "DefinedRegion", "addressCountry": "QA" },
          { "@type": "DefinedRegion", "addressCountry": "OM" },
          { "@type": "DefinedRegion", "addressCountry": "KW" },
          { "@type": "DefinedRegion", "addressCountry": "IN" }
        ],
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 2, "unitCode": "d" },
          "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 3, "unitCode": "d" }
        }
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
        "name": "What makes Saputara strawberries unique compared to other regions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Saputara is situated at an elevation of 1,000 meters in the Western Ghats (Sahyadri range). The mountain microclimate offers cool misty nights (8°C to 14°C) and bright sunny winter days. This diurnal temperature variation forces the strawberry plants to synthesize high natural sugars (Brix 9% to 12%), producing deep red conical fruit with intense natural sweetness and firm skin."
        }
      },
      {
        "@type": "Question",
        "name": "How is the cold chain managed for strawberry export to prevent spoilage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strawberries are harvested strictly during early morning hours (6 AM to 9 AM) before ambient temperatures rise. Within 120 minutes of harvest, the fruit undergoes forced-air rapid pre-cooling to bring pulp temperature down to +2°C. From that point onward, the cargo remains in an unbroken cold chain at 0°C to +2°C with 90-95% RH until delivery at retail shelves."
        }
      },
      {
        "@type": "Question",
        "name": "What packaging formats are used for air cargo export of strawberries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Export strawberries are packed in food-grade clear PET/RPET ventilated clamshell punnets (200g or 250g) fitted with moisture-absorbent bubble cushion pads at the base to eliminate transit abrasion. Eight to ten punnets are packed into a 5-ply ventilated master corrugated export carton (2kg to 2.5kg net weight), palletized, and shrink-wrapped with breathable perforated film."
        }
      },
      {
        "@type": "Question",
        "name": "What is the transit duration for strawberry air freight to Dubai and the Gulf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strawberries harvested in Saputara in the morning are transported via refrigerated van to Mumbai Chhatrapati Shivaji Maharaj International Airport (BOM) or Surat Airport (STV) within 4 to 5 hours. Direct air cargo reaches Dubai (DXB), Doha (DOH), and Riyadh (RUH) within 24 to 48 hours of harvest."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Minimum Order Quantity (MOQ) for fresh strawberries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For international express air cargo shipments, our MOQ is 500 kg (approx 200 to 250 master cartons). For domestic reefer truck shipments across Tier-1 Indian metros, the MOQ is 1 Metric Ton (approx 400 to 500 cartons)."
        }
      }
    ]
  };

  return (
    <div className="w-full bg-[#fdfdfd]">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb Header */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products/" className="hover:text-emerald-400 transition-colors">Produce Catalog</Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">Saputara Strawberries</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white py-12 sm:py-20 overflow-hidden border-b border-rose-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,63,94,0.12),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Back Link */}
              <Link
                href="/products/"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-rose-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                <span>Back to Produce Catalog</span>
              </Link>

              {/* Badges Ribbon */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center space-x-1.5 bg-rose-500/20 text-rose-300 border border-rose-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Mountain className="w-3.5 h-3.5 text-rose-400" />
                  <span>Saputara Hill Station • 1,000m Altitude</span>
                </span>
                <span className="inline-flex items-center space-x-1 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Brix 9% – 12% High Sweetness</span>
                </span>
                <span className="inline-flex items-center space-x-1 bg-blue-500/15 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Plane className="w-3.5 h-3.5 text-blue-400" />
                  <span>Express Air Cargo to Dubai & GCC</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                  Fresh Strawberry Supplier from <span className="text-rose-400">Saputara Hills</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
                  {product.tagline}
                </p>
              </div>

              {/* Key Value Prop Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-rose-900/50">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Varieties</span>
                  <span className="font-bold text-white text-sm">Winter Dawn & Camarosa</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-rose-900/50">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Pre-Cooling</span>
                  <span className="font-bold text-emerald-400 text-sm">Within 2 Hours</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-rose-900/50">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Packaging</span>
                  <span className="font-bold text-white text-sm">250g Punnets</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-rose-900/50">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Cold Chain</span>
                  <span className="font-bold text-blue-400 text-sm">0°C to +2°C Reefer</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center space-x-2 text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Instant WhatsApp Rates</span>
                </a>

                <Link
                  href="/contact-us/"
                  className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-rose-500/20 flex items-center justify-center space-x-2 text-center"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Request Air / Reefer Quotation</span>
                </Link>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider py-4 px-5 rounded-xl border border-slate-700 transition-colors flex items-center justify-center space-x-2 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-400" />
                  <span>Call Trade Desk</span>
                </a>
              </div>

              {/* Trust Credentials Footnote */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-slate-400">
                <span className="flex items-center text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1" />
                  APEDA Registered Exporter
                </span>
                <span>•</span>
                <span className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1" />
                  Phytosanitary Certified
                </span>
                <span>•</span>
                <span className="flex items-center text-slate-300">
                  <Plane className="w-4 h-4 text-blue-400 mr-1" />
                  24–48h Air Cargo to GCC
                </span>
              </div>

            </div>

            {/* Right Image / Hero Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-rose-900/40 shadow-2xl bg-slate-900/60 aspect-[4/3] sm:aspect-square flex items-center justify-center">
                <Image
                  src="/images/strawberry_export.png"
                  alt="Saputara Fresh Strawberries in 250g Clamshell Export Punnets"
                  width={600}
                  height={600}
                  priority
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-rose-500/30 p-3.5 rounded-2xl flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-rose-400 block">Export Benchmark</span>
                    <span className="text-xs font-bold text-white">Grade A+ Jumbo & Large</span>
                  </div>
                  <div className="text-right space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Sweetness</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">Brix 11.2%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 1: The Saputara Hill Station Advantage */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
              Terroir & Geographic Supremacy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900">
              Why Strawberries from the Hills of Saputara Are Renowned
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Situated perched at an altitude of 1,000 meters in the Sahyadri Western Ghats along the Dang-Nashik border, Saputara provides a rare agro-climatic paradise ideal for delicate soft fruit cultivation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: High Elevation & Microclimate */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-rose-300 transition-colors">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900">
                1,000m Mountain Microclimate
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cool misty nights (8°C to 14°C) combined with bright winter sunshine trigger prolonged natural photosynthesis, enabling the strawberry plant to produce deep red conical fruit with high solids and Brix sweetness reaching 9% to 12%.
              </p>
            </div>

            {/* Pillar 2: Red Laterite Volcanic Soil */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-rose-300 transition-colors">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900">
                Humus-Rich Red Laterite Soil
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The slopes of Saputara and Surgana feature porous, naturally drained red laterite soil enriched with organic leaf humus. This provides natural micronutrient uptake without chemical stress, giving the fruit a firm outer skin resistant to handling.
              </p>
            </div>

            {/* Pillar 3: Dawn Picking & Pre-Cooling */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-rose-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900">
                2-Hour Post-Harvest Pre-Cooling
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strawberries are hand-picked at dawn (6 AM to 9 AM) when fruit core temperature is at its lowest. Within 120 minutes, crates enter forced-air pre-cooling chambers bringing the core temperature to +2°C, halting respiration and locking in freshness.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Section 2: Commercial Export Varieties */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 font-mono">
              Certified Cultivars
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900">
              Commercial Export Strawberry Varieties
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We contract-procure across specialized farmer clusters in Saputara and the Surgana border belt cultivating globally validated hybrid cultivars suited for air and reefer transit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Variety 1: Winter Dawn */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 font-mono">Export Benchmark</span>
                <h3 className="text-lg font-bold font-display text-slate-900">Winter Dawn</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The undisputed workhorse for commercial export. Produces uniformly conical, deep red fruit with firm pericarp flesh. Exceptional resistance to skin abrasions and bruising during air cargo transit.
              </p>
              <div className="space-y-1.5 pt-2 text-xs border-t border-slate-100">
                <div className="flex justify-between text-slate-500">
                  <span>Shape:</span>
                  <span className="font-bold text-slate-800">Conical Symmetrical</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Brix:</span>
                  <span className="font-mono font-bold text-rose-600">9.5% – 11.5%</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Primary Market:</span>
                  <span className="font-bold text-slate-800">Dubai / GCC Air Cargo</span>
                </div>
              </div>
            </div>

            {/* Variety 2: Sweet Charlie */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 font-mono">High Sugar Aroma</span>
                <h3 className="text-lg font-bold font-display text-slate-900">Sweet Charlie</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Renowned for its intense sweet perfume and tender juicy pulp. Early-ripening variety favored by high-end pastry chefs, 5-star hotels, and luxury retail gift packs in Mumbai, Surat, and Dubai.
              </p>
              <div className="space-y-1.5 pt-2 text-xs border-t border-slate-100">
                <div className="flex justify-between text-slate-500">
                  <span>Shape:</span>
                  <span className="font-bold text-slate-800">Broad Conical / Heart</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Brix:</span>
                  <span className="font-mono font-bold text-emerald-600">10.5% – 12.5%</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Primary Market:</span>
                  <span className="font-bold text-slate-800">Luxury Retail & Horeca</span>
                </div>
              </div>
            </div>

            {/* Variety 3: Camarosa */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono">Jumbo Caliber</span>
                <h3 className="text-lg font-bold font-display text-slate-900">Camarosa</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Large to very large fruit sizing with dark red interior and exterior color. High firmness rating makes it ideal for long-distance multi-day reefer distribution across domestic Indian states and regional export.
              </p>
              <div className="space-y-1.5 pt-2 text-xs border-t border-slate-100">
                <div className="flex justify-between text-slate-500">
                  <span>Shape:</span>
                  <span className="font-bold text-slate-800">Flat Conical Large</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Brix:</span>
                  <span className="font-mono font-bold text-blue-600">8.5% – 10.0%</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Primary Market:</span>
                  <span className="font-bold text-slate-800">Domestic Cold-Chain / IQF</span>
                </div>
              </div>
            </div>

            {/* Variety 4: San Andreas */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 font-mono">Day-Neutral Bearing</span>
                <h3 className="text-lg font-bold font-display text-slate-900">San Andreas</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous seasonal producer with exceptional uniformity. Yields glossy bright orange-red to deep red berries with great post-harvest shelf stability and minimal cull rates during grading.
              </p>
              <div className="space-y-1.5 pt-2 text-xs border-t border-slate-100">
                <div className="flex justify-between text-slate-500">
                  <span>Shape:</span>
                  <span className="font-bold text-slate-800">Elongated Conical</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Brix:</span>
                  <span className="font-mono font-bold text-purple-600">9.0% – 10.5%</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Primary Market:</span>
                  <span className="font-bold text-slate-800">Supermarket Punnet Retail</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 3: Sizing & Mechanical Caliber Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
              Caliber & Weight Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900">
              Strawberry Size & Grading Parameters
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every punnet is packed with mechanically calibrated and manually checked berries to guarantee strict count uniformity, intact fresh green calyx leaves, and zero skin blemishes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Grade 1: Grade A+ Jumbo */}
            <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 bg-gradient-to-b from-rose-50/50 to-white hover:border-rose-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full font-mono">
                  Grade A+ Jumbo
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">35g+ per berry</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                10 – 12 Berries per Punnet
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elite size benchmark reserved for executive gifting, 5-star hotel banquets, and premium airline catering. Large broad berries with immaculate symmetry and vibrant green calyx.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" /> Diameter: 38mm – 45mm+</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" /> Target: Dubai, Riyadh Luxury Horeca</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" /> Pack: 250g Punnet with Bubble Pad</li>
              </ul>
            </div>

            {/* Grade 2: Grade A Large */}
            <div className="border-2 border-rose-500/80 rounded-2xl p-6 sm:p-8 space-y-4 bg-white shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                Export Benchmark
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full font-mono">
                  Grade A Large
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">25g – 35g per berry</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                14 – 16 Berries per Punnet
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The global international trade favorite. Perfect count-to-volume ratio for supermarket shelf displays. Fits tightly in 250g punnets with zero internal movement or friction.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" /> Diameter: 30mm – 38mm</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" /> Target: Hypermarket Retail Clamshells</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" /> Pack: 200g / 250g Punnets (8-10 per CTN)</li>
              </ul>
            </div>

            {/* Grade 3: Grade Medium */}
            <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 bg-gradient-to-b from-slate-50 to-white hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-200 px-3 py-1 rounded-full font-mono">
                  Grade Medium
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">15g – 25g per berry</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                18 – 22 Berries per Punnet
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard retail packaging and domestic city logistics. High berry count per gram, ideal for everyday family table consumption, bakery garnishing, and fruit salads.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" /> Diameter: 25mm – 30mm</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" /> Target: Domestic Tier-1 Metro Supermarkets</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" /> Pack: 200g Economy Punnets</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Packaging Engineering & Cold Chain */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400 font-mono">
              Cold Chain & Packaging Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white">
              Engineered for Zero Damage Across Air & Reefer Corridors
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Strawberries have delicate epidermis membranes. We employ food-grade ventilated clamshells and rapid thermal pull-down to ensure zero mold, decay, or transit sweating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            
            {/* Step 1 */}
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center text-rose-400">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                1. Ventilated Clamshells
              </h3>
              <p className="text-slate-400 leading-relaxed">
                200g & 250g food-grade PET/RPET punnets with slotted top and bottom air vents to maintain microclimate circulation without drying the calyx leaves.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                2. Bubble Cushion Base
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Each punnet is lined with a food-grade moisture-absorbent bubble cushion pad at the bottom to absorb transport shock and wick away micro-condensation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                <Snowflake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                3. Forced-Air Pre-Cooling
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Rapid thermal reduction bringing fruit core temperature from field warmth (22°C) down to +2°C within 120 minutes of dawn harvest to halt respiration.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                4. Express Air Cargo
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Refrigerated van transit to Mumbai (BOM) or Surat (STV) airports. Direct air freight to Dubai, Doha, and Muscat within 24–48 hours of harvest.
              </p>
            </div>

          </div>

          {/* Master Carton Sizing Specs */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 font-mono">Master Carton Spec</span>
              <h4 className="text-lg font-bold text-white">5-Ply CFB Corrugated Carton</h4>
              <p className="text-xs text-slate-400">Holds 8 or 10 punnets (2.0kg to 2.5kg net weight) with corner stack-interlocks.</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-mono">Palletization</span>
              <h4 className="text-lg font-bold text-white">Euro Pallet Configuration</h4>
              <p className="text-xs text-slate-400">120 to 140 master cartons per pallet wrapped with high-airflow perforated stretch film.</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 font-mono">Transit Temperature</span>
              <h4 className="text-lg font-bold text-white">0°C to +2°C • 90-95% RH</h4>
              <p className="text-xs text-slate-400">Strict cold-chain monitoring with digital USB data loggers in every export consignment.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Technical Specifications Table */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 font-mono">
              B2B Contract Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Technical Export Parameters Summary
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[10px] tracking-wider font-mono">
                <tr>
                  <th className="py-3.5 px-6">Specification Parameter</th>
                  <th className="py-3.5 px-6">Export Standard Value</th>
                  <th className="py-3.5 px-6">Compliance & Inspection Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans text-slate-700">
                {product.specs.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-slate-900">{item.parameter}</td>
                    <td className="py-3.5 px-6 font-semibold text-rose-700">{item.value}</td>
                    <td className="py-3.5 px-6 text-slate-500 text-[11px]">Strictly verified by QC desk before dispatch</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Section 6: Buyer Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
              Exporter Knowledge Base
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Frequently Asked Questions by Strawberry Importers
            </h2>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-start">
                  <HelpCircle className="w-4 h-4 text-rose-500 mr-2 shrink-0 mt-0.5" />
                  <span>{faq.name}</span>
                </h3>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 7: Proforma Quote Request / Conversion Card */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400 font-mono">
              Ready to Lock Consignment Allocation?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white">
              Order Fresh Saputara Strawberries for Your Market
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We provide daily farm-gate quotes, express air cargo booking from Mumbai (BOM) & Surat (STV), and refrigerated multi-temp land logistics across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire via WhatsApp Desk</span>
            </a>

            <Link
              href="/contact-us/"
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-rose-500/20 flex items-center justify-center space-x-2"
            >
              <FileCheck className="w-4 h-4" />
              <span>Generate Proforma Quotation</span>
            </Link>
          </div>

          <p className="text-[11px] text-slate-500 pt-2 font-mono">
            Direct farmer cluster sourcing • APEDA / FSSAI compliant • 24/7 cold-chain assurance
          </p>

        </div>
      </section>

    </div>
  );
}
