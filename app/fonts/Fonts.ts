import { Poppins } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Rubik_Spray_Paint } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import { Quicksand } from "next/font/google";
import { Staatliches } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const iBM_Plex_Mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const rubik_Spray_Paint = Rubik_Spray_Paint({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

export const staatliches = Staatliches({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
