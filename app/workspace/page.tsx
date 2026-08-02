import type { Metadata } from "next";
import WorkspacePage from "./workspace-client";

export const metadata: Metadata = {
  title: "Tinzwave Workspace | Training Space & Co-working in Lagos",
  description:
    "Professional training rooms, meeting spaces, event venues, and co-working space for rent in Surulere, Lagos.",
};

export default function Page() {
  return <WorkspacePage />;
}
