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
  verification: {
    google: "6JcadflBCxHMVpSj2XdXf9KAsxDRTwV6xdZO0-LRWlw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["Corporation", "WholesaleStore", "LocalBusiness"],
    "@id": "https://nashikfruitandvegetable.com/#organization",
    "name": "Nashik Fruit and Vegetable Company",
    "alternateName": ["Nashik Fruit & Vegetable Exporters", "Nashik Agri Export Desk"],
    "url": "https://nashikfruitandvegetable.com",
    "logo": "https://nashikfruitandvegetable.com/logo.png",
    "image": "https://nashikfruitandvegetable.com/images/onion_export.png",
    "telephone": "+917083960822",
    "email": "suraj@nashikfruitandvegetablecompany.com",
    "sameAs": [
      "https://www.youtube.com/@nashikfruits",
      "https://www.instagram.com/nashikfruits/",
      "https://wa.me/917083960822"
    ],
    "description": "Enterprise-grade B2B merchant exporter of Nashik Red Onions (Garva, Dark Red), Fresh Grade-A Tomatoes, and Bhagwa Pomegranates from Lasalgaon APMC to global destinations including Dubai (UAE), Malaysia, Sri Lanka, and Singapore.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "APMC Market Yard, Pimpalgaon Baswant",
      "addressLocality": "Nashik",
      "addressRegion": "Maharashtra",
      "postalCode": "422209",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.1747",
      "longitude": "73.9877"
    },
    "knowsAbout": [
      "Nashik Red Onion Export",
      "Lasalgaon APMC Market Yard",
      "Garva Onion 5-6 Month Shelf Life",
      "Bhagwa Pomegranate Export",
      "Fresh Tomato Grade A Export",
      "JNPT Nhava Sheva Reefer Container Shipping",
      "APEDA Registration",
      "FSSAI Licensing",
      "Phytosanitary Certification",
      "HS Code 07031010",
      "Dubai Jebel Ali Port Onion Supply",
      "Malaysia Port Klang Onion Supply"
    ],
    "areaServed": [
      { "@type": "Country", "name": "United Arab Emirates", "identifier": "AE" },
      { "@type": "Country", "name": "Malaysia", "identifier": "MY" },
      { "@type": "Country", "name": "Sri Lanka", "identifier": "LK" },
      { "@type": "Country", "name": "Singapore", "identifier": "SG" },
      { "@type": "Country", "name": "Vietnam", "identifier": "VN" },
      { "@type": "Country", "name": "Oman", "identifier": "OM" },
      { "@type": "Country", "name": "Qatar", "identifier": "QA" },
      { "@type": "Country", "name": "Kuwait", "identifier": "KW" },
      { "@type": "Country", "name": "India", "identifier": "IN" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "B2B Export Agricultural Produce Catalog",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Nashik Red Onion (HS Code 07031010)",
          "description": "Garva Pink, Dark Red & Light Red varieties graded 25mm to 80mm+"
        },
        {
          "@type": "OfferCatalog",
          "name": "Fresh Tomato Grade A (HS Code 07020000)",
          "description": "Firm export tomatoes packed in 10kg/15kg plastic crates"
        },
        {
          "@type": "OfferCatalog",
          "name": "Bhagwa Pomegranate (HS Code 08109010)",
          "description": "Deep red aril pomegranates sized 200g to 350g+ with foam nets"
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917083960822",
      "contactType": "sales",
      "areaServed": ["AE", "MY", "LK", "SG", "IN"],
      "availableLanguage": ["en", "hi", "mr"]
    }
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Google Analytics GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z618DXDCB5"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z618DXDCB5');
            `,
          }}
        />
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
