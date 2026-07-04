import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dangthanhtuan.dev"),
  title: "Dang Thanh Tuan - Connect to grow",
  description: "Dang Thanh Tuan - connect to grow",
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
    title: "Dang Thanh Tuan - Connect to grow",
    description: "connect to grow",
    url: "https://dangthanhtuan.dev", // Placeholder but good for SEO structure
    siteName: "Dang Thanh Tuan Digital Card",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dang Thanh Tuan - Connect to grow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dang Thanh Tuan - Connect to grow",
    description: "connect to grow",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
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
