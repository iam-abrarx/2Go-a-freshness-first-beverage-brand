"use client";

import { useState, useRef } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showCard, setShowCard] = useState(false);
  const [sentData, setSentData] = useState({ name: "", email: "" });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, subscribe: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const subject = encodeURIComponent(`New message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nNewsletter Signup: ${formData.subscribe ? "Yes" : "No"}`
      );
      window.open(`mailto:2goborn@gmail.com?subject=${subject}&body=${body}`, "_self");

      setSentData({ name: formData.name, email: formData.email });
      setStatus("sent");
      setShowCard(true);
      setFormData({ name: "", email: "", message: "", subscribe: false });
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;

    // Use html2canvas-style approach: draw the card to a canvas
    const card = cardRef.current;
    const canvas = document.createElement("canvas");
    const scale = 2; // high-res
    canvas.width = 600 * scale;
    canvas.height = 340 * scale;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(scale, scale);

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 600, 340);
    grad.addColorStop(0, "#1a1a2e");
    grad.addColorStop(1, "#16213e");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(0, 0, 600, 340, 20);
    ctx.fill();

    // Accent line
    ctx.fillStyle = "#d64c4c";
    ctx.fillRect(0, 0, 600, 5);

    // Brand name
    ctx.fillStyle = "#d64c4c";
    ctx.font = "bold 36px 'Arial', sans-serif";
    ctx.fillText("2Go", 40, 60);

    // Loyalty badge
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.beginPath();
    ctx.roundRect(130, 35, 130, 30, 8);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "bold 10px 'Arial', sans-serif";
    ctx.fillText("LOYALTY MEMBER", 145, 55);

    // Member name
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 26px 'Arial', sans-serif";
    ctx.fillText(sentData.name || "Member Name", 40, 140);

    // Email
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "14px 'Arial', sans-serif";
    ctx.fillText(sentData.email || "email@example.com", 40, 170);

    // Member since
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "bold 9px 'Arial', sans-serif";
    ctx.fillText("MEMBER SINCE", 40, 220);
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font = "14px 'Arial', sans-serif";
    const date = new Date();
    ctx.fillText(date.toLocaleDateString("en-US", { month: "long", year: "numeric" }), 40, 240);

    // Card ID
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "bold 9px 'Arial', sans-serif";
    ctx.fillText("CARD ID", 200, 220);
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font = "14px 'Arial', sans-serif";
    ctx.fillText(`2GO-${Math.random().toString(36).substring(2, 8).toUpperCase()}`, 200, 240);

    // Bottom tagline
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.font = "bold 9px 'Arial', sans-serif";
    ctx.fillText("BORN FRESH. SERVED REAL.", 40, 310);

    // Perks text
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "bold 9px 'Arial', sans-serif";
    ctx.fillText("EXCLUSIVE OFFERS & DISCOUNTS", 350, 310);

    // Decorative circles
    ctx.globalAlpha = 0.03;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(520, 80, 120, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(550, 120, 80, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Download
    const link = document.createElement("a");
    link.download = `2Go-Loyalty-Card-${sentData.name.replace(/\s+/g, "-")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <section className="py-32 bg-white overflow-hidden relative" id="contact">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <Reveal animation="reveal-left">
            <div className="space-y-10">
              <div>
                <span className="text-[var(--primary)] font-black uppercase tracking-[5px] text-xs">Get In Touch</span>
                <h2 className="text-6xl font-display uppercase mt-4 leading-[0.95]">Let&apos;s Start A<br/>Conversation</h2>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you. Drop us a message and our team will get back to you shortly.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+8801715322138"
                  className="flex items-center gap-5 p-5 bg-[#f8f9fa] rounded-xl hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[3px] text-gray-400 mb-0.5">Call Us</p>
                    <p className="font-display text-lg text-[var(--text-dark)]">+880 1715 322138</p>
                  </div>
                </a>

                <a
                  href="mailto:2goborn@gmail.com"
                  className="flex items-center gap-5 p-5 bg-[#f8f9fa] rounded-xl hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--secondary)] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[3px] text-gray-400 mb-0.5">Email</p>
                    <p className="font-display text-lg text-[var(--text-dark)]">2goborn@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/8801715322138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-[#f8f9fa] rounded-xl hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[3px] text-gray-400 mb-0.5">WhatsApp</p>
                    <p className="font-display text-lg text-[var(--text-dark)]">Message Us Directly</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal animation="reveal-right">
            <div className="bg-[#f8f9fa] rounded-2xl p-10 lg:p-12 border border-gray-100/50">
              <div className="mb-8">
                <h3 className="text-3xl font-display uppercase mb-2">Send a Message</h3>
                <p className="text-sm text-gray-400">Fill in the form and we&apos;ll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-[9px] font-black uppercase tracking-[3px] text-gray-500 mb-2">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 text-[var(--text-dark)] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]/40 transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-[9px] font-black uppercase tracking-[3px] text-gray-500 mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 text-[var(--text-dark)] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]/40 transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[9px] font-black uppercase tracking-[3px] text-gray-500 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 text-[var(--text-dark)] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]/40 transition-all resize-none text-sm"
                  />
                </div>

                {/* Newsletter Checkbox */}
                <label htmlFor="contact-subscribe" className="flex items-start gap-4 cursor-pointer group p-4 bg-white rounded-xl border border-gray-100 hover:border-[var(--primary)]/20 transition-all">
                  <input
                    id="contact-subscribe"
                    type="checkbox"
                    checked={formData.subscribe}
                    onChange={handleCheckbox}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]/20 accent-[var(--primary)]"
                  />
                  <div>
                    <p className="text-sm font-bold text-[var(--text-dark)]">Sign up for our email list</p>
                    <p className="text-xs text-gray-400 mt-0.5">Get updates, promotions, and more delivered to your inbox.</p>
                  </div>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full btn-primary !py-4 !rounded-xl !text-sm disabled:opacity-60 disabled:cursor-not-allowed group/btn"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-sm text-[var(--primary)] text-center font-bold">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Loyalty Card Popup */}
      {showCard && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => { setShowCard(false); setStatus("idle"); }} />
          
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => { setShowCard(false); setStatus("idle"); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="inline-flex w-16 h-16 rounded-2xl bg-[var(--secondary)]/10 items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-display uppercase mb-1">Message Sent!</h3>
              <p className="text-sm text-gray-400">Thank you for reaching out. Here&apos;s your loyalty card!</p>
            </div>

            {/* Loyalty Card Preview */}
            <div ref={cardRef} className="relative rounded-2xl overflow-hidden mb-6 shadow-xl" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}>
              {/* Accent top bar */}
              <div className="h-1.5 bg-[var(--primary)]" />
              
              {/* Decorative circles */}
              <div className="absolute top-8 right-8 w-40 h-40 rounded-full bg-white/[0.03]" />
              <div className="absolute top-16 right-0 w-28 h-28 rounded-full bg-white/[0.02]" />

              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[var(--primary)] text-3xl font-display">2Go</span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.08] text-[9px] font-black uppercase tracking-[2px] text-white/50">Loyalty Member</span>
                </div>

                {/* Member Info */}
                <div className="mb-8">
                  <p className="text-white text-2xl font-bold mb-1">{sentData.name}</p>
                  <p className="text-white/50 text-sm">{sentData.email}</p>
                </div>

                {/* Details */}
                <div className="flex gap-12">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[3px] text-white/30 mb-1">Member Since</p>
                    <p className="text-white/60 text-sm font-medium">
                      {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </p>
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[3px] text-white/30 mb-1">Card ID</p>
                    <p className="text-white/60 text-sm font-medium font-mono">
                      2GO-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-end mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="text-[8px] font-black uppercase tracking-[3px] text-white/15">Born Fresh. Served Real.</p>
                  <p className="text-[8px] font-black uppercase tracking-[3px] text-white/30">Exclusive Offers & Discounts</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadCard}
              className="w-full btn-primary !py-4 !rounded-xl !text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Loyalty Card
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              Show this card at any 2Go store for exclusive offers!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
