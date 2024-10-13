import Link from "next/link";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/projects/card";
import { Badge } from "@/components/ui/badge";

// This would typically come from your CMS or API
const blogPosts = [
  {
    id: 1,
    title:
      "Authentication and Authorization using Cookies and JWT in Next.js with Express Backend.",
    date: "2024-09-5",
    excerpt:
      "Learn how to implement full Authentication and Authorization using jwt and httpOnly cookies with Next.js server and client components and Express.js Backend.",
    slug: "1",
    category: "React",
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    date: "2023-06-02",
    excerpt:
      "Discover how to create beautiful, responsive layouts quickly and easily using Tailwind CSS.",
    slug: "building-responsive-layouts-with-tailwind-css",
    category: "CSS",
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    date: "2023-07-10",
    excerpt:
      "Explore techniques to improve the performance of your Next.js applications and deliver a better user experience.",
    slug: "optimizing-performance-in-nextjs-applications",
    category: "Next.js",
  },
  {
    id: 4,
    title: "Introduction to GraphQL",
    date: "2023-08-05",
    excerpt:
      "Dive into GraphQL and learn how it can revolutionize your API development process.",
    slug: "introduction-to-graphql",
    category: "API",
  },
];

export default function BlogPage() {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-32">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the frontiers of web development, design, and technology.
            Join me on this journey of continuous learning and innovation.
          </p>
        </header>
        <main>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors duration-300">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-primary hover:underline font-medium"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
