"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Code2, 
  Bot, 
  Plug, 
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Clock,
  Sparkles,
  ShoppingBag,
  Heart,
  DollarSign,
  GraduationCap,
  Home,
  Factory,
  Truck,
  Hotel,
  Headphones
} from "lucide-react";
import Image from "next/image";

export default function AIServicesPage() {
  const handleConsultation = () => {
    const phoneNumber = "2349161052706";
    const message = "Hi! I'm interested in your AI Business Solutions. I'd like to schedule a consultation to discuss how AI can help my business grow.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleServiceInquiry = (serviceName) => {
    const phoneNumber = "2349161052706";
    const message = `Hi! I'm interested in your ${serviceName} service. Can you please share more details and pricing?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      id: 1,
      title: "AI Software Development",
      icon: Code2,
      gradient: "from-blue-600 to-indigo-600",
      description: "Custom AI-powered software solutions tailored to your business needs.",
      features: [
        "Web applications with AI integration",
        "Mobile apps (iOS & Android)",
        "SaaS platform development",
        "Business dashboards & analytics",
        "AI-powered CRMs",
        "Custom API development"
      ],
      benefits: ["Scalable architecture", "Cloud-native solutions", "Enterprise-grade security"]
    },
    {
      id: 2,
      title: "Business Automation",
      icon: Bot,
      gradient: "from-cyan-600 to-blue-600",
      description: "Automate repetitive tasks and workflows to save time and reduce costs.",
      features: [
        "AI chatbots for customer service",
        "Workflow automation systems",
        "Sales & marketing automation",
        "Customer support automation",
        "Lead generation bots",
        "Email automation"
      ],
      benefits: ["24/7 operation", "Reduced manual work", "Faster response times"]
    },
    {
      id: 3,
      title: "AI Integration",
      icon: Plug,
      gradient: "from-purple-600 to-pink-600",
      description: "Seamlessly integrate AI into your existing business systems and processes.",
      features: [
        "Upgrade existing businesses with AI tools",
        "Digital transformation services",
        "Legacy system modernization",
        "API integration",
        "Third-party AI tool integration",
        "Data migration & synchronization"
      ],
      benefits: ["No disruption to operations", "Enhanced capabilities", "Future-proof solutions"]
    },
    {
      id: 4,
      title: "AI Consulting",
      icon: Briefcase,
      gradient: "from-orange-600 to-red-600",
      description: "Expert guidance on AI strategy and business optimization.",
      features: [
        "Strategy & AI adoption planning",
        "Business optimization consulting",
        "ROI analysis for AI implementation",
        "Team training & workshops",
        "Technology assessment",
        "Roadmap development"
      ],
      benefits: ["Expert insights", "Risk mitigation", "Maximum ROI"]
    }
  ];

  const industries = [
    { name: "E-commerce", icon: ShoppingBag },
    { name: "Healthcare", icon: Heart },
    { name: "Finance", icon: DollarSign },
    { name: "Education", icon: GraduationCap },
    { name: "Real Estate", icon: Home },
    { name: "Manufacturing", icon: Factory },
    { name: "Logistics", icon: Truck },
    { name: "Hospitality", icon: Hotel }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Navigation />

      {/* SERVICES GRID */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-[2px] bg-[#03005F] mx-auto mb-5" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Our <span className="text-[#03005F]">AI Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group relative bg-white border border-gray-200 hover:border-[#03005F]/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg w-fit mb-5`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-[#03005F] text-sm font-semibold mb-3">WHAT WE OFFER:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-full bg-[#03005F]/10 text-[#03005F]">
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleServiceInquiry(service.title)}
                    className="bg-[#03005F] hover:bg-[#03005F]/90 text-white w-full"
                  >
                    Inquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-[2px] bg-[#03005F] mx-auto mb-5" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Industries <span className="text-[#03005F]">We Serve</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Tailored AI solutions for various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#03005F]/30 transition-all hover:shadow-lg">
                <industry.icon className="w-10 h-10 text-[#03005F] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-[2px] bg-[#03005F] mx-auto mb-5" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Why Choose <span className="text-[#03005F]">TinzWave AI</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We combine technical expertise with business acumen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Our team consists of AI engineers, data scientists, and business strategists with years of experience."
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "We deliver working solutions within weeks, not months, using agile methodology."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security and compliance for all our solutions."
              },
              {
                icon: BarChart3,
                title: "Measurable ROI",
                description: "We focus on solutions that deliver tangible business results and ROI."
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance for all our solutions."
              },
              {
                icon: Rocket,
                title: "Scalable Solutions",
                description: "Built to grow with your business from startup to enterprise."
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all">
                <item.icon className="w-10 h-10 text-[#03005F] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-[2px] bg-[#03005F] mx-auto mb-5" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Our <span className="text-[#03005F]">Process</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A proven methodology for successful AI implementation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "We understand your business needs and goals" },
              { step: "02", title: "Strategy", description: "We design a tailored AI solution roadmap" },
              { step: "03", title: "Development", description: "We build and test your AI solution" },
              { step: "04", title: "Deployment", description: "We launch and provide ongoing support" }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="text-5xl font-bold text-[#03005F]/20 mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-3 text-[#03005F]/20">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#03005F]/10 via-indigo-500/10 to-purple-500/10" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's discuss how AI can help you automate, scale, and grow.
            Book your free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleConsultation}
              size="lg"
              className="bg-[#03005F] hover:bg-[#03005F]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#03005F]/25"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-full"
            >
              <Link href="/ai/courses">
                Browse AI Courses
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
          
          <p className="text-gray-500 text-sm mt-8">
            💬 Or WhatsApp us directly at +234 916 105 2706
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}