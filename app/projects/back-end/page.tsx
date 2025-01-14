import { Suspense } from "react";
import { BackendProjects } from "@/components/projects/backend-project";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
  title: "Backend Projects",
  description: "Explore my backend development projects and skills",
};

export default function Backend() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-12 dark:text-white">
        Backend Projects
      </h1>
      <Suspense fallback={<ProjectsSkeleton />}>
        <BackendProjects />
      </Suspense>
    </div>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-64 w-full" />
      ))}
    </div>
  );
}
