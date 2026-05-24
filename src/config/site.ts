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
    { country: "Dubai (UAE)", type: "International Sea & Air Route", transitTime: "4-5 Days", transitPort: "Jebel Ali Port" },
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
        { parameter: "Variety", value: "Nashik Dark Red / Light Red" },
        { parameter: "Size Grades", value: "45mm+, 55mm+ (Strictly graded for Gulf & Southeast Asian Markets)" },
        { parameter: "Packaging", value: "5kg, 10kg, 20kg, 50kg Lennonet/Mesh Bags (Custom branding available)" },
        { parameter: "Availability", value: "Year-Round (Summer, Monsoon, and Winter crop cycles)" },
        { parameter: "Minimum Order Qty (MOQ)", value: "1x20ft (approx 13 MT) or 1x40ft Reefer Container (approx 29 MT)" },
        { parameter: "Quality Standards", value: "Well cured, skin dry, free from mold/decay, sound bulbs" },
      ]
    },
    tomato: {
      id: "tomato",
      slug: "tomato-supplier-from-nashik",
      name: "Premium Fresh Tomato",
      tagline: "Firm-textured, glossy red tomatoes graded strictly for long-transit sea shipments.",
      description: "Our export-grade tomatoes are harvested at the optimal maturity stage to ensure they reach international markets like Dubai and Malaysia in perfect firmness. Advanced sorting removes blemishes and prevents cracking.",
      imageUrl: "/images/tomato_export.png",
      whatsappText: "Hello, I want to inquire about bulk ordering fresh Tomatoes. Please send available packaging options and transit timelines.",
      specs: [
        { parameter: "Grade", value: "Export Quality Grade A" },
        { parameter: "Maturity Stage", value: "Turning / Breaking Red (Customized based on sea transit duration)" },
        { parameter: "Packaging", value: "10kg / 14kg Premium Plastic or heavy-duty Corrugated Crates" },
        { parameter: "Quality Parameters", value: "Firm texture, glossy red skin, blemish-free, zero cracking" },
        { parameter: "Storage Conditions", value: "Ventilated container or Reefer maintained at 10-12°C" },
        { parameter: "Minimum Order Qty (MOQ)", value: "1x20ft Reefer Container" },
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
