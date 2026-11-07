"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  initialService?: string;
  className?: string;
}

export default function ContactForm({
  initialService = "Complete SEO",
  className = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setStatus("success");
      setFeedback(data.message || "Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: initialService,
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setFeedback(msg);
    }
  };

  return (
    <div
      className={`bg-white px-[14px] pt-[16px] pb-[24px] rounded-[15px] ${className}`}
      style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.08)" }}
    >
      <h3 className="text-[25px] leading-[1.2] font-extrabold text-center capitalize mb-[30px]">
        Contact With me
      </h3>

      {status === "success" && (
        <div className="mb-5 p-4 rounded-lg bg-sky-50 border border-sky-300 text-sky-900 text-sm flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#31A1FF] mt-0.5" />
          <div>
            <strong className="block font-semibold">Message Delivered!</strong>
            <p>{feedback}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-5 p-4 rounded-lg bg-red-50 border border-red-300 text-red-800 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <div>
            <strong className="block font-semibold">Submission Failed</strong>
            <p>{feedback}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-[12px]">
        <div>
          <label className="block text-[15px] text-[#e05414] leading-[1.6] mb-[2px]">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-[12px] py-[9px] rounded-[3px] border border-[#F99517] text-[14px] text-gray-900 bg-white placeholder:text-[#7a7a7a] focus:outline-none focus:border-[#e05414]"
          />
        </div>

        <div>
          <label className="block text-[15px] text-[#e05414] leading-[1.6] mb-[2px]">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-[12px] py-[9px] rounded-[3px] border border-[#F99517] text-[14px] text-gray-900 bg-white placeholder:text-[#7a7a7a] focus:outline-none focus:border-[#e05414]"
          />
        </div>

        <div>
          <label className="block text-[15px] text-[#e05414] leading-[1.6] mb-[2px]">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-[12px] py-[9px] rounded-[3px] border border-[#F99517] text-[14px] text-gray-900 bg-white placeholder:text-[#7a7a7a] focus:outline-none focus:border-[#e05414]"
          />
        </div>

        <div>
          <label className="block text-[15px] text-[#e05414] leading-[1.6] mb-[2px]">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-[12px] py-[9px] rounded-[3px] border border-[#F99517] text-[14px] text-gray-900 bg-white placeholder:text-[#7a7a7a] focus:outline-none focus:border-[#e05414] resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 px-6 rounded-full text-[15px] font-heading font-bold text-white bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] shadow-lg shadow-[#0082FB]/25 hover:shadow-xl hover:shadow-[#0082FB]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <span>Get in Touch</span>
          )}
        </button>
      </form>
    </div>
  );
}
