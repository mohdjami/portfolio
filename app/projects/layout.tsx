import About from "@/components/About";
import { DashboardNav } from "@/components/DashboardNav";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
import { SparklesCore } from "@/components/ui/sparkles";
import { dashboardLinks } from "@/config/links";
import { Metadata } from "next";

interface ProjectDashboardLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Projects",
  description: "Projects Section",
};

export default async function ProjectDashboardLayout({
  children,
}: ProjectDashboardLayoutProps) {
  return (
    <div className=" w-full dark:bg-slate-900 bg-slate-600 dark:bg-grid-slate-900/[0.2] bg-grid-black/[0.2] relative flex flex-cols min-h-full">
      {" "}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900 bg-slate-600 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container bg-clip-text grid flex-1 gap-12 md:grid-cols-[180px_1fr] z-10">
        <aside className="hidden bg-clip-text w-[180px] flex-col mt-32 ml-10 md:flex z-10 overflow-hidden">
          <DashboardNav items={dashboardLinks.data} />
        </aside>
        <main className="flex bg-clip-text w-full flex-1 flex-col z-10">
          {children}
        </main>
      </div>
    </div>
  );
}
