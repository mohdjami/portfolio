"use client";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { SparklesCore } from "./ui/sparkles";
import { ArrowBigLeft, ArrowBigRight, Github, Linkedin } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Blogs } from "./blogs-card";
import { ProjectCards } from "./project-card";
import { TextGenerateEffect } from "./text-generate-effect";
import Link from "next/link";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";
import Sidebar from "./Sidebar";

export function Hero() {
  const blogs = [
    {
      title: "First Interview Experience ",
      description: "This blog is about my first interview experience.",
      link: "/blog",
    },
    {
      title: "How to build a Scalable Application",
      description:
        "In this blog, I will show you how to build a scalable application with Next.js and Node.js.",
      date: "2021-10-10",
    },
    {
      title: "Building a Scalable Real Time Chat App",
      description:
        "In this blog, I will show you how to build a scalable real-time chat app with Next.js and Node.js.",
    },
  ];
  const projectsSentence = `To explore all my stunning Projects`;
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
      text: "Applications...",
      className: "text-red-500 dark:text-red-500",
    },
  ];
  return (
    <main className="mt-32">
      <TracingBeam>
        {" "}
        <section className="grid lg:grid-cols-2 mx-16 lg:mt-20 lg:gap-5">
          <div className="h-auto w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="font-bold font-sans text- md:text-4xl lg:text-4xl dark:text-neutral-200 ">
              <TypewriterEffect words={words} className="text-left text-2xl" />
            </div>
          </div>
          <div className="flex lg:hidden items-left mt-5">
            <button className="px-8 py-2 rounded-md bg-black text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              {" "}
              Connect With Me
            </button>
          </div>
          <div className="hidden lg:h-auto w-full mb-10 bg-transparent  gap-10 lg:flex flex-col items-center justify-center overflow-hidden rounded-md ">
            <div className="relative w-[300px] h-[300px]">
              <div className="rounded-full p-1 bg-gradient-to-r from-black to-red-500">
                <Image
                  src="/jami.jpg"
                  alt="Mohd Jami"
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex lg:hidden lg:h-auto w-full mb-2 bg-transparent  gap-10  items-center justify-center overflow-hidden rounded-md ">
            <div className="relative w-[300px] h-[300px]">
              <div className="rounded-full p-1 bg-gradient-to-r from-black to-red-500">
                <Image
                  src="/jami.jpg"
                  alt="Mohd Jami"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>{" "}
        </section>
        <div className="hidden lg:flex justify-between mx-24">
          <div className="hidden lg:flex justify-left  items-left space-x-6">
            <Link
              href="https://linkedin.com/in/mohdjami"
              className="px-8 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
            >
              {" "}
              Connect With Me
            </Link>
          </div>
          <div className="hidden lg:flex  space-x-6 mr-32">
            <div className="px-8 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200  border-2 border-transparent">
              {" "}
              Mohd
            </div>
            <div className="px-8 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200  border-2 border-transparent">
              {" "}
              Jami
            </div>
          </div>
        </div>
        <div className="lg:hidden flex justify-center items-center space-x-3">
          <div className="px-8 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200  border-2 border-transparent">
            Mohd
          </div>
          <div className="px-8 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200  border-2 border-transparent">
            Jami
          </div>
        </div>
        {/* <section className="m-20 items-start grid justify-center">
          <div className="text-xl text-center  ml-6  bg-transparent md:text-2xl lg:text-3xl font-bold border border-slate-800 p-4 text-neutral-700 dark:text-white max-w-7xl leading-relaxed lg:leading-snug m-10">
            {" "}
            I love to share my process of Building Applications and Knowledge
            through my Blogs.{" "}
          </div>
          <Blogs data={blogs} />{" "}
          <div className="flex mt-10 space-x-10">
            <Link
              href="/blogs"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000000,45%,#FF0000,10%,#000000)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              See all Articles
            </Link>
          </div>
        </section> */}
        {/* <section className="grid lg:grid-cols-2 mx-16 lg:mt-20 lg:gap-5">
                <section className="m-20 items-start grid justify-center"> */}
        <section className="m-16 items-start grid ">
          <div className="text-lg text-center bg-transparent md:text-lg  lg:text-3xl font-bold border border-slate-800 text-neutral-700 dark:text-white max-w-7xl leading-relaxed lg:leading-snug lg:my-20 lg:py-6">
            Some of my Open Source Project to get started with!
          </div>

          <ProjectCards />
          <div className="flex mt-10 lg:space-x-10 justify-center items-center">
            <Link
              href="/projects"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000000,90%,#FF0000,10%,#000000)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Explore all projects
            </Link>
          </div>
        </section>
      </TracingBeam>
    </main>
  );
}
