import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { Card } from "./ui/card";
interface Blog {
  title: string;
  description: string;
}

interface BlogsProps {
  data: Blog[];
}
export function Blogs({ data }: BlogsProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-[100px]">
      {data.map((blog, index) => {
        return (
          <Cards
            key={index}
            title={blog.title}
            description={blog.description}
          />
        );
      })}
    </div>
  );
}

export function Cards({ title, description }: Blog) {
  return (
    <Card className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start lg:w-[350px] w-56  mx-auto p-4 relative lg:h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="Blogs" />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        {description}
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        {title}
      </p>
    </Card>
  );
}
