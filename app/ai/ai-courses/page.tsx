"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Brain, 
  GraduationCap, 
  Building2, 
  Sparkles,
  PenTool, 
  Palette, 
  ImageIcon, 
  Code2, 
  Bot, 
  Cpu,
  Zap,
  ChevronRight,
  Users,
  Star,
  Clock,
  Award
} from "lucide-react";
import Image from "next/image";

export default function AIPage() {
  // Your WhatsApp number in international format (Nigeria: +234)
  const phoneNumber = "2349161052706";
  
  const handleRegister = (courseName) => {
    const message = `Hi! I'm interested in registering for the ${courseName} course. Can you please share more details about the curriculum, pricing, and schedule?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCommunityJoin = () => {
    window.open('https://chat.whatsapp.com/FxMocmyegINCAUAvTjyhKT', '_blank');
  };

  const courses = [
    {
      id: 1,
      title: "AI Content Creation",
      icon: PenTool,
      color: "from-blue-600 to-indigo-600",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      description: "Master YouTube automation, script writing, and viral content generation with AI tools.",
      topics: [
        "Script writing & caption generation",
        "YouTube automation (research → script → voice → editing)",
        "TikTok/IG Reels content generation",
        "Podcast & content ideation",
        "Branding & storytelling"
      ],
      tools: ["ChatGPT", "Canva", "CapCut", "ElevenLabs", "Descript"],
      duration: "6 weeks",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "AI Graphic Design & Branding",
      icon: Palette,
      color: "from-purple-600 to-pink-600",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      description: "Create stunning thumbnails, logos, and brand identities using AI-powered design tools.",
      topics: [
        "Thumbnail design for high CTR",
        "Logo design & brand kits",
        "Posters & flyers creation",
        "Social media content packs",
        "Visual storytelling"
      ],
      tools: ["Canva", "Photopea", "Krita"],
      duration: "4 weeks",
      level: "All Levels"
    },
    {
      id: 3,
      title: "AI Image Generation",
      icon: ImageIcon,
      color: "from-emerald-600 to-teal-600",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description: "Generate stunning product photos, marketing images, and character designs with AI.",
      topics: [
        "Product photography with AI",
        "Marketing image generation",
        "Character & anime design",
        "Comic-style image creation",
        "AI thumbnail generation"
      ],
      tools: ["Leonardo AI", "Bing Image Creator", "Craiyon", "Midjourney"],
      duration: "5 weeks",
      level: "Beginner to Intermediate"
    },
    {
      id: 4,
      title: "AI Website Building",
      icon: Code2,
      color: "from-orange-600 to-red-600",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      description: "Build landing pages, AI blogs, and sell websites to businesses using AI tools.",
      topics: [
        "Landing page development",
        "AI-generated blogs & content",
        "AI-assisted coding",
        "Selling websites to businesses",
        "SEO optimization with AI"
      ],
      tools: ["Wix AI", "Webflow", "Vercel + Next.js", "Framer AI"],
      duration: "8 weeks",
      level: "Intermediate"
    },
    {
      id: 5,
      title: "AI Automation",
      icon: Bot,
      color: "from-cyan-600 to-blue-600",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      description: "Automate workflows, customer support, and business processes using cutting-edge AI.",
      topics: [
        "Workflow automation with AI",
        "Customer support chatbots",
        "Lead generation automation",
        "Email & CRM automation",
        "API integrations & webhooks",
        "Zapier & Make alternatives with AI"
      ],
      tools: ["Zapier", "Make.com", "n8n", "LangChain", "Flowise"],
      duration: "8 weeks",
      level: "Intermediate to Advanced"
    },
    {
      id: 6,
      title: "AI Engineering",
      icon: Cpu,
      color: "from-violet-600 to-purple-600",
      badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      description: "Build custom AI models, fine-tune LLMs, and create production-ready AI systems.",
      topics: [
        "Prompt engineering mastery",
        "Fine-tuning LLMs (GPT, Llama)",
        "RAG systems & vector databases",
        "AI model deployment",
        "Building AI agents",
        "API development for AI apps"
      ],
      tools: ["Python", "LangChain", "Hugging Face", "Pinecone", "Ollama", "Groq"],
      duration: "4 months",
      level: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Navigation />
      
      {/* AI COURSES SECTION - NEW */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-[2px] bg-[#03005F] mx-auto mb-5" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Our <span className="text-[#03005F]">AI Courses</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From content creation to AI engineering — master the skills that matter in the AI revolution.
              Hands-on training with free tools and real-world projects.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, label: "Active Students", value: "2,500+" },
              { icon: Star, label: "Course Rating", value: "4.9/5" },
              { icon: Clock, label: "Hours of Content", value: "200+" },
              { icon: Award, label: "Success Rate", value: "94%" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-8 h-8 text-[#03005F] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="group relative bg-white border border-gray-200 hover:border-[#03005F]/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${course.color} shadow-lg`}>
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={course.badgeColor}>
                      {course.duration}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                  <div className="mb-4">
                    <p className="text-[#03005F] text-xs font-semibold mb-2">WHAT YOU'LL LEARN:</p>
                    <ul className="space-y-1">
                      {course.topics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="text-gray-600 text-xs flex items-start gap-1">
                          <Zap className="w-3 h-3 text-[#03005F] mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                      {course.topics.length > 3 && (
                        <li className="text-[#03005F] text-xs">+{course.topics.length - 3} more topics</li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-[#03005F] text-xs font-semibold mb-2">FREE TOOLS INCLUDED:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.tools.slice(0, 4).map((tool, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{course.level}</span>
                    <Button 
                      onClick={() => handleRegister(course.title)}
                      className="bg-[#03005F] hover:bg-[#03005F]/90 text-white"
                    >
                      Register Now
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button 
              onClick={handleCommunityJoin}
              className="bg-[#03005F] hover:bg-[#03005F]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#03005F]/25"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our AI Community to Get Started
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-gray-500 text-sm mt-4">
              💬 Message us on WhatsApp to get personalized course recommendations
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}