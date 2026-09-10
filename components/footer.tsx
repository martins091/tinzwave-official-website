"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sparkles,
  Zap,
  Github,
  Youtube,
} from "lucide-react";
import { InnovationCta } from "@/components/InnovationCta";

export function Footer({ showCta = true }: { showCta?: boolean }) {
  return (
    <footer className="relative bg-[#080F30] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0D96E8]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#78E1FF]/5 rounded-full blur-3xl" />
      </div>

      {showCta && <InnovationCta />}

      {/* ================= FOOTER MAIN - 2038 Premium ================= */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* BRAND - Enhanced */}
          <div>
            <div className="relative">
              <Image
                src="/logotinz.png"
                alt="Tinzwave Logo"
                width={160}
                height={60}
                className="mb-4 brightness-0 invert"
              />
              <div className="absolute inset-0 bg-[#0B1440]/20 blur-2xl -z-10" />
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Empowering Africa with AI, software engineering, and digital innovation.
              Building the future, one neural network at a time.
            </p>

            <div className="flex gap-3 mt-5">
              {[
                { icon: Facebook, href: "https://web.facebook.com/profile.php?id=61579452654180" },
                { icon: Twitter, href: "https://twitter.com/tinzwave" },
                { icon: Instagram, href: "https://instagram.com/tinzwave" },
                { icon: Linkedin, href: "https://linkedin.com/company/tinzwave" },
                { icon: Github, href: "https://github.com/tinzwave" },
               
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-bold text-white mb-5 text-lg tracking-tight">
              Company
            </h4>

            <div className="flex flex-col gap-3 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                Home
              </Link>
              <Link href="/about" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                About
              </Link>
              <Link href="/services" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                Services
              </Link>
              <Link href="/courses" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                Tech Academy
              </Link>
              <Link href="/blog" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                Blog
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold text-white mb-5 text-lg tracking-tight">
              Services
            </h4>

            <div className="flex flex-col gap-3 text-sm text-white/60">
              <Link href="/services/software-development" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                AI Development
              </Link>
              <Link href="/services/web-development" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                Web Development
              </Link>
              <Link href="/services/mobile-development" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                Mobile Apps
              </Link>
              <Link href="/services/digital-marketing" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                Digital Marketing
              </Link>
              <Link href="/services/ai-automations" className="hover:text-white transition duration-300 hover:translate-x-1 transform">
                AI Automations
              </Link>
            </div>
          </div>

          {/* CONTACT - All white text */}
          <div>
            <h4 className="font-bold text-white mb-5 text-lg tracking-tight">
              Contact
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 group hover:text-white transition duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition">
                  <Mail className="w-5 h-5 text-white/60 group-hover:text-white transition" />
                </div>
                <span className="text-white group-hover:text-white transition">info@tinzwave.com</span>
              </div>

              <div className="flex items-center gap-3 group hover:text-white transition duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition">
                  <Phone className="w-5 h-5 text-white/60 group-hover:text-white transition" />
                </div>
                <span className="text-white group-hover:text-white transition">+234 916 105 2706</span>
              </div>

              <div className="flex items-center gap-3 group hover:text-white transition duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition">
                  <MapPin className="w-5 h-5 text-white/60 group-hover:text-white transition" />
                </div>
                <span className="text-white group-hover:text-white transition">Lagos, Nigeria</span>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono tracking-wider backdrop-blur-xl hover:bg-white/10 transition">
              <Sparkles className="w-3 h-3 text-white/60" />
              <span>TinzWave Innovation Labs</span>
              <Zap className="w-3 h-3 text-white/60" />
            </div>
          </div>
        </div>

        {/* BOTTOM - All white text */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/60 font-mono tracking-wider">
              © {new Date().getFullYear()} TinzWave Technologies. Built for the future of AI.
            </div>
            
            <div className="flex items-center gap-6 text-xs text-white/60 font-mono tracking-wider">
              <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms</Link>
              <Link href="/cookies" className="hover:text-white transition">Cookies</Link>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" />
                <span className="text-white/60">v2038.1</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}