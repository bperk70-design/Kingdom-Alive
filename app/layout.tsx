import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://kingdomalive.co";

export const metadata: Metadata = {
  title: "Kingdom Alive | Clarity, Systems, Growth",
  description:
    "Kingdom Alive helps small businesses gain offer clarity, build outreach systems, and grow with discipline.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Kingdom Alive",
    description:
      "Clarity-led systems and outreach that help small businesses win more customers.",
    url: siteUrl,
    siteName: "Kingdom Alive",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Kingdom Alive",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingdom Alive",
    description:
      "Clarity-led systems and outreach that help small businesses win more customers.",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
