"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { PriceItem, OnionPrices } from "@/data/onion-prices";

interface OnionPriceBulletinProps {
  initialPrices: OnionPrices;
}

export default function OnionPriceBulletin({ initialPrices }: OnionPriceBulletinProps) {
  const [prices, setPrices] = useState<OnionPrices>(initialPrices);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // If no Google Sheet URL is configured, just skip the fetch
    if (!siteConfig.googleSheetPricesUrl) {
      return;
    }

    async function fetchLivePrices() {
      try {
        const response = await fetch(siteConfig.googleSheetPricesUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();
        const parsed = parseGoogleSheetCSV(csvText);
        
        if (parsed) {
          setPrices({
            lastUpdated: parsed.lastUpdated || initialPrices.lastUpdated,
            domesticBiltyDate: parsed.domesticBiltyDate || initialPrices.domesticBiltyDate,
            newCrop: parsed.newCrop && parsed.newCrop.length > 0 ? parsed.newCrop : initialPrices.newCrop,
            garvaCrop: parsed.garvaCrop && parsed.garvaCrop.length > 0 ? parsed.garvaCrop : initialPrices.garvaCrop,
            domesticSpotBilty: parsed.domesticSpotBilty && parsed.domesticSpotBilty.length > 0 ? parsed.domesticSpotBilty : initialPrices.domesticSpotBilty,
            domesticGeneral: parsed.domesticGeneral && parsed.domesticGeneral.length > 0 ? parsed.domesticGeneral : initialPrices.domesticGeneral,
          });
          setIsLive(true);
        }
      } catch (error) {
        console.error("Failed to fetch live prices from Google Sheets:", error);
      }
    }

    fetchLivePrices();
  }, [initialPrices]);

  // Clean CSV line parsing supporting optional quote fields
  function splitCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"' || char === "'") {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  }

  // Parse Google Sheets published CSV text
  function parseGoogleSheetCSV(csvText: string): Partial<OnionPrices> | null {
    try {
      const lines = csvText.split(/\r?\n/).map((line) => line.trim());
      if (lines.length <= 1) return null;

      const result: Partial<OnionPrices> = {
        newCrop: [],
        garvaCrop: [],
        domesticSpotBilty: [],
        domesticGeneral: [],
      };

      // Header row is skipped, parse starting from line 1
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue;

        const cols = splitCSVLine(line);
        if (cols.length < 2) continue;

        const category = cols[0];
        const valueOrName = cols[1];

        if (category === "lastUpdated") {
          result.lastUpdated = valueOrName || cols[8];
          continue;
        }
        if (category === "domesticBiltyDate") {
          result.domesticBiltyDate = valueOrName || cols[8];
          continue;
        }

        if (cols.length < 5) continue; // Need name, flag, spec, rate

        const item: PriceItem = {
          name: valueOrName,
          flag: cols[2] || undefined,
          spec: cols[3] || "",
          rate: cols[4] || "",
          currency: cols[5] || "Rs.",
          unit: cols[6] || "kg",
          extra: cols[7] || undefined,
        };

        if (category === "newCrop") {
          result.newCrop?.push(item);
        } else if (category === "garvaCrop") {
          result.garvaCrop?.push(item);
        } else if (category === "domesticSpotBilty") {
          result.domesticSpotBilty?.push(item);
        } else if (category === "domesticGeneral") {
          result.domesticGeneral?.push(item);
        }
      }

      return result;
    } catch (e) {
      console.error("CSV Parser Error:", e);
      return null;
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-emerald-950/15 shadow-lg overflow-hidden card-shadow">
      {/* Header Ribbon */}
      <div className="bg-[#022c22] text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start space-x-2.5">
          {/* Blinking green dot */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
          <h3 className="font-bold text-sm uppercase tracking-wider font-sans flex items-center gap-1.5">
            <span>Nashik Onion Live Price Bulletin</span>
            {isLive && (
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 uppercase tracking-widest font-black font-sans">
                Live Feed
              </span>
            )}
          </h3>
        </div>
        <span className="text-[10px] font-bold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 inline-block">
          Rate Sheet Date: {prices.lastUpdated}
        </span>
      </div>

      {/* Rates Display */}
      <div className="p-6 space-y-6">
        {/* Export Prices Grid */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-l-3 border-accent pl-2.5 font-display">
            Export Rates (New Crop & Garva)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* New Crop */}
            <div className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200/60 space-y-3">
              <p className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-widest border-b border-slate-200/50 pb-2 font-sans">
                New Crop Onion
              </p>
              <div className="space-y-2.5">
                {prices.newCrop.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-xs text-slate-700 py-1 border-b border-dashed border-slate-200/50 last:border-0 last:pb-0"
                  >
                    <span className="font-semibold text-slate-700 flex items-center">
                      {item.flag && <span className="text-base mr-2 shrink-0">{item.flag}</span>}
                      <span>{item.name}</span>
                      <span className="ml-2 text-[9px] px-1.5 py-0.5 bg-slate-200/60 text-slate-500 rounded font-bold">
                        {item.spec}
                      </span>
                    </span>
                    <div className="text-right flex flex-col items-end">
                      <span className="font-black text-xs sm:text-sm text-primary bg-emerald-50 border border-emerald-100 rounded-lg px-2.5 py-1 shadow-sm leading-none">
                        {item.currency} {item.rate}/{item.unit}
                      </span>
                      {item.extra && (
                        <span className="text-[8px] font-bold text-slate-400 mt-1">{item.extra}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Garva Onion */}
            <div className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200/60 space-y-3">
              <p className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-widest border-b border-slate-200/50 pb-2 font-sans">
                Garva Onion (Stored)
              </p>
              <div className="space-y-2.5">
                {prices.garvaCrop.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-xs text-slate-700 py-1 border-b border-dashed border-slate-200/50 last:border-0 last:pb-0"
                  >
                    <span className="font-semibold text-slate-700 flex items-center">
                      {item.flag && <span className="text-base mr-2 shrink-0">{item.flag}</span>}
                      <span>{item.name}</span>
                      <span className="ml-2 text-[9px] px-1.5 py-0.5 bg-slate-200/60 text-slate-500 rounded font-bold">
                        {item.spec}
                      </span>
                    </span>
                    <span className="font-black text-xs sm:text-sm text-primary bg-emerald-50 border border-emerald-100 rounded-lg px-2.5 py-1 shadow-sm leading-none shrink-0">
                      {item.currency} {item.rate}/{item.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Domestic Prices Grid */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex justify-between items-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-l-3 border-accent pl-2.5 font-display">
              Domestic Market Rates
            </h4>
            <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded font-sans uppercase">
              Spot Bilty: {prices.domesticBiltyDate}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Domestic Spot Bilty */}
            <div className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200/60 space-y-3">
              <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest border-b border-slate-200/50 pb-2 font-sans">
                Domestic Spot Bilty
              </p>
              <div className="space-y-2.5">
                {prices.domesticSpotBilty.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-xs text-slate-700 py-1 border-b border-dashed border-slate-200/50 last:border-0 last:pb-0"
                  >
                    <span className="font-semibold text-slate-700 flex items-center">
                      {item.flag && <span className="text-base mr-2 shrink-0">{item.flag}</span>}
                      <span>{item.name}</span>
                      <span className="ml-2 text-[9px] px-1.5 py-0.5 bg-slate-200/60 text-slate-500 rounded font-bold">
                        {item.spec}
                      </span>
                    </span>
                    <span className="font-black text-xs sm:text-sm text-slate-800 bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 shadow-sm leading-none shrink-0">
                      {item.currency} {item.rate}/{item.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Domestic General */}
            <div className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200/60 space-y-3">
              <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest border-b border-slate-200/50 pb-2 font-sans">
                Domestic General Rates
              </p>
              <div className="space-y-2.5">
                {prices.domesticGeneral.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-xs text-slate-700 py-1 border-b border-dashed border-slate-200/50 last:border-0 last:pb-0"
                  >
                    <span className="font-semibold text-slate-700 flex items-center">
                      {item.flag && <span className="text-base mr-2 shrink-0">{item.flag}</span>}
                      <span>{item.name}</span>
                      <span className="ml-2 text-[9px] px-1.5 py-0.5 bg-slate-200/60 text-slate-500 rounded font-bold">
                        {item.spec}
                      </span>
                    </span>
                    <span className="font-black text-xs sm:text-sm text-slate-800 bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 shadow-sm leading-none shrink-0">
                      {item.currency} {item.rate}/{item.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer terms */}
        <div className="bg-emerald-50 text-[10px] text-emerald-800 p-4 rounded-xl border border-emerald-100/60 leading-relaxed font-semibold font-sans">
          * All rates listed are indicative of the current day's APMC market trades and spot physical
          loads in Nashik region. Final B2B export prices vary based on packing specifications (5kg/10kg/20kg
          net bags) and live sea/ocean freight (FOB/CIF terms).
        </div>
      </div>
    </div>
  );
}
