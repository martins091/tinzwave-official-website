import type { Metadata } from "next";
import MartinsPage from "./martins-client";

const title = "Agbo Martins Ejiofor | Founder, Tinzwave Technology";
const description =
  "Founder of Tinzwave Technology, software engineer, and educator. From security guard to software founder — I build products and train the people who'll build the next generation of them.";
const url = "https://tinzwave.com/martins";
const ogImage = "https://tinzwave.com/team-agbo-martins.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "profile",
    url,
    siteName: "Tinzwave",
    title,
    description,
    images: [{ url: ogImage, width: 1086, height: 1448, alt: "Agbo Martins Ejiofor" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [ogImage],
  },
};

export default function Page() {
  return <MartinsPage />;
}
