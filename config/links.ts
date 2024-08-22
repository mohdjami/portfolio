import { Navigation } from "@/types";

export const dashboardLinks: Navigation = {
  data: [
    {
      title: "Home",
      href: "/",
      icon: "dashboard",
    },
    {
      title: "Projects",
      href: "/projects",
      icon: "check",
    },
    {
      title: "Backend Projects",
      href: "/projects/back-end",
      icon: "fire",
    },
    {
      title: "Full Stack Projects",
      href: "/projects/full-stack",
      icon: "sort",
    },

    {
      title: "Front-End Projects",
      href: "/projects/front-end",
      icon: "mixer",
    },
    {
      title: "Other Projects",
      href: "/projects/others",
      icon: "ellipsis",
    },
  ],
};
