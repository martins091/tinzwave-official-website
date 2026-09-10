"use client";

import Link from "next/link";
import Image from "next/image";
import { Rocket, Send, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

/**
 * "Build the Future With TinzWave Innovation" CTA band — image background,
 * navy scrim, brand-blue buttons. Drop it into any page that wants the
 * marketing push (e.g. `<InnovationCta />` before `<Footer />`). Not included
 * by default in Footer, so pages that shouldn't read as marketing-heavy
 * (like /martins) can simply omit it.
 */
export function InnovationCta() {
  return (
    <section className="relative py-28 overflow-hidden border-b border-white/10 bg-[#080F30]">
      <div className="absolute inset-0">
        <Image
          src="/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080F30]/90 via-[#0B1440]/75 to-[#080F30]/90" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#22B4F5]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#78E1FF]/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <Reveal>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl mb-8">
            <span className="w-2 h-2 bg-[#78E1FF] rounded-full animate-pulse shadow-lg shadow-[#78E1FF]/50" />
            <span className="text-[#78E1FF] font-mono text-xs tracking-[0.2em]">
              ⚡ INNOVATION ECOSYSTEM
            </span>
            <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" />
          </div>

          <div className="relative inline-block">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-[#78E1FF] animate-pulse" />
            <div className="absolute inset-0 bg-[#78E1FF]/20 blur-2xl rounded-full" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Build the Future With</span>
            <span className="block text-[#78E1FF]">TinzWave Innovation</span>
          </h2>

          <p className="mt-5 text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We build intelligent systems, software products, and AI infrastructure
            for modern businesses ready to scale globally.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="relative px-8 py-6 text-sm font-bold bg-gradient-to-r from-[#22B4F5] via-[#0D96E8] to-[#0A7FD1] text-white hover:shadow-2xl hover:shadow-[#22B4F5]/50 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-[#0A7FD1]/20"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span className="relative z-10">Start a Project</span>
                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#0A7FD1] to-[#0B1440] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-sm font-medium border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-xl transition-all duration-500 rounded-xl group"
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
  );
}
