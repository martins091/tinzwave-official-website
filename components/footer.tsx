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
  Rocket,
  Sparkles,
  Zap,
  ArrowRight,
  Send,
  Github,
  Youtube,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#03005F]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* ================= CTA SECTION - 2038 Premium ================= */}
      <section className="relative py-28 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#03005F]/20 via-indigo-500/10 to-purple-500/20" />
        
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#03005F]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <Reveal>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#03005F]/30 bg-[#03005F]/10 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 bg-[#03005F] rounded-full animate-pulse shadow-lg shadow-[#03005F]/50" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 font-mono text-xs tracking-[0.2em]">
                ⚡ INNOVATION ECOSYSTEM
              </span>
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse shadow-lg shadow-indigo-500/50" />
            </div>

            <div className="relative inline-block">
              <Rocket className="w-16 h-16 mx-auto mb-6 text-[#03005F] animate-pulse" />
              <div className="absolute inset-0 bg-[#03005F]/20 blur-2xl rounded-full" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">Build the Future With</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 animate-gradient">
                TinzWave Innovation
              </span>
            </h2>

            <p className="mt-5 text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              We build intelligent systems, software products, and AI infrastructure
              for modern businesses ready to scale globally.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="relative px-8 py-6 text-sm font-bold bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] text-white hover:shadow-2xl hover:shadow-[#03005F]/50 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-[#03005F]/20"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Start a Project</span>
                  <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                  <span className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-sm font-medium border-2 border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-[#03005F]/50 backdrop-blur-xl transition-all duration-500 rounded-xl group"
              >
                <Link href="/services" className="flex items-center gap-3">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

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
              <div className="absolute inset-0 bg-[#03005F]/20 blur-2xl -z-10" />
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