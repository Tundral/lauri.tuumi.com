import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";
import { ui } from "@/lib/translations";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Lauri Tuumi – ${ui.fi.subtitle}`,
  description: ui.fi.summary[0],
  alternates: {
    languages: {
      en: "/en",
      fi: "/fi",
    },
  },
};

const FiLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="fi" className={`${firaCode.className} h-full antialiased`}>
    <body className="min-h-full">{children}</body>
  </html>
);

export default FiLayout;
