import type { Metadata } from "next";
import { Chewy, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chewy",
});

const fredoka = Fredoka({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "IL FORNO di Teo",
  description: "Healthy snacking hero section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chewy.variable} ${fredoka.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}