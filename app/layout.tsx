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
<<<<<<< HEAD
      <body className={poppins.className}>
        <NightModeProvider>
          <Navbar />
          {children}
          <Footer />
        </NightModeProvider>
=======
      <body className={`${poppins.className} flex flex-col min-h-screen `}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
>>>>>>> 977396b73037f19abf4da87afc6567f9404db6f1
      </body>
    </html>
  );
}
