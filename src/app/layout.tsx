import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pump Fish - Real-Time Monitoring",
  description:
    "Real-time monitoring system for Pump the Fish. Track environmental sensors, system status, and live visualization.",
  keywords: ["pump fish", "fish monitoring", "sensors", "aquarium", "marine biology", "real-time"],
  authors: [{ name: "Pump Fish Project" }],
  creator: "Pump Fish",
  publisher: "Pump Fish",
  robots: "index, follow",
  openGraph: {
    title: "Pump Fish - Real-Time Monitoring",
    description:
      "Real-time monitoring system for Pump the Fish. Track environmental sensors, system status, and live visualization.",
    type: "website",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pump Fish - Real-Time Monitoring",
    description:
      "Real-time monitoring system for Pump the Fish. Track environmental sensors, system status, and live visualization.",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "64x64", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>

      <body suppressHydrationWarning className="scroll-smooth antialiased">
        <Toaster position="bottom-right" />
        <div className="flex flex-col min-h-screen bg-gray-900">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
