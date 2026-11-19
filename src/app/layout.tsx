import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { wedding } from "@/config/wedding";
import "./globals.css";

const callmeScript = localFont({
  src: [
    {
      path: "../../public/callme_script/Callme Script.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/callme_script/Callme Script.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-callme-script",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const pageTitle = `${wedding.couple.fullNames} | ${wedding.displayDate}`;
const pageDescription = `Join ${wedding.couple.firstName} ${wedding.couple.firstLastName} and ${wedding.couple.partnerName} ${wedding.couple.partnerLastName} to celebrate their wedding on ${wedding.displayDate} at ${wedding.displayTime} in ${wedding.location.region}.`;

export const metadata: Metadata = {
  metadataBase: new URL(wedding.siteUrl),
  title: pageTitle,
  description: pageDescription,
  applicationName: `${wedding.couple.fullNames} Wedding`,
  authors: [{ name: wedding.couple.fullNames }],
  keywords: [
    wedding.couple.fullNames,
    `${wedding.couple.firstName} ${wedding.couple.firstLastName}`,
    `${wedding.couple.partnerName} ${wedding.couple.partnerLastName}`,
    "Wedding",
    wedding.displayDate,
    wedding.location.region,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: pageTitle,
    title: pageTitle,
    description: pageDescription,
    locale: "en_US",
    images: [
      {
        url: wedding.images.openGraph,
        width: 1200,
        height: 630,
        alt: `${wedding.couple.fullNames} — ${wedding.displayDate} Wedding Invitation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [wedding.images.openGraph],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF5EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${callmeScript.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-ivory text-ink antialiased selection:bg-terracotta/20">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ivory focus:text-olive-dark focus:px-4 focus:py-2.5 focus:border focus:border-olive focus:text-xs focus:tracking-[0.2em] focus:uppercase focus:shadow-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
