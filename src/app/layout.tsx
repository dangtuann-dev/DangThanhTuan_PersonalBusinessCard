import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const baseUrl = "https://dangthanhtuan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
    url: baseUrl,
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
        url: "/icon.svg?v=4",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dang Thanh Tuan",
  "url": "https://dangthanhtuan.vercel.app",
  "image": "https://dangthanhtuan.vercel.app/avatar.jpg",
  "jobTitle": "EdTech Founder & Product Builder",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ho Chi Minh City",
    "addressCountry": "Vietnam",
  },
  "sameAs": [
    "https://www.linkedin.com/in/dang-thanh-tuan-9b58563a9/",
    "https://www.facebook.com/thanhtuann.rb",
    "https://www.instagram.com/tunatheavanti/",
    "https://wa.me/84908779590",
    "https://zalo.me/84908779590",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
