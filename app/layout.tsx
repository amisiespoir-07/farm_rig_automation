import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloudceed Technologies | Smart Water & Solar Solutions for Kenya & Sub-Saharan Agriculture",
  description: "Expert hydrological surveying, intelligent irrigation systems, and solar-powered solutions engineered for Kenya and Sub-Saharan Africa's diverse climate zones. PhD-led water resource management.",
  keywords: "Kenya irrigation, hydrological survey Kenya, solar water pump Kenya, ASAL irrigation, smart farming Kenya, water resource management, flood management Kenya",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
