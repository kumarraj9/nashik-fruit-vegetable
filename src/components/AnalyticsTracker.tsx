"use client";

import { useEffect } from "react";
import { trackWhatsAppInquiry, trackPhoneCall } from "@/lib/analytics";

/**
 * Global Analytics Tracker
 * Automatically intercepts and tracks high-value buyer conversion clicks:
 * 1. All WhatsApp links (wa.me) -> fires 'whatsapp_inquiry' & 'generate_lead'
 * 2. All Phone call links (tel:) -> fires 'phone_call_click' & 'generate_lead'
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";

      // 1. WhatsApp click interception
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        const buttonText = (
          anchor.innerText ||
          anchor.getAttribute("title") ||
          anchor.getAttribute("aria-label") ||
          "WhatsApp Inquiry"
        )
          .replace(/\s+/g, " ")
          .trim();

        trackWhatsAppInquiry({
          commodity: buttonText,
          placement: window.location.pathname,
        });
      }

      // 2. Direct Phone Call interception
      if (href.startsWith("tel:")) {
        trackPhoneCall(window.location.pathname);
      }
    };

    document.addEventListener("click", handleGlobalClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return null;
}
