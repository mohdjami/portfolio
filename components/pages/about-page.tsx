'use client'

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function AboutPage() {
  const skills = [
    {
      category: "Front-end",
      items: ["React", "Next.js", "TypeScript", "HTML/CSS"],
    },
    {
      category: "Back-end",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    },
    {
      category: "Other",
      items: ["Agile Methodologies", "Project Management", "Technical Leadership", "Problem-solving"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
      <Card className="mb-8 sm:mb-12">
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
              <Image
                src="/me.jpeg"
                alt="Mohd Jami"
                fill
                className="rounded-full p-1 relative z-10 object-cover"
              />
            </motion.div>
            <div className="flex-1 text-center sm:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-4"
              >
                About Mohd Jami
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground"
              >
                Mohd Jami is a Backend Developer with experience in building
                Scalable and Robust Backend Systems. He has a strong background in
                full-stack web development, specializing in building scalable and
                performant applications using modern technologies.
              </motion.p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Key Skills & Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold text-primary">
                      {skill.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs sm:text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

