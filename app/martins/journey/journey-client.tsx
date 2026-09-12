"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Reveal from "@/components/Reveal";
import {
  ArrowLeft,
  Building2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Linkedin,
  MapPin,
  Phone,
  Quote,
  Users,
  X,
} from "lucide-react";
import {
  trainingStats,
  teachingRoles,
  partnerships,
  impactGallery,
  impactTestimonials,
} from "@/lib/martins-data";

interface LightboxPhoto {
  src: string;
  alt: string;
  caption: string;
}

export default function JourneyPage() {
  const lightboxPhotos = useMemo<LightboxPhoto[]>(
    () => [
      ...partnerships
        .filter((p) => p.image)
        .map((p) => ({ src: p.image as string, alt: p.name, caption: p.name })),
      ...impactGallery.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        caption: photo.caption,
      })),
    ],
    []
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + lightboxPhotos.length) % lightboxPhotos.length
      ),
    [lightboxPhotos.length]
  );
  const showNext = useCallback(
    () =>
      setLightboxIndex((i) => (i === null ? null : (i + 1) % lightboxPhotos.length)),
    [lightboxPhotos.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activePhoto = lightboxIndex === null ? null : lightboxPhotos[lightboxIndex];

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
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1440]">Training Impact</h1>
          <p className="mt-4 text-lg text-[#0B1440]/70 max-w-2xl">
            Everywhere I&apos;ve trained developers and AI engineers — Tinzwave
            AI Academy, partner tech academies, and a training partnership
            with local government.
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

      {/* ========== WHERE I'VE TRAINED ========== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1440] mb-2">
              Where I&apos;ve Trained People
            </h2>
            <p className="text-[#0B1440]/60 mb-10 max-w-2xl">
              As an instructor and, eventually, as a founder building my own
              academy.
            </p>
          </Reveal>

          <div className="space-y-5">
            {teachingRoles.map((role, idx) => (
              <Reveal key={idx}>
                <div className="flex items-start gap-5 p-6 rounded-2xl border border-[#0B1440]/10 bg-white hover:shadow-lg hover:shadow-[#0B1440]/5 transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B1440] to-indigo-600 flex items-center justify-center">
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6 text-white" />
                    ) : (
                      <Building2 className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className="font-bold text-lg text-[#0B1440]">{role.organization}</p>
                      {role.period && (
                        <span className="text-xs font-mono tracking-wide text-[#0A7FD1]">
                          {role.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#0A7FD1] mt-0.5">{role.role}</p>
                    {role.description && (
                      <p className="mt-2 text-[#0B1440]/65 leading-relaxed">{role.description}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARTNERSHIPS ========== */}
      <section className="py-20 px-6 bg-[#EEF5FC]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1440] mb-2">Partnerships</h2>
            <p className="text-[#0B1440]/60 mb-10 max-w-2xl">
              Taking training beyond the classroom — into local government and
              secondary schools.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partnership, idx) => (
              <Reveal key={partnership.id}>
                <div className="h-full rounded-2xl border border-[#0B1440]/10 bg-white overflow-hidden flex flex-col">
                  {partnership.image && (
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className="group relative aspect-[4/3] bg-[#0B1440] w-full cursor-zoom-in"
                    >
                      <Image
                        src={partnership.image}
                        alt={partnership.name}
                        fill
                        sizes="(min-width: 768px) 480px, 90vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#0B1440] mb-2">{partnership.name}</h3>
                    <p className="text-sm text-[#0B1440]/65 leading-relaxed flex-1">
                      {partnership.description}
                    </p>
                    <div className="mt-4 space-y-1.5 text-xs text-[#0B1440]/50">
                      {partnership.location && (
                        <p className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          {partnership.location}
                        </p>
                      )}
                      {partnership.contact && (
                        <p className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                          {partnership.contact}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1440] mb-2">Moments</h2>
            <p className="text-[#0B1440]/60 mb-10 max-w-2xl">
              From the classroom to certificate day. Click any photo for a closer look.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {impactGallery.map((photo, idx) => {
              const partnershipImageCount = partnerships.filter((p) => p.image).length;
              return (
                <Reveal key={idx}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(partnershipImageCount + idx)}
                    className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#0B1440]/10 bg-[#EEF5FC] cursor-zoom-in"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1440]/90 via-[#0B1440]/40 to-transparent p-4 pt-10">
                      <p className="text-sm font-medium text-white leading-snug text-left">
                        {photo.caption}
                      </p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      {impactTestimonials.length > 0 && (
        <section className="py-20 overflow-hidden bg-gradient-to-b from-[#0B1440] to-[#080F30]">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl text-white font-mono text-xs tracking-[0.2em] mb-5">
                  TESTIMONIALS
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">What People Say</h2>
              </div>
            </Reveal>
          </div>

          <div className="px-6">
            <div className="max-w-6xl mx-auto flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
              {impactTestimonials.map((testimonial, idx) => {
                const initials = testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase();
                return (
                  <div
                    key={idx}
                    className="group relative flex-shrink-0 w-[320px] sm:w-[380px] snap-start p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 flex flex-col"
                  >
                    <Quote className="w-9 h-9 text-[#78E1FF]/30 mb-4" />
                    <p className="relative text-white/90 leading-relaxed italic flex-1">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="relative mt-6 flex items-center gap-3">
                      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#22B4F5] to-[#0A7FD1] flex items-center justify-center text-white font-semibold text-sm">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white truncate">{testimonial.name}</p>
                        <p className="text-sm text-white/50 truncate">{testimonial.role}</p>
                      </div>
                      {testimonial.source === "LinkedIn" && (
                        <span className="ml-auto flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium">
                          <Linkedin className="w-3.5 h-3.5" />
                          LinkedIn
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Reveal>
            <p className="text-center text-white/30 text-xs font-mono tracking-widest mt-6">
              ← SWIPE TO SEE MORE →
            </p>
          </Reveal>
        </section>
      )}

      <Footer showCta={false} />

      {/* ========== LIGHTBOX ========== */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#080F30]/95 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative w-[90vw] h-[75vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm text-center px-6">
            {activePhoto.caption}
          </p>
        </div>
      )}
    </div>
  );
}
