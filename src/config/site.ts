export const siteConfig = {
  name: "Nashik Fruit and Vegetable Company",
  shortName: "Nashik Fruit & Veg",
  description: "Enterprise-grade B2B international agricultural exporter. Sourcing premium onions, tomatoes, and pomegranates directly from Nashik farms to global markets including Dubai (UAE), Sri Lanka, Malaysia, and domestic wholesalers.",
  url: "https://nashikfruitandvegetablecompany.com",
  googleSheetPricesUrl: "", // URL of published Google Sheet CSV for live price updates
  contact: {
    phone: "+91 70839 60822",
    whatsappNumber: "917083960822", // Format: CountryCode + Number without symbols
    email: "suraj@nashikfruitandvegetablecompany.com",
    address: "APMC Market Yard, Pimpalgaon Baswant, Nashik, Maharashtra - 422209, India",
    logisticsHub: "JNPT / Nhava Sheva Port, Mumbai, India",
  },
  social: {
    youtube: "https://www.youtube.com/@nashikfruits",
    instagram: "https://www.instagram.com/nashikfruits/",
    whatsapp: "https://wa.me/917083960822",
  },
  trustSignals: {
    apeda: {
      name: "APEDA Registered",
      desc: "Agricultural & Processed Food Products Export Development Authority Registration",
      badgeId: "APEDA/REG/MH/2026",
    },
    fssai: {
      name: "FSSAI Certified",
      desc: "Food Safety and Standards Authority of India License",
      badgeId: "Lic. No. 11524000000000",
    },
    iec: {
      name: "IEC Compliant",
      desc: "Import-Export Code Registration from DGFT India",
      badgeId: "IEC: 0316XXXXXX",
    },
    phytosanitary: {
      name: "Phytosanitary Certified",
      desc: "Government-Assured plant health inspection and clearance certificate",
    }
  },
  destinations: [
    { country: "Dubai (UAE)", type: "International Sea & Air Route", transitTime: "4-5 Days", transitPort: "Jebel Ali Port / Air Cargo" },
    { country: "Bangladesh", type: "Cross-Border Land Customs Route", transitTime: "2-3 Days", transitPort: "Petrapole - Benapole Border" },
    { country: "Nepal", type: "Cross-Border Overland Route", transitTime: "2-3 Days", transitPort: "Raxaul - Birgunj Border" },
    { country: "Sri Lanka", type: "International Sea Route", transitTime: "5-6 Days", transitPort: "Colombo Port" },
    { country: "Malaysia", type: "International Sea Route", transitTime: "8-10 Days", transitPort: "Port Klang" },
    { country: "Domestic (India)", type: "Express Cold-Chain Land Routes", transitTime: "1-3 Days", transitPort: "All Tier-1 Hubs" },
  ],
  products: {
    onion: {
      id: "onion",
      slug: "onion-exporter-from-nashik",
      name: "Nashik Red Onion",
      tagline: "World-famous high-pungency red onions sourced directly from the Lasalgaon & Pimpalgaon agricultural belts.",
      description: "Nashik red onions are globally renowned for their strong pungency, deep red skin layers, and exceptionally long shelf life. Handled through our dedicated curing and grading lines to match precise B2B client demands.",
      imageUrl: "/images/onion_export.png",
      whatsappText: "Hello, I am looking to import Nashik Red Onions. Please share current FOB/CIF prices for Grade 55mm+.",
      specs: [
        { parameter: "HS Code", value: "07031010 (Fresh Onions)" },
        { parameter: "Variety", value: "Nashik Dark Red, Light Red & Garva (Rabi)" },
        { parameter: "Origin", value: "Lasalgaon & Pimpalgaon APMC Belt, Nashik, Maharashtra, India" },
        { parameter: "Size Grades", value: "25-35mm (Small), 35-45mm, 45-55mm (Grade A), 50-70mm, 55mm+ & 60-80mm+ (Jumbo)" },
        { parameter: "Packaging Options", value: "3kg, 5kg, 9kg, 10kg, 18kg, 20kg, 25kg, 50kg Lenonet Mesh & Hessian Jute Bags" },
        { parameter: "Harvest Availability", value: "Year-Round (Kharif: Oct-Dec | Late Kharif: Jan-Mar | Garva/Rabi: Apr-Jun)" },
        { parameter: "Solids / Organoleptic", value: "Brix 11 - 13%, High Pungency, Deep Crimson Red Skin Layers" },
        { parameter: "Natural Shelf Life", value: "Up to 5 - 6 Months (Garva Crop) under ambient ventilated storage" },
        { parameter: "Minimum Order Qty (MOQ)", value: "1x40ft Reefer Container (approx 28 - 29 MT) or 1x20ft (approx 13 MT)" },
        { parameter: "Quality Parameters", value: "Well-cured outer skin, dry neck, free from sprouts, double bulbs & decay" },
        { parameter: "Container Shipping Temp", value: "+4°C to +6°C Reefer, 65-70% RH, 15-20 CBM/hr Airflow" },
        { parameter: "Certifications Issued", value: "APEDA Registration, FSSAI, Phytosanitary Certificate, Certificate of Origin" }
      ]
    },
    tomato: {
      id: "tomato",
      slug: "tomato-supplier-from-nashik",
      name: "Premium Fresh Tomato",
      tagline: "Export-Quality Tomatoes Sourced from Trusted Farms in Nashik for Dubai, Bangladesh & Nepal.",
      description: "Our export-quality tomatoes are sourced directly from trusted partner farms in the Pimpalgaon & Nashik belts. Graded strictly at breaker/turning maturity with thick pericarp walls, ensuring peak freshness across ocean sea routes to Dubai and express overland corridors to Bangladesh and Nepal.",
      imageUrl: "/images/tomato_export.png",
      whatsappText: "Hello, I want to inquire about bulk ordering export-quality fresh Tomatoes for Dubai / Bangladesh / Nepal. Please send pricing and transit schedules.",
      specs: [
        { parameter: "HS Code", value: "07020000 (Fresh or Chilled Tomatoes)" },
        { parameter: "Varieties", value: "Semi-Determinate & Determinate Hybrids (Abhinav, US 440, Saaho, Vaishnavi)" },
        { parameter: "Origin", value: "Pimpalgaon Baswant & Nashik APMC Belt, Maharashtra, India" },
        { parameter: "Maturity Stage", value: "Turning / Breaker (10-30% pink) for sea shipping, Pink / Light Red for fast transit" },
        { parameter: "Size & Diameter", value: "40-50mm (Small), 50-60mm (Export Grade A), 60-70mm (Large Select), 70-85mm+ (Jumbo)" },
        { parameter: "Fruit Weight", value: "80g to 160g+ per fruit (Uniform mechanical grading)" },
        { parameter: "Fruit Firmness", value: "Pressure test > 4.5 kg/cm² (Thick pericarp walls, zero transit cracking)" },
        { parameter: "Soluble Solids (TSS)", value: "Brix 4.5% - 5.5%, Rich natural lycopene content" },
        { parameter: "Packaging Options", value: "10kg & 14/15kg Heavy-duty perforated plastic crates, 5kg/7kg/10kg 5-Ply Corrugated boxes" },
        { parameter: "Container Shipping Temp", value: "+10°C to +12°C Reefer, 85-90% RH, continuous airflow (prevents chilling injury)" },
        { parameter: "Minimum Order Qty (MOQ)", value: "1x40ft Reefer Container (approx 14 - 16 MT) or 1x20ft (approx 7 - 8 MT) or Air Freight" },
        { parameter: "Certifications Issued", value: "APEDA Registration, FSSAI, Phytosanitary Certificate, Certificate of Origin, MRL Test" }
      ]
    },
    pomegranate: {
      id: "pomegranate",
      slug: "pomegranate-supplier-from-nashik",
      name: "Bhagwa Pomegranate",
      tagline: "The elite 'Bhagwa' variety - deep red skin, soft seeds, and luscious sweet arils.",
      description: "Bhagwa is India's premium export pomegranate variety, celebrated for its bold red color, thick protective skin (ideal for shipping), and high juice content. Packed carefully in custom crates with foam nets.",
      imageUrl: "/images/pomegranate_export.png",
      whatsappText: "Hello, I am an international buyer looking to source Premium Bhagwa Pomegranates. Please share your product catalog.",
      specs: [
        { parameter: "Variety", value: "100% Premium Bhagwa" },
        { parameter: "Weight Sizing", value: "200g-250g, 250g-300g, 300g-350g, 350g+ per fruit" },
        { parameter: "Packing", value: "3kg / 4kg / 5kg standard Corrugated Export Boxes with custom foam nets" },
        { parameter: "Shelf Life", value: "Up to 60 days in cold storage (at 5-10°C, 90-95% RH)" },
        { parameter: "Minimum Order Qty (MOQ)", value: "1x20ft Reefer Container or Air Freight pallet loads" },
        { parameter: "Quality Parameters", value: "Glossy deep red rind, free from spots/sunburns, sweet ruby-red arils" },
      ]
    }
  }
};
