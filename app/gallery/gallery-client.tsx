"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, X, Sparkles, Zap, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);

  const galleryImages = [
    {
      category: "Lectures & Training",
      icon: "🎓",
      images: [
        {
          url: "/images/gallery-1.png",
          caption: "Certificate Presentation - Cohort Celebration",
        },
        {
          url: "/images/gallery-2.png",
          caption: "Group Training Session - Students with Certificates",
        },
        {
          url: "/images/gallery-3.png",
          caption: "Classroom Learning Space - Interactive Training",
        },
        {
          url: "/images/gallery-4.png",
          caption: "Learning Center - Students Collaborating",
        },
        {
          url: "/images/gallery-7.png",
          caption: "Team Cohort - Certificate Award Ceremony",
        },
        {
          url: "/images/gallery-6.png",
          caption: "Hands-on Code Development - Live Coding Session",
        },
      ],
    },
    {
      category: "Certificate Collections",
      icon: "🏆",
      images: [
        {
          url: "/images/gallery-7.png",
          caption: "Graduation Cohort - Successful Program Completion",
        },
        {
          url: "/images/gallery-8.png",
          caption: "Certificate Ceremony - Proud Graduates",
        },
        {
          url: "/images/gallery-2.png",
          caption: "Achievement Celebration - Team Success",
        },
        {
          url: "/images/gallery-1.png",
          caption: "Graduation Day - Certificates Awarded",
        },
        {
          url: "/images/gallery-9.png",
          caption: "Success Stories - Certificate Recipients",
        },
        {
          url: "/images/gallery-1.png",
          caption: "Program Graduates - Certificate Collection",
        },
      ],
    },
    {
      category: "Classroom Activities",
      icon: "💻",
      images: [
        {
          url: "/images/gallery-3.png",
          caption: "Modern Learning Environment - Study Space",
        },
        {
          url: "/images/gallery-4.png",
          caption: "Student Collaboration - Group Work Session",
        },
        {
          url: "/images/gallery-6.png",
          caption: "Development Work - Practical Training",
        },
        {
          url: "/images/gallery-2.png",
          caption: "Team Building - Training Cohort",
        },
        {
          url: "/images/gallery-7.png",
          caption: "Interactive Learning - Group Discussion",
        },
        {
          url: "/images/gallery-9.png",
          caption: "Creative Workspace - Modern Facilities",
        },
      ],
    },
    {
      category: "Community",
      icon: "🤝",
      images: [
        {
          url: "/gallery1.jpeg",
          caption: "Instructors and trainees posing in front of the Tinzwave banner, representing the diverse community of learners dedicated to securing their future through tech skills",
        },
        {
          url: "/gallery2.jpeg",
          caption: "An interactive classroom session in progress. Students are engaged in a lecture, utilizing their laptops for real-time application of concepts being taught by the lead instructor",
        },
        {
          url: "/gallery3.jpeg",
          caption: "Celebrating success and community. Students and staff share a lighthearted moment at the training center",
        },
        {
          url: "/gallery4.jpeg",
          caption: "A practical workshop session focusing on UI/UX design. The whiteboard displays notes on common UI elements like buttons, inputs, and typography",
        },
        {
          url: "/gallery5.jpeg",
          caption: "The dedicated workspace at our facility allows students to focus individually on their projects and assignments in a comfortable, air-conditioned environment.",
        },
        {
          url: "/images/gallery-9.png",
          caption: "Creative Workspace - Modern Facilities",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0B1440]">
      <Navigation />

      {/* ========== HERO - photo bg with navy scrim ========== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery1.jpeg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1440]/85 via-[#0B1440]/80 to-[#080F30]/95" />
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#22B4F5]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/15 bg-[#0B1440]/90 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 bg-[#78E1FF] rounded-full animate-pulse shadow-lg shadow-[#78E1FF]/40" />
              <span className="text-white/90 font-mono text-xs tracking-[0.2em]">
                ⚡ OUR GALLERY
              </span>
              <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/40" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#78E1FF] via-[#22B4F5] to-white animate-gradient">
                Gallery
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Explore our training sessions, lectures, certificate collections, and classroom activities.
              See what we've been building and who we've been empowering.
            </p>
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTIONS ========== */}
      {galleryImages.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-20 ${
            sectionIndex % 2 === 0
              ? "bg-gradient-to-b from-[#4FD2FF] via-[#22B4F5] to-[#0D96E8]"
              : "bg-gradient-to-b from-[#22B4F5] via-[#0D96E8] to-[#0A7FD1]"
          }`}
        >
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <Badge className="border border-white/15 bg-[#0B1440]/90 text-white font-mono text-xs tracking-widest">
                    SECTION {sectionIndex + 1}
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0B1440] mb-4">
                  {section.category}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#0B1440] to-white/70 mx-auto rounded-full" />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, imageIndex) => (
                <Reveal key={imageIndex}>
                  <div
                    className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/40 bg-white/30 backdrop-blur-sm hover:border-white/70 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#080F30]/20"
                    onClick={() => setSelectedImage(image)}
                  >
                    {/* Gallery photo itself is left clean — no permanent scrim, only a hover caption overlay below */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#0B1440]/10">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.caption}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080F30]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Hover overlay with caption */}
                      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-full">
                          <p className="text-white text-sm font-medium line-clamp-2">
                            {image.caption}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-white/60 text-xs font-mono">
                            <span>View</span>
                            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image counter badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full border border-white/10 bg-[#0B1440]/70 backdrop-blur-xl text-[10px] text-white/70 font-mono">
                      {imageIndex + 1}/{section.images.length}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ========== LIGHTBOX MODAL - Premium 2038 ========== */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#080F30]/95 z-50 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 p-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full border border-white/10 bg-[#0B1440]/70 backdrop-blur-xl text-xs text-white/60 font-mono">
            Gallery View
          </div>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#080F30]/40">
              <Image
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.caption}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#080F30]/90 via-[#080F30]/50 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#22B4F5] to-[#78E1FF] rounded-full" />
                  <p className="text-white text-lg font-medium">{selectedImage.caption}</p>
                </div>
              </div>
            </div>

            {/* Navigation hint */}
            <div className="text-center mt-4">
              <p className="text-xs text-white/40 font-mono tracking-wider">
                Click outside to close · ESC to exit
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}