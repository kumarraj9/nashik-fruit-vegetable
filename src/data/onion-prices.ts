export interface PriceItem {
  name: string;
  spec: string;
  rate: string;
  currency?: string;
  unit?: string;
  extra?: string;
  flag?: string; // Country flag emoji or symbol
}

export interface OnionPrices {
  lastUpdated: string;       // Format: DD-MM-YYYY
  domesticBiltyDate: string; // Date for Domestic Spot Bilty
  newCrop: PriceItem[];      // New Crop Onion Export
  garvaCrop: PriceItem[];    // Garva Onion Export
  domesticSpotBilty: PriceItem[]; // Domestic Spot Bilty Rates
  domesticGeneral: PriceItem[];   // Domestic General Rates
}

// -------------------------------------------------------------
// UPDATE ONION PRICES HERE EVERY DAY
// -------------------------------------------------------------
export const onionPrices: OnionPrices = {
  lastUpdated: "19-09-2026",
  domesticBiltyDate: "19-09-2026",
  newCrop: [
    { name: "Gulf Dubai", flag: "🇦🇪", spec: "55mm+", rate: "51.00", currency: "Rs.", unit: "kg" },
    { name: "Colombo (Sri Lanka)", flag: "🇱🇰", spec: "45mm+", rate: "48.00", currency: "Rs.", unit: "kg" },
    { name: "Malaysia", flag: "🇲🇾", spec: "45mm+", rate: "47.50", currency: "Rs.", unit: "kg" }
  ],
  garvaCrop: [
    { name: "Gulf Dubai (Garva Pink)", flag: "🇦🇪", spec: "55mm+", rate: "51.00", currency: "Rs.", unit: "kg" },
    { name: "Colombo (Garva Pink)", flag: "🇱🇰", spec: "45mm+", rate: "48.00", currency: "Rs.", unit: "kg" },
    { name: "Malaysia (Garva Pink)", flag: "🇲🇾", spec: "45mm+", rate: "47.50", currency: "Rs.", unit: "kg" }
  ],
  domesticSpotBilty: [
    { name: "Spot Bilty Medium", flag: "🇮🇳", spec: "35mm+", rate: "41.00", currency: "Rs.", unit: "kg" },
    { name: "Spot Bilty Grade A", flag: "🇮🇳", spec: "45mm+", rate: "44.00", currency: "Rs.", unit: "kg" },
    { name: "Spot Bilty Large", flag: "🇮🇳", spec: "50mm+", rate: "46.00", currency: "Rs.", unit: "kg" },
    { name: "Spot Bilty Extra Large", flag: "🇮🇳", spec: "55mm+", rate: "47.00", currency: "Rs.", unit: "kg" }
  ],
  domesticGeneral: [
    { name: "Mix Mal", flag: "🇮🇳", spec: "40-60mm", rate: "41.00", currency: "Rs.", unit: "kg" },
    { name: "Khad Chopra", flag: "🇮🇳", spec: "Chopra", rate: "30.00", currency: "Rs.", unit: "kg" }
  ]
};
