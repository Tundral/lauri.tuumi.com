import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";
import { ui } from "@/lib/translations";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Lauri Tuumi – ${ui.en.subtitle}`,
  description: ui.en.summary[0],
  alternates: {
    languages: {
      en: "/en",
      fi: "/fi",
    },
  },
};

const EnLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${firaCode.className} h-full antialiased`}>
    <body className="min-h-full">{children}</body>
  </html>
);

export default EnLayout;
