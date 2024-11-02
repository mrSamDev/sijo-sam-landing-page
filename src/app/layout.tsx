import { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sijosam.in"),
  title: {
    default: "Sijo Sam | Software Developer",
    template: "%s | Sijo Sam",
  },
  description: "Software Developer specializing in React, Node.js, and cloud technologies. Building scalable web applications and digital experiences.",
  keywords: ["Sijo Sam", "Software Developer", "Web Developer", "React Developer", "Node.js Developer", "Software Engineer"],
  authors: [{ name: "Sijo Sam" }],
  creator: "Sijo Sam",
  publisher: "Sijo Sam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sijosam.in",
    siteName: "Sijo Sam",
    title: "Sijo Sam | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and cloud technologies.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sijo Sam - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sijosam",
    creator: "@sijosam",
    title: "Sijo Sam | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and cloud technologies.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/favicon/safari-pinned-tab.svg", color: "#000000" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
