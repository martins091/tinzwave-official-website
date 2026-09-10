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
  GraduationCap,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import {
  founder,
  experience,
  education,
  skills,
  contactLinks,
  projects,
  trainingStats,
  cohorts,
  type ContactLink,
} from "@/lib/martins-data";

const CONTACT_ICONS: Record<ContactLink["id"], typeof Mail> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  "ai-interviewer": Bot,
};

export default function MartinsPage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredTestimonials = cohorts
    .flatMap((c) => c.testimonials ?? [])
    .slice(0, 2);

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
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#0B1440]/15 bg-[#0B1440]/5 text-[#0B1440]/70 font-mono text-xs tracking-widest mb-6">
              MY STORY
            </span>
            <div className="space-y-5 text-[#0B1440]/75 leading-relaxed text-lg">
              {founder.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== WHAT I'VE BUILT ========== */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-[#22B4F5] via-[#0D96E8] to-[#0A7FD1]">
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What I&apos;ve Built
              </h2>
              <p className="mt-3 text-[#0B1440]/80 md:text-white/80">
                Products I&apos;ve founded, built, and shipped to real users.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Reveal key={project.id}>
                <div className="h-full p-8 rounded-2xl border border-white/40 bg-white/95 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-[#080F30]/20 flex flex-col">
                  {project.flagship && (
                    <span className="inline-flex w-fit items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-[#0B1440]/90 text-white text-[10px] font-mono tracking-wider">
                      <Star className="w-3 h-3 fill-current" />
                      FLAGSHIP PROJECT
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#0B1440] mb-2">{project.name}</h3>
                  <p className="text-sm text-[#0B1440]/65 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A7FD1] hover:text-[#0B1440] transition"
                    >
                      Visit live product
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-sm font-medium bg-[#0B1440]/90 hover:bg-[#0B1440] text-white rounded-xl"
            >
              <Link href="/martins/projects" className="flex items-center gap-2">
                See all projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== TRAINING & IMPACT ========== */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1440]">
                Training &amp; Impact
              </h2>
              <p className="mt-3 text-[#0B1440]/65 max-w-2xl mx-auto">
                Since starting Tinzwave AI Academy, I&apos;ve trained people in AI
                engineering, the MERN stack, mobile development, and digital
                marketing — many now working in tech roles, some abroad, others
                building their own companies.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-br from-[#0B1440] to-indigo-800 text-white">
                <Users className="w-8 h-8 text-[#78E1FF]" />
                <div>
                  <p className="text-3xl font-bold leading-none">
                    {trainingStats.studentsTrained}
                  </p>
                  <p className="text-sm text-white/70 mt-1">Students trained</p>
                </div>
              </div>
            </div>
          </Reveal>

          {featuredTestimonials.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {featuredTestimonials.map((t, idx) => (
                <Reveal key={idx}>
                  <div className="h-full p-6 rounded-2xl border border-[#0B1440]/10 bg-[#EEF5FC]">
                    <p className="text-[#0B1440]/80 italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#0B1440]">
                      {t.name}
                      {t.outcome && (
                        <span className="font-normal text-[#0B1440]/60"> — {t.outcome}</span>
                      )}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="text-center p-8 rounded-2xl border border-dashed border-[#0B1440]/15 bg-[#EEF5FC]">
                <p className="text-[#0B1440]/60">Student testimonials coming soon.</p>
              </div>
            </Reveal>
          )}

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-sm font-medium border-2 border-[#0B1440]/20 text-[#0B1440] hover:bg-[#0B1440]/5 rounded-xl"
            >
              <Link href="/martins/journey" className="flex items-center gap-2">
                See my full training journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== EDUCATION ========== */}
      <section className="py-20 px-6 bg-[#EEF5FC]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#0B1440] mb-10 text-center">Education</h2>
          </Reveal>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Reveal key={idx}>
                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-[#0B1440]/10">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#0B1440] to-indigo-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1440]">{edu.degree}</p>
                    <p className="text-sm text-[#0A7FD1] font-medium">
                      {edu.institution} · {edu.year}
                    </p>
                    {edu.description && (
                      <p className="mt-2 text-sm text-[#0B1440]/65 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SKILLS ========== */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#0B1440] mb-8">Skills &amp; Tools</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-[#0B1440]/15 bg-[#0B1440]/5 text-sm font-medium text-[#0B1440]/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
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
