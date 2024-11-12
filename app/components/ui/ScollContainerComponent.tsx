"use client";
import React from "react";
import { ContainerScroll } from "./ContainerScrollAnimation";
import Image from "next/image";

export function ScrollContainerComponent() {
  return (
    <div className="flex flex-col overflow-hidden w-full h-[1060px] max-w-[1500px]">
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
