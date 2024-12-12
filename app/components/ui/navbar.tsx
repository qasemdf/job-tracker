"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { staatliches } from "@/app/fonts/Fonts";
import { main } from "framer-motion/client";

export default function Navbar(props) {
  return (
    <main className="flex justify-center">
      <nav className="flex fixed z-50 justify-center items-center container mt-2 rounded-2xl max-w-[800px] h-[60px] bg-[#1E201E]">
        <div className="flex justify-center items-center container w-full ">
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
          <div className="flex justify-evenly container">
            <ul
              className={` ${staatliches.className} text-[#ECDFCC] flex justify-evenly container tracking-widest sm:flex `}
            >
              <Link href="/">
                <li className="ml-10 uppercase opacity-0 transition-opacity group-hover:opacity-100 hover:border-b text-xl leading-tight">
                  Home
                </li>
              </Link>
              <Link href="/about" className="group relative w-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1H8c-3.309 0-6 2.691-6 6v1h15v-1c0-3.309-2.691-6-6-6z"></path>
                  <path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path>
                </svg>
                <li className="opacity-0 top-2 group-hover:opacity-100 group-hover:top-6 absolute -left-[19px] transition-all">
                  About Us
                </li>
              </Link>
              <Link href="/jobSearch" className="group relative w-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                </svg>
                <li className="opacity-0 top-2 group-hover:opacity-100 group-hover:top-6 absolute -left-[29px] transition-all">
                  Job Search
                </li>
              </Link>
              <Link
                href="/tracked-applications"
                className="group relative w-[80px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="m8 16 5.991-2L16 8l-6 2z"></path>
                </svg>
                <li className="opacity-0 top-2 group-hover:opacity-100 group-hover:top-6 absolute -left-[17px] transition-all">
                  Tracker
                </li>
              </Link>
              <a href="/dashboard" className="group relative w-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="cursor-pointer group"
                >
                  <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
                </svg>
                <li className="opacity-0 top-2 group-hover:opacity-100 group-hover:top-6 absolute -left-[26px] transition-all">
                  DashBoard
                </li>
              </a>
              <a className="group relative w-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  className="cursor-pointer"
                  fill="white"
                  onClick={props.nightMode}
                >
                  <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
                </svg>
                <li className="opacity-0 top-2 group-hover:opacity-100 group-hover:top-6 absolute -left-[26px] transition-all">
                  light mode
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
