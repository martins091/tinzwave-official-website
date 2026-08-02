import type { Metadata } from "next";
import AboutPage from "./about-client";

export const metadata: Metadata = {
  title: "About Us | Tinzwave",
  description:
    "Learn about Tinzwave's mission to empower Africa through AI-powered technology solutions and world-class digital skills training. Meet our team, values, and story.",
};

export default function Page() {
  return <AboutPage />;
}
