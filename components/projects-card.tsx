import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageSrcMobile: string;
  altText: string;
}

export function ProjectCard({
  title,
  description,
  href,
  imageSrc,
  imageSrcMobile,
  altText,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="rounded-lg bg-black m-2 block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full h-full">
        <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">{title}</h3>
        <p className="text-xs lg:text-sm m-0 p-0 font-normal text-slate-500">{description}</p>
        <div className="flex-1 w-full rounded-lg mt-4">
          <Image
            src={imageSrc}
            alt={altText}
            width={500}
            height={500}
            className="hidden lg:block w-full h-auto object-cover"
          />
          <Image
            src={imageSrcMobile}
            alt={altText}
            width={300}
            height={300}
            className="lg:hidden w-full h-auto object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
