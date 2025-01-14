"use client";

import { ProjectCard } from "@/components/projects-card";
import React from "react";

const projects = [
  {
    title: "TravelPlan AI",
    description: "AI Travel Itinerary Generator with Next.js, TailwindCSS and AI.",
    href: "https://travel-three-lovat.vercel.app",
    imageSrc: "/travelai.png",
    imageSrcMobile: "/image.png",
    altText: "AI Travel Itinerary",
  },
  {
    title: "URL Manager",
    description: "Highly Scalable URL Manager with Next.js, Redis, Kafka.",
    href: "https://mjkm.vercel.app",
    imageSrc: "/url.png",
    imageSrcMobile: "/urlph.png",
    altText: "My URL Manager Website",
  },
  {
    title: "Habit Tracker",
    description: "Monitor your activities, streaks, and progress with little effort. Integrate statistics to your life!",
    href: "https://habit-tracker-jami.vercel.app",
    imageSrc: "/Screenshot 2024-02-15 211545.png",
    imageSrcMobile: "/hbtph.png",
    altText: "My Portfolio Website",
  },
  {
    title: "Next.js Authentication Starter Template",
    description: "Built a Next.js Authentication Template with NextAuth.js with integrated Email verification, Forgot Password and Google, Github Integration which can be used by SaaS applications",
    href: "https://jami-nextjs-auth-temp.vercel.app/",
    imageSrc: "/nextauth.png",
    imageSrcMobile: "/nextauthph.png",
    altText: "My nextauth Manager Website",
  },
  {
    title: "My Portfolio Website",
    description: "This Project is currently in the building phase. It will showcase my projects as well as provide information about me.",
    href: "https://portfolio-mohdjamis-projects.vercel.app/",
    imageSrc: "/port.png",
    imageSrcMobile: "/portph.png",
    altText: "My Portfolio Website",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 lg:py-32 bg-transparent" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 dark:text-white">
          Selection of My Favourite Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

