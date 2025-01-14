import React from "react";
import useSWR from "swr";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

interface Project {
  title: string;
  image: string;
  description: string;
  github: string;
  live: string;
  tech: string;
  icon: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function BackendProjects() {
  const { data, error } = useSWR<{ results: any[] }>(
    `${process.env.NEXT_PUBLIC_URL}/api/notion/backend`,
    fetcher
  );

  if (error) {
    return <div>Error loading projects</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const projects: Project[] = data.results.map((item: any) => ({
    title: item.properties.title.title[0]?.plain_text ?? "",
    image: item.properties.image.rich_text[0]?.text?.content ?? "",
    description: item.properties.description.rich_text[0]?.text?.content ?? "",
    github: item.properties.github?.url ?? "",
    live: item.properties.live?.rich_text[0]?.plain_text ?? "",
    tech: item.properties.tech.rich_text[0]?.plain_text ?? "",
    icon: item.properties.icon?.rich_text[0]?.plain_text ?? "",
  }));

  return (
    <section className="lg:m-32 m-10" id="backend-projects">
      <div className="h-full relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h2 className="text-black lg:mt-10 font-bold font-sans lg:text-4xl dark:text-white">
          BACKEND PROJECTS
        </h2>
      </div>
      <BentoGrid className="max-w-4xl m-10 mx-auto">
        {projects.map((item: Project, index: number) => (
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
}

