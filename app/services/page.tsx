"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Brain,
  Globe,
  Smartphone,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
  Bot,
  Users,
  Building2,
  Coffee,
  Calendar,
  Presentation,
  ChevronRight,
  Rocket,
  Target,
  Award,
  Lightbulb,
  Cpu,
  Database,
  Cloud,
  Server,
  Terminal,
  BarChart3,
  BookOpen,
  Laptop,
  Mic,
  Video,
  Wifi,
  Headphones,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ServicesPage() {
  const ecosystemData = [
    {
      id: "academy",
      icon: GraduationCap,
      title: "Tinzwave AI Academy",
      badge: "Training Hub",
      gradient: "from-indigo-500 to-purple-500",
      description:
        "High-quality practical training in AI, software development, and digital skills for individuals, teams, and institutions.",
      services: [
        {
          icon: Brain,
          title: "AI Engineering & Applied AI",
          description:
            "Master artificial intelligence, machine learning, and AI applications with hands-on projects and real-world use cases.",
          features: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
        },
        {
          icon: Code2,
          title: "Fullstack Web Development (MERN)",
          description:
            "Become a full-stack developer with MongoDB, Express.js, React, and Node.js. Build complete web applications from scratch.",
          features: ["MongoDB", "Express.js", "React", "Node.js"],
        },
        {
          icon: Smartphone,
          title: "Mobile App Development",
          description:
            "Learn to build cross-platform mobile applications using React Native and modern mobile development frameworks.",
          features: ["React Native", "Android", "iOS", "Cross-platform"],
        },
        {
          icon: TrendingUp,
          title: "Digital Marketing & Tech Skills",
          description:
            "Develop essential digital marketing skills including social media, SEO, content creation, and analytics.",
          features: ["Social Media", "SEO", "Content Marketing", "Analytics"],
        },
        {
          icon: Users,
          title: "Corporate Training Programs",
          description:
            "Custom training solutions for businesses, schools, and organizations to upskill teams and drive digital transformation.",
          features: ["Team Training", "Workshops", "Custom Curriculum", "Certification"],
        },
        {
          icon: Laptop,
          title: "Professional Courses & Bootcamps",
          description:
            "Intensive programs designed to take you from beginner to job-ready in weeks or months, not years.",
          features: ["Bootcamps", "Professional Certificates", "Hands-on Projects"],
        },
      ],
    },
    {
      id: "labs",
      icon: Cpu,
      title: "Tinzwave Labs",
      badge: "Innovation Lab",
      gradient: "from-indigo-600 to-purple-600",
      description:
        "Design, build, and deploy scalable software solutions for businesses and startups across Africa and beyond.",
      services: [
        {
          icon: Bot,
          title: "AI Solutions & Automation",
          description:
            "Intelligent chatbots, process automation, RAG systems, and AI-powered tools that transform business operations.",
          features: ["AI Chatbots", "RAG Systems", "Automation", "Predictive AI"],
        },
        {
          icon: Globe,
          title: "Web Application Development",
          description:
            "Modern, responsive, and scalable web applications built with the latest technologies and best practices.",
          features: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          icon: Smartphone,
          title: "Mobile Application Development",
          description:
            "Native and cross-platform mobile apps designed for performance, user experience, and business growth.",
          features: ["React Native", "Swift", "Kotlin", "Flutter"],
        },
        {
          icon: Database,
          title: "Business Process Automation",
          description:
            "Streamline operations with custom automation solutions that reduce costs, increase efficiency, and eliminate manual work.",
          features: ["Workflow Automation", "API Integration", "Data Processing"],
        },
        {
          icon: Rocket,
          title: "MVP Development for Startups",
          description:
            "Turn your startup idea into reality with rapid MVP development. Test, iterate, and scale quickly.",
          features: ["Rapid Prototyping", "Validation", "Pitch-ready", "Scalable"],
        },
        {
          icon: Cloud,
          title: "Enterprise Software Solutions",
          description:
            "Custom enterprise-grade software that handles complex business logic, large datasets, and high traffic loads.",
          features: ["Cloud Architecture", "DevOps", "Security", "Scalability"],
        },
      ],
    },
    {
      id: "workspace",
      icon: Building2,
      title: "Tinzwave Workspace",
      badge: "Community Space",
      gradient: "from-indigo-400 to-purple-400",
      description:
        "Professional environment for learning, collaboration, networking, and events. A space where innovation happens.",
      services: [
        {
          icon: Coffee,
          title: "Training Space Rentals",
          description:
            "Modern, fully-equipped spaces for workshops, seminars, training sessions, and corporate events.",
          features: ["Air-conditioned", "Projector", "Whiteboard", "High-speed WiFi"],
        },
        {
          icon: Users,
          title: "Meetings & Workshops",
          description:
            "Professional meeting rooms and workshop spaces for team collaborations, client meetings, and strategy sessions.",
          features: ["Boardroom", "Breakout Rooms", "Audio-visual", "Catering"],
        },
        {
          icon: Calendar,
          title: "Tech Events & Community Gatherings",
          description:
            "Host hackathons, meetups, conferences, and community events in a vibrant tech-focused environment.",
          features: ["Hackathons", "Meetups", "Conferences", "Networking"],
        },
        {
          icon: Headphones,
          title: "Virtual Office",
          description:
            "Professional virtual office service where we attend to your customers when they come in and answer calls on your behalf, ensuring you never miss an opportunity.",
          features: ["Customer Service", "Call Answering", "Client Reception", "24/7 Support"],
        },
        {
          icon: Presentation,
          title: "Corporate Events & Retreats",
          description:
            "Host your corporate retreats, team building activities, and company off-sites in a professional setting.",
          features: ["Team Building", "Off-sites", "Corporate Events", "Catering"],
        },
        {
          icon: Wifi,
          title: "Co-working & Collaboration",
          description:
            "Flexible co-working spaces designed for tech professionals, entrepreneurs, and innovators to connect and create.",
          features: ["Hot Desks", "Private Offices", "Community", "Networking"],
        },
      ],
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
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
              <span className="text-white/80 font-mono text-xs tracking-[0.2em]">
                ⚡ OUR SERVICES
              </span>
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 animate-gradient">
                Ecosystem Services
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Comprehensive technology solutions across our three divisions —
              Academy, Labs, and Workspace — designed to transform your business,
              institution, or career.
            </p>
          </div>
        </div>
      </section>

      {/* ========== ECOSYSTEM SECTIONS ========== */}
      {ecosystemData.map((ecosystem, idx) => (
        <section
          key={ecosystem.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-black" : "bg-gradient-to-b from-black via-white/5 to-black"}`}
        >
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <Reveal>
              <div className="max-w-4xl mx-auto mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ecosystem.gradient} flex items-center justify-center shadow-lg shadow-indigo-500/20`}>
                    <ecosystem.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Badge className="border border-white/20 bg-white/5 text-white/80 font-mono text-xs tracking-widest">
                      {ecosystem.badge}
                    </Badge>
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {ecosystem.title}
                </h2>
                <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                  {ecosystem.description}
                </p>
              </div>
            </Reveal>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {ecosystem.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={index}>
                    <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-full">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${ecosystem.gradient} opacity-0 group-hover:opacity-10 transition duration-500`} />
                      
                      <div className="relative flex flex-col h-full">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ecosystem.gradient} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        
                        <p className="text-sm text-white/50 leading-relaxed flex-1">
                          {service.description}
                        </p>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] text-white/30 font-mono"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-6">
                          <Link
                            href={`/${ecosystem.id}`}
                            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition group"
                          >
                            <span className="relative">
                              Learn More
                              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
                            </span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Learn More Button */}
            <div className="mt-12 text-center">
              <Button
                asChild
                className="relative px-8 py-6 text-sm font-bold bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] text-white hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-indigo-500/10"
              >
                <Link href={`/${ecosystem.id}`}>
                  <span className="relative z-10 flex items-center gap-2">
                    Explore {ecosystem.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ))}

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