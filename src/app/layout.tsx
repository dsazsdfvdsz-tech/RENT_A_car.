import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/data/siteConfig";
import { ThemeProvider, themeInitScript } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { BackToTop } from "@/components/layout/BackToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://abubakr-rentacar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords.split(",").map((k) => k.trim()),
  authors: [{ name: siteConfig.businessName }],
  applicationName: siteConfig.businessName,
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: siteConfig.businessName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1920,
        height: 1080,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/images/hero/hero-bg.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080f",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: siteConfig.businessName,
  image: `${siteUrl}/images/hero/hero-bg.jpg`,
  url: siteUrl,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: "₨₨",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.6,
    longitude: 74.3,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.tiktok,
    siteConfig.social.googleBusiness,
  ].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        {/* Apply saved theme before paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        <ThemeProvider>
          <Navbar />
          <main className="min-h-dvh">{children}</main>
          <Footer />
          <MobileBottomNav />
          <FloatingWhatsApp />
          <BackToTop />
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
