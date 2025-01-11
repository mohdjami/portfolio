import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/Sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/pages/About"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Mohd Jami Portfolio",
  description: "Mohd Jami Portfolio made using Next.js",
  openGraph: {
    title: "Mohd Jami Portfolio",
    description: "Mohd Jami Portfolio made using Next.js",
    url: "https://mohdjami.me",
    siteName: "Mohd Jami Portfolio",
    images: [
      {
        url: "https://mohdjami.me/me.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Jami Portfolio",
    description: "Mohd Jami Portfolio made using Next.js",
    images: ["https://mohdjami.me/me.jpeg"],
  },
}
const navItems = [{ name: "Home", link: "/" }]

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SidebarProvider>
            <div className="flex flex-col min-h-screen">
              <FloatingNav navItems={navItems}/>
              <main className="flex-grow pt-16">{children}</main>
              <Footer />
              <Sidebar/>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

