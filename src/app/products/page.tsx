import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Export Produce Catalog | Nashik Fruit and Vegetable Exporters",
  description: "Browse our premium B2B catalog: World-famous Nashik Red Onions, shelf-life graded Fresh Tomatoes, and premium Bhagwa Pomegranates. Explore sizing, packaging, and custom shipping details.",
};

export default function ProductsPage() {
  const productList = Object.values(siteConfig.products);

  return (
    <div className="w-full bg-[#fdfdfd] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-10 mb-16 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Grade-A Quality Certified</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
            Our Export Produce Catalog
          </h1>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-3xl">
            Nashik is the agricultural hub of India, providing high-quality soils and climates for premium cropping. Every batch listed below goes through rigorous sorting, weight grading, phytosanitary inspection, and cooling before shipping.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="space-y-16">
          {productList.map((product, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={product.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Product Image */}
                <div className="w-full lg:w-1/2 relative h-72 sm:h-96 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-102"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-md">
                    Export Ready
                  </div>
                </div>

                {/* Product Brief Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                    {product.name}
                  </h2>
                  <p className="text-sm font-bold text-emerald-700 font-sans tracking-wide uppercase">
                    {product.tagline}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {product.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center text-xs text-slate-700 font-semibold">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span>APEDA & FSSAI Compliant</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-700 font-semibold">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span>Custom Packing Available</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-700 font-semibold">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span>Reefer Cargo (FOB / CIF)</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-700 font-semibold">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span>Pre-shipping inspection done</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/${product.slug}`}
                      className="bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-200 text-center shadow-md hover:shadow-lg flex items-center justify-center space-x-1.5"
                    >
                      <span>View Technical Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-200 text-center border border-slate-200"
                    >
                      Request Proforma Price
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
