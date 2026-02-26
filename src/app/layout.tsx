import type { Metadata } from "next";
import { Urbanist, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "2Go - Born Fresh. Served Real.",
  description: "2Go is a rapidly evolving fresh beverage brand in Dhaka, Bangladesh. We serve authentic, nutritious, and high-quality juices made from real seasonal fruits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${notoBengali.variable} font-body overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
