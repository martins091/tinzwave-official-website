"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Reveal from "@/components/Reveal";
import { ArrowLeft, Sparkles, Users, ImageIcon } from "lucide-react";
import { cohorts, trainingStats } from "@/lib/martins-data";

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B1440]">
      <Navigation />

      {/* ========== HEADER ========== */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-[#4FD2FF] via-[#22B4F5] to-[#0A7FD1]">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/martins"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B1440]/70 hover:text-[#0B1440] transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to profile
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1440]">Training Journey</h1>
          <p className="mt-4 text-lg text-[#0B1440]/70 max-w-2xl">
            The cohorts, students, and outcomes from everywhere I&apos;ve
            trained developers and AI engineers — Tinzwave AI Academy, partner
            tech academies, and a training partnership with local government —
            organized by year.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0B1440]/90 text-white">
            <Users className="w-6 h-6 text-[#78E1FF]" />
            <div>
              <p className="text-2xl font-bold leading-none">{trainingStats.studentsTrained}</p>
              <p className="text-xs text-white/60 mt-1">Students trained to date</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COHORTS ========== */}
      <section className="py-16 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {cohorts.length === 0 ? (
            <Reveal>
              <div className="text-center py-16 px-8 rounded-3xl border border-dashed border-[#0B1440]/15 bg-[#EEF5FC]">
                <Sparkles className="w-10 h-10 text-[#0A7FD1] mx-auto mb-4" />
                <h2 className="text-xl font-bold text-[#0B1440] mb-2">
                  Cohort details coming soon
                </h2>
                <p className="text-[#0B1440]/60 max-w-md mx-auto">
                  I&apos;m putting together the year-by-year breakdown of Tinzwave
                  AI Academy cohorts — student counts, photos, and outcomes.
                  Check back soon.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-16">
              {cohorts.map((cohort) => (
                <Reveal key={cohort.id}>
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Photo */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#EEF5FC] border border-[#0B1440]/10">
                      {cohort.photo ? (
                        <Image
                          src={cohort.photo}
                          alt={`Tinzwave AI Academy cohort, ${cohort.year}`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#0B1440]/25">
                          <ImageIcon className="w-8 h-8" />
                          <span className="text-xs font-mono tracking-wide">
                            Photo coming soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#0B1440]">{cohort.year}</h3>
                      {cohort.studentsCount && (
                        <p className="mt-1 text-[#0A7FD1] font-semibold">
                          {cohort.studentsCount} students trained
                        </p>
                      )}

                      {cohort.testimonials && cohort.testimonials.length > 0 ? (
                        <div className="mt-5 space-y-4">
                          {cohort.testimonials.map((t, idx) => (
                            <div
                              key={idx}
                              className="p-5 rounded-xl bg-[#EEF5FC] border border-[#0B1440]/10"
                            >
                              <p className="text-[#0B1440]/80 italic leading-relaxed">
                                &ldquo;{t.quote}&rdquo;
                              </p>
                              <p className="mt-3 text-sm font-semibold text-[#0B1440]">
                                {t.name}
                                {t.outcome && (
                                  <span className="font-normal text-[#0B1440]/60">
                                    {" "}
                                    — {t.outcome}
                                  </span>
                                )}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-5 text-sm text-[#0B1440]/50 italic">
                          Testimonials coming soon for this cohort.
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer showCta={false} />
    </div>
  );
}
