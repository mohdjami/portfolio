import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import About from "@/components/pages/About";
import { FloatingNav } from "@/components/floating-nav";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mohd Jami Portfolio",
  description: "Mohd Jami Portfolio made using Next.js",
};

const navItems = [
  {
    name: "Home",
    link: "/",
    subItems: [
      { name: "About me", link: "/#me" },
      { name: "Open Source Projects", link: "/#oss" }
    ]
  },
  {
    name: "About",
    link: "/about",
    subItems: [
      { name: "Frontend", link: "/about/#" },
      { name: "Backend", link: "/about/#" }
    ]
  },
  {
    name: "Services",
    link: "/services",
    subItems: []
  },
  {
    name: "Projects",
    link: "/projects",
    subItems: [
      { name: "Backend Projects", link: "/projects/back-end" },
      { name: "Full Stack Projects", link: "/projects/full-stack" },
      { name: "Frontend Projects", link: "/projects/front-end" },
      { name: "Other Projects", link: "/projects/others" }
    ]
  },
  {
    name: "Blogs",
    link: "/blog",
    subItems: [
      { name: "Seamless Authentication Nextjs + Express", link: "/blog/1" }
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background bg-slate-900 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Navigation wrapper with higher z-index */}
          <div className="fixed w-full top-0 z-50">
            <FloatingNav navItems={navItems} />
          </div>
          
          {/* Main content wrapper with padding to prevent overlap */}
          <div className="relative pt-24 z-0">
            <Sidebar />
            {children}
            <About />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}