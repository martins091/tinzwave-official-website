"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <nav className="sticky top-0 z-50 w-full border-b border-[#03005F]/10 bg-white/70 backdrop-blur-2xl">

      {/* subtle AI glow line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#03005F]/40 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO + BRAND */}
          <Link href="/" className="flex items-center gap-3 group">

            <Image
              src="/our-logo.png"
              alt="Tinzwave Logo"
              width={200}
              height={200}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 hover:text-[#03005F] transition group"
              >
                {link.label}

                {/* premium hover glow underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#03005F] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(3,0,95,0.4)]" />
              </Link>
            ))}

            {/* AI BADGE */}
            <Link
              href="/ai"
              className="relative px-4 py-1.5 rounded-full text-xs font-medium text-[#03005F] border border-[#03005F]/20 bg-[#03005F]/5 overflow-hidden group transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-[#03005F]/20"
            >
              <span className="relative z-10">TinzWave AI</span>

              {/* futuristic glow sweep */}
              <span className="absolute inset-0 bg-[#03005F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>

            <Button
              asChild
              size="sm"
              className="bg-[#03005F] hover:bg-[#03005F]/90 text-white shadow-lg shadow-[#03005F]/20"
            >
              <Link href="/courses">Enroll Now</Link>
            </Button>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-[#03005F]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-5 border-t border-[#03005F]/10 bg-white/80 backdrop-blur-xl">

            <div className="flex flex-col space-y-4">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#03005F]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/ai"
                className="px-4 py-2 rounded-full text-sm font-medium text-center text-[#03005F] border border-[#03005F]/20 bg-[#03005F]/5 hover:bg-[#03005F] hover:text-white transition-all duration-300"
              >
                TinzWave AI
              </Link>

              <Button
                asChild
                size="sm"
                className="w-full bg-[#03005F] hover:bg-[#03005F]/90 text-white"
              >
                <Link href="/courses">Enroll Now</Link>
              </Button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}