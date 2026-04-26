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
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative bg-white text-gray-900 overflow-hidden">

      {/* ================= CTA SECTION (KEEPS BRAND COLOR) ================= */}
      <section className="relative py-24 overflow-hidden bg-[#03005F]">

        {/* subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_60%)]" />

        <Reveal>
          <div className="container mx-auto px-4 text-center relative z-10 text-white">

            <Rocket className="w-14 h-14 mx-auto mb-6 text-white/90 animate-pulse" />

            <h2 className="text-4xl md:text-5xl font-semibold">
              Build the Future With
              <span className="block text-white/80">TinzWave AI</span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
              We build intelligent systems, software products, and AI infrastructure
              for modern businesses.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

              <Button
                asChild
                size="lg"
                className="bg-white text-[#03005F] hover:bg-white/90 px-8 py-6 font-medium"
              >
                <Link href="/contact">Start a Project</Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="border border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-6 backdrop-blur-md"
              >
                <Link href="/ai">Explore TinzWave AI</Link>
              </Button>

            </div>

          </div>
        </Reveal>
      </section>

      {/* ================= FOOTER MAIN ================= */}
      <div className="container mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <Image
              src="/logotinz.png"
              alt="Tinzwave logo"
              width={140}
              height={50}
              className="mb-4"
            />

            <p className="text-sm text-gray-600 leading-relaxed">
              Empowering Africa with AI, software engineering, and digital innovation.
            </p>

            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-[#03005F] hover:text-[#03005F] transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-5">Company</h4>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/courses">Tech Academy</Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-5">Services</h4>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/services/software-development">AI Development</Link>
              <Link href="/services/web-development">Web Development</Link>
              <Link href="/services/mobile-development">Mobile Apps</Link>
              <Link href="/services/digital-marketing">Digital Marketing</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-5">Contact</h4>

            <div className="space-y-3 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@tinzwave.com
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +234 916 105 2706
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Lagos, Nigeria
              </div>

            </div>

            <div className="mt-5 inline-flex px-3 py-1 text-xs rounded-full bg-[#03005F]/5 text-[#03005F] border border-[#03005F]/10">
              TinzWave AI Division
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TinzWave Technologies. Built for the future of AI.
        </div>

      </div>
    </footer>
  );
}