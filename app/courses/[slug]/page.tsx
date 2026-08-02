import type { Metadata } from "next";
import { courses } from "@/lib/courses-data";
import CourseDetailPage from "./course-detail-client";

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string | string[] } | Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return { title: "Course Not Found | Tinzwave Academy" };
  }

  return {
    title: `${course.title} | Tinzwave Academy`,
    description: course.description,
  };
}

export default function Page() {
  return <CourseDetailPage />;
}
