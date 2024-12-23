"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./layoutGrid";

export function GridComponent() {
  return (
    <div className="h-full py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="">
      <p className="font-bold md:text-4xl text-xl text-white ">Integrity</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Upholding the highest standards of honesty and strong moral principles
        in all our actions.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="">
      <p className="font-bold md:text-4xl text-xl text-white">Innovation</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Continuously seeking creative solutions and embracing new ideas to drive
        progress and efficiency.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="">
      <p className="font-bold md:text-4xl text-xl text-white">Collaboration</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Fostering a cooperative environment where teamwork and open
        communication lead to shared success.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="">
      <p className="font-bold md:text-4xl text-xl text-white">Excellence</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Striving for superior quality and outstanding performance in every task
        we undertake.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 cursor-pointer",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 cursor-pointer",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 cursor-pointer",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 cursor-pointer",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
