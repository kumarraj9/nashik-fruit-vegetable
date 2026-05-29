import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageSquare, ShieldCheck, Ship, Calendar, Award, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Export Specifications: Bhagwa Pomegranate | B2B Bulk Supply",
  description: "B2B Technical specifications for Indian Bhagwa Pomegranates. Weight sizing 200g-350g+, corrugated box packaging with foam nets, 60 days cold storage shelf-life, and trade terms.",
};

export default function PomegranateProductPage() {
  const product = siteConfig.products.pomegranate;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(product.whatsappText)}`;

  return (
    <div className="w-full bg-[#fdfdfd] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/products/" 
          className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-primary uppercase tracking-wider mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
          Back to Catalog
        </Link>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Image & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-[22rem] sm:h-[30rem] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-md">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-md">
                100% Bhagwa Variety
              </div>
            </div>

            {/* Quick Specs Callout */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 space-y-4">
              <h3 className="font-bold text-slate-905 text-sm uppercase tracking-wider border-b border-slate-200 pb-2">Wholesale Trade Terms</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-xs">
                <div className="flex items-start">
                  <Ship className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 block">Loading Port:</span>
                    <span className="text-slate-500">JNPT / Nhava Sheva (Mumbai)</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 block">Lead Time:</span>
                    <span className="text-slate-500">6-8 Days from order confirmation</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 block">Certificates Issued:</span>
                    <span className="text-slate-500">Phytosanitary Cert, Certificate of Origin, APEDA verified testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Detailed Spec Table */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>Premium Quality Standard</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
                {product.name}
              </h1>
              <p className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                {product.tagline}
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {product.description}
              </p>
              <p className="text-slate-600 text-xs leading-relaxed font-sans">
                The Bhagwa pomegranate is globally acclaimed for its large size, uniform deep-red color, soft seeds, and luscious sweet taste. Because of its thick rind, it has exceptional travel endurance. Every fruit is individually cushioned with foam netting and packaged in standard corrugated trays to prevent friction damage during global transit.
              </p>
            </div>

            {/* B2B Inquire CTA Actions */}
            <div className="bg-[#022c22] text-white p-6 rounded-2xl border border-emerald-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 card-shadow">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="font-bold text-sm uppercase tracking-wider text-emerald-300">Request Crop Catalog & Pricing</h3>
                <p className="text-[11px] text-slate-300 font-sans">Discuss custom grading parameters, air freight setups, and reefer ocean timelines.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider py-3.5 px-5 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-accent/20 text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Inquire via WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-5 rounded-xl border border-white/20 transition-all duration-200 flex items-center justify-center space-x-2 text-center"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>

            {/* B2B Technical Specs HTML Table */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-accent pl-3 font-display">
                Export Grade Specifications
              </h2>
              
              <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
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
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
