"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Calendar,
  Clock,
  Sparkles,
  Zap,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                ⚡ OUR BLOG
              </span>
              <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg shadow-white/20" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-white">Tinzwave</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#03005F] via-indigo-400 to-purple-400 animate-gradient">
                Blog
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Insights on technology, AI, digital skills, and innovation in Africa.
              Stay updated with the latest trends and tips.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FILTERS - Premium ========== */}
      <section className="py-6 border-b border-white/5 bg-white/5 backdrop-blur-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#03005F]/50 focus:ring-[#03005F]/20"
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
                      ? "bg-gradient-to-r from-[#03005F] to-indigo-600 text-white border-0 hover:from-[#03005F] hover:to-indigo-700"
                      : "bg-transparent border-white/30 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOG POSTS ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredPosts.map((post) => (
              <Reveal key={post.id}>
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#03005F]/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-b from-[#03005F]/20 to-black/80">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="border border-white/20 bg-black/60 backdrop-blur-xl text-white/80 font-mono text-[10px] tracking-wider">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="relative p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition duration-500 line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 text-white/40">
                        <Calendar className="h-4 w-4 text-white/30" />
                        <span className="text-xs">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/40">
                        <Clock className="h-4 w-4 text-white/30" />
                        <span className="text-xs">{post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition group"
                    >
                      <span className="relative">
                        Read Article
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
                      </span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/40">
                <Search className="w-4 h-4" />
                <span>No articles found matching your search.</span>
              </div>
            </div>
          )}
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}