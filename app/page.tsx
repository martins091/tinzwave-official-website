"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TypingText from "@/components/TypingText";
import { useState, useEffect } from "react";
import {
  Brain,
  Globe,
  Smartphone,
  TrendingUp,
  GraduationCap,
  Star,
  CheckCircle2,
  ArrowRight,
  Code2,
  Rocket,
  Award,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Brain,
      title: "AI Software Development",
      description:
        "Build intelligent AI-powered systems, automation tools, chatbots, and business software that transform how companies operate.",
      href: "/services/software-development",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Modern, responsive, SEO-optimized websites for businesses, institutions, and personal brands.",
      href: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Scalable Android & iOS applications including fintech, e-learning, and business management systems.",
      href: "/services/mobile-development",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Data-driven marketing, branding, SEO, and content systems that grow visibility and revenue.",
      href: "/services/digital-marketing",
    },
    {
      icon: GraduationCap,
      title: "Tech Academy",
      description:
        "Practical training in AI, Fullstack, UI/UX, and Cybersecurity to launch careers.",
      href: "/courses",
    },
    {
      icon: Brain,
      title: "AI Automations",
      description:
        "Automate business workflows, customer support, and sales systems using AI.",
      href: "/services/ai-automations",
    },
  ];

  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Success Rate" },
    { value: "12+", label: "Tech Courses" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black">

        <div className="absolute inset-0 z-0">

          {/* IMAGE */}
          <Image
            src="/macro-eye-iris.jpg"
            alt="AI Background"
            fill
            className="object-cover scale-110"
            priority
          />

          {/* PRIMARY SOFT OVERLAY (more premium balance) */}
          <div className="absolute inset-0 bg-[#03005F]/70" />

          {/* CINEMATIC LIGHT FOCUS (center glow, subtle) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.22),transparent_60%)]" />

          {/* SECONDARY FUTURISTIC ACCENT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.10),transparent_65%)]" />

          {/* VERY SUBTLE DEPTH VIGNETTE (this is what makes it “premium”) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="max-w-5xl mx-auto text-center">

              {/* BRAND TAG */}
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                <p className="text-white/70 text-sm">
                  TinzWave Technologies • AI Division
                </p>
              </div>

              {/* HEADLINE */}
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight">
                We Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300">
                  AI Systems That Think
                </span>
              </h1>

              {/* SUBTEXT */}
              <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                From automation to intelligent software — we help businesses evolve into
                AI-powered companies built for the future.
              </p>

              {/* CTA */}
              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 px-8 py-6 text-sm font-medium"
                >
                  <Link href="/contact">
                    Start a Project
                  </Link>
                </Button>

                {/* ONLY CHANGE MADE HERE */}
                <Button
                  asChild
                  size="lg"
                  className="border border-white/15 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-sm backdrop-blur-md"
                >
                  <Link href="/ai">
                    TinzWave AI
                  </Link>
                </Button>

              </div>

              {/* FLOATING METRICS */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/70">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </div>

      </section>

      {/* AI INTRO SECTION — BRAND ALIGNED PREMIUM */}
      <section className="relative py-28 overflow-hidden bg-white">

        {/* BRAND-BASED GLOW SYSTEM */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(3,0,95,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(3,0,95,0.06),transparent_60%)]" />

        {/* subtle depth layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />

        <div className="container mx-auto px-4 relative z-10">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">

            <Badge className="mb-5 px-4 py-1 border border-[#03005F]/20 bg-[#03005F]/5 text-[#03005F]">
              AI DIVISION • TINZWAVE
            </Badge>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
              TinzWave
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] to-[#03005F]/60">
                AI Innovation Lab
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We design intelligent systems, train world-class developers, and build AI-powered
              infrastructure that helps businesses scale globally.
            </p>

          </div>

          {/* FEATURE CARDS */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">

            {[
              {
                title: "AI Systems Engineering",
                desc: "We build intelligent automation, AI agents, and enterprise-grade software systems.",
              },
              {
                title: "Developer Training",
                desc: "We train individuals into production-ready AI engineers and full-stack builders.",
              },
              {
                title: "Business AI Integration",
                desc: "We help companies integrate AI into workflows, operations, and customer systems.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-[#03005F]/10 bg-white shadow-sm hover:shadow-xl transition-all"
              >

                {/* subtle brand glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_50%_0%,rgba(3,0,95,0.08),transparent_70%)]" />

                {/* number badge */}
                <div className="w-10 h-10 rounded-xl bg-[#03005F] text-white flex items-center justify-center mb-5 text-sm font-medium">
                  {i + 1}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-16 text-center">

            <Button
              asChild
              size="lg"
              className="px-10 py-6 text-sm bg-[#03005F] text-white hover:bg-[#03005F]/90 transition"
            >
              <Link href="/ai">
                Enter AI Division <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <p className="text-xs text-gray-400 mt-4">
              Built on intelligence • Powered by TinzWave AI
            </p>

          </div>

        </div>
      </section>
      {/* SERVICES */}
      <section className="relative py-28 overflow-hidden bg-white">

        {/* SUBTLE BRAND ENERGY FIELD */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(3,0,95,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(3,0,95,0.05),transparent_60%)]" />

        <div className="container mx-auto px-4 relative z-10">

          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-16">

            <Badge className="mb-5 px-4 py-1 border border-[#03005F]/20 bg-[#03005F]/5 text-[#03005F]">
              CAPABILITIES
            </Badge>

            <h2 className="text-5xl font-semibold tracking-tight text-gray-900">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] to-[#03005F]/60">
                {" "}AI Services
              </span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              We design, build, and deploy intelligent systems that power modern businesses,
              education, and automation at scale.
            </p>

          </div>

          {/* SERVICE GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group">

                <div className="relative p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_60px_rgba(3,0,95,0.12)] transition-all overflow-hidden">

                  {/* hover energy layer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_50%_0%,rgba(3,0,95,0.10),transparent_70%)]" />

                  {/* icon container */}
                  <div className="w-12 h-12 rounded-xl bg-[#03005F]/5 border border-[#03005F]/10 flex items-center justify-center mb-5 group-hover:bg-[#03005F] transition">
                    <s.icon className="h-6 w-6 text-[#03005F] group-hover:text-white transition" />
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#03005F] transition">
                    {s.title}
                  </h3>

                  {/* description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {s.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-5 flex items-center gap-2 text-sm text-[#03005F] font-medium opacity-80 group-hover:opacity-100">
                    Explore service
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}