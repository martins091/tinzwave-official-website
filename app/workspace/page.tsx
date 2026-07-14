"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Users,
  Coffee,
  Calendar,
  Presentation,
  Wifi,
  Video,
  Headphones,
  Clock,
  MapPin,
  Sparkles,
  Zap,
  ArrowRight,
  ChevronRight,
  Rocket,
  Target,
  Award,
  CheckCircle2,
  Grid,
  Layout,
  Monitor,
  Mic,
  Camera,
  Sun,
  Wind,
  Thermometer,
  Speaker,
  Projector,
  Smartphone,
  Laptop,
  Server,
  Shield,
  Globe,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export default function WorkspacePage() {
  const features = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Enterprise-grade fiber optic internet with 99.9% uptime for seamless connectivity.",
    },
    {
      icon: Wind,
      title: "Air-Conditioned Spaces",
      description: "Fully air-conditioned environments for maximum comfort and productivity.",
    },
    {
      icon: Monitor,
      title: "Modern AV Equipment",
      description: "State-of-the-art projectors, screens, and audio systems for presentations.",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance and access control.",
    },
    {
      icon: Coffee,
      title: "Refreshments",
      description: "Complimentary coffee, tea, and water to keep you energized throughout the day.",
    },
    {
      icon: Users,
      title: "Community & Networking",
      description: "Connect with like-minded professionals and build meaningful relationships.",
    },
  ];

  const spaces = [
    {
      title: "Training Rooms",
      description: "Fully-equipped training spaces for workshops, seminars, and corporate training sessions.",
      features: ["Projector & Screen", "Whiteboard", "Comfortable Seating", "High-Speed WiFi"],
      image: "/workspace1.png",
      capacity: "Up to 50 people",
    },
    {
      title: "Meeting Rooms",
      description: "Professional meeting rooms for team collaborations, client meetings, and strategy sessions.",
      features: ["Video Conferencing", "Audio System", "Smart Board", "Catering Available"],
      image: "/workspace2.png",
      capacity: "Up to 20 people",
    },
    {
      title: "Event Space",
      description: "Versatile event space for hackathons, meetups, conferences, and community gatherings.",
      features: ["Stage & PA System", "Lighting", "Recording", "Live Streaming"],
      image: "/workspace3.png",
      capacity: "Up to 100 people",
    },
    {
      title: "Co-working Space",
      description: "Flexible co-working spaces designed for tech professionals, entrepreneurs, and innovators.",
      features: ["Hot Desks", "Private Offices", "Community", "Networking"],
      image: "/workspace4.png",
      capacity: "30+ workstations",
    },
    {
      title: "Virtual Office",
      description: "Professional virtual office service where we attend to your customers when they come in and answer calls on your behalf.",
      features: ["Customer Service", "Call Answering", "Client Reception", "24/7 Support"],
      image: "/workspace5.png",
      capacity: "Unlimited",
    },
    {
      title: "Corporate Events & Retreats",
      description: "Host your corporate retreats, team building activities, and company off-sites in a professional setting.",
      features: ["Team Building", "Off-sites", "Corporate Events", "Catering"],
      image: "/workspace1.png",
      capacity: "Up to 80 people",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Premium Facilities",
      description: "Modern, well-maintained spaces designed for productivity and comfort.",
    },
    {
      icon: Users,
      title: "Professional Community",
      description: "Connect with tech professionals, entrepreneurs, and innovators.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Flexible booking options to suit your schedule and needs.",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Conveniently located at E6 Adeniran Ogunsanya Shoprite Mall, Surulere.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ========== HERO - Full Width Image Background ========== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/workspace2.png"
            alt="Tinzwave Workspace"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 w-[500px] h-[500px] animate-[spin_25s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 w-[700px] h-[700px] animate-[spin_30s_linear_infinite_reverse]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
              <span className="text-white/80 font-mono text-xs tracking-[0.2em]">
                ⚡ TINZWAVE WORKSPACE
              </span>
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">Tinzwave</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-300 to-purple-300 animate-gradient">
                Workspace
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
              A professional environment for learning, collaboration, and events.
              Modern spaces designed to inspire innovation and productivity.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                asChild
                className="relative px-8 py-6 text-sm font-bold bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] text-white hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-indigo-500/10"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Space
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </Link>
              </Button>
              <Button
                asChild
                className="px-8 py-6 text-sm font-medium border-2 border-white/20 bg-black/30 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/40 transition-all duration-500 rounded-xl"
              >
                <Link href="#spaces">
                  Explore Spaces
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="py-20 border-t border-b border-white/5 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 border border-white/20 bg-white/5 text-white/80 font-mono text-xs tracking-widest">
              WHY CHOOSE US
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Premium Workspace Features
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Everything you need for a productive and comfortable workspace experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={index}>
                  <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 flex items-start gap-4">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#03005F]/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="relative">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SPACES - Full Width Image Cards ========== */}
      <section id="spaces" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 border border-white/20 bg-white/5 text-white/80 font-mono text-xs tracking-widest">
              OUR SPACES
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Workspace Options
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Choose from a variety of spaces designed for different needs and occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {spaces.map((space, index) => (
              <Reveal key={index}>
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-[400px]">
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#03005F]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    {/* Capacity Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl text-xs text-white/60 font-mono">
                      {space.capacity}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition duration-500">
                      {space.title}
                    </h3>
                    
                    <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-2">
                      {space.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {space.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-[10px] text-white/50 font-mono"
                        >
                          {feature}
                        </span>
                      ))}
                      {space.features.length > 3 && (
                        <span className="px-2 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-[10px] text-white/40 font-mono">
                          +{space.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition group w-fit"
                    >
                      <span className="relative">
                        Book This Space
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
                      </span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 border border-white/20 bg-white/5 text-white/80 font-mono text-xs tracking-widest">
              WHY WORK WITH US
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Benefits of Our Workspace
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              More than just a space — a community and ecosystem for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={index}>
                  <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10 text-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#03005F]/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== LOCATION ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <Badge className="mb-4 border border-white/20 bg-white/5 text-white/80 font-mono text-xs tracking-widest">
                  FIND US
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Our Location
                </h2>
                <p className="text-white/40 text-lg">
                  Conveniently located in the heart of Surulere, Lagos
                </p>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#03005F]/10">
                <div className="w-full h-96 md:h-[450px]">
                  <iframe
                    title="Tinzwave Office Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3234567!2d3.3521!3d6.5033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7151234567890%3A0x1234567890abcdef!2sE6%20Adeniran%20Ogunsanya%20Shoprite%20Mall%2C%20Surulere%2C%20Lagos%20100001!5e0!3m2!1sen!2sng!4v1234567890123"
                  ></iframe>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-3 text-white/50">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">E6 Adeniran Ogunsanya Shoprite Mall, Surulere, Lagos 100001, Nigeria</span>
                </div>
              </div>
            </Reveal>
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