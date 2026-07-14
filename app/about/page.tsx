"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Award,
  Rocket,
  Globe,
  Sparkles,
  ChevronRight,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that solve real problems.",
    },
    {
      icon: Heart,
      title: "Empowerment",
      description:
        "We believe in empowering individuals and organizations with skills and technology.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from code to customer service.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients to understand their needs and deliver tailored solutions.",
    },
  ];

  const teamMembers = [
    {
      name: "Agbo Martins Ejiofor",
      title: "CEO/Founder",
      bio: "Visionary leader driving TinzWave's mission to transform Africa through technology",
      image: "/team-agbo-martins.jpg",
    },
    {
      name: "Tochukwu (Ukoha) Victor",
      title: "Chief Technology Officer",
      bio: "AI specialist architecting our cutting-edge technology solutions",
      image: "/team-emeka.jpg",
    },
    {
      name: "Ihionkhan Shalom",
      title: "Project/Product Manager",
      bio: "Strategic project leader ensuring delivery excellence for all clients",
      image: "/team-jaala.jpg",
    },
    {
      name: "Emeka (Jude) Okonkwo",
      title: "Lead Digital Marketing",
      bio: "Digital marketing strategist growing Tinzwave's presence and impact",
      image: "/team-ihionkhan.jpg",
    },
    {
      name: "Habeeb Oluwanishola",
      title: "Software Developer",
      bio: "Skilled developer building scalable applications for our clients",
      image: "/habeeb.png",
    },
    {
      name: "Ajala Abdullah",
      title: "Software Developer",
      bio: "Passionate developer creating innovative solutions and systems",
      image: "/team-habeeb.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ========== HERO - Premium 2038 Style ========== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#03005F]/40 via-black to-black" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#03005F]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#03005F]/30 bg-[#03005F]/10 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 bg-[#03005F] rounded-full animate-pulse shadow-lg shadow-[#03005F]/50" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 font-mono text-xs tracking-[0.2em]">
                ⚡ OUR STORY
              </span>
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse shadow-lg shadow-indigo-500/50" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">About</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 animate-gradient">
                TinzWave
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              We are on a mission to empower Africa through technology and
              world-class digital skills training.
            </p>
          </div>
        </div>
      </section>

      {/* ========== STORY + IMAGE - Clean Split ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <Badge className="mb-4 px-4 py-1.5 border border-white/20 bg-white/5 text-white/70 font-mono text-xs tracking-widest">
                  OUR JOURNEY
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Building Africa's Digital Future
                </h2>
                <div className="space-y-4 text-white/50 leading-relaxed">
                  <p>
                    Tinzwave was founded with a clear vision: to bridge the
                    digital divide in Africa by providing world-class technology
                    solutions and training. We recognized that African businesses,
                    institutions, and individuals needed access to modern
                    technology and the skills to use it effectively.
                  </p>
                  <p>
                    What started as a small software development company has grown
                    into a comprehensive technology partner for organizations
                    across Africa. We now offer AI-powered software development,
                    web and mobile development, digital marketing services, and a
                    robust tech academy that has trained thousands of students.
                  </p>
                  <p>
                    Today, Tinzwave serves businesses, schools, churches, and
                    individuals, helping them leverage technology to achieve their
                    goals. We're not just building software—we're building
                    capacity, creating opportunities, and transforming lives
                    through technology.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#03005F]/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <Image
                  src="/group.jpeg"
                  alt="Tinzwave Team"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl text-xs text-white/60 font-mono">
                    <Sparkles className="w-3 h-3" />
                    TinzWave Team 2026
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-20 w-16 h-16 border-t-2 border-r-2 border-[#03005F]/30" />
                <div className="absolute bottom-4 left-4 z-20 w-16 h-16 border-b-2 border-l-2 border-[#03005F]/30" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION - Premium Cards ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-[#03005F]/5 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#03005F]/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#03005F]/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 text-white shadow-lg shadow-[#03005F]/30">
                      <Target className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-white/50 leading-relaxed">
                    To empower African businesses, institutions, and individuals
                    with AI-powered technology solutions and world-class digital
                    skills training that drive innovation, growth, and
                    transformation across the continent.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#03005F]/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30">
                      <Eye className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                  </div>
                  <p className="text-white/50 leading-relaxed">
                    To be Africa's leading technology company, recognized for
                    innovative solutions and excellence in digital skills
                    training, enabling organizations and individuals to thrive in
                    the digital economy.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES - Clean Grid ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1.5 border border-white/20 bg-white/5 text-white/70 font-mono text-xs tracking-widest">
              OUR PRINCIPLES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Values
            </h2>
            <p className="text-white/40 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Reveal key={index}>
                <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#03005F]/20 text-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#03005F]/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 text-white shadow-lg shadow-[#03005F]/30 mb-4 group-hover:scale-110 transition">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/40 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MEET THE TEAM - Premium Grid ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-[#03005F]/10 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-1.5 border border-white/20 bg-white/5 text-white/70 font-mono text-xs tracking-widest">
              OUR PEOPLE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-white/40 text-lg">
              Experienced professionals passionate about technology and
              empowering Africa
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Reveal key={index}>
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#03005F]/20">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#03005F]/20 to-indigo-500/20">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="relative p-6">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-white/70 mb-2">
                      {member.title}
                    </p>
                    <p className="text-sm text-white/40">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
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