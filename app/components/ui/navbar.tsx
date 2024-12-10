"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { staatliches } from "@/app/fonts/Fonts";

export default function Navbar(props) {
  return (
    <nav
      className="flex fixed z-50 justify-center w-full h-[77px] bg-[#1E201E]"
      style={
        {
          /*background: "linear-gradient(80deg, #31511E, #859F3D",*/
        }
      }
    >
      <div className="flex justify-evenly max-w-[1200px] items-center h-full w-full px-4 2xl:px-16">
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
            className={` ${staatliches.className} text-[#ECDFCC] tracking-widest sm:flex `}
          >
            <Link href="/">
              <li className="ml-10 uppercase  hover:border-b text-xl leading-tight">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 uppercase  hover:border-b text-xl leading-tight">
                About Us
              </li>
            </Link>
            <Link href="/jobSearch">
              <li className="ml-10 uppercase  hover:border-b text-xl leading-tight">
                Job Search
              </li>
            </Link>
            <Link href="/tracked-applications">
              <li className="mx-10 uppercase  hover:border-b text-xl leading-tight">
                Tracker
              </li>
            </Link>
            <a href="/dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="cursor-pointer mr-10"
              >
                <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
              </svg>
            </a>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
