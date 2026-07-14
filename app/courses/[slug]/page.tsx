"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Clock,
  DollarSign,
  CheckCircle2,
  Users,
  MapPin,
  MessageCircle,
  Sparkles,
  Zap,
  ArrowRight,
  BookOpen,
  Award,
  Target,
} from "lucide-react";
import { courses } from "@/lib/courses-data";
import { notFound, useParams } from "next/navigation";

export default function CourseDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const whatsappMessage = `Hi, I'm interested in enrolling in the ${course.title} course. Please provide more details.`;
  const whatsappLink = `https://wa.me/2349161052706?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ========== HERO - Premium 2038 Style ========== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#03005F]/40 via-black to-black" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#03005F]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl mb-6">
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
              <span className="text-white/80 font-mono text-xs tracking-[0.2em]">
                {course.category.toUpperCase()}
              </span>
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              <span className="text-white">{course.title}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Duration</p>
                  <p className="font-semibold text-white">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Investment</p>
                  <p className="font-bold text-white text-xl">{course.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Mode</p>
                  <p className="font-semibold text-white">{course.mode.join(" / ")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="relative px-8 py-6 text-sm font-bold bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] text-white hover:shadow-2xl hover:shadow-[#03005F]/50 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-[#03005F]/20"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Enroll via WhatsApp
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </a>
              </Button>
              <Button
                asChild
                className="px-8 py-6 text-sm font-medium border-2 border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40 backdrop-blur-xl transition-all duration-500 rounded-xl"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get More Info
                  <Sparkles className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Course Overview ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-white/5">
                <BookOpen className="h-6 w-6 text-white/80" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Course Overview
              </h2>
            </div>
            <p className="text-white/50 leading-relaxed text-lg">
              {course.overview}
            </p>
          </div>
        </div>
      </section>

      {/* ========== What You Will Learn ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-white/5">
                <Target className="h-6 w-6 text-white/80" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What You Will Learn
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouLearn.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-xl transition">
                  <CheckCircle2 className="h-5 w-5 text-white/60 shrink-0 mt-1 group-hover:text-white transition" />
                  <p className="text-white/50 group-hover:text-white/80 transition">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Tools & Technologies ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-white/5">
                <Zap className="h-6 w-6 text-white/80" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Tools & Technologies
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {course.tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white/70 font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Who Should Enroll ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-white/5">
                <Users className="h-6 w-6 text-white/80" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Who Should Enroll
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whoShouldEnroll.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-xl transition">
                  <CheckCircle2 className="h-5 w-5 text-white/60 shrink-0 mt-1 group-hover:text-white transition" />
                  <p className="text-white/50 group-hover:text-white/80 transition">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Course Details Card ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-white/5">
              <div className="absolute inset-0 bg-white/5 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-white/5">
                    <Award className="h-6 w-6 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Course Information
                  </h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-white/40">Duration</span>
                    <span className="font-semibold text-white">{course.duration}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-white/40">Price</span>
                    <span className="font-bold text-white text-xl">{course.price}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-white/40">Learning Mode</span>
                    <span className="font-semibold text-white">{course.mode.join(" / ")}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-white/40">Category</span>
                    <span className="font-semibold text-white">{course.category}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    asChild
                    className="w-full relative py-6 text-sm font-bold bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] text-white hover:shadow-2xl hover:shadow-[#03005F]/50 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-[#03005F]/20"
                  >
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Enroll via WhatsApp
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full py-6 text-sm font-medium border-2 border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40 backdrop-blur-xl transition-all duration-500 rounded-xl"
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Get More Information
                      <Sparkles className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
}