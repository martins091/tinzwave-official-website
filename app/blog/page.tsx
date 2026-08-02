import type { Metadata } from "next";
import BlogPage from "./blog-client";

export const metadata: Metadata = {
  title: "Blog | Tinzwave",
  description:
    "Insights, tutorials, and updates on AI, software development, and tech careers from the Tinzwave team.",
};

export default function Page() {
  return <BlogPage />;
}
