import About from "@/components/About";
import { DashboardNav } from "@/components/DashboardNav";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
import { SparklesCore } from "@/components/ui/sparkles";
import { dashboardLinks } from "@/config/links";
import { cn } from "@/lib/utils";
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
    <html lang="en">
      <body
        className={cn(
          "min-h-full bg-background bg-slate-900 font-sans antialiased z-10"
        )}
      >
        <div className=" w-full relative flex flex-cols min-h-full">
          {" "}
          <div className="container bg-clip-text   grid flex-1 gap-12 md:grid-cols-[180px_1fr] z-10">
            <aside className="hidden bg-clip-text w-[180px] flex-col mt-32 ml-10 md:flex z-10 overflow-hidden">
              <DashboardNav items={dashboardLinks.data} />
            </aside>
            <main className="flex bg-clip-text w-full flex-1 flex-col z-10">
              {children}
            </main>
          </div>
        </div>{" "}
      </body>
    </html>
  );
}
