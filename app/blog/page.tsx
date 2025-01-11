"use client";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// This would typically come from your CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Authentication and Authorization using Cookies and JWT in Next.js with Express Backend",
    date: "2024-09-05",
    excerpt: "Learn how to implement full Authentication and Authorization using jwt and httpOnly cookies with Next.js server and client components and Express.js Backend.",
    slug: "1",
    category: "React",
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    date: "2023-06-02",
    excerpt: "Discover how to create beautiful, responsive layouts quickly and easily using Tailwind CSS.",
    slug: "building-responsive-layouts-with-tailwind-css",
    category: "CSS",
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    date: "2023-07-10",
    excerpt: "Explore techniques to improve the performance of your Next.js applications and deliver a better user experience.",
    slug: "optimizing-performance-in-nextjs-applications",
    category: "Next.js",
  },
  {
    id: 4,
    title: "Introduction to GraphQL",
    date: "2023-08-05",
    excerpt: "Dive into GraphQL and learn how it can revolutionize your API development process.",
    slug: "introduction-to-graphql",
    category: "API",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <header className="text-center mb-8 sm:mb-12">
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Blog
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Exploring the frontiers of web development, design, and technology.
          Join me on this journey of continuous learning and innovation.
        </motion.p>
      </header>
      <main>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 hover:text-primary transition-colors duration-300">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <Badge variant="secondary" className="text-xs sm:text-sm whitespace-nowrap">
                      {post.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm sm:text-base text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline font-medium text-sm sm:text-base"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

