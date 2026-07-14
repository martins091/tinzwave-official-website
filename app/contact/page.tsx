"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Sparkles,
  Zap,
  Send,
  ArrowRight,
  Clock,
  ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2349161052706", "_blank");
  };

  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setStatus(null);

    const formData = new FormData(formRef.current);
    const templateParams: Record<string, string> = {
      from_name: String(formData.get("name") || ""),
      from_email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || "New message from website"),
      message: String(formData.get("message") || ""),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      setStatus("Message sent — thank you!");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ========== HERO - Premium 2038 Style ========== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#03005F]/40 via-black to-black" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#03005F]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
              <span className="text-white/80 font-mono text-xs tracking-[0.2em]">
                ⚡ GET IN TOUCH
              </span>
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">Contact</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 animate-gradient">
                TinzWave
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Have questions about our services or courses? We'd love to hear
              from you. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CONTACT OPTIONS ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* WhatsApp Contact - Premium Card */}
            <Reveal>
              <div className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#03005F]/10 to-transparent backdrop-blur-sm hover:bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-full flex flex-col">
                <div className="absolute inset-0 bg-[#03005F]/10 blur-3xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge className="border border-white/20 bg-white/5 text-white/80 font-mono text-xs tracking-widest">
                        INSTANT RESPONSE
                      </Badge>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Quick Contact
                  </h2>
                  
                  <p className="text-white/50 leading-relaxed flex-1 mb-8">
                    Get instant responses to your questions. Click the button
                    below to start a conversation on WhatsApp and connect with
                    our team directly.
                  </p>
                  
                  <div>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="relative w-full px-8 py-6 text-sm font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-[#25D366]/10"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <MessageCircle className="h-5 w-5" />
                        Chat on WhatsApp
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#075E54] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 mt-4 text-white/30 text-xs font-mono">
                      <Clock className="w-3 h-3" />
                      <span>We respond within minutes during business hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact Form & Info */}
            <div className="space-y-6">
              {/* Contact Form */}
              <Reveal>
                <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <Send className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        Send Us A Message
                      </h2>
                    </div>
                    
                    <form ref={formRef} onSubmit={handleSend} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          name="name"
                          placeholder="Your name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#03005F]/50 focus:outline-none transition"
                        />
                        <input
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#03005F]/50 focus:outline-none transition"
                        />
                      </div>
                      <input
                        name="subject"
                        placeholder="Subject"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#03005F]/50 focus:outline-none transition"
                      />
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Your message"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#03005F]/50 focus:outline-none transition resize-none"
                      />
                      
                      <div className="flex items-center gap-4">
                        <Button
                          type="submit"
                          className="relative px-8 py-6 text-sm font-bold bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] text-white hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-indigo-500/10"
                          disabled={sending}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {sending ? "Sending..." : "Send Message"}
                            <Send className="w-4 h-4" />
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        </Button>
                        {status && (
                          <p className={`text-sm ${status.includes("thank") ? "text-emerald-400" : "text-rose-400"}`}>
                            {status}
                          </p>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </Reveal>

              {/* Contact Information */}
              <Reveal>
                <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        Contact Information
                      </h2>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-xl transition">
                        <div className="w-10 h-10 rounded-xl bg-[#03005F]/20 border border-[#03005F]/30 flex items-center justify-center shrink-0 group-hover:bg-[#03005F]/30 transition">
                          <Mail className="h-5 w-5 text-white/70" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white/60 mb-1">Email</h3>
                          <a
                            href="mailto:info@tinzwave.com"
                            className="text-white/80 hover:text-white transition"
                          >
                            info@tinzwave.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-xl transition">
                        <div className="w-10 h-10 rounded-xl bg-[#03005F]/20 border border-[#03005F]/30 flex items-center justify-center shrink-0 group-hover:bg-[#03005F]/30 transition">
                          <Phone className="h-5 w-5 text-white/70" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white/60 mb-1">Phone</h3>
                          <a
                            href="tel:+2349161052706"
                            className="text-white/80 hover:text-white transition"
                          >
                            +234 916 105 2706
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-xl transition">
                        <div className="w-10 h-10 rounded-xl bg-[#03005F]/20 border border-[#03005F]/30 flex items-center justify-center shrink-0 group-hover:bg-[#03005F]/30 transition">
                          <MapPin className="h-5 w-5 text-white/70" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white/60 mb-1">Office Location</h3>
                          <div className="text-sm text-white/50 space-y-1">
                            <p>E6 Adeniran Ogunsanya Shoprite Mall</p>
                            <p>Surulere, Lagos 100001</p>
                            <p>Nigeria</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Follow Us */}
              <Reveal>
                <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
                  <div className="relative">
                    <h2 className="text-xl font-bold text-white mb-5">
                      Follow Us
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://facebook.com/tinzwave"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        aria-label="Follow us on Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://twitter.com/tinzwave"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        aria-label="Follow us on Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="https://instagram.com/tinzwave"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        aria-label="Follow us on Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com/company/tinzwave"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        aria-label="Connect with us on LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAP SECTION ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <Badge className="mb-4 border border-white/20 bg-white/5 text-white/80 font-mono text-xs tracking-widest">
                  FIND US
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Visit Us
                </h2>
                <p className="text-white/40 text-lg">
                  E6 Adeniran Ogunsanya Shoprite Mall, Surulere, Lagos
                </p>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#03005F]/10">
                <div className="w-full h-96 md:h-[450px]">
                  <iframe
                    title="Tinzwave Office Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3234567!2d3.3521!3d6.5033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7151234567890%3A0x1234567890abcdef!2sE6%20Adeniran%20Ogunsanya%20Shoprite%20Mall%2C%20Surulere%2C%20Lagos%20100001!5e0!3m2!1sen!2sng!4v1234567890123"
                  ></iframe>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a
                  href="https://www.google.com/maps/search/E6+Adeniran+Ogunsanya+Shoprite+Mall+Surulere+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white transition font-medium group"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="relative">
                    Get Directions on Google Maps
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
}