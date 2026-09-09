"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  Send,
  GraduationCap,
  Bot,
  ChevronDown,
  Home as HomeIcon,
  Info,
  Briefcase,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AI_INTERVIEWER_URL = "https://interviewai.tinzwave.com/";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openCompanyMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setCompanyMenuOpen(true);
  };
  const closeCompanyMenu = () => {
    closeTimer.current = setTimeout(() => setCompanyMenuOpen(false), 150);
  };

  const companyLinks = [
    { href: "/", label: "Home", description: "Back to the homepage", icon: HomeIcon },
    { href: "/about", label: "About", description: "Our story & mission", icon: Info },
    { href: "/services", label: "Services", description: "What we build", icon: Briefcase },
    { href: "/contact", label: "Contact", description: "Get in touch", icon: Mail },
  ];

  const navLinks = [
    { href: "/courses", label: "Tech Academy" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B1440]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-[#080F30]/20">

      {/* Brand glow line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#78E1FF]/60 to-transparent shadow-[0_0_30px_rgba(120,225,255,0.3)]" />
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO + BRAND - 2038 style */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/white_tinzwave.png"
                alt="Tinzwave Logo"
                width={200}
                height={200}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-[#0B1440]/20 blur-2xl -z-10 group-hover:bg-[#0B1440]/30 transition" />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            {/* COMPANY - Premium hover mega-menu (Home, About, Services, Contact) */}
            <div
              className="relative"
              onMouseEnter={openCompanyMenu}
              onMouseLeave={closeCompanyMenu}
            >
              <button className="relative flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition group outline-none py-2">
                Company
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${companyMenuOpen ? "rotate-180 text-[#78E1FF]" : ""}`} />
                <span
                  className={`absolute left-0 -bottom-0 h-[2px] bg-gradient-to-r from-[#78E1FF] to-[#22B4F5] transition-all duration-500 shadow-[0_0_20px_rgba(120,225,255,0.6)] ${
                    companyMenuOpen ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {/* Panel */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 ease-out ${
                  companyMenuOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="relative w-72 rounded-2xl border border-white/10 bg-white/95 backdrop-blur-2xl shadow-2xl shadow-[#080F30]/40 overflow-hidden">
                  {/* Top accent bar */}
                  <div className="h-[3px] w-full bg-gradient-to-r from-[#4FD2FF] via-[#22B4F5] to-[#0A7FD1]" />

                  <div className="p-2">
                    {companyLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setCompanyMenuOpen(false)}
                          className="flex items-center gap-3.5 px-3 py-3 rounded-xl group/item hover:bg-[#0B1440]/5 transition-all duration-300"
                        >
                          <span className="w-10 h-10 rounded-xl bg-[#0B1440]/5 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gradient-to-br group-hover/item:from-[#22B4F5] group-hover/item:to-[#0A7FD1] group-hover/item:shadow-lg group-hover/item:shadow-[#22B4F5]/30 transition-all duration-300">
                            <Icon className="w-[18px] h-[18px] text-[#0B1440] group-hover/item:text-white transition-colors duration-300" />
                          </span>
                          <span className="flex-1">
                            <span className="block text-sm font-semibold text-[#0B1440]">{link.label}</span>
                            <span className="block text-xs text-[#0B1440]/50">{link.description}</span>
                          </span>
                          <ChevronDown className="w-3.5 h-3.5 text-[#0B1440]/20 -rotate-90 opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#0A7FD1] transition-all duration-300 -translate-x-1 group-hover/item:translate-x-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-white/60 hover:text-white transition group"
              >
                {link.label}

                {/* Premium hover glow underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#0B1440] to-indigo-500 group-hover:w-full transition-all duration-500 shadow-[0_0_20px_rgba(3,0,95,0.6)]" />
              </Link>
            ))}

            {/* AI INTERVIEWER - Live product link */}
            <a
              href={AI_INTERVIEWER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition group whitespace-nowrap"
            >
              <Bot className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              AI Interviewer
              <span className="px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#0B1440] to-indigo-500 text-[9px] font-bold tracking-wider text-white">
                NEW
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#0B1440] to-indigo-500 group-hover:w-full transition-all duration-500 shadow-[0_0_20px_rgba(3,0,95,0.6)]" />
            </a>

            {/* CONTACT US BUTTON - Clear and prominent */}
            <Button
              asChild
              size="sm"
              className="relative px-6 py-5 text-sm font-medium border-2 border-white/25 bg-transparent text-white hover:bg-white/10 hover:border-white/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 overflow-hidden group rounded-xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span className="relative z-10">Contact Us</span>
                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </Link>
            </Button>

            {/* ENROLL FOR A COURSE BUTTON - Premium and eye-catching */}
            <Button
              asChild
              size="sm"
              className="relative px-6 py-5 text-sm font-bold bg-gradient-to-r from-[#22B4F5] via-[#0D96E8] to-[#0A7FD1] text-white hover:shadow-2xl hover:shadow-[#22B4F5]/50 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-[#0A7FD1]/20"
            >
              <Link href="/courses" className="flex items-center gap-2">
                <span className="relative z-10">Enroll for a Course</span>
                <GraduationCap className="w-4 h-4 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition duration-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#0A7FD1] to-[#0B1440] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-700" />
              </Link>
            </Button>

          </div>

          {/* MOBILE BUTTON - 2038 */}
          <button
            className="md:hidden text-white/70 hover:text-white transition p-2 rounded-lg border border-white/10 hover:border-[#0B1440]/30 hover:bg-[#0B1440]/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* MOBILE MENU - 2038 Style */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 bg-[#0B1440]/95 backdrop-blur-2xl">

            <div className="flex flex-col space-y-4">

              {/* Company links - Mobile (flat, no dropdown needed on small screens) */}
              <div className="px-4 text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase">Company</div>
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/60 hover:text-white transition px-4 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/60 hover:text-white transition px-4 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* AI Interviewer - Mobile */}
              <a
                href={AI_INTERVIEWER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition px-4 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Bot className="w-4 h-4 text-indigo-400" />
                AI Interviewer
                <span className="px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#0B1440] to-indigo-500 text-[9px] font-bold tracking-wider text-white">
                  NEW
                </span>
              </a>

              {/* Contact Us - Mobile */}
              <Button
                asChild
                size="sm"
                className="w-full mx-4 border-2 border-white/25 bg-transparent text-white hover:bg-white/10 hover:border-white/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 rounded-xl"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Contact Us
                  <Send className="w-4 h-4" />
                </Link>
              </Button>

              {/* Enroll for a Course - Mobile */}
              <Button
                asChild
                size="sm"
                className="w-full mx-4 bg-gradient-to-r from-[#22B4F5] via-[#0D96E8] to-[#0A7FD1] hover:shadow-2xl hover:shadow-[#22B4F5]/50 text-white font-bold transition-all duration-500 rounded-xl shadow-lg shadow-[#0A7FD1]/20"
              >
                <Link href="/courses" className="flex items-center justify-center gap-2">
                  Enroll for a Course
                  <GraduationCap className="w-4 h-4" />
                </Link>
              </Button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}