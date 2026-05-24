"use client";

import { useState } from "react";
import { Send, Check, MessageSquare, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FormData {
  fullName: string;
  companyName: string;
  destination: string;
  product: string;
  volume: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  destination?: string;
  product?: string;
  volume?: string;
  phone?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    destination: "",
    product: "",
    volume: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const productsOptions = [
    { value: "onion", label: "Nashik Red Onion" },
    { value: "tomato", label: "Premium Fresh Tomato" },
    { value: "pomegranate", label: "Bhagwa Pomegranate" },
    { value: "mixed", label: "Mixed Container / General Produce" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.companyName.trim()) tempErrors.companyName = "Company Name is required";
    if (!formData.destination.trim()) tempErrors.destination = "Destination Country is required";
    if (!formData.product) tempErrors.product = "Please select a product of interest";

    if (!formData.volume.trim()) {
      tempErrors.volume = "Required volume is required";
    } else if (isNaN(Number(formData.volume)) || Number(formData.volume) <= 0) {
      tempErrors.volume = "Please enter a valid volume greater than 0";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone / WhatsApp number is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const getWhatsAppForwardUrl = () => {
    const selectedProductLabel =
      productsOptions.find((opt) => opt.value === formData.product)?.label || formData.product;
    const text = `Hello Nashik Export Desk,\n\nI have submitted an import quote inquiry. Here are my details:\n\n• Name: ${formData.fullName}\n• Company: ${formData.companyName}\n• Destination Country: ${formData.destination}\n• Product: ${selectedProductLabel}\n• Required Volume: ${formData.volume} MT\n• Phone: ${formData.phone}\n• Comments: ${formData.message || "N/A"}\n\nPlease share current FOB/CIF prices.`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      companyName: "",
      destination: "",
      product: "",
      volume: "",
      phone: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm h-full flex flex-col justify-center">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1">
              <label
                className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans"
                htmlFor="fullName"
              >
                Contact Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`form-input text-xs ${
                  errors.fullName ? "border-red-500 focus:border-red-500" : ""
                }`}
                placeholder="e.g., John Doe"
              />
              {errors.fullName && (
                <p className="text-[10px] text-red-500 flex items-center mt-1">
                  <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div className="space-y-1">
              <label
                className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans"
                htmlFor="companyName"
              >
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className={`form-input text-xs ${errors.companyName ? "border-red-500" : ""}`}
                placeholder="e.g., Al-Mansoori Food Traders"
              />
              {errors.companyName && (
                <p className="text-[10px] text-red-500 flex items-center mt-1">
                  <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Country of Destination */}
            <div className="space-y-1">
              <label
                className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans"
                htmlFor="destination"
              >
                Destination Country *
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                className={`form-input text-xs ${errors.destination ? "border-red-500" : ""}`}
                placeholder="e.g., Dubai (UAE)"
              />
              {errors.destination && (
                <p className="text-[10px] text-red-500 flex items-center mt-1">
                  <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {errors.destination}
                </p>
              )}
            </div>

            {/* Phone/WhatsApp Number */}
            <div className="space-y-1">
              <label
                className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans"
                htmlFor="phone"
              >
                Phone / WhatsApp Number *
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`form-input text-xs ${errors.phone ? "border-red-500" : ""}`}
                placeholder="e.g., +971 50 123 4567"
              />
              {errors.phone && (
                <p className="text-[10px] text-red-500 flex items-center mt-1">
                  <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Product of Interest Dropdown */}
            <div className="space-y-1">
              <label
                className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans"
                htmlFor="product"
              >
                Product of Interest *
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                className={`form-input text-xs ${errors.product ? "border-red-500" : ""}`}
              >
                <option value="">-- Select Crop --</option>
                {productsOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.product && (
                <p className="text-[10px] text-red-500 flex items-center mt-1">
                  <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {errors.product}
                </p>
              )}
            </div>

            {/* Required Volume */}
            <div className="space-y-1">
              <label
                className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans"
                htmlFor="volume"
              >
                Required Volume (Metric Tons) *
              </label>
              <input
                type="text"
                id="volume"
                name="volume"
                value={formData.volume}
                onChange={handleInputChange}
                className={`form-input text-xs ${errors.volume ? "border-red-500" : ""}`}
                placeholder="e.g., 29 (1x40ft Container)"
              />
              {errors.volume && (
                <p className="text-[10px] text-red-500 flex items-center mt-1">
                  <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {errors.volume}
                </p>
              )}
            </div>
          </div>

          {/* Message/Inquiry details */}
          <div className="space-y-1">
            <label
              className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans"
              htmlFor="message"
            >
              Additional Specifications / Target Terms
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="form-input text-xs"
              placeholder="Specify packaging (e.g. 10kg mesh bags), grading size, target discharge port (CIF), or special shipping lines..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4 text-accent" />
            <span>Generate Proforma Quotation Request</span>
          </button>
        </form>
      ) : (
        /* Submission success state */
        <div className="text-center py-6 space-y-6">
          <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Check className="w-8 h-8 text-emerald-600" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Inquiry Registered Successfully!
            </h3>
            <p className="text-slate-500 text-xs max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-slate-800">{formData.fullName}</span>.
              Your specification request for{" "}
              <span className="font-bold text-slate-800">{formData.volume} Metric Tons</span> of{" "}
              <span className="font-bold text-slate-800">
                {productsOptions.find((opt) => opt.value === formData.product)?.label}
              </span>{" "}
              has been logged under B2B reference ID:{" "}
              <span className="font-mono text-emerald-700 font-bold">
                NSK-{Math.floor(1000 + Math.random() * 9000)}
              </span>
              .
            </p>
          </div>

          <div className="bg-emerald-950 text-white p-6 rounded-2xl max-w-md mx-auto border border-emerald-900 shadow-md text-left space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-accent" />
              <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-300">
                Instant Trade Desk Forward
              </h4>
            </div>
            <p className="text-[11px] text-slate-300 leading-normal">
              For priority processing, you can instantly forward this compiled quote structure to
              our export manager on WhatsApp.
            </p>
            <a
              href={getWhatsAppForwardUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 w-full text-center shadow-md hover:shadow-accent/15"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Send Quote details to WhatsApp</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-primary font-bold underline transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
