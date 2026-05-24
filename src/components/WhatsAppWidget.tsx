"use client";

import { useState } from "react";
import { MessageSquare, X, Send, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappBaseUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}`;

  const quickInquiries = [
    {
      label: "Nashik Red Onions (FOB/CIF)",
      text: siteConfig.products.onion.whatsappText,
    },
    {
      label: "Fresh Tomatoes (Crates)",
      text: siteConfig.products.tomato.whatsappText,
    },
    {
      label: "Premium Bhagwa Pomegranates",
      text: siteConfig.products.pomegranate.whatsappText,
    },
    {
      label: "General Import Inquiry",
      text: "Hello, I am interested in sourcing agricultural produce from Nashik. Please share your complete export catalog.",
    },
  ];

  const handleInquiryRedirect = (text: string) => {
    const encodedText = encodeURIComponent(text);
    const url = `${whatsappBaseUrl}?text=${encodedText}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window Panel */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-80 sm:w-88 mb-4 overflow-hidden transform transition-all duration-300 ease-out origin-bottom-right">
          {/* Header */}
          <div className="bg-primary p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center font-bold text-sm border border-emerald-400">
                  NE
                </div>
                {/* Active Indicator */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold font-sans">Nashik Export Desk</h4>
                <p className="text-[10px] text-emerald-200">Typically replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-all"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Quick Intro Message */}
          <div className="p-4 bg-slate-50 border-b border-slate-100">
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Welcome to the **Nashik Fruit & Vegetable** B2B trade desk. Select a commodity below to request instant FOB/CIF quotes.
            </p>
          </div>

          {/* Commodity Query Options */}
          <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
            {quickInquiries.map((inquiry, idx) => (
              <button
                key={idx}
                onClick={() => handleInquiryRedirect(inquiry.text)}
                className="w-full text-left px-3.5 py-2.5 bg-white border border-slate-200 hover:border-primary-light hover:bg-emerald-50/30 rounded-xl transition-all duration-200 group flex justify-between items-center"
              >
                <div className="pr-2">
                  <span className="text-[11px] font-bold text-primary block leading-none mb-1 font-sans">
                    {idx === 3 ? "Trade Desk" : "Commodity Spec"}
                  </span>
                  <span className="text-xs text-slate-700 font-semibold leading-tight font-sans">
                    {inquiry.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            ))}
          </div>

          {/* Footer Chat CTA */}
          <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
            <button
              onClick={() => handleInquiryRedirect("Hello, I am interested in sourcing fresh produce from Nashik. Please connect me with an export manager.")}
              className="inline-flex items-center space-x-2 text-xs font-bold text-primary hover:text-primary-light transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-accent" />
              <span>Or message custom inquiry details</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pulse-ring-effect relative bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Contact Export Desk via WhatsApp"
      >
        {isOpen ? (
          <X className="w-6.5 h-6.5" />
        ) : (
          <MessageSquare className="w-6.5 h-6.5" />
        )}
      </button>
    </div>
  );
}
