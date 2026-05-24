"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageSquare, ArrowRight, Calendar, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function DailyRatesSection() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [product, setProduct] = useState("");
  const [error, setError] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!whatsapp.trim()) {
      setError("Please enter your WhatsApp number");
      return;
    }
    
    setError("");

    const text = `Hello Nashik Export Desk,\n\nI want to inquire about daily Onion Wholesale rates.\n\n• Name: ${name}\n• My WhatsApp: ${whatsapp}\n• Commodity/Inquiry Details: ${product || "Onion Wholesale Price Inquiry"}\n\nPlease share the current price details.`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedText}`;
    
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-slate-100 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-800 via-accent to-emerald-600" />
          
          {/* Left Column: Price Sheet Image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-accent" />
              <span>APMC Pimpalgaon Baswant Daily Rates</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Live Mandi Price Bulletin
            </h3>
            
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              We update our official mandi board sheets daily showing incoming volumes (tractors/pickups) and average price indicators for Red Onions, Tomatoes, and cash crops in Pimpalgaon Baswant APMC.
            </p>

            {/* Interactive Image Frame */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group shadow-md">
              <Image
                src="/images/daily_price_sheet.png"
                alt="Daily APMC Mandi Price Sheet Nashik"
                fill
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2">
                  <span>Mandi Rates Image View</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquire Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                Onion Wholesale Price in Nashik Today
              </h2>
              <p className="text-slate-500 text-xs leading-normal font-sans">
                Looking for today's bulk wholesale container rates? Fill out this quick desk inquiry, and we will send you the live quote directly to your WhatsApp.
              </p>
            </div>

            <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
              {/* Name Input */}
              <div className="space-y-1">
                <label htmlFor="daily-name" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                  Name
                </label>
                <input
                  type="text"
                  id="daily-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="form-input text-xs"
                />
              </div>

              {/* WhatsApp Number Input */}
              <div className="space-y-1">
                <label htmlFor="daily-whatsapp" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  id="daily-whatsapp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Enter your WhatsApp number"
                  className="form-input text-xs"
                />
              </div>

              {/* Product/Inquiry Details */}
              <div className="space-y-1">
                <label htmlFor="daily-product" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                  Product / Message
                </label>
                <textarea
                  id="daily-product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  rows={3}
                  placeholder="e.g. 55mm+ Red Onions, required 13 MT container price today..."
                  className="form-input text-xs"
                />
              </div>

              {/* Error message */}
              {error && (
                <p className="text-[10px] text-red-500 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Contact on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
