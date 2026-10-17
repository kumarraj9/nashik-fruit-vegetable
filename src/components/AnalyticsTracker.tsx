"use client";

import { useEffect } from "react";
import { trackWhatsAppInquiry, trackPhoneCall } from "@/lib/analytics";

/**
 * Global Analytics & New Tab Navigation Controller
 * 1. Automatically intercepts and tracks high-value buyer conversion clicks (WhatsApp, Phone)
 * 2. Enforces that all page links open in a new tab (target="_blank"), preserving the current tab
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    // Helper to ensure all valid anchor tags in DOM open in a new tab
    const enforceNewTabOnLinks = () => {
      try {
        const anchors = document.querySelectorAll<HTMLAnchorElement>("a[href]");
        anchors.forEach((a) => {
          const href = a.getAttribute("href") || "";
          // Exclude anchor jump links (#), javascript:, and telephone links (tel:)
          if (
            href &&
            !href.startsWith("#") &&
            !href.startsWith("javascript:") &&
            !href.startsWith("tel:")
          ) {
            if (a.target !== "_blank") {
              a.target = "_blank";
            }
            if (!a.rel || !a.rel.includes("noopener")) {
              a.rel = "noopener noreferrer";
            }
          }
        });
      } catch (e) {
        // ignore
      }
    };

    // Run immediately on mount
    enforceNewTabOnLinks();

    // Run on any DOM change (e.g. dynamic menus, modals, loaded content)
    const observer = new MutationObserver(() => {
      enforceNewTabOnLinks();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Capture-phase click listener to guarantee target="_blank" before Next.js Link router fires
    const handleCaptureClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";

      // 1. WhatsApp click interception & analytics tracking
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

      // 2. Direct Phone Call interception & tracking
      if (href.startsWith("tel:")) {
        trackPhoneCall(window.location.pathname);
        return;
      }

      // 3. For all page navigation links, force target="_blank"
      if (
        href &&
        !href.startsWith("#") &&
        !href.startsWith("javascript:")
      ) {
        anchor.target = "_blank";
        if (!anchor.rel) {
          anchor.rel = "noopener noreferrer";
        }
      }
    };

    document.addEventListener("click", handleCaptureClick, { capture: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleCaptureClick, { capture: true } as any);
    };
  }, []);

  return null;
}
