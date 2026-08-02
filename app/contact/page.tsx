import type { Metadata } from "next";
import ContactPage from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Tinzwave",
  description:
    "Get in touch with Tinzwave for questions about our courses, services, or to start a project. Visit us in Surulere, Lagos, or reach out via WhatsApp.",
};

export default function Page() {
  return <ContactPage />;
}
