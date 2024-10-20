"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Link from "next/link";

export function WobbleProjectCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full">
      <Link href="https://mjkm.vercel.app">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              URL Manager
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              With more than 100 users URL Manager is an open-source URL
              managing app which help you to manage your URLs at one place, keep
              track and monitor your URLs, it does it by shortening the url
              which you can share, and keep track of it..
            </p>
          </div>
          <Image
            src="/url.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </Link>
      <Link href="https://github.com/mohdjami/RealChat-Scalable-WebSockets">
        {" "}
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            RealChat-Scalable-WebSockets{" "}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Built a Highl Scalable Real Time communication and Chat Application
            using Nodejs and Next.js.
          </p>
        </WobbleCard>
      </Link>
      <Link href="https://travel-three-lovat.vercel.app">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              TravelPlan AI
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/travelai.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </Link>
    </div>
  );
}
