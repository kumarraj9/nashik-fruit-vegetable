import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nashik Fruit and Vegetable Exporters | Premium Agricultural Produce India",
  description: "Enterprise-grade B2B global agricultural exporter. Sourced directly from Nashik, India. APEDA, FSSAI certified exporter of world-famous Red Onions, fresh Grade-A Tomatoes, and premium Bhagwa Pomegranates to Dubai (UAE), Malaysia, Sri Lanka, and domestic wholesalers.",
  keywords: [
    "Nashik Onion Exporters",
    "Indian Onion Export Dubai",
    "Bhagwa Pomegranate Export",
    "FSSAI Certified Agri Exporters",
    "APEDA Registered Exporters India",
    "Nashik Tomato Export Price",
    "Agricultural Export India Nhava Sheva",
    "B2B Fresh Vegetables India"
  ],
  authors: [{ name: "Nashik Fruit and Vegetable Exporters" }],
  openGraph: {
    title: "Nashik Fruit and Vegetable Exporters | Global Agri Trade",
    description: "Sourcing premium onions, tomatoes, and Bhagwa pomegranates from Nashik farms to Middle East and SE Asian ports.",
    url: "https://nashikfruitandvegetable.com",
    siteName: "Nashik Fruit and Vegetable Exporters",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nashik Fruit and Vegetable Company",
    "alternateName": "Nashik Fruit & Vegetable Exporters",
    "url": "https://nashikfruitandvegetable.com",
    "logo": "https://nashikfruitandvegetable.com/logo.png",
    "image": "https://nashikfruitandvegetable.com/logo.png",
    "telephone": "+919226122922",
    "email": "inquiry@nashikfruitandvegetable.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lasalgaon APMC Market Yard",
      "addressLocality": "Nashik",
      "addressRegion": "Maharashtra",
      "postalCode": "422306",
      "addressCountry": "IN"
    }
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fdfdfd] text-slate-900 font-sans">
        <Navbar />
        {/* Padding top is added to account for the fixed sticky navbar */}
        <main className="flex-grow pt-[60px] sm:pt-[95px]">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
