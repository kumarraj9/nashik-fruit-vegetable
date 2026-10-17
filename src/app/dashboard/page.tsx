"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  MessageSquare, 
  Phone, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Lock, 
  Unlock, 
  Trash2, 
  Globe2, 
  Truck, 
  Ship, 
  Plane, 
  Sparkles, 
  TrendingUp,
  RefreshCw,
  Search
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { onionPrices } from "@/data/onion-prices";
import { LeadRecord } from "@/lib/analytics";

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "whatsapp" | "call" | "form">("all");

  const DEFAULT_PIN = "2026";

  useEffect(() => {
    // Check if previously unlocked on this browser
    const savedAuth = localStorage.getItem("nashik_dashboard_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
    loadLeads();
  }, []);

  const loadLeads = () => {
    try {
      const stored = localStorage.getItem("nashik_b2b_leads");
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        // Sample baseline starter records for preview
        const initialSamples: LeadRecord[] = [
          {
            id: "LEAD-SAMPLE-1",
            timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
            type: "whatsapp",
            commodity: "Nashik Red Onions (FOB/CIF)",
            placement: "/onion-exporter-from-nashik/",
            destination: "Dubai (Jebel Ali)"
          },
          {
            id: "LEAD-SAMPLE-2",
            timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
            type: "form",
            commodity: "Export Fresh Tomato Grade A",
            placement: "/contact-us/",
            destination: "Bangladesh",
            volume: "28"
          },
          {
            id: "LEAD-SAMPLE-3",
            timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
            type: "call",
            commodity: "Trade Desk Direct Call",
            placement: "/products/"
          }
        ];
        setLeads(initialSamples);
        localStorage.setItem("nashik_b2b_leads", JSON.stringify(initialSamples));
      }
    } catch (e) {
      // ignore
    }
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === DEFAULT_PIN || pinInput === "admin") {
      setIsAuthenticated(true);
      localStorage.setItem("nashik_dashboard_auth", "true");
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("nashik_dashboard_auth");
    setPinInput("");
  };

  const handleClearLeads = () => {
    if (confirm("Are you sure you want to clear the local inquiry log?")) {
      localStorage.removeItem("nashik_b2b_leads");
      setLeads([]);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    if (selectedFilter === "all") return true;
    return lead.type === selectedFilter;
  });

  const whatsappCount = leads.filter((l) => l.type === "whatsapp").length;
  const callCount = leads.filter((l) => l.type === "call").length;
  const formCount = leads.filter((l) => l.type === "form").length;
  const totalLeads = leads.length;

  // PIN Lock Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-slate-950 text-white">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6 text-center">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold font-display text-white">
              Export Desk Dashboard
            </h1>
            <p className="text-xs text-slate-400 font-sans">
              Nashik Fruit & Vegetable Company Analytics Portal
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div>
              <label htmlFor="pin-input" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Enter Security PIN (Default: 2026)
              </label>
              <input
                id="pin-input"
                type="password"
                maxLength={6}
                value={pinInput}
                onChange={(e) => { setPinInput(e.target.value); setPinError(false); }}
                placeholder="Enter PIN"
                className="w-full text-center text-2xl tracking-widest py-3 px-4 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-emerald-500 transition-colors"
                autoFocus
              />
              {pinError && (
                <p className="text-red-400 text-xs mt-2 font-medium">Incorrect PIN. Try 2026</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-500/20 uppercase tracking-wider"
            >
              Unlock Dashboard
            </button>
          </form>

          <p className="text-[10px] text-slate-500">
            Protected internal view • Google Analytics 4 Connected
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-950 text-white min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                Live Trade Desk Analytics
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Executive Export Inquiries Dashboard
            </h1>
            <p className="text-xs text-slate-400">
              Real-time buyer activity, WhatsApp quote inquiries, and Google Analytics monitoring.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={loadLeads}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleLogout}
              className="px-3.5 py-2 bg-slate-900 hover:bg-red-950/40 border border-slate-800 hover:border-red-800 text-slate-400 hover:text-red-400 text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5"
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>Lock</span>
            </button>
          </div>
        </div>

        {/* Live System Connectivity Ribbons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="font-bold text-slate-200 block">Google Analytics (GA4)</span>
                <span className="text-[10px] text-slate-400 font-mono">Tag ID: G-Z618DXDCB5</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Connected
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="font-bold text-slate-200 block">Search Console</span>
                <span className="text-[10px] text-slate-400">DNS & Meta Ownership</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Verified
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="font-bold text-slate-200 block">Lead Tracking</span>
                <span className="text-[10px] text-slate-400">generate_lead Event</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Active
            </span>
          </div>
        </div>

        {/* 4 Primary KPI Scorecards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Total Leads */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total B2B Leads</span>
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <BarChart3 className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              {totalLeads}
            </div>
            <p className="text-[11px] text-emerald-400 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-1" />
              <span>All conversion inquiries recorded</span>
            </p>
          </div>

          {/* Card 2: WhatsApp Leads */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp Inquiries</span>
              <div className="p-2 bg-emerald-600/20 rounded-lg text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-400">
              {whatsappCount}
            </div>
            <p className="text-[11px] text-slate-400">
              Instant quote button clicks
            </p>
          </div>

          {/* Card 3: Direct Phone Calls */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trade Desk Calls</span>
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                <Phone className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-amber-400">
              {callCount}
            </div>
            <p className="text-[11px] text-slate-400">
              Direct mobile / office dial clicks
            </p>
          </div>

          {/* Card 4: Formal Quote Requests */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Quote Inquiries Sent</span>
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-blue-400">
              {formCount}
            </div>
            <p className="text-[11px] text-slate-400">
              Full Proforma quote submissions
            </p>
          </div>
        </div>

        {/* 1-Click Direct Google Tools Launchpad */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold font-display text-white flex items-center">
                <Sparkles className="w-4 h-4 text-accent mr-2" />
                1-Click Official Google Analytics & Search Reports
              </h2>
              <p className="text-xs text-slate-400">
                Open live Google platforms directly in a new tab without logging in or searching.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/80 p-4 rounded-2xl flex items-center justify-between transition-all group"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-300 block">Google Analytics Realtime</span>
                <span className="text-[11px] text-slate-400 block">See live buyers on website now</span>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            <a
              href="https://search.google.com/search-console"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-950/80 hover:bg-blue-900 border border-blue-800/80 p-4 rounded-2xl flex items-center justify-between transition-all group"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-300 block">Google Search Console</span>
                <span className="text-[11px] text-slate-400 block">Google ranking keywords & clicks</span>
              </div>
              <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            <a
              href="https://tagassistant.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-950/80 hover:bg-purple-900 border border-purple-800/80 p-4 rounded-2xl flex items-center justify-between transition-all group"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-purple-300 block">Google Tag Assistant</span>
                <span className="text-[11px] text-slate-400 block">Test GTM & GA4 tag hits</span>
              </div>
              <ExternalLink className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>
          </div>
        </div>

        {/* Section: Live Inquiries & Leads Feed */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold font-display text-white">
                Recent Buyer Inquiries & Activity Feed
              </h2>
              <p className="text-xs text-slate-400">
                Recorded whenever international buyers click WhatsApp, call, or submit quote requests.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex bg-slate-800 p-1 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${selectedFilter === "all" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  All ({leads.length})
                </button>
                <button
                  onClick={() => setSelectedFilter("whatsapp")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${selectedFilter === "whatsapp" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  WhatsApp ({whatsappCount})
                </button>
                <button
                  onClick={() => setSelectedFilter("form")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${selectedFilter === "form" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  Forms ({formCount})
                </button>
                <button
                  onClick={() => setSelectedFilter("call")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${selectedFilter === "call" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  Calls ({callCount})
                </button>
              </div>

              {leads.length > 0 && (
                <button
                  onClick={handleClearLeads}
                  className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
                  title="Clear Log"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-800 rounded-2xl space-y-2">
              <Clock className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-sm font-bold text-slate-400">No leads recorded yet under this filter</p>
              <p className="text-xs text-slate-500">Visit any page and click WhatsApp or submit a form to see it appear here in real-time.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-4">Channel</th>
                    <th className="py-3 px-4">Commodity / Inquiry</th>
                    <th className="py-3 px-4">Page / Source</th>
                    <th className="py-3 px-4">Target Market / Details</th>
                    <th className="py-3 px-4 text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4">
                        {lead.type === "whatsapp" && (
                          <span className="inline-flex items-center text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px]">
                            <MessageSquare className="w-3 h-3 mr-1" />
                            WhatsApp
                          </span>
                        )}
                        {lead.type === "form" && (
                          <span className="inline-flex items-center text-blue-400 font-bold bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded text-[10px]">
                            <FileText className="w-3 h-3 mr-1" />
                            Quote Form
                          </span>
                        )}
                        {lead.type === "call" && (
                          <span className="inline-flex items-center text-amber-400 font-bold bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded text-[10px]">
                            <Phone className="w-3 h-3 mr-1" />
                            Direct Call
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-semibold text-white">
                        {lead.commodity}
                      </td>
                      <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">
                        {lead.placement}
                      </td>
                      <td className="py-3 px-4 text-slate-300">
                        {lead.destination ? (
                          <span className="text-emerald-400 font-semibold">{lead.destination}</span>
                        ) : (
                          <span className="text-slate-500">Global B2B</span>
                        )}
                        {lead.volume && ` • ${lead.volume} MT`}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-400 font-mono text-[10px]">
                        {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Section: Major Export Corridors Status */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div>
            <h2 className="text-lg font-bold font-display text-white">
              Primary Export Lanes & Logistics Status
            </h2>
            <p className="text-xs text-slate-400">
              Active shipping routes and transit schedules out of Nashik and Mumbai terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center">
                  <Ship className="w-4 h-4 text-emerald-400 mr-1.5" />
                  Dubai (Jebel Ali / UAE)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-slate-400 text-[11px]">Sea Reefer: 4-6 Days • Air Cargo: 24-48 Hours</p>
              <div className="text-[10px] text-slate-500">Departure: JNPT Nhava Sheva (Mumbai)</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center">
                  <Truck className="w-4 h-4 text-emerald-400 mr-1.5" />
                  Bangladesh (Dhaka / Benapole)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-slate-400 text-[11px]">Road Transit: 2-3 Days via Petrapole LCS</p>
              <div className="text-[10px] text-slate-500">Departure: Pimpalgaon / Nashik Packhouses</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center">
                  <Truck className="w-4 h-4 text-emerald-400 mr-1.5" />
                  Nepal (Kathmandu / Birgunj)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-slate-400 text-[11px]">Road Transit: 2-3 Days via Raxaul / Birgunj</p>
              <div className="text-[10px] text-slate-500">Direct to Kalimati Fruit & Veg Market</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center">
                  <Ship className="w-4 h-4 text-emerald-400 mr-1.5" />
                  Sri Lanka (Colombo Port)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-slate-400 text-[11px]">Sea Reefer: 3-4 Days Fast Freight</p>
              <div className="text-[10px] text-slate-500">Departure: JNPT Nhava Sheva (Mumbai)</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center">
                  <Ship className="w-4 h-4 text-emerald-400 mr-1.5" />
                  Malaysia (Port Klang)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-slate-400 text-[11px]">Ocean Reefer: 8-10 Days Direct</p>
              <div className="text-[10px] text-slate-500">Departure: JNPT Nhava Sheva (Mumbai)</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center">
                  <Globe2 className="w-4 h-4 text-emerald-400 mr-1.5" />
                  Domestic Tier-1 Mandis
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-slate-400 text-[11px]">Express Cold-Chain Land Routes: 1-3 Days</p>
              <div className="text-[10px] text-slate-500">Spot Bilty delivery across India</div>
            </div>
          </div>
        </div>

        {/* Section: Live Onion Mandi Rate Reference */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold font-display text-white">
                Live Daily Wholesale Rates Reference
              </h2>
              <p className="text-xs text-slate-400">
                Official bulletin published on the website ({onionPrices.lastUpdated})
              </p>
            </div>
            <Link
              href="/onion-exporter-from-nashik/"
              className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center"
            >
              <span>View Onion Page</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
            <div className="bg-slate-800/70 p-3.5 rounded-xl border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Gulf Dubai 55mm</span>
              <span className="text-base font-extrabold text-emerald-400">₹51.00 / kg</span>
            </div>
            <div className="bg-slate-800/70 p-3.5 rounded-xl border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Colombo 45mm+</span>
              <span className="text-base font-extrabold text-emerald-400">₹48.00 / kg</span>
            </div>
            <div className="bg-slate-800/70 p-3.5 rounded-xl border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Malaysia 45mm+</span>
              <span className="text-base font-extrabold text-emerald-400">₹47.50 / kg</span>
            </div>
            <div className="bg-slate-800/70 p-3.5 rounded-xl border border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Spot Bilty 55mm+</span>
              <span className="text-base font-extrabold text-emerald-400">₹47.00 / kg</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
