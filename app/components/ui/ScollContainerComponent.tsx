"use client";
import React from "react";
import { ContainerScroll } from "./ContainerScrollAnimation";
import Image from "next/image";

export function ScrollContainerComponent() {
  return (
    <div className="flex flex-col overflow-hidden h-[850px] w-full max-w-[1850px] transition-all">
      <ContainerScroll titleComponent={<></>}>
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
