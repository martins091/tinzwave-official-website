"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, GraduationCap, Building2, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Navigation />

  {/* HERO */}
<section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-6">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg"
      alt="TinzWave AI Future"
      fill
      priority
      className="object-cover scale-110"
    />

    {/* soft cinematic darkening (NOT heavy) */}
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* FLOATING AI LIGHT LAYERS */}
  <div className="absolute inset-0 z-10">

    {/* main brand glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(3,0,95,0.35),transparent_55%)]" />

    {/* secondary futuristic energy */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(99,102,241,0.18),transparent_60%)]" />

    {/* subtle tech green accent */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_65%)]" />

    {/* vignette for premium depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />

  </div>

  {/* CONTENT */}
  <div className="relative z-20 text-center max-w-5xl mx-auto">

    {/* SMALL AI TAG */}
    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-[#03005F] animate-pulse" />
      <p className="text-white/70 text-sm tracking-wide">
        TinzWave AI Ecosystem
      </p>
    </div>

    {/* MAIN HEADLINE */}
    <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight">
      Intelligence for the
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-300 to-[#03005F]">
        Next Generation
      </span>
    </h1>

    {/* SUBTEXT */}
    <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
      We build AI systems, automation engines, and train creators who turn ideas into real-world intelligent products.
    </p>

    {/* CTA */}
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

      {/* FIRST BUTTON - Our AI Services */}
      <Button asChild className="bg-[#03005F] hover:bg-[#03005F]/90 text-white px-8 py-6 text-sm shadow-lg shadow-[#03005F]/30">
        <Link href="/ai/services">
          Our AI Services
        </Link>
      </Button>

      {/* SECOND BUTTON - Join Our AI Community (WhatsApp link) */}
      <Button
        asChild
        className="border border-white/15 bg-white/5 text-white hover:bg-white/10 px-8 py-6 backdrop-blur-md"
      >
        <Link href="https://chat.whatsapp.com/FxMocmyegINCAUAvTjyhKT">
          Join Our AI Community
        </Link>
      </Button>

    </div>

    {/* FLOATING IMPACT LINE */}
    <p className="mt-14 text-white/40 text-sm tracking-widest">
      BUILD • AUTOMATE • SCALE • TRANSFORM
    </p>

  </div>

</section>

    {/* OVERVIEW */}
<section className="py-28 px-6 max-w-6xl mx-auto">

  {/* SECTION TITLE */}
  <div className="text-center mb-12">

    <div className="w-16 h-[2px] bg-[#03005F] mx-auto mb-5" />

    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
      The TinzWave AI Ecosystem
    </h2>

    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
      A unified system where intelligence meets execution.
    </p>

  </div>

  {/* CONTENT CARD */}
  <div className="relative p-10 md:p-14 rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">

    {/* subtle brand glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(3,0,95,0.06),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.05),transparent_60%)]" />

    <div className="relative">

      <p className="text-gray-700 text-lg leading-relaxed">
        <span className="font-medium text-[#03005F]">TinzWave AI</span> is the artificial intelligence division of TinzWave Technologies.
        It is designed as a dual ecosystem that merges <strong>AI-powered business solutions</strong> with a
        <strong> practical training academy</strong> built for real-world execution.
      </p>

      <p className="mt-6 text-gray-600 leading-relaxed">
        Rather than just teaching or building in isolation, TinzWave AI connects both worlds —
        enabling businesses to automate and scale, while equipping individuals with the skills
        to build, create, and deploy AI systems that generate real impact.
      </p>

      {/* KEY HIGHLIGHTS */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">

        <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
          <h3 className="font-semibold text-[#03005F] mb-2">
            AI Business Solutions
          </h3>
          <p className="text-sm text-gray-600">
            Helping companies build intelligent systems, automate workflows, and transform operations into scalable digital infrastructure.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
          <h3 className="font-semibold text-[#03005F] mb-2">
            AI Training Academy
          </h3>
          <p className="text-sm text-gray-600">
            A hands-on learning ecosystem that turns beginners into builders through real-world AI projects and practical execution.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

   {/* CORE DIVISIONS */}
<section className="py-28 px-6 max-w-6xl mx-auto">

  {/* HEADER */}
  <div className="text-center mb-14">

    <div className="w-16 h-[2px] bg-[#03005F] mx-auto mb-5" />

    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
      Core Divisions
    </h2>

    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
      Two powerful systems working together — building AI solutions and building AI builders.
    </p>

  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-10">

    {/* BUSINESS SOLUTIONS */}
    <div className="group relative p-10 rounded-3xl border border-gray-200 bg-white overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">

      {/* glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(3,0,95,0.08),transparent_60%)]" />

      {/* ICON */}
      <Building2 className="h-9 w-9 text-[#03005F] relative z-10" />

      <h3 className="text-2xl font-semibold mt-5 relative z-10">
        AI Business Solutions
      </h3>

      <p className="text-gray-600 mt-3 relative z-10 leading-relaxed">
        We help companies build AI systems, automate workflows, and upgrade their operations into intelligent systems.
      </p>

      {/* LIST */}
      <ul className="mt-6 space-y-2 text-sm text-gray-600 relative z-10">
        <li>• AI Software Development (Web, Apps, SaaS)</li>
        <li>• Business Automation Systems</li>
        <li>• AI Integration Services</li>
        <li>• AI Consulting & Strategy</li>
      </ul>

      {/* CTA */}
      <Link
        href="/ai/ai-services"
        className="mt-8 inline-flex items-center font-medium text-[#03005F] relative z-10 group"
      >
        View Details
        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </Link>

    </div>

    {/* ACADEMY */}
    <div className="group relative p-10 rounded-3xl border border-gray-200 bg-white overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">

      {/* glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.08),transparent_60%)]" />

      {/* ICON */}
      <GraduationCap className="h-9 w-9 text-[#03005F] relative z-10" />

      <h3 className="text-2xl font-semibold mt-5 relative z-10">
        AI Academy
      </h3>

      <p className="text-gray-600 mt-3 relative z-10 leading-relaxed">
        A practical training system where learners build real-world AI skills and income-ready digital abilities.
      </p>

      {/* LIST */}
      <ul className="mt-6 space-y-2 text-sm text-gray-600 relative z-10">
        <li>• AI Software & Startup Building</li>
        <li>• AI Content Creation & Monetization</li>
        <li>• AI Design & Branding</li>
        <li>• AI Automation Systems</li>
      </ul>

      {/* CTA */}
      <Link
        href="/ai/ai-courses"
        className="mt-8 inline-flex items-center font-medium text-[#03005F] relative z-10 group"
      >
        View Details
        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </Link>

    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}