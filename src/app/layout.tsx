import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mybuildspace.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Farhan Ridho Illahi",
  description:
    "Fullstack Developer portfolio — projects, tech stack, and skills.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Farhan Ridho Illahi",
    description:
      "Fullstack Developer portfolio — projects, tech stack, and skills.",
    url: siteUrl,
    siteName: "Farhan Ridho Illahi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Ridho Illahi",
    description:
      "Fullstack Developer portfolio — projects, tech stack, and skills.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Farhan Ridho Illahi",
  url: siteUrl,
  description:
    "Fullstack Developer portfolio — projects, tech stack, and skills.",
  image: `${siteUrl}/images/porto.png`,
  sameAs: [
    "https://github.com/yaow-gtg",
    "https://www.instagram.com/farhanrii",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
