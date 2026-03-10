import type { Metadata } from "next";
import { Urbanist, Noto_Sans_Bengali, Dancing_Script } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";

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

const cursive = Dancing_Script({
  variable: "--font-cursive",
  subsets: ["latin"],
});

const ooohBaby = localFont({
  src: "../../public/fonts/OoohBaby-Regular.ttf",
  variable: "--font-oooh-baby",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} ${notoBengali.variable} ${cursive.variable} ${ooohBaby.variable} font-body overflow-x-hidden`} suppressHydrationWarning>
        <LoadingScreen />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
