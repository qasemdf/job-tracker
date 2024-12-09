import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/Footer";
import "./globals.css";

import { poppins } from "./fonts/Fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
