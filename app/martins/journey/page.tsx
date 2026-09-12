import type { Metadata } from "next";
import JourneyPage from "./journey-client";

const title = "Training Journey | Agbo Martins Ejiofor";
const description =
  "The training journey of Agbo Martins Ejiofor — cohorts, students trained, and outcomes across Tinzwave AI Academy, partner tech academies, and government training partnerships.";
const url = "https://tinzwave.com/martins/journey";
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
    images: [{ url: ogImage, width: 1086, height: 1448, alt: "Agbo Martins Ejiofor — Training Journey" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [ogImage],
  },
};

export default function Page() {
  return <JourneyPage />;
}
