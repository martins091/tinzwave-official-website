import type { Metadata } from "next";
import ServicesPage from "./services-client";

export const metadata: Metadata = {
  title: "Our Services | Tinzwave",
  description:
    "Explore Tinzwave's ecosystem of services across AI Academy, Innovation Labs, and Workspace — technology training, software development, and professional space in Lagos, Nigeria.",
};

export default function Page() {
  return <ServicesPage />;
}
