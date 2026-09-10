"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight, ImageIcon, Star } from "lucide-react";
import { projects } from "@/lib/martins-data";

export default function ProjectsPage() {
  const flagship = projects.find((p) => p.flagship);
  const rest = projects.filter((p) => !p.flagship);

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
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1440]">Projects</h1>
          <p className="mt-4 text-lg text-[#0B1440]/70 max-w-2xl">
            Products I&apos;ve founded, built, and shipped — from a live AI SaaS
            product to client and internal work through Tinzwave Labs.
          </p>
        </div>
      </section>

      {/* ========== FLAGSHIP PROJECT ========== */}
      {flagship && (
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="rounded-3xl border border-[#0B1440]/10 bg-gradient-to-br from-[#0B1440] to-[#080F30] overflow-hidden shadow-2xl shadow-[#080F30]/20">
                <div className="p-8 md:p-12">
                  <span className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-[#78E1FF]/15 text-[#78E1FF] text-[10px] font-mono tracking-wider border border-[#78E1FF]/30">
                    <Star className="w-3 h-3 fill-current" />
                    FLAGSHIP PROJECT
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {flagship.name}
                  </h2>
                  <p className="text-white/70 leading-relaxed max-w-2xl">
                    {flagship.description}
                  </p>

                  {flagship.role && (
                    <p className="mt-4 text-sm text-white/50">
                      Role: <span className="text-white/80 font-medium">{flagship.role}</span>
                    </p>
                  )}

                  {flagship.stats && flagship.stats.some((s) => s.value) ? (
                    <div className="mt-6 flex flex-wrap gap-6">
                      {flagship.stats
                        .filter((s) => s.value)
                        .map((stat) => (
                          <div key={stat.label}>
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                            <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <p className="mt-6 text-sm text-white/40 italic">
                      Live usage stats coming soon.
                    </p>
                  )}

                  {flagship.liveUrl && (
                    <a
                      href={flagship.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#22B4F5] to-[#0A7FD1] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#22B4F5]/30 transition"
                    >
                      Visit interviewai.tinzwave.com
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ========== OTHER PROJECTS GRID ========== */}
      {rest.length > 0 && (
        <section className="py-8 px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <h2 className="text-2xl font-bold text-[#0B1440] mb-8">More Work</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-6">
              {rest.map((project) => (
                <Reveal key={project.id}>
                  <div className="h-full rounded-2xl border border-[#0B1440]/10 bg-white hover:shadow-xl hover:shadow-[#0A7FD1]/10 transition-all duration-300 overflow-hidden flex flex-col">
                    {/* Screenshot / placeholder */}
                    <div className="relative aspect-video bg-[#EEF5FC] flex items-center justify-center">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2 text-[#0B1440]/25">
                          <ImageIcon className="w-8 h-8" />
                          <span className="text-xs font-mono tracking-wide">
                            Screenshot coming soon
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-[#0B1440] mb-2">{project.name}</h3>
                      <p className="text-sm text-[#0B1440]/65 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#0B1440]/50">
                        {project.role && <span>Role: {project.role}</span>}
                        {project.stats
                          ?.filter((s) => s.value)
                          .map((stat) => (
                            <span key={stat.label} className="font-medium text-[#0A7FD1]">
                              {stat.value} {stat.label.toLowerCase()}
                            </span>
                          ))}
                      </div>

                      {project.techStack && project.techStack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-full bg-[#0B1440]/5 text-[10px] font-mono text-[#0B1440]/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A7FD1] hover:text-[#0B1440] transition"
                        >
                          Visit live project
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer showCta={false} />
    </div>
  );
}
