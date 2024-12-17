"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/Footer";
import "./globals.css";

import { NightModeProvider } from "./components/home";

import { poppins } from "./fonts/Fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NightModeProvider>
          <Navbar />
          {children}
          <Footer />
        </NightModeProvider>
      </body>
    </html>
  );
}
