import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Cookie Policy | Tinzwave",
  description: "How Tinzwave uses cookies and similar technologies on this website.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#03005F]/40 via-black to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 px-4 py-1.5 border border-white/20 bg-white/5 text-white/70 font-mono text-xs tracking-widest">
              LEGAL
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Cookie Policy
            </h1>
            <p className="mt-4 text-white/40 text-sm">Last updated: August 2, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-white/60 leading-relaxed">
            <p className="text-white/50 text-sm border border-white/10 bg-white/5 rounded-xl p-4">
              This is a general-purpose cookie policy and is not a substitute for advice from a qualified lawyer. If
              you need this document to meet specific legal or regulatory requirements, please have it reviewed by
              legal counsel before relying on it.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">What Are Cookies</h2>
              <p>
                Cookies are small text files stored on your device that help websites function and collect basic
                usage information. This site uses minimal, privacy-friendly tracking rather than traditional
                cookie-based advertising trackers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">How We Use Analytics</h2>
              <p>
                We use Vercel Analytics to understand aggregate site traffic — such as which pages are visited and
                approximate visitor counts. Vercel Analytics is designed to be privacy-friendly and does not use
                traditional tracking cookies or collect personally identifiable information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Essential Functionality</h2>
              <p>
                Some site features (such as remembering your theme preference or session state) may rely on local
                browser storage necessary for the site to function correctly. Disabling this storage in your browser
                may affect how parts of the site behave.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Third-Party Content</h2>
              <p>
                Pages that embed Google Maps or link out to WhatsApp and social media platforms are subject to those
                third parties' own cookie and tracking practices, which are outside our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Managing Cookies</h2>
              <p>
                Most browsers let you block or delete cookies through their settings. Doing so may affect the
                functionality of this and other websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Changes will be posted on this page with an updated
                revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a href="mailto:info@tinzwave.com" className="text-indigo-400 hover:text-indigo-300 transition">
                  info@tinzwave.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
