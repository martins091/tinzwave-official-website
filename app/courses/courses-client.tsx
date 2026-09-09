"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Clock,
  DollarSign,
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  Users,
  Building2,
  School,
  University,
  BookOpen,
  Award,
  Target,
  ChevronRight,
} from "lucide-react";
import { courses } from "@/lib/courses-data";
import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const trainingOptions = [
    {
      icon: Users,
      title: "Individuals",
      description: "Self-paced or instructor-led courses for career growth and skill development.",
    },
    {
      icon: Building2,
      title: "Corporate Teams",
      description: "Custom training programs designed to upskill your organization's workforce.",
    },
    {
      icon: School,
      title: "Secondary Schools",
      description: "Tech education programs and workshops for high school students.",
    },
    {
      icon: University,
      title: "Universities",
      description: "Partnership programs, curriculum support, and guest lectures.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0B1440]">
      <Navigation />

      {/* ========== HERO - Full Width Image Background ========== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery4.jpeg"
            alt="Tinzwave Tech Academy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1440]/95 via-[#0B1440]/85 to-[#080F30]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080F30]/60 via-transparent to-[#0B1440]/40" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 w-[500px] h-[500px] animate-[spin_25s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 w-[700px] h-[700px] animate-[spin_30s_linear_infinite_reverse]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 bg-[#78E1FF] rounded-full animate-pulse shadow-lg shadow-[#78E1FF]/50" />
              <span className="text-white/90 font-mono text-xs tracking-[0.2em]">
                ⚡ AI ACADEMY
              </span>
              <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/40" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">Tinzwave</span>
              <span className="block text-[#78E1FF]">
                AI Academy
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              Transform your career with world-class tech training. Learn from industry
              practitioners and gain practical skills that employers value.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FILTERS ========== */}
      <section className="py-6 border-b border-[#0B1440]/10 bg-white backdrop-blur-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0B1440]/40" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#0B1440]/5 border-[#0B1440]/15 text-[#0B1440] placeholder:text-[#0B1440]/40 focus:border-[#22B4F5]/60 focus:ring-[#22B4F5]/20"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#0B1440] to-indigo-600 text-white border-0 hover:from-[#0B1440] hover:to-indigo-700"
                      : "bg-transparent border-[#0B1440]/20 text-[#0B1440]/70 hover:text-[#0B1440] hover:bg-[#0B1440]/5 hover:border-[#0B1440]/40"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== COURSES GRID ========== */}
      <section className="py-20 bg-gradient-to-b from-white via-[#EAF9FF] to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredCourses.map((course) => (
              <Reveal key={course.id}>
                <div className="group relative rounded-2xl overflow-hidden border border-[#0B1440]/10 bg-white shadow-sm hover:shadow-2xl hover:shadow-[#0B1440]/10 transition-all duration-500 hover:scale-[1.02] h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#22B4F5]/5 to-[#0A7FD1]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="px-3 py-1 border border-[#0B1440]/15 bg-[#0B1440]/5 text-[#0B1440]/70 font-mono text-xs tracking-wider">
                        {course.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-[#0B1440]/40 font-mono">
                        <BookOpen className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B1440] mb-3 group-hover:text-[#0A7FD1] transition duration-500">
                      {course.title}
                    </h3>

                    <p className="text-[#0B1440]/60 text-sm leading-relaxed flex-1 mb-4">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between mb-6 pt-4 border-t border-[#0B1440]/10">
                      <div className="flex items-center gap-2 text-[#0B1440]/50">
                        <Clock className="h-4 w-4 text-[#0B1440]/50" />
                        <span className="text-xs text-[#0B1440]/50">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-[#0B1440]">₦{course.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="relative w-full bg-gradient-to-r from-[#0B1440] to-indigo-600 text-white hover:shadow-2xl hover:shadow-[#0B1440]/40 transition-all duration-500 overflow-hidden group rounded-xl"
                    >
                      <Link href={`/courses/${course.slug}`} className="flex items-center justify-center gap-2">
                        <span className="relative z-10">View Details</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition" />
                        <span className="absolute inset-0 bg-gradient-to-r from-[#0B1440] to-indigo-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0B1440]/10 bg-[#0B1440]/5 text-[#0B1440]/50">
                <Search className="w-4 h-4" />
                <span>No courses found matching your search.</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========== TRAINING OPTIONS ========== */}
      <section className="py-20 bg-gradient-to-b from-[#4FD2FF] via-[#22B4F5] to-[#0D96E8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1.5 border border-white/15 bg-[#0B1440]/90 text-white font-mono text-xs tracking-widest">
              TRAINING OPTIONS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1440] mb-4">
              Who We Train
            </h2>
            <p className="text-[#0B1440]/70 text-lg max-w-2xl mx-auto">
              We offer flexible training programs for individuals and organizations
              at every stage of their tech journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trainingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Reveal key={index}>
                  <div className="group relative p-6 rounded-2xl border border-white/40 bg-white/95 hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#080F30]/20 text-center">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B1440] to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0B1440]/30 group-hover:scale-110 transition">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0B1440] mb-2">
                        {option.title}
                      </h3>
                      <p className="text-sm text-[#0B1440]/60 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
}