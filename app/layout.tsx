import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import About from "@/components/pages/About";
import { FloatingNav } from "@/components/floating-nav";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Mohd Jami Portfolio",
  description: "Mohd Jami Portfolio made using Next.js",
};

const navItems = [{ name: "Home", link: "/" }];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-full bg-background bg-slate-900 font-sans antialiased z-10",
          fontSans.variable
        )}
      >
        <Head>
          <title>Mohd Jami Portfolio</title>
          <meta
            name="description"
            content="Mohd Jami Portfolio made using Next.js"
          />
          <meta
            name="keywords"
            content="Mohd Jami, Portfolio, Next.js, Web Developer"
          />
          <meta property="og:title" content="Mohd Jami Portfolio" />
          <meta
            property="og:description"
            content="Mohd Jami Portfolio made using Next.js"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mohdjami.me" />
          <meta property="og:image" content="https://mohdjami.me/jami.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mohd Jami Portfolio" />
          <meta
            name="twitter:description"
            content="Mohd Jami Portfolio made using Next.js"
          />
          <meta name="twitter:image" content="https://mohdjami.me/jami.jpg" />
          <link rel="canonical" href="https://mohdjami.me" />
        </Head>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {" "}
          <FloatingNav navItems={navItems} />
          <Sidebar /> {children}
          <About />
        </ThemeProvider>
      </body>
    </html>
  );
}
