"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles, Send, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/courses", label: "Tech Academy" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-[#03005F]/5">

      {/* Futuristic AI glow line - 2038 style */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#03005F] to-transparent shadow-[0_0_30px_rgba(3,0,95,0.3)]" />
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
              <div className="absolute inset-0 bg-[#03005F]/20 blur-2xl -z-10 group-hover:bg-[#03005F]/30 transition" />
            </div>
          </Link>

          {/* DESKTOP NAV - Futuristic 2038 */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-white/60 hover:text-white transition group"
              >
                {link.label}

                {/* Premium hover glow underline - 2038 */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#03005F] to-indigo-500 group-hover:w-full transition-all duration-500 shadow-[0_0_20px_rgba(3,0,95,0.6)]" />
              </Link>
            ))}

            {/* CONTACT US BUTTON - Clear and prominent */}
            <Button
              asChild
              size="sm"
              className="relative px-6 py-5 text-sm font-medium border-2 border-[#03005F]/40 bg-transparent text-white hover:bg-[#03005F]/10 hover:border-[#03005F] hover:shadow-lg hover:shadow-[#03005F]/20 transition-all duration-500 overflow-hidden group rounded-xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span className="relative z-10">Contact Us</span>
                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#03005F]/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </Link>
            </Button>

            {/* ENROLL FOR A COURSE BUTTON - Premium and eye-catching */}
            <Button
              asChild
              size="sm"
              className="relative px-6 py-5 text-sm font-bold bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] text-white hover:shadow-2xl hover:shadow-[#03005F]/50 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-[#03005F]/20"
            >
              <Link href="/courses" className="flex items-center gap-2">
                <span className="relative z-10">Enroll for a Course</span>
                <GraduationCap className="w-4 h-4 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition duration-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-700" />
              </Link>
            </Button>

          </div>

          {/* MOBILE BUTTON - 2038 */}
          <button
            className="md:hidden text-white/70 hover:text-white transition p-2 rounded-lg border border-white/10 hover:border-[#03005F]/30 hover:bg-[#03005F]/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* MOBILE MENU - 2038 Style */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/5 bg-black/90 backdrop-blur-2xl">

            <div className="flex flex-col space-y-4">

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

              {/* Contact Us - Mobile */}
              <Button
                asChild
                size="sm"
                className="w-full mx-4 border-2 border-[#03005F]/40 bg-transparent text-white hover:bg-[#03005F]/10 hover:border-[#03005F] hover:shadow-lg hover:shadow-[#03005F]/20 transition-all duration-500 rounded-xl"
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
                className="w-full mx-4 bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] hover:shadow-2xl hover:shadow-[#03005F]/50 text-white font-bold transition-all duration-500 rounded-xl shadow-lg shadow-[#03005F]/20"
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