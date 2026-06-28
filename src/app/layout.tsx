import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AQYNTRA | Premium Biodegradable Water Bottles & Preforms Exporter",
  description: "AQYNTRA is a leading biodegradable water bottles exporter and eco-friendly bottled water supplier. We manufacture biodegradable preforms and offer private label packaging solutions globally.",
  keywords: [
    "biodegradable water bottles exporter",
    "eco friendly bottled water supplier",
    "compostable PET alternative",
    "biodegradable preform manufacturer",
    "sustainable packaged drinking water",
    "plant based packaging",
    "private label water bottles"
  ],
  authors: [{ name: "AQYNTRA" }],
  openGraph: {
    title: "AQYNTRA | Pure Nature. Pure Future.",
    description: "Premium biodegradable packaged water bottles and preforms for global markets.",
    url: "https://aqyntra.com",
    siteName: "AQYNTRA",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
