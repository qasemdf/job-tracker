"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { staatliches } from "@/app/fonts/Fonts";

export default function Navbar() {
  return (
    <nav
      className="fixed z-50 w-full h-[77px] bg-[#1a1a19]"
      style={
        {
          /*background: "linear-gradient(80deg, #31511E, #859F3D",*/
        }
      }
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/Logo.png"
            hidden={true}
            alt="logo"
            width="110"
            height="20"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div>
          <ul
            className={` ${staatliches.className} tracking-widest hidden sm:flex transition-all`}
          >
            <Link href="/">
              <li className="ml-10 uppercase transition-all hover:border-b hover:text-2xl text-xl text-white leading-tight">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 uppercase transition-all hover:border-b hover:text-2xl text-xl text-white leading-tight">
                About Us
              </li>
            </Link>
            <Link href="/jobSearch">
              <li className="ml-10 uppercase transition-all hover:border-b hover:text-2xl text-xl text-white leading-tight">
                Job Search
              </li>
            </Link>
            <Link href="/tracked-applications">
              <li className="mx-10 uppercase transition-all hover:border-b hover:text-2xl text-xl text-white leading-tight">
                Tracker
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
