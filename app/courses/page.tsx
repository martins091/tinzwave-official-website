import type { Metadata } from "next";
import CoursesPage from "./courses-client";

export const metadata: Metadata = {
  title: "Courses & Training Programs | Tinzwave Academy",
  description:
    "Browse Tinzwave's tech courses — AI Engineering, Fullstack Web Development, Mobile Development, Data Science, and more. Physical and virtual training in Lagos, Nigeria.",
};

export default function Page() {
  return <CoursesPage />;
}
