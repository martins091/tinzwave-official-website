"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useState, useEffect } from "react";
import {
  Brain,
  Globe,
  Smartphone,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Cpu,
  Shield,
  Infinity,
  CircuitBoard,
  Zap,
  Layers,
  Gauge,
  Rocket,
  Award,
  Bot,
  Database,
  Cloud,
  Server,
  Terminal,
  BarChart3,
  Users,
  BookOpen,
  Lightbulb,
  ChevronRight,
  Hexagon,
  Atom,
  Building2,
  Coffee,
  Radio,
  AudioLines,
  Mic,
  Presentation,
  Network,
  Scan,
  Radar,
  Orbit,
} from "lucide-react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    const handleScroll = () => {
      const scroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scroll / maxScroll);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -------- ACTUAL TINZWAVE OFFERINGS (from strategy doc) --------
  const divisions = [
    {
      icon: GraduationCap,
      title: "Tinzwave AI Academy",
      description:
        "High-quality practical training in AI Engineering, Fullstack Web (MERN), Mobile Development, and Digital Marketing. Bootcamps, professional courses, workshops, and corporate training.",
      href: "/courses",
      gradient: "from-rose-500 to-pink-500",
      badge: "Training Hub",
      features: ["Bootcamps", "Professional Courses", "Corporate Training", "Workshops"],
      stat: "500+ students",
    },
    {
      icon: Brain,
      title: "Tinzwave Labs",
      description:
        "Design, build, and deploy scalable AI solutions, web & mobile applications, business automation, and MVPs for startups and enterprises.",
      href: "/labs",
      gradient: "from-indigo-500 to-purple-500",
      badge: "Innovation Lab",
      features: ["AI Solutions", "Web Apps", "Mobile Apps", "MVP Development"],
      stat: "50+ projects",
    },
    {
      icon: Building2,
      title: "Tinzwave Workspace",
      description:
        "Professional environment for learning, collaboration, and events. Training space rentals, meeting rooms, workshops, and tech community gatherings.",
      href: "/workspace",
      gradient: "from-emerald-500 to-teal-500",
      badge: "Community Space",
      features: ["Training Space", "Meetings", "Workshops", "Tech Events"],
      stat: "1,200+ visitors",
    },
  ];

  // -------- STATS --------
  const stats = [
    { value: "500+", label: "Students Trained", icon: Users },
    { value: "50+", label: "Projects Delivered", icon: Cpu },
    { value: "98%", label: "Success Rate", icon: Award },
    { value: "12+", label: "Courses & Programs", icon: BookOpen },
  ];

  // -------- TECH STACK --------
  const technologies = [
    { name: "MERN Stack", icon: Globe, color: "cyan" },
    { name: "React Native", icon: Smartphone, color: "emerald" },
    { name: "AI / ML", icon: Brain, color: "indigo" },
    { name: "Python", icon: Bot, color: "violet" },
    { name: "Digital Marketing", icon: TrendingUp, color: "amber" },
    { name: "Business Automation", icon: Zap, color: "rose" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navigation />

      {/* ========== FUTURISTIC 2038 HERO WITH FULL-SIZE IMAGE ========== */}
      <section
        className="relative min-h-[100vh] flex items-center overflow-hidden"
        style={{
          background: `
      radial-gradient(ellipse at ${50 + mousePosition.x * 8}% ${40 + mousePosition.y * 8}%, 
      rgba(3, 0, 95, 0.6), transparent 60%),
      radial-gradient(ellipse at ${70 + mousePosition.x * 6}% ${60 + mousePosition.y * 6}%, 
      rgba(99, 102, 241, 0.2), transparent 50%),
      #000000
    `,
        }}
      >
        {/* Animated Grid with parallax */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
          linear-gradient(rgba(3, 0, 95, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(3, 0, 95, 0.06) 1px, transparent 1px)
        `,
              backgroundSize: "50px 50px",
              transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 12}px)`,
            }}
          />
        </div>

        {/* Orbital Rings - Enhanced 2038 style */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#03005F]/20 w-[500px] h-[500px] animate-[spin_25s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/15 w-[700px] h-[700px] animate-[spin_30s_linear_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10 w-[900px] h-[900px] animate-[spin_35s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10 w-[1100px] h-[1100px] animate-[spin_40s_linear_infinite_reverse]" />

          {/* Floating particles */}
          <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-indigo-400 rounded-full animate-pulse shadow-lg shadow-indigo-500/50" />
          <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-500/50 delay-300" />
          <div className="absolute bottom-[25%] left-[25%] w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-500/50 delay-700" />
          <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse shadow-lg shadow-rose-500/50 delay-500" />
          <div className="absolute top-[10%] left-[45%] w-2 h-2 bg-[#03005F] rounded-full animate-pulse shadow-lg shadow-[#03005F]/50 delay-200" />
          <div className="absolute bottom-[15%] right-[45%] w-1 h-1 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-500/50 delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[100vh] -mx-4">

            {/* LEFT - CONTENT - Full height with padding */}
            <div className="flex items-center px-6 md:px-12 py-12">
              <Reveal>
                <div className="space-y-8 max-w-xl">
                  

                  {/* Main Headline - 2038 style */}
                  <div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                      <span className="block mt-1 text-white/90 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Innovation
                      </span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-gradient">
                        Ecosystem
                      </span>
                    </h1>
                  </div>

                  <p className="text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed font-light tracking-wide">
                    AI Academy • Innovation Labs • Workspace</p>

                  {/* CTA Buttons - 2038 style with glow */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Button
                      asChild
                      size="lg"
                      className="relative px-8 py-6 text-sm font-medium bg-gradient-to-r from-[#03005F] to-indigo-600 text-white hover:shadow-2xl hover:shadow-[#03005F]/40 transition-all duration-300 overflow-hidden group rounded-xl"
                    >
                      <Link href="/services" className="flex items-center gap-3">
                        <span className="relative z-10 flex items-center gap-3">
                         
                          Explore Services
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 opacity-0 group-hover:opacity-100 transition" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      className="px-8 py-6 text-sm font-medium border border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-xl transition-all duration-300 rounded-xl group"
                    >
                      <Link href="/courses">
                        <GraduationCap className="w-4 h-4 mr-3 group-hover:scale-110 transition" />
                        Join Next Cohort
                      </Link>
                    </Button>
                  </div>

                </div>
              </Reveal>
            </div>

            {/* RIGHT - FULL SIZE IMAGE - Takes entire right half */}
            <div className="relative h-[100vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
              {/* Central Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#03005F]/30 via-indigo-500/20 to-purple-500/30 blur-3xl animate-pulse" />

              {/* Image Container - Full height and width */}
              <div className="relative w-full h-full">
                {/* Glow overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-indigo-500/20 z-10" />

                {/* The Image - Full size */}
                <Image
                  src="/ourai.png"
                  alt="Tinzwave Innovation Ecosystem 2038"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="50vw"
                />

                {/* Scanning line effect */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#03005F] to-transparent animate-scan" />
                </div>

                {/* Corner accents - Futuristic frame */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-3 border-l-3 border-[#03005F]/50 z-30" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-3 border-r-3 border-[#03005F]/50 z-30" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-3 border-l-3 border-[#03005F]/50 z-30" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-3 border-r-3 border-[#03005F]/50 z-30" />

                {/* Glowing edge lines */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#03005F] to-transparent z-30 opacity-50" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#03005F] to-transparent z-30 opacity-50" />
              </div>

              {/* Orbiting Tech Tags - Positioned over the image */}
              {/* Orbiting Tech Tags - Positioned over the image with better visibility */}
              <div className="absolute top-2 right-2 px-4 py-2 rounded-full border border-white/20 bg-black/90 backdrop-blur-xl text-xs text-white/60 font-mono tracking-wider animate-pulse z-40 shadow-lg shadow-[#03005F]/20">
                AI · ML
              </div>
              <div className="absolute bottom-2 left-2 px-4 py-2 rounded-full border border-white/20 bg-black/90 backdrop-blur-xl text-xs text-white/60 font-mono tracking-wider animate-pulse delay-500 z-40 shadow-lg shadow-[#03005F]/20">
                MERN · React · Python
              </div>
              <div className="absolute top-[15%] right-6 px-3 py-1.5 rounded-full border border-white/10 bg-black/90 backdrop-blur-xl text-[10px] text-white/40 font-mono tracking-wider animate-pulse delay-300 z-40 shadow-lg shadow-[#03005F]/10">
                ✦ ACADEMY
              </div>
              <div className="absolute bottom-[15%] left-6 px-3 py-1.5 rounded-full border border-white/10 bg-black/90 backdrop-blur-xl text-[10px] text-white/40 font-mono tracking-wider animate-pulse delay-700 z-40 shadow-lg shadow-[#03005F]/10">
                ✦ LABS
              </div>
              <div className="absolute top-[45%] right-10 px-3 py-1.5 rounded-full border border-white/5 bg-black/90 backdrop-blur-xl text-[10px] text-white/30 font-mono tracking-wider animate-pulse delay-500 z-40">
                ⚡ AI AUTOMATION
              </div>
              <div className="absolute bottom-[45%] left-10 px-3 py-1.5 rounded-full border border-white/5 bg-black/90 backdrop-blur-xl text-[10px] text-white/30 font-mono tracking-wider animate-pulse delay-300 z-40">
                🚀 INNOVATION
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* ========== THREE DIVISIONS - PREMIUM REDESIGN ========== */}
<section className="relative py-40 overflow-hidden bg-gradient-to-b from-black via-[#03005F]/10 to-black">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#03005F]/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header - Enhanced */}
    <div className="text-center max-w-4xl mx-auto mb-20">
      <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#03005F]/30 bg-[#03005F]/10 backdrop-blur-xl mb-6">
        <span className="w-2 h-2 bg-[#03005F] rounded-full animate-pulse shadow-lg shadow-[#03005F]/50" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 font-mono text-xs tracking-[0.2em]">
          ⚡ OUR ECOSYSTEM
        </span>
        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse shadow-lg shadow-indigo-500/50" />
      </div>
      
      <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
        <span className="text-white">Three Divisions,</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 animate-gradient">
          One Unified Mission
        </span>
      </h2>
      
      <p className="mt-6 text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
        We bridge the gap between technology and real-world impact through education, innovation, and collaboration.
      </p>
    </div>

    {/* Premium Cards Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {divisions.map((item, i) => {
        const Icon = item.icon;
        // Image paths - replace with your actual image names
        const imageMap = {
          "Tinzwave AI Academy": "/gallery4.jpeg",
          "Tinzwave Labs": "/coding.png",
          "Tinzwave Workspace": "/workspace2.png",
        };
        const imageSrc = imageMap[item.title] || "/placeholder-image.png";

        return (
          <Link key={i} href={item.href} className="group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-sm hover:bg-white/[0.10] transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#03005F]/30 h-full">
              
              {/* Premium gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition duration-700`} />
              
              {/* Glow border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition duration-700 pointer-events-none`} />

              {/* Image Section - Top of card */}
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-b from-[#03005F]/20 to-black/80">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                
                {/* Image Placeholder */}
                <div className="relative w-full h-full">
                  <Image
                    src={imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition duration-700"
                  />
                  {/* Fallback if image not found - shows icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#03005F]/5">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl shadow-[#03005F]/30`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Category Badge - Overlay on image */}
                <div className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full border border-white/20 bg-black/70 backdrop-blur-xl text-xs font-medium text-white/80 font-mono tracking-wider">
                  {item.badge}
                </div>
                
                {/* Stat overlay on image */}
                <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl text-xs text-white/40 font-mono">
                  {item.stat}
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 pt-6 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition duration-500">
                  {item.title}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Feature Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] text-white/30 font-mono hover:text-white/60 hover:border-white/20 transition"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Explore Link - Enhanced */}
                <div className="mt-6 flex items-center gap-3 text-[#03005F] font-mono text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:gap-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] to-indigo-400 font-semibold">
                    EXPLORE DIVISION
                  </span>
                  <div className="w-8 h-[1px] bg-gradient-to-r from-[#03005F] to-indigo-400" />
                  <ChevronRight className="w-4 h-4 text-[#03005F] group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>

    {/* CTA Button - Enhanced */}
    <div className="mt-20 text-center">
      <Button
        asChild
        size="lg"
        className="relative px-12 py-7 text-base font-medium bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] text-white hover:shadow-2xl hover:shadow-[#03005F]/50 transition-all duration-500 overflow-hidden group rounded-2xl"
      >
        <Link href="/about" className="flex items-center gap-3">
          <span className="relative z-10">Learn More About Our Ecosystem</span>
          <CircuitBoard className="w-5 h-5 relative z-10 group-hover:rotate-90 transition duration-500" />
          <span className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
        </Link>
      </Button>
    </div>
  </div>
</section>



      <Footer />

      <style jsx global>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes scan {
          0% { top: -2px; opacity: 1; }
          50% { opacity: 0.8; }
          100% { top: 100%; opacity: 1; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}