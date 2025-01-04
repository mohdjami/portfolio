"use client";
import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { ProjectCards } from "../project-card";
import Link from "next/link";
import Image from "next/image";
import {  IconsCloudSkills } from "../icon-cloud-skills";
import { WorkExperience } from "../work-experience";

export function Hero() {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },

    {
      text: "Jami,",
      className: "text-blue-500 dark:text-red-500",
    },
    {
      text: "a",
    },
    {
      text: "Passionate",
    },
    {
      text: "Software",
    },

    {
      text: "Developer",
    },
    {
      text: "having",
    },
    {
      text: "an",
    },
    {
      text: "experience",
    },
    {
      text: "of",
    },
    {
      text: "building",
    },
    {
      text: "Robust",
    },
    {
      text: " and ",
    },
    {
      text: " Scalable",
    },
    {
      text: "Applications.",
      className: "text-red-500 dark:text-red-500",
    },
  ];

  return (
    <main className="mt-20 md:mt-32">
      <section className="grid lg:grid-cols-2 mx-4 md:mx-16 lg:mt-20 lg:gap-5" id="me">
        <div className="h-auto w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="font-bold font-sans text-xl md:text-4xl lg:text-4xl dark:text-neutral-200">
            <TypewriterEffect words={words} className="text-left text-xl md:text-2xl" />
          </div>
        </div>
        
        <div className="flex lg:hidden items-center justify-center mt-5">
          <button className="px-6 md:px-8 py-2 rounded-md bg-black text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            Connect With Me
          </button>
        </div>

        <div className="hidden lg:h-auto w-full mb-10 bg-transparent gap-10 lg:flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="relative w-[250px] md:w-[300px] h-[250px] md:h-[300px]">
            <div className="rounded-full p-1">
              <Image
                src="/me.jpeg"
                alt="Mohd Jami"
                width={600}
                height={600}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex lg:hidden lg:h-auto w-full mb-2 bg-transparent gap-10 items-center justify-center overflow-hidden rounded-md">
          <div className="relative w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px]">
            <div className="rounded-full p-1">
              <Image
                src="/me.jpeg"
                alt="Mohd Jami"
                width={400}
                height={400}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hidden lg:flex justify-between mx-6 md:mx-24">
        <div className="hidden lg:flex justify-left items-left space-x-6">
          <Link
            href="https://linkedin.com/in/mohdjami"
            className="px-6 md:px-8 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
          >
            Connect With Me
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6 mr-[170px]">
          <label className="px-6 md:px-8 py-2 rounded-md bg-white text-slate-800 font-bold transition duration-200 border-2 border-transparent">
            Mohd Jami
          </label>
        </div>
      </div>

      <div className="lg:hidden flex justify-center items-center space-x-3 mt-4">
        <label className="px-6 md:px-8 py-2 rounded-md bg-white text-slate-800 font-bold transition duration-200 border-2 border-transparent">
          Mohd Jami
        </label>
      </div>

      <section className="mt-10">
      <WorkExperience />
      </section>

      <section className="flex flex-col justify-center items-center mt-16">  
        <div className="text-base md:text-lg lg:text-3xl font-bold border border-slate-800 text-neutral-700 dark:text-white w-full max-w-7xl leading-relaxed text-center p-4 mx-4 lg:py-6 lg:px-10">
          My skillset
        </div>
        <div className="w-full max-w-7xl px-4 md:px-0 flex justify-center">
          <IconsCloudSkills/>
        </div>
      </section>

      <section className="mx-4 md:mx-16 items-start grid mt-10" id="oss">
        <div className="text-base md:text-lg lg:text-3xl font-bold border border-slate-800 text-neutral-700 dark:text-white w-full max-w-7xl leading-relaxed text-center p-4 lg:py-6">
          Some of my Open Source Project to get started with!
        </div>

        <ProjectCards />

        <div className="flex mt-10 justify-center items-center">
          <Link
            href="/projects"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000000,90%,#FF0000,10%,#000000)] bg-[length:200%_100%] px-4 md:px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Explore all projects
          </Link>
        </div>
      </section>
    </main>
  )
}
