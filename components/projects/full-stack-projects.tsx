import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { motion } from "framer-motion";

export function FullstackProjects() {
  return (
    <section className="m-10" id="full-stack">
      {" "}
      <div className="h-full relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="text-black lg:mt-10 font-bold font-sans lg:text-4xl dark:text-white">
          FULL STACK PROJECTS
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
    image: "url.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/url-shortener",
    tech: "Nextjs, Redis, Kafka, Prisma, Postgres, Typescript",
    live: "https://mjkm.vercel.app",
  },

  {
    title: "Favourite Tunes",
    description:
      "With our app, you can explore new music, create playlists, and share your favourite tunes with friends. Get started today!  ",
    header: <Skeleton />,
    image: "Screenshot 2024-04-18 160305.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/favourite-tunes",
    tech: "Next.js, Nodejs, Postgres, Prisma ",
    live: "https://favourite-tunes.vercel.app/",
  },
  {
    title: "Habit Tracker",
    description:
      "Monitor your activities, streaks, and progress with little effort. Integrate statistics to your life! ",
    header: <Skeleton />,
    image: "Screenshot 2024-02-15 211545.png",

    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/habit-tracker-app",
    tech: "Nodejs, NPM",
    live: "htts://habit-tracker-jami.vercel.app",
  },

  {
    title: "Student Task Management System",
    description:
      "The system provides endpoints for both an Admin Panel and a Student Interface with various features such as admin login, student login, adding students, assigning tasks, viewing assigned tasks, and updating task status.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/Student-Task-Management-System",
    tech: "nodejs, express, typescript, mongodb nextjs prisma ",
    live: "https://student-management-system-beta.vercel.app/",
  },
  {
    title: "Todo CI/CD",
    description: "Jenkins CI/CD Integration for a Simple Todo App",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/Todo-CI-CD",
    tech: "Jenkins, CI/CD, Nodejs Redis, Kafka, Prisma, Postgres, Typescript",
    live: "",
  },
];
