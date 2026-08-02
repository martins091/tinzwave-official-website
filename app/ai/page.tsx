import type { Metadata } from "next";
import AIPage from "./ai-client";

export const metadata: Metadata = {
  title: "Tinzwave AI Ecosystem",
  description:
    "AI-powered business solutions and a practical AI training academy from Tinzwave — build, automate, scale, and transform.",
};

export default function Page() {
  return <AIPage />;
}
