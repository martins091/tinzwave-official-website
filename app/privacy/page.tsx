import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy | Tinzwave",
  description: "How Tinzwave collects, uses, and protects your information.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-white/40 text-sm">Last updated: August 2, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-white/60 leading-relaxed">
            <p className="text-white/50 text-sm border border-white/10 bg-white/5 rounded-xl p-4">
              This policy explains what information Tinzwave Technologies ("Tinzwave", "we", "us") collects through
              this website and how it is used. It is a general-purpose policy and is not a substitute for advice from
              a qualified lawyer — if you need this document to meet specific regulatory requirements (including the
              Nigeria Data Protection Act), please have it reviewed by legal counsel before relying on it.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc list-inside mt-3 space-y-1.5">
                <li>Name, email address, and message content submitted through our contact form</li>
                <li>Information you share with us via WhatsApp when you message our team</li>
                <li>Course enrollment details you provide when registering for a program</li>
              </ul>
              <p className="mt-3">
                We also collect limited, non-identifying usage data automatically through Vercel Analytics (page
                views, referrers, and device type) to understand how visitors use the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">How We Use Information</h2>
              <ul className="list-disc list-inside space-y-1.5">
                <li>To respond to inquiries submitted through the contact form or WhatsApp</li>
                <li>To process course enrollments and communicate about our programs and services</li>
                <li>To improve our website and services</li>
                <li>To send updates about Tinzwave services you've expressed interest in</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Third-Party Services</h2>
              <p>
                Our contact form is processed by EmailJS, a third-party email delivery service, which receives the
                name, email, and message you submit in order to deliver it to us. WhatsApp conversations are subject
                to WhatsApp's own privacy policy. We use Vercel Analytics for aggregate, privacy-friendly site
                analytics. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Data Security</h2>
              <p>
                We take reasonable measures to protect the information you share with us, but no method of
                transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information by contacting us
                using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Children's Privacy</h2>
              <p>
                Our services are intended for individuals capable of entering into their own agreements. We do not
                knowingly collect personal information from children without parental consent.
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
                </a>{" "}
                or by visiting us at E6 Adeniran Ogunsanya Shoprite Mall, Surulere, Lagos, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
