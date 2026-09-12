"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Reveal from "@/components/Reveal";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Bot,
  Building2,
  CheckCircle2,
  Code2,
  Globe,
  GraduationCap,
  Quote,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import {
  founder,
  experience,
  education,
  contactLinks,
  projectsDelivered,
  trainingStats,
  trainingImpactSummary,
  impactHighlights,
  type ContactLink,
} from "@/lib/martins-data";

const CONTACT_ICONS: Record<ContactLink["id"], typeof Mail> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  "ai-interviewer": Bot,
};

export default function MartinsPage() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      video.pause();
      video.removeAttribute("autoplay");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0B1440]">
      <Navigation />

      {/* ========== HERO (video bg) ========== */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/martins-hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/videos/martins-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1440]/55 via-[#0B1440]/40 to-[#080F30]/65" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#22B4F5]/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            {founder.photo && (
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
                <div className="absolute -inset-2.5 rounded-full bg-white/30 blur-lg" />
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  priority
                  sizes="(min-width: 768px) 16rem, 12rem"
                  className="relative rounded-full object-cover object-[50%_15%] border-4 border-white shadow-2xl shadow-[#080F30]/40"
                />
              </div>
            )}

            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 bg-[#78E1FF] rounded-full animate-pulse" />
              <span className="text-white font-mono text-xs tracking-[0.2em]">
                FOUNDER PROFILE
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              {founder.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium text-[#78E1FF]">
              {founder.title}
            </p>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              {founder.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========== MY STORY ========== */}
      <section className="py-24 px-6 bg-[#FBFDFF]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-x-12 gap-y-10">
            {/* Sticky intro column */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#0B1440]/15 bg-[#0B1440]/5 text-[#0B1440]/70 font-mono text-xs tracking-widest mb-5">
                  MY STORY
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B1440] leading-snug">
                  Security guard to software founder, in three years.
                </h2>
                <p className="mt-4 text-[#0B1440]/60 leading-relaxed">
                  {founder.story.lede}
                </p>
              </Reveal>
            </div>

            {/* Timeline column */}
            <div>
              <div className="relative pl-8 sm:pl-10">
                <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0A7FD1]/40 via-[#0B1440]/15 to-transparent" />

                <div className="space-y-10">
                  {founder.story.timeline.map((milestone, idx) => (
                    <Reveal key={idx}>
                      <div className="relative">
                        <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0A7FD1] shadow-[0_0_0_4px_rgba(10,127,209,0.08)]" />
                        <span className="inline-block text-xs font-mono tracking-widest text-[#0A7FD1] mb-1.5">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-[#0B1440]">
                          {milestone.label}
                        </h3>
                        <p className="mt-1.5 text-[#0B1440]/65 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Pull quote */}
              <Reveal>
                <div className="relative mt-12 p-8 rounded-2xl bg-[#0B1440] overflow-hidden">
                  <Quote className="absolute -top-2 -left-1 w-16 h-16 text-white/10" />
                  <p className="relative text-lg md:text-xl text-white/90 leading-relaxed italic">
                    {founder.story.quote}
                  </p>
                </div>
              </Reveal>

              {/* Today + What's next */}
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <Reveal>
                  <div className="h-full p-6 rounded-2xl border border-[#0B1440]/10 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1440]/5 flex items-center justify-center mb-4">
                      <Building2 className="w-5 h-5 text-[#0A7FD1]" />
                    </div>
                    <p className="text-sm font-mono tracking-widest text-[#0B1440]/40 mb-2">
                      TODAY
                    </p>
                    <p className="text-[#0B1440]/75 leading-relaxed">
                      {founder.story.today}
                    </p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="h-full p-6 rounded-2xl border border-[#0B1440]/10 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1440]/5 flex items-center justify-center mb-4">
                      <Globe className="w-5 h-5 text-[#0A7FD1]" />
                    </div>
                    <p className="text-sm font-mono tracking-widest text-[#0B1440]/40 mb-2">
                      WHAT&apos;S NEXT
                    </p>
                    <p className="text-[#0B1440]/75 leading-relaxed">
                      {founder.story.next}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BUILD & IMPACT ========== */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#0B1440]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/4 w-[550px] h-[550px] bg-[#22B4F5]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#78E1FF]/10 rounded-full blur-[110px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: What I've Built */}
            <Reveal>
              <div className="group h-full flex flex-col p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#22B4F5] to-[#0A7FD1] flex items-center justify-center mb-6 shadow-lg shadow-[#0A7FD1]/30">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-[#78E1FF] mb-3">
                  PRODUCTS
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  What I&apos;ve Built
                </h2>
                <p className="text-white/65 leading-relaxed flex-1">
                  Products I&apos;ve founded and shipped myself, plus custom AI
                  and software solutions delivered for startups and enterprise
                  clients — real users, real results.
                </p>

                <div className="mt-8 flex items-center gap-8">
                  {projectsDelivered && (
                    <div>
                      <p className="text-3xl font-bold text-white">
                        {projectsDelivered}
                      </p>
                      <p className="text-xs text-white/50 mt-1">
                        Projects delivered
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-3xl font-bold text-white">Live</p>
                    <p className="text-xs text-white/50 mt-1">
                      Flagship product, paying users
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-fit px-8 py-6 text-sm font-semibold bg-white text-[#0B1440] hover:bg-[#78E1FF] rounded-xl transition-colors"
                >
                  <Link href="/martins/projects" className="flex items-center gap-2">
                    Explore all products
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            {/* Card 2: Training Impact */}
            <Reveal>
              <div className="group h-full flex flex-col p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#78E1FF] to-[#22B4F5] flex items-center justify-center mb-6 shadow-lg shadow-[#22B4F5]/30">
                  <Users className="w-7 h-7 text-[#0B1440]" />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-[#78E1FF] mb-3">
                  IMPACT
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  <span className="text-[#78E1FF]">
                    {trainingStats.studentsTrained}
                  </span>{" "}
                  People Trained
                </h2>
                <p className="text-white/65 leading-relaxed flex-1">
                  {trainingImpactSummary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {impactHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#78E1FF]" />
                      {highlight}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-fit px-8 py-6 text-sm font-semibold bg-[#78E1FF] text-[#0B1440] hover:bg-white rounded-xl transition-colors"
                >
                  <Link href="/martins/journey" className="flex items-center gap-2">
                    See the impact
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== EDUCATION ========== */}
      <section className="py-24 px-6 bg-[#EEF5FC]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <Reveal>
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#0B1440]/15 bg-white text-[#0B1440]/70 font-mono text-xs tracking-widest mb-5">
                  EDUCATION
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1440] mb-8">
                  Grounded in more than code
                </h2>
              </Reveal>

              <div className="space-y-6">
                {education.map((edu, idx) => {
                  const Icon = idx === 0 ? GraduationCap : Code2;
                  return (
                    <Reveal key={idx}>
                      <div className="p-7 md:p-8 rounded-2xl bg-white border border-[#0B1440]/10 shadow-sm shadow-[#0B1440]/5 hover:shadow-lg hover:shadow-[#0B1440]/10 transition-shadow duration-300">
                        <div className="flex items-start gap-5">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B1440] to-indigo-600 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-lg text-[#0B1440]">{edu.degree}</p>
                            <p className="text-sm text-[#0A7FD1] font-semibold mt-0.5">
                              {edu.institution} · {edu.year}
                            </p>
                            {edu.description && (
                              <p className="mt-3 text-[#0B1440]/65 leading-relaxed">
                                {edu.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Right: graduation photo */}
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#0B1440] border border-[#0B1440]/10 shadow-2xl shadow-[#0B1440]/20">
                <Image
                  src="/images/degree.jpg"
                  alt="Martins at his graduation ceremony with coursemates, National Open University of Nigeria"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-contain animate-bg-slideshow-1"
                />
                <Image
                  src="/images/degree2.jpg"
                  alt="Martins at his graduation ceremony, National Open University of Nigeria"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-contain animate-bg-slideshow-2"
                />
                <Image
                  src="/images/degree3.jpg"
                  alt="Martins at his graduation ceremony with coursemates, National Open University of Nigeria"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-contain animate-bg-slideshow-3"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-[#0B1440] to-[#080F30]">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <Sparkles className="w-10 h-10 text-[#78E1FF] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Open to conversations about software engineering, AI products, and
              building tech talent in Africa.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {contactLinks.map((link) => {
                const Icon = CONTACT_ICONS[link.id];
                const available = Boolean(link.href);
                const content = (
                  <>
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{link.label}</span>
                    {!available && (
                      <span className="text-[10px] text-white/40 tracking-wide">
                        Coming soon
                      </span>
                    )}
                  </>
                );
                const className =
                  "flex flex-col items-center gap-2 p-5 rounded-2xl border transition-all duration-300 " +
                  (available
                    ? "border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white"
                    : "border-white/5 bg-white/[0.02] text-white/30 cursor-default");

                return available ? (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={link.id} className={className} aria-disabled="true">
                    {content}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer showCta={false} />
    </div>
  );
}
