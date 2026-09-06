import type { Metadata } from "next";
import "./site.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SkipLink from "@/components/SkipLink";

export const metadata: Metadata = {
  title: "Anoushka Dandawate — Creative Chaos With Method",
  description:
    "Anoushka Dandawate — Product Designer & UX Architect in Pune. Research, human–AI interaction, design systems, and intentional motion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
