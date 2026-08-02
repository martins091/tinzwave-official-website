import type { Metadata } from "next";
import AIServicesPage from "./ai-services-client";

export const metadata: Metadata = {
  title: "AI Services | Tinzwave",
  description:
    "Custom AI software development, business automation, AI integration, and AI consulting services from Tinzwave.",
};

export default function Page() {
  return <AIServicesPage />;
}
