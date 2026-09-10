import type { Metadata } from "next";
import ProjectsPage from "./projects-client";

const title = "Projects | Agbo Martins Ejiofor";
const description =
  "Products built and shipped by Agbo Martins Ejiofor, Founder of Tinzwave Technology — featuring the Tinzwave AI Interviewer and client work from Tinzwave Labs.";
const url = "https://tinzwave.com/martins/projects";
const ogImage = "https://tinzwave.com/team-agbo-martins.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Tinzwave",
    title,
    description,
    images: [{ url: ogImage, width: 1086, height: 1448, alt: "Agbo Martins Ejiofor — Projects" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [ogImage],
  },
};

export default function Page() {
  return <ProjectsPage />;
}
