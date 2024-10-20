"use client";
import React from "react";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
const Hello = () => {
  return (
    <section className="lg:m-32 mt-32 bg-transparent" id="back-end">
      <div className="h-full relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="text-black lg:mt-10 lg:mb-4 font-bold font-sans lg:text-4xl dark:text-white">
          Selection of My Favourite Projects
        </div>
        <div className="grid lg:grid-cols-2">
          {" "}
          <div className="h-auto w-[320px] lg:w-full flex items-center justify-center">
            <Link
              className="rounded-lg  bg-black m-2"
              href="https://travel-three-lovat.vercel.app"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[200px] lg:w-[20rem] h-[30rem] lg:h-[20rem] ">
                <h3 className="max-w-xs pb-2 !m-0 font-bold  lg:text-base text-slate-100">
                  TravelPlan AI
                </h3>
                <div className=" text-xs lg:text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    {" "}
                    AI Travel Itineray Generator with Nextjs, TailwindCSS and
                    AI.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 " />
                <Image
                  src="/travelai.png"
                  alt="AI Travel Itinerary"
                  width={500}
                  height={500}
                  className="hidden lg:block"
                />
                <Image
                  src="/image.png"
                  alt="AI Travel Itinerary"
                  width={300}
                  height={300}
                  className="lg:hidden"
                />
              </div>
            </Link>
          </div>
          <div className="h-auto w-[320px] lg:w-full flex items-center justify-center">
            <Link
              className="rounded-lg bg-black m-2"
              href="https://mjkm.vercel.app"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[200px] lg:w-[20rem] h-[30rem] lg:h-[20rem] ">
                <h3 className="max-w-xs pb-2 !m-0 font-bold  lg:text-base text-slate-100">
                  URL Manager
                </h3>
                <div className=" text-xs lg:text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Highly Scalable URL Manager with Nextjs, Redis, Kafka.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 " />
                <Image
                  src="/url.png"
                  alt="My URL Manager Website"
                  width={500}
                  height={500}
                  className="hidden lg:block"
                />
                <Image
                  src="/urlph.png"
                  alt="My URL Manager Website"
                  width={300}
                  height={300}
                  className="lg:hidden"
                />
              </div>
            </Link>
          </div>
          <div className="h-auto h-auto w-[320px] lg:w-full flex items-center justify-center ">
            <Link
              className="rounded-lg bg-black m-10"
              href="https://habit-tracker-jami.vercel.app"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[200px] lg:w-[20rem] h-[30rem] lg:h-[20rem] ">
                <h3 className="max-w-xs pb-2 !m-0 font-bold  text-base text-slate-100">
                  Habit Tracker
                </h3>
                <div className=" text-xs lg:text-base !m-0 !p-0 font-normal">
                  {" "}
                  <span className="text-slate-500 ">
                    Monitor your activities, streaks, and progress with little
                    effort. Integrate statistics to your life!
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 " />
                <Image
                  src="/Screenshot 2024-02-15 211545.png"
                  alt="My Portfolio Website"
                  width={500}
                  height={500}
                  className="hidden lg:block"
                />
                <Image
                  src="/hbtph.png"
                  alt="My Portfolio Website"
                  width={300}
                  height={300}
                  className="lg:hidden"
                />
              </div>
            </Link>
          </div>{" "}
          <div className="h-auto h-auto w-[320px] lg:w-full flex items-center justify-center">
            <Link
              className="rounded-lg  bg-black m-10"
              href="https://jami-nextjs-auth-temp.vercel.app/"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[200px] lg:w-[20rem] h-[30rem] lg:h-[22rem] ">
                <h3 className="max-w-xs pb-2 !m-0 font-bold  text-base text-slate-100">
                  Next.js Authentication Starter Template
                </h3>
                <div className=" text-xs lg:text-base !m-0 !p-0 font-normal">
                  {" "}
                  <span className="text-slate-500 ">
                    Built a Next.js Authentication Template with NextAuth.js
                    with integrated Email verification, Forgot Password and
                    Google, Gitub Integration which can be used by SaaS
                    applicationss
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 " />
                <Image
                  src="/nextauth.png"
                  alt="My nextauth Manager Website"
                  width={400}
                  height={400}
                  className="hidden lg:block"
                />
                <Image
                  src="/nextauthph.png"
                  alt="My nextauth  Website"
                  width={300}
                  height={300}
                  className="lg:hidden"
                />
              </div>
            </Link>
          </div>{" "}
          <div className="h-auto w-[320px] lg:w-full flex items-center justify-center">
            <Link
              className="rounded-lg  bg-black m-10"
              href="https://portfolio-mohdjamis-projects.vercel.app/"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2  w-[200px] lg:w-[20rem] h-[30rem] lg:h-[22rem] ">
                <h3 className="max-w-xs pb-2 !m-0 font-bold  text-base text-slate-100">
                  My Portfolio Website
                </h3>
                <div className=" text-xs lg:text-base !m-0 !p-0 font-normal">
                  {" "}
                  <span className="text-slate-500 ">
                    This Project is currently in the biulding phase. It will
                    showcase my projects as well as provide information about
                    me.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 " />
                <Image
                  src="/port.png"
                  alt="My nextauth Manager Website"
                  width={500}
                  height={500}
                  className="hidden lg:block"
                />
                <Image
                  src="/portph.png"
                  alt="My nextauth  Website"
                  width={300}
                  height={300}
                  className="lg:hidden"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* </TracingBeam> */}
    </section>
  );
};

export default Hello;
