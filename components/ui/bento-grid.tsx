import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  github,
  tech,
  live,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  github?: string;
  tech?: string;
  live?: string;
  image?: string;
}) => {
  return (
    <>
      {github && (
        <Link href={github} className="mb-10">
          <div
            className={cn(
              "h-[330px] row-span-1 rounded-xl group/bento hover:shadow-xl transition  duration-200 shadow-input dark:shadow-none p-4  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col",
              className
            )}
          >
            {image && (
              <>
                <Image
                  src={`/${image}`}
                  alt="My URL shortener Website"
                  width={300}
                  height={300}
                  className="hidden lg:block"
                />
                <Image
                  src={`/${image}`}
                  alt="My URL shortener Website"
                  width={300}
                  height={300}
                  className="lg:hidden"
                />
              </>
            )}
            <div className="group-hover/bento:translate-x-2  transition duration-200">
              <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                {title}
              </div>
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                {description}
              </div>{" "}
              <div className="font-sans  font-bold text-neutral-600 text-xs dark:text-neutral-300">
                {tech}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
