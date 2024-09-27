import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export async function BackendProjects() {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/notion/backend`
    );

    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }

    const data = await result.json();
    const itemss: any = [];

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
      <section className="lg:m-32 m-10" id="front-end">
        {" "}
        <div className="h-full relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="text-black lg:mt-10 font-bold font-sans lg:text-4xl dark:text-white">
            FRONTEND PROJECTS
          </div>
        </div>
        <BentoGrid>
          {itemss.map((item: any, index: number) => (
            <BentoGridItem
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              github={item.github}
              live={item.live}
              tech={item.tech}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>
    );
  } catch (error) {
    console.error("Error fetching backend projects:", error);
    return <div>Error loading projects</div>;
  }
}
