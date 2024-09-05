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
    );
  } catch (error) {
    console.error("Error fetching backend projects:", error);
    return <div>Error loading projects</div>;
  }
}
