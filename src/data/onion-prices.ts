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
  lastUpdated: "21-03-2026",
  domesticBiltyDate: "20-03-2026",
  newCrop: [
    { name: "Gulf Dubai", flag: "🇦🇪", spec: "55mm+", rate: "14.50", currency: "Rs.", unit: "kg" },
    { name: "Sri Lanka", flag: "🇱🇰", spec: "45mm+", rate: "13.50", currency: "Rs.", unit: "kg" },
    { name: "Malaysia", flag: "🇲🇾", spec: "45mm+", rate: "13.50", currency: "Rs.", unit: "kg", extra: "9kg packing" },
    { name: "Vietnam", flag: "🇻🇳", spec: "35mm+", rate: "10.00", currency: "Rs.", unit: "kg", extra: "10kg Mesh bag" }
  ],
  garvaCrop: [
    { name: "Gulf Dubai", flag: "🇦🇪", spec: "55mm+", rate: "16.00", currency: "Rs.", unit: "kg" },
    { name: "Colombo (Sri Lanka)", flag: "🇱🇰", spec: "45mm+", rate: "15.00", currency: "Rs.", unit: "kg" }
  ],
  domesticSpotBilty: [
    { name: "Super Golta", flag: "🇮🇳", spec: "30-35mm", rate: "9.50", currency: "Rs.", unit: "kg" },
    { name: "Medium", flag: "🇮🇳", spec: "35-45mm", rate: "11.00", currency: "Rs.", unit: "kg" },
    { name: "Medium-Large", flag: "🇮🇳", spec: "45-60mm", rate: "11.50", currency: "Rs.", unit: "kg" },
    { name: "Large", flag: "🇮🇳", spec: "55mm+", rate: "13.50", currency: "Rs.", unit: "kg" }
  ],
  domesticGeneral: [
    { name: "Domestic General", flag: "🇮🇳", spec: "45mm+", rate: "13.00", currency: "Rs.", unit: "kg" },
    { name: "Domestic Premium", flag: "🇮🇳", spec: "55mm+", rate: "15.00", currency: "Rs.", unit: "kg" }
  ]
};
