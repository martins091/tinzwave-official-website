import type { Metadata } from "next";
import HomePage from "./home-client";

export const metadata: Metadata = {
  title: "Tinzwave | Empowering Africa with Technology & Talent",
  description:
    "AI-powered software solutions, digital services, and tech training for African businesses and individuals. Explore Tinzwave's AI Academy, Innovation Labs, and Workspace.",
};

export default function Page() {
  return <HomePage />;
}
