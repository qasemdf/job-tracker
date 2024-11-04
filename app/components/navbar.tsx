"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full h-20 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="logo"
            width="160"
            height="60"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div>
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl text-black">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl text-black">
                About Us
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl text-black">
                Contact
              </li>
            </Link>
            <Link href="/">
              <li className="mx-10 uppercase hover:border-b text-xl text-black">
                Tracker
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
