import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

export function FrontendProjects() {
  return (
    <section className="lg:m-32 m-10" id="front-end">
      {" "}
      <div className="h-full relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="text-black lg:mt-10 font-bold font-sans lg:text-4xl dark:text-white">
          FRONTEND PROJECTS
        </div>
      </div>
      <BentoGrid className="max-w-4xl m-10 mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            icon={item.icon}
            github={item.github}
            live={item.live}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "URL Shortener",
    description:
      "Created a lightning fast URL Shortener with Nextjs and implemented caching using Redis and Message queues Kafka for asynchronously sending E-mails.",
    image: "/url.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/url-shortener",
    tech: "Nextjs, Redis, Kafka, Prisma, Postgres, Typescript",
    live: "https://mjkm.vercel.app",
  },
  {
    title: "Habit Tracker",
    description:
      "Monitor your activities, streaks, and progress with little effort. Integrate statistics to your life! ",
    image: "/Screenshot 2024-02-15 211545.png",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/habit-tracker-app",
    tech: "Next.js, Prisma, Supabase, Shadcn, Tailwind Css",
    live: "htts://habit-tracker-jami.vercel.app",
  },
  {
    title: "My Portfolio",
    description: "This project is currently in building phase.",
    image: "/port.png",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/portfolio",
    tech: "Nextjs, Shadcn-ui, Tailwind css",
    live: "https://mohdjami.me/",
  },
  {
    title: "Card Solution",
    description: "A landing page for ModeUI application and an Admin Panel.",
    image: "/cardsol.png",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/card-solution-frontend",
    tech: "Nextjs, Shadcn-ui, Tailwind css",
    live: "https://card-solution-frontend.vercel.app/",
  },
  {
    title: "Favourite Tunes",
    description:
      "With our app, you can explore new music, create playlists, and share your favourite tunes with friends. Get started today!  ",
    header: <Skeleton />,
    image: "/fav.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/favourite-tunes",
    tech: "Next.js, Nodejs, Postgres, Prisma ",
    live: "https://favourite-tunes.vercel.app/",
  },
];
