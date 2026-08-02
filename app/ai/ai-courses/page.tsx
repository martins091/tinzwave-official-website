import type { Metadata } from "next";
import AICoursesPage from "./ai-courses-client";

export const metadata: Metadata = {
  title: "AI Courses | Tinzwave",
  description:
    "Hands-on AI courses covering content creation, graphic design, image generation, website building, automation, and AI engineering.",
};

export default function Page() {
  return <AICoursesPage />;
}
