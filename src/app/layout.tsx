import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dangthanhtuan.dev"),
  title: "Dang Thanh Tuan | Personal Digital Card",
  description: "Dang Thanh Tuan - Founder building EdTech products that make learning stick.",
  keywords: [
    "Dang Thanh Tuan",
    "EdTech Founder",
    "Product Builder",
    "Software Engineer",
    "Digital Business Card",
    "Personal Landing Page",
  ],
  authors: [{ name: "Dang Thanh Tuan" }],
  openGraph: {
    title: "Dang Thanh Tuan | Personal Digital Card",
    description: "Founder building EdTech products that make learning stick.",
    url: "https://dangthanhtuan.dev", // Placeholder but good for SEO structure
    siteName: "Dang Thanh Tuan Digital Card",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Dang Thanh Tuan - Founder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dang Thanh Tuan | Personal Digital Card",
    description: "Founder building EdTech products that make learning stick.",
    images: ["/avatar.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
