"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useNightMode } from "../home";

import { staatliches } from "@/app/fonts/Fonts";

interface NavbarProps {
  nightMode: () => void;
}

export default function Navbar() {
  const { nightMode, toggleNightMode } = useNightMode() || {};

  return (
    <main className="flex justify-center">
      <div className="fixed left-1/2 -translate-x-1/2 rounded-2xl bg-[#202220] h-[79px] z-40 w-full max-w-[820px]"></div>
      <nav className="flex z-[990] fixed w-full items-center mt-2 rounded-2xl max-w-[800px] h-16 bg-[#242524] drop-shadow-2xl">
        <div className="flex items-center z-50 w-full">
          <div className="flex justify-evenly container">
            <ul
              className={` ${staatliches.className} text-[#ECDFCC] flex justify-evenly container tracking-widest sm:flex `}
            >
              <Link href="/" className="group relative w-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
                </svg>
                <li className="opacity-0 top-2 group-hover:opacity-100 group-hover:top-6 absolute -left-[7px] transition-all">
                  Home
                </li>
              </Link>
              <Link href="/about" className="group relative w-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
                  width="28"
                  height="28"
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
                  width="28"
                  height="28"
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
                  width="28"
                  height="28"
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
                <button onClick={nightMode}>
                  {toggleNightMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="cursor-pointer"
                      fill="white"
                    >
                      <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                    </svg>
                  )}
                </button>
                <li className="opacity-0 top-2 group-hover:opacity-100 group-hover:top-6 absolute -left-[26px] transition-all">
                  {toggleNightMode ? "dark mode" : "light mode"}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
