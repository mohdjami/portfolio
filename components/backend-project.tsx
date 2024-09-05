import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
export async function BackendProjects() {
  const result = await fetch("https://mohdjami.me/api/notion/backend", {
    method: "GET",
    headers: {
      "Content-Type": "application",
    },
  });
  const itemss: any = [];
  const data = await result.json();
  // console.log("data", data.results);
  data.results.map((item: any) => {
    const newItem = {
      title: item.properties.title.title[0].plain_text,
      image: item.properties.image.rich_text[0]?.text?.content,
      description: item.properties.description.rich_text[0]?.text?.content,
      github: item.properties.github?.url,
      live: item.properties.live?.rich_text[0]?.plain_text,
      tech: item.properties.tech.rich_text[0]?.plain_text,
      icon: item.properties.icon?.rich_text[0]?.plain_text,
    };

    itemss.push(newItem);
  });
  return (
    <section className="lg:m-32 m-10" id="back-end">
      <div className="h-full relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="text-black lg:mt-10 font-bold font-sans lg:text-4xl dark:text-white">
          BACKEND PROJECTS
        </div>

        <BentoGrid className="max-w-4xl my-10   mx-auto">
          {itemss.map((item: any, i: number) => (
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
