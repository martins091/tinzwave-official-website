import type { Metadata } from "next";
import LabsPage from "./labs-client";

export const metadata: Metadata = {
  title: "Tinzwave Labs | AI & Software Development",
  description:
    "Tinzwave Labs designs, builds, and deploys scalable AI solutions, web & mobile applications, and business automation for startups and enterprises.",
};

export default function Page() {
  return <LabsPage />;
}
