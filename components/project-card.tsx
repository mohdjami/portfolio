import { HoverEffect } from "./ui/card-hover-effect";

export function ProjectCards() {
  return (
    <div className="max-w-5xl mx-auto mt-10 lg:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
const projects = [
  {
    title: "Habit Tracker",
    description:
      "Habit-Tracker is an open-source habit tracking app that lets you track daily habits and monitor your activity streaks and progress with little effort.",
    link: "https://habit-tracker-jami.vercel.app",
  },
  {
    title: "Authentication Starter Template",
    description: `Wrote easy to use NextJS template which users can leverage to directly start creating their SaaS apps without worrying about user authentication and authorization.`,

    link: "https://github.com/mohdjami/Nextjs-authentication",
  },
  {
    title: "RealChat-Scalable-WebSockets",
    description: `Built a Highl Scalable Real Time communication and Chat Application using Nodejs and Next.js.`,

    link: "https://github.com/mohdjami/RealChat-Scalable-WebSockets",
  },
  //   {
  //     title: "Tour and Travelling App(backend+frontend)",
  //     description: "A Tour and Travelling App Complete Backend.",
  //     link: "https://github.com/mohdjami/Tour&Travelling-App",
  //   },
  //   {
  //     title: "ToDo Web App ",
  //     description: `: Next.js Full Stack Application`,

  //     link: "https://github.com/mohdjami/ToDoNow-web-app",
  //   },
  //   {
  //     title: "Chat-Room",
  //     description: `Asynchronous WebSocket Chat App.`,

  //     link: "https://github.com/mohdjami/Chat-App",
  //   },
  //   {
  //     title: "Todo-ci-cd-main",
  //     description: `Jenkins CI/CD Integration for a Simple Todo App with GitHub Integration`,
  //     link: "https://github.com/mohdjami/Todo-ci-cd-main",
  //   },
  //   {
  //     title: "File Sharing WebApp",
  //     description: `A file sharing web App using Nodejs, Express and Mongoose`,

  //     link: "https://github.com/mohdjami/file-sharing ",
  //   },
];
