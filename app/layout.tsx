"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/Footer";
import "./globals.css";

import { NightModeProvider } from "./components/home";

import { poppins } from "./fonts/Fonts";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideFooterRoutes = ["/dashboard"];
  const shouldHideFooter = hideFooterRoutes.includes(pathname);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NightModeProvider>
          <Navbar />
          {children}
          {!shouldHideFooter && <Footer />}
        </NightModeProvider>
      </body>
    </html>
  );
}
