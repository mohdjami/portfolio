"use client"
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <FooterSection title="GENERAL">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/blogs">Blog</FooterLink>
          </FooterSection>
          <FooterSection title="SPECIFICS">
            <FooterLink href="#">Stats</FooterLink>
            <FooterLink href="#">Toolbox</FooterLink>
            <FooterLink href="#">Speaking</FooterLink>
          </FooterSection>
          <FooterSection title="EXTRA">
            <FooterLink href="#">Changelog</FooterLink>
            <FooterLink href="#">Meet up</FooterLink>
            <FooterLink href="https://mjkm.vercel.app/mjr">Resume</FooterLink>
            <FooterLink href="#">Snippets</FooterLink>
          </FooterSection>
          <div>
            <h5 className="font-bold text-lg mb-4">NEWSLETTER</h5>
            <p className="mb-4 text-sm">Get new articles delivered to your inbox!</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                className="flex-1 px-4 py-2 rounded-md bg-input text-foreground"
                placeholder="youremail@example.com"
                type="email"
              />
              <button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div>
      <h5 className="font-bold text-lg mb-4">{title}</h5>
      <ul className="space-y-2">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:underline text-sm">
        {children}
      </Link>
    </li>
  )
}

