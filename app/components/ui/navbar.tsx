"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="fixed z-50 w-full h-16 shadow-xl bg-[#31511E] "
      style={{
        background: "linear-gradient(80deg, #31511E, #859F3D",
      }}
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
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl text-white">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl text-white">
                About Us
              </li>
            </Link>
            <Link href="/jobSearch">
              <li className="ml-10 uppercase hover:border-b text-xl text-white">
                Job Search
              </li>
            </Link>
            <Link href="/">
              <li className="mx-10 uppercase hover:border-b text-xl text-white">
                Tracker
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
