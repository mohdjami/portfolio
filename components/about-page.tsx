import Image from "next/image";

export function AboutPage() {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 border-2 p-10">
        <div className="relative w-[300px] h-[300px]">
          <div className="rounded-full p-1 bg-gradient-to-r from-black to-red-500">
            <Image
              src="/jami.jpg"
              alt="Mohd Jami"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            About Mohd Jami
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Mohd Jami is a Backend Developer with experience in the building
            Scalable and Robust Backend Systems. He has a strong background in
            full-stack web development, specializing in building scalable and
            performant applications using modern technologies.
          </p>
        </div>
      </div>
      <div className="py-10">
        <h3 className="flex justify-center items-center text-2xl font-bold tracking-tight text-primary-foreground">
          Key Skills & Experience
        </h3>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-slate-600 rounded-md">
            <h4 className="text-lg font-semibold text-primary-foreground">
              Front-end
            </h4>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-600 rounded-md">
            <h4 className="text-lg font-semibold text-primary-foreground">
              Back-end
            </h4>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-600 rounded-md">
            <h4 className="text-lg font-semibold text-primary-foreground">
              DevOps
            </h4>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-600 rounded-md">
            <h4 className="text-lg font-semibold text-primary-foreground">
              Other
            </h4>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>Agile Methodologies</li>
              <li>Project Management</li>
              <li>Technical Leadership</li>
              <li>Problem-solving</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
