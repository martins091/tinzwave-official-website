"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Brain,
  Cpu,
  Bot,
  Database,
  Cloud,
  Server,
  Terminal,
  Zap,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Rocket,
  Target,
  Award,
  Lightbulb,
  Users,
  Code2,
  Globe,
  Smartphone,
  TrendingUp,
  GraduationCap,
  Building2,
  Coffee,
  Calendar,
  Presentation,
  Wifi,
  Video,
  Headphones,
  CheckCircle2,
  Infinity,
  CircuitBoard,
  Layers,
  Gauge,
  Shield,
  Network,
  Atom,
  Hexagon,
  BarChart3,
  Laptop,
  Mic,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export default function LabsPage() {
  // AI & Automation Capabilities
  const aiCapabilities = [
    {
      icon: Brain,
      title: "Neural Networks & Deep Learning",
      description:
        "Build sophisticated neural networks for image recognition, natural language processing, and predictive analytics.",
      features: ["CNN", "RNN", "LSTM", "Transformers"],
    },
    {
      icon: Bot,
      title: "Intelligent Chatbots & Virtual Assistants",
      description:
        "Develop AI-powered conversational agents that understand context, learn from interactions, and provide human-like responses.",
      features: ["NLP", "Context Awareness", "Multi-language", "Voice Integration"],
    },
    {
      icon: Database,
      title: "RAG Systems & Knowledge Bases",
      description:
        "Build retrieval-augmented generation systems that combine large language models with proprietary knowledge bases.",
      features: ["Vector Search", "Document Q&A", "Knowledge Graphs", "Semantic Search"],
    },
    {
      icon: TrendingUp,
      title: "Business Process Automation",
      description:
        "Automate complex business workflows using AI agents that make decisions, process data, and execute actions autonomously.",
      features: ["Workflow Automation", "Decision Engines", "Data Processing", "API Integration"],
    },
    {
      icon: Shield,
      title: "AI Security & Ethics",
      description:
        "Build secure, ethical, and responsible AI systems with built-in safeguards, bias detection, and transparent decision-making.",
      features: ["Bias Detection", "Explainable AI", "Security", "Compliance"],
    },
    {
      icon: Rocket,
      title: "Predictive Analytics & Forecasting",
      description:
        "Leverage machine learning to predict trends, customer behavior, market shifts, and business outcomes with accuracy.",
      features: ["Time Series", "Regression", "Classification", "Anomaly Detection"],
    },
  ];

  // Software Development Capabilities
  const softwareCapabilities = [
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
      icon: Server,
      title: "Custom Enterprise Software",
      description:
        "Scalable, secure enterprise solutions tailored to your business needs, workflows, and infrastructure.",
      features: ["Microservices", "API Design", "DevOps", "Cloud Architecture"],
    },
    {
      icon: Rocket,
      title: "MVP Development for Startups",
      description:
        "Rapid MVP development to validate your idea, get to market fast, test, iterate, and scale efficiently.",
      features: ["Rapid Prototyping", "Validation", "Pitch-ready", "Scalable"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Infrastructure",
      description:
        "Cloud-native applications, migration services, and infrastructure management for optimal performance and scalability.",
      features: ["AWS", "Azure", "GCP", "Kubernetes"],
    },
    {
      icon: Code2,
      title: "API Development & Integration",
      description:
        "Design, build, and integrate APIs that connect your systems, third-party services, and enable seamless data flow.",
      features: ["RESTful APIs", "GraphQL", "Webhooks", "Integration"],
    },
  ];

  // Business Solutions
  const businessSolutions = [
    {
      icon: BarChart3,
      title: "Business Intelligence & Analytics",
      description:
        "Turn your data into actionable insights with custom dashboards, reports, and analytics solutions.",
      features: ["Data Visualization", "Dashboards", "Reporting", "KPI Tracking"],
    },
    {
      icon: Layers,
      title: "Digital Transformation",
      description:
        "Modernize your business processes and systems with technology solutions that drive efficiency and growth.",
      features: ["Process Optimization", "Digital Strategy", "Legacy Modernization"],
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Protect your business with comprehensive cybersecurity solutions including security audits, monitoring, and compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Monitoring"],
    },
    {
      icon: Users,
      title: "Enterprise Resource Planning (ERP)",
      description:
        "Integrated ERP solutions that streamline your business operations, manage resources, and improve decision-making.",
      features: ["Finance", "HR", "Inventory", "Supply Chain"],
    },
  ];

  const technologies = [
    { name: "TensorFlow", icon: Brain, color: "from-orange-500 to-orange-600" },
    { name: "PyTorch", icon: Cpu, color: "from-red-500 to-red-600" },
    { name: "OpenAI", icon: Bot, color: "from-emerald-500 to-emerald-600" },
    { name: "React", icon: Code2, color: "from-cyan-500 to-cyan-600" },
    { name: "Node.js", icon: Server, color: "from-green-500 to-green-600" },
    { name: "Python", icon: Terminal, color: "from-blue-500 to-blue-600" },
    { name: "AWS", icon: Cloud, color: "from-yellow-500 to-yellow-600" },
    { name: "Docker", icon: Layers, color: "from-sky-500 to-sky-600" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your business needs and identify opportunities.",
      icon: Target,
    },
    {
      number: "02",
      title: "Strategy",
      description: "We design a comprehensive solution strategy tailored to you.",
      icon: Lightbulb,
    },
    {
      number: "03",
      title: "Development",
      description: "We build your solution with cutting-edge technology and best practices.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Deployment",
      description: "We deploy and integrate your solution into your existing systems.",
      icon: Cloud,
    },
    {
      number: "05",
      title: "Support",
      description: "We provide ongoing support, maintenance, and optimization.",
      icon: Users,
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
        
        {/* Orbital Rings */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#03005F]/20 w-[500px] h-[500px] animate-[spin_25s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/15 w-[700px] h-[700px] animate-[spin_30s_linear_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10 w-[900px] h-[900px] animate-[spin_35s_linear_infinite]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
              <span className="text-white/80 font-mono text-xs tracking-[0.2em]">
                ⚡ TINZWAVE LABS
              </span>
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">Tinzwave</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 animate-gradient">
                Innovation Labs
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              We design, build, and deploy cutting-edge AI solutions, software applications,
              and business systems that transform organizations and drive growth.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <Button
                asChild
                className="relative px-8 py-6 text-sm font-bold bg-gradient-to-r from-[#03005F] via-indigo-600 to-[#03005F] text-white hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 overflow-hidden group rounded-xl shadow-lg shadow-indigo-500/10"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#03005F] to-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </Link>
              </Button>
              <Button
                asChild
                className="px-8 py-6 text-sm font-medium border-2 border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-white/30 backdrop-blur-xl transition-all duration-500 rounded-xl"
              >
                <Link href="#ai">
                  Explore Capabilities
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="py-16 border-t border-b border-white/5 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "100+", label: "Projects Delivered", icon: Code2 },
              { value: "98%", label: "Client Satisfaction", icon: Award },
              { value: "50+", label: "AI Solutions", icon: Brain },
              { value: "24/7", label: "Support Available", icon: Zap },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Reveal key={i}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-indigo-500/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/40 font-mono tracking-wider mt-1">{stat.label}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== AI & AUTOMATION ========== */}
      <section id="ai" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 border border-[#03005F]/30 bg-[#03005F]/10 text-[#03005F] font-mono text-xs tracking-widest">
              AI & AUTOMATION
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              AI & Machine Learning
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Intelligent solutions that learn, adapt, and automate complex business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Reveal key={index}>
                  <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-full">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#03005F]/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                    
                    <div className="relative flex flex-col h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-lg shadow-indigo-500/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">
                        {capability.title}
                      </h3>
                      
                      <p className="text-sm text-white/50 leading-relaxed flex-1">
                        {capability.description}
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {capability.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] text-white/30 font-mono"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SOFTWARE DEVELOPMENT ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-mono text-xs tracking-widest">
              SOFTWARE DEVELOPMENT
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Custom Software Development
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Scalable, secure, and modern software solutions built for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {softwareCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Reveal key={index}>
                  <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-full">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                    
                    <div className="relative flex flex-col h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-lg shadow-indigo-500/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">
                        {capability.title}
                      </h3>
                      
                      <p className="text-sm text-white/50 leading-relaxed flex-1">
                        {capability.description}
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {capability.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] text-white/30 font-mono"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TECHNOLOGY STACK ========== */}
      <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 border border-white/20 bg-white/5 text-white/80 font-mono text-xs tracking-widest">
              TECHNOLOGY STACK
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Leveraging the most advanced frameworks and tools to build cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Reveal key={index}>
                  <div className="group p-4 text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-110">
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${tech.color} bg-opacity-20 flex items-center justify-center mb-2`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-[10px] text-white/60 font-mono tracking-wider">
                      {tech.name}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 border border-white/20 bg-white/5 text-white/80 font-mono text-xs tracking-widest">
              OUR PROCESS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Build Solutions
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              A systematic approach to delivering solutions that work.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Reveal key={index}>
                    <div className="relative group">
                      <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 text-center">
                        <div className="absolute -top-3 -right-3 px-2 py-1 rounded-full bg-[#03005F] text-white text-xs font-mono">
                          {step.number}
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#03005F] to-indigo-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-indigo-500/20">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-sm font-bold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-white/40 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-4 h-4 text-white/20" />
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
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