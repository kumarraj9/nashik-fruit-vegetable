/**
 * Google Analytics 4 (GA4) & Google Tag Manager (GTM) Conversion Events Tracker
 * Nashik Fruit and Vegetable Company
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Dispatch event to both gtag() and dataLayer
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === "undefined") return;

  // 1. Google Analytics 4 (gtag.js)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // 2. Google Tag Manager / dataLayer push
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

export interface LeadRecord {
  id: string;
  timestamp: string;
  type: "whatsapp" | "form" | "call";
  commodity: string;
  placement: string;
  destination?: string;
  volume?: string;
  name?: string;
  company?: string;
  phone?: string;
  message?: string;
}

const saveLeadRecord = (record: Omit<LeadRecord, "id" | "timestamp">) => {
  if (typeof window === "undefined") return;

  const newLead: LeadRecord = {
    id: "LEAD-" + Date.now().toString(36).toUpperCase(),
    timestamp: new Date().toISOString(),
    ...record,
  };

  // 1. Save locally in current browser
  try {
    const existing = JSON.parse(localStorage.getItem("nashik_b2b_leads") || "[]");
    const updated = [newLead, ...existing].slice(0, 100);
    localStorage.setItem("nashik_b2b_leads", JSON.stringify(updated));
  } catch (e) {
    // Ignore storage errors
  }

  // 2. Post to central PHP API backend on Hostinger server
  try {
    fetch("/api/leads.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      keepalive: true,
    }).catch(() => {
      // Graceful fallback if offline
    });
  } catch (e) {
    // Ignore fetch errors
  }
};

/**
 * Standard GA4 generate_lead conversion event
 */
export const trackGenerateLead = (
  leadType: "whatsapp" | "form" | "call",
  details: Record<string, any> = {}
) => {
  trackEvent("generate_lead", {
    lead_type: leadType,
    currency: "USD",
    value: 1, // Positive lead signal for Google Analytics / Google Ads conversion bidding
    ...details,
  });

  saveLeadRecord({
    type: leadType,
    commodity: details.commodity || (leadType === "call" ? "Trade Desk Call" : "General Export Inquiry"),
    placement: details.placement || (typeof window !== "undefined" ? window.location.pathname : "Website"),
    destination: details.destination,
    volume: details.volume,
    name: details.name,
    company: details.company,
    phone: details.phone,
    message: details.message,
  });
};

/**
 * WhatsApp Inquiry Click Tracking
 */
export const trackWhatsAppInquiry = (details: {
  commodity?: string;
  placement?: string;
  destination?: string;
} = {}) => {
  trackEvent("whatsapp_inquiry", {
    ...details,
  });
  trackGenerateLead("whatsapp", details);
};

/**
 * Phone Call Click Tracking
 */
export const trackPhoneCall = (placement: string) => {
  trackEvent("phone_call_click", {
    placement,
  });
  trackGenerateLead("call", { placement });
};

/**
 * B2B Quote Form Submission Tracking
 */
export const trackQuoteFormSubmission = (details: {
  commodity?: string;
  destination?: string;
  volume?: string;
  name?: string;
  company?: string;
  phone?: string;
  message?: string;
  placement?: string;
} = {}) => {
  trackEvent("quote_form_submit", {
    ...details,
  });
  trackGenerateLead("form", details);
};
