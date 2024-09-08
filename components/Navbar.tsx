"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Mode } from "./mode";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 lg:max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">Home</Link> <Link href="/about">About</Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/back-end">Backend Development</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/front-end">Frontend Development</HoveredLink>
          </div>
        </MenuItem>{" "}
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects/#full-stack">
              Full Stack Projects
            </HoveredLink>
            <HoveredLink href="/projects/#back-end">
              Backend Projects
            </HoveredLink>
            <HoveredLink href="/projects/#front-end">
              Frontend Projects
            </HoveredLink>
            <HoveredLink href="/projects/#front-end">
              Other Projects
            </HoveredLink>
          </div>
        </MenuItem>{" "}
        <MenuItem setActive={setActive} active={active} item="Blogs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/blog/#inter-exp">
              First Interview Experience
            </HoveredLink>
            <HoveredLink href="/blog/#scaling-app">
              Scaling an Application
            </HoveredLink>
            <HoveredLink href="/blog/#chat-app">
              Building Real time Chat App
            </HoveredLink>
            <HoveredLink href="/blog/#nextjs">
              Nextjs as a Full Stack Framework
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
