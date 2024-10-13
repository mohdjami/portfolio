"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() === 0) {
        setVisible(true);
      } else {
        if (direction <= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent  rounded-full dark:bg-opacity-65 bg-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center lg:space-x-2",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link
            href="/"
            className="hover:bg-black lg:p-2 rounded-sm lg:text-l text-sm"
          >
            Home
          </Link>{" "}
          <Link
            href="/about"
            className="hover:bg-black lg:p-2 rounded-sm text-sm lg:text-l"
          >
            About
          </Link>
          <Link href="/services">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/back-end">Backend Development</HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/front-end">
                  Frontend Development
                </HoveredLink>
              </div>
            </MenuItem>{" "}
          </Link>
          <Link href="/projects">
            <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/projects/back-end">
                  Backend Projects
                </HoveredLink>
                <HoveredLink href="/projects/full-stack">
                  Full Stack Projects
                </HoveredLink>
                <HoveredLink href="/projects/front-end">
                  Frontend Projects
                </HoveredLink>
                <HoveredLink href="/projects/others">
                  Other Projects
                </HoveredLink>
              </div>
            </MenuItem>{" "}
          </Link>
          <Link href="/blog">
            <MenuItem setActive={setActive} active={active} item="Blogs">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/blog/1">
                  Seamless Authentication Nextjs + Express
                </HoveredLink>
                <HoveredLink href="/blogs/#scaling-app">
                  Scaling an Application
                </HoveredLink>
                <HoveredLink href="/blogs/#chat-app">
                  Building Real time Chat App
                </HoveredLink>
                <HoveredLink href="/blogs/#nextjs">
                  Nextjs as a Full Stack Framework
                </HoveredLink>
              </div>
            </MenuItem>
          </Link>
        </Menu>

        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
