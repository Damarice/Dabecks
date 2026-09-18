import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

/* ── Font loading ──────────────────────────────────────────
   Both fonts are subset to latin and loaded with display:swap
   for fast first paint. Variable-weight Manrope gives us
   full 400–800 range from a single file.
   ─────────────────────────────────────────────────────────── */

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Dabecks Laundry & Kitchen Solutions | Commercial Equipment East Africa",
  description:
    "Leading provider of commercial laundry, kitchen, and air conditioning systems across East Africa since 2011. Trusted partner for hotels, hospitals, and institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head />
      <body className="flex flex-col min-h-screen font-body antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
