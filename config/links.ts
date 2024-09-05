import { Navigation } from "@/types";
export const dashboardLinks: Navigation = {
  data: [
    {
      title: "Home",
      href: "/",
      icon: "home",
    },
    {
      title: "Projects",
      href: "/projects",
      icon: "activity",
    },
    {
      title: "Backend Projects",
      href: "/projects/back-end",
      icon: "backend",
    },
    {
      title: "Full Stack Projects",
      href: "/projects/full-stack",
      icon: "fullstack",
    },

    {
      title: "Front-End Projects",
      href: "/projects/front-end",
      icon: "frontend",
    },
    {
      title: "Other Projects",
      href: "/projects/others",
      icon: "ellipsis",
    },
  ],
};
