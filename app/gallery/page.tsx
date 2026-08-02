import type { Metadata } from "next";
import GalleryPage from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery | Tinzwave",
  description:
    "Photos from Tinzwave's training sessions, tech events, and community gatherings in Lagos, Nigeria.",
};

export default function Page() {
  return <GalleryPage />;
}
