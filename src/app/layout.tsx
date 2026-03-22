import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lauri Tuumi – Ohjelmistokehittäjä",
  description:
    "Lauri Tuumi – Ohjelmistokehittäjä ja tietojärjestelmäasiantuntija. CV / portfolio.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="fi" className={`${firaCode.className} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
};

export default RootLayout;
