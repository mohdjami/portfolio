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
import { SparklesCore } from "./ui/sparkles";
import { Boxes } from "./ui/background-boxes";

export function BackendProjects() {
  return (
    <section className="lg:m-32 m-10" id="back-end">
      <div className="h-full relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="text-black lg:mt-10 font-bold font-sans lg:text-4xl dark:text-white">
          BACKEND PROJECTS
        </div>

        <BentoGrid className="max-w-4xl my-10   mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              image={item.image}
              icon={item.icon}
              github={item.github}
              live={item.live}
              tech={item.tech}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
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
    title: "Scalable Real Time Chat App",
    description:
      "Built a highly scalable real time chat application using websockets, Nodejs and Nextjs with robust and scalable backend architecture.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/RealChat-Scalable-WebSockets",
    tech: "Nextjs, Websockets, Nodejs, Redis, Kafka, Prisma, Postgres, Typescript",
    live: "",
  },
  {
    title: "Habit Tracker",
    description:
      "Monitor your activities, streaks, and progress with little effort. Integrate statistics to your life! ",
    header: <Skeleton />,
    image: "/Screenshot 2024-02-15 211545.png",

    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/habit-tracker-app",
    tech: "Next.js, Prisma, Supabase, Shadcn, Tailwind Css",
    live: "htts://habit-tracker-jami.vercel.app",
  },

  {
    title: "File Sharing Web App",
    description:
      "Developed a file sharing web application using Node.js, Express, and Mongoose. ",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/file-sharing",
    tech: "Nodejs, Express, Mongoose, Multer, JWT, MongoDB",
    live: "",
  },
  {
    title: "Connect with me NPM Package",
    description:
      "This is my first npm package to view my resume and connect to me",
    header: <Skeleton />,
    image: "/npm.png",

    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/first-npm-package",
    tech: "Nodejs, NPM",
    live: "",
  },
  {
    title: "Student Task Management System",
    description:
      "The system provides endpoints for both an Admin Panel and a Student Interface with various features such as admin login, student login,and manipulating tasks.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/Student-Task-Management-System",
    tech: "Nodejs, Express, Typescript, Mongodb, Nextjs, Prisma ",
    live: "https://student-management-system-beta.vercel.app/",
  },
  {
    title: "Chat Room",
    description:
      "Asynchronous Web Socket Chat application Built using Django Framework.",
    image: "/chatroom.png",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/Chat-Room",
    tech: "Python, Django, Sql, WebSockets",
    live: "",
  },
  {
    title: "Notes Management and sharing",
    description:
      "It is a notes creating, sharing, searching app with unit tests, rate limiting and authentication.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/notes-app",
    tech: "Nodejs, Jest, Prisma, Supabase",
    live: "",
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
  {
    title: "Library Management",
    description: "Built a library management API leveraging FastAPI framework.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/FastAPI-Library-Management",
    tech: "Python, FastAPI, MongoDB, PyMongo",
    live: "",
  },
  {
    title: "Nodejs-Prisma Auth Template",
    description:
      "Nodejs and prisma Authentication and authorization template using Mongodb and JWT.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/Nodejs-Prisma",
    tech: "Nodejs, Prisma, Prisma, MongoDB",
    live: "",
  },
];
