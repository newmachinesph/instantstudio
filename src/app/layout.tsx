import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "InstantStudio | AI-Powered Creative Solutions",
    template: "%s | InstantStudio",
  },
  description: "InstantStudio harnesses generative AI to boost human creativity. AI-powered creative solutions for global brands.",
  keywords: ["AI", "generative AI", "image generation", "creative AI", "InstantStudio", "AI photography", "AI design"],
  openGraph: {
    title: "InstantStudio | AI-Powered Creative Solutions",
    description: "InstantStudio harnesses generative AI to boost human creativity. AI-powered creative solutions for global brands.",
    type: "website",
    locale: "en_US",
    siteName: "InstantStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "InstantStudio | AI-Powered Creative Solutions",
    description: "InstantStudio harnesses generative AI to boost human creativity. AI-powered creative solutions for global brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
