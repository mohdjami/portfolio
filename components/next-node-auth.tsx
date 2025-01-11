'use client'

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NextNodeAuth() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "benefits", title: "Benefits of Combining Next.js and Express" },
    { id: "cookies", title: "Why Use HttpOnly Cookies" },
    { id: "implementation", title: "Implementation Overview" },
    { id: "challenges", title: "Challenges of Separate Backends" },
    { id: "solutions", title: "Solutions for Separate Backends" },
    { id: "conclusion", title: "Conclusion" },
  ];

  return (
    <TracingBeam className="px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-8 lg:py-12"
      >
        <article className="max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:text-white"
            >
              Authentication and Authorization in Next.js with Express Backend
            </motion.h1>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-2 text-sm text-muted-foreground"
            >
              <time dateTime="2023-08-15">August 15, 2023</time>
              <Badge variant="outline">Security</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">Express</Badge>
            </motion.div>
          </header>

          <nav className="mb-8 overflow-x-auto">
            <ul className="flex flex-nowrap justify-start sm:justify-center gap-4 pb-2">
              {sections.map((section, index) => (
                <motion.li 
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={`#${section.id}`}
                    className="text-primary hover:underline whitespace-nowrap text-sm sm:text-base"
                  >
                    {section.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <section id="intro" className="mb-12">
            <p className="text-lg sm:text-xl mb-6 text-muted-foreground leading-relaxed">
              Authentication and authorization are crucial aspects of web
              application security. When working with Next.js and an Express
              backend, implementing a robust authentication system can be
              challenging due to the different behaviors of server components,
              client components, and route handlers in Next.js. A regular
              approach won&apos;t suffice. In this post, we&apos;ll explore how
              to use cookies with JWT for secure authentication, addressing
              common pitfalls and best practices.
            </p>

            <Card className="my-6 p-6 bg-muted/50 border border-primary/10 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-2">Note:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">
                  This article assumes you have a good understanding of Next.js
                  and Node.js and can code full-stack applications from scratch.
                  However, I&apos;ll briefly cover the fundamentals and provide
                  insights into my strategies for authentication, authorization,
                  and communication between the frontend and backend, focusing on
                  handling cookies in client components, server components, and
                  route handlers with an Express backend.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="benefits" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
              Benefits of Combining Next.js Server Components with an Express Backend
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Best of Both Worlds
            </h3>
            <p className="mb-4">
              Next.js server components leverage the strengths of both Next.js and Express.js:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Preserved Features</strong>: Server-side rendering (SSR), static site generation (SSG), and improved SEO.
              </li>
              <li>
                <strong>Flexibility</strong>: Developers can build dynamic web applications tailored to specific needs.
              </li>
              <li>
                <strong>Customization</strong>: Express.js allows for low-level server control and custom backend logic.
              </li>
              <li>
                <strong>Separation of Concerns</strong>: Simplifies scaling and organizing large projects by separating frontend and backend logic.
              </li>
              <li>
                <strong>Scalability</strong>: Helps achieve scalable architectures for larger projects.
              </li>
              <li>
                <strong>Performance Optimization</strong>: Optimizes both client- and server-side performance independently.
              </li>
              <li>
                <strong>Development Experience</strong>: Benefits from features like automatic code splitting, hot reloading, and TypeScript support.
              </li>
            </ul>
            <p>
              For projects requiring custom backend logic or integration with existing systems, combining Next.js with Express.js can be highly beneficial. Express APIs can also be used independently to integrate with mobile, desktop, or other services.
            </p>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
              Why Use HttpOnly Cookies Instead of Local Storage?
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-4">
              <li>
                <strong>Security against XSS attacks</strong>: HttpOnly cookies are not accessible via JavaScript, reducing the risk of XSS attacks, while local storage is vulnerable.
              </li>
              <li>
                <strong>Protection against CSRF attacks</strong>: HttpOnly cookies mitigate CSRF risks with the SameSite flag and anti-CSRF tokens. Local storage doesn&apos;t offer built-in CSRF protection.
              </li>
              <li>
                <strong>Session management</strong>: Cookies handle session management across pages better than local storage, which is limited to the page context.
              </li>
              <li>
                <strong>OWASP Recommendations</strong>: The OWASP community advises against storing session identifiers in local storage and recommends HttpOnly cookies for secure token storage.
              </li>
            </ul>
            <p>
              While local storage offers convenience and larger storage capacity, HttpOnly cookies provide better security and standardization.
            </p>
          </section>

          <section id="implementation" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
              Implementation Overview
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Key Points to Consider Before Implementing:
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>HttpOnly Cookies</strong>: Store JWT tokens in HttpOnly cookies to reduce the risk of client-side JavaScript access and token theft.
              </li>
              <li>
                <strong>Separate Backend Communication</strong>: We will discuss the challenges of authenticating requests from a separate Express backend to a Next.js application. The challenge lies in managing cookie-based authentication across client-side and server-side boundaries, as cookies may not be automatically passed in certain requests.
              </li>
              <li>
                <strong>API Proxies</strong>: API proxies work by creating a middle layer that allows Next.js to intercept and forward requests to the backend. This ensures that cookies are correctly attached and sent with the request, as the proxy route runs within the same origin. We'll explore the concept of API proxies as a solution for handling authentication when making requests to external services from client Components.
              </li>
            </ul>

            <Card className="my-6 p-4 bg-muted overflow-hidden" id="apiproxy">
              <SyntaxHighlighter
                language="javascript"
                style={atomDark}
                customStyle={{ margin: 0, padding: "1rem", maxHeight: "400px" }}
              >
                {`//API Proxy implementation
import { getToken } from "@/lib/cookie";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = \`https://express-api.com/api/auth\`;
  const token = await getToken();
  const res = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${token}\`,
    },
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return NextResponse.json({ message: data.message });
}

// Get token function
import { cookies } from "next/headers";

export async function getToken() {
  const cookieStore = cookies();
  const data = cookieStore.get("jwt");
  return data?.value;
}

//Logout function
export async function logout() {
  try {
    await deleteSession();
    console.log("logged out");
    redirect("/login");
  } catch (error) {
    console.error(error);
  }
}`}
              </SyntaxHighlighter>
            </Card>
          </section>

          <section id="challenges" className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              Challenges of Separate Backends
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Cookie Accessibility</strong>: Cookies are not automatically sent with requests from Next.js to an external service. This makes it difficult for the backend to verify the request without the token. But if you are sending request to route handlers within the same Next.js server from client components, you don&apos;t face this problem. As cookies are httpOnly, you can&apos;t excess cookies in any way in client side, so you won't be explicitly able to send them too.
              </li>
              <li>
                <strong>Server-Side Component Requests</strong>: When making requests from server-side components using fetch, cookies are not automatically included in the request headers, as we discussed above. For this, you need to explicitly put the cookies in request headers. We will talk about this in a later section.
              </li>
              <li>
                <strong>Client-Side vs. Server-Side Requests</strong>: Authentication mechanisms differ between client-side and server-side requests.
              </li>
            </ul>
          </section>

          <section id="solutions" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
              Solutions for Separate Backends
            </h2>
            <p className="mb-4">
              Authorizing user session from Client side in Next.js and sending token with fetch request to receive data in client side is crucial for authorizing the user. But, points we need to consider are that we are not able to send the cookie from Next.js to express backend with fetch requests even after including the credentials. I will tell you the solution for this below.
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold my-2">
              Handling Client-Side Authentication:
            </h3>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>
                <strong>API Proxies</strong>: Create a Next.js API route to act as a proxy for requests to the Express backend.
              </li>
              <li>
                <strong>Fetch Requests</strong>: In client components, include credentials in fetch requests. Use an API proxy route for cookie handling.
              </li>
              <li>
                <strong>Next.js Route Handlers</strong>: Use `cookies()` from `next/headers` to access cookies in route handlers and send the token in headers to the Express backend for verification.
              </li>
            </ol>
            <p className="mb-4">
              You can consider the above{" "}
              <Link href="/blog/1#apiproxy" className="underline">
                code
              </Link>
              &nbsp;I have already provided for implementing API Proxy.
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              Handling Server-Side Authentication:
            </h3>
            <p className="mb-4">
              When making requests from server-side components, explicitly include cookies in the fetch request headers using functions like `getToken()`.
            </p>
            <Card className="my-6 p-4 bg-muted overflow-hidden">
              <SyntaxHighlighter
                language="javascript"
                style={atomDark}
                customStyle={{ margin: 0, padding: "1rem", maxHeight: "200px" }}
              >
                {`import { cookies } from "next/headers";

export async function getToken() {
  const cookieStore = cookies();
  const data = cookieStore.get("jwt");
  return data?.value;
}`}
              </SyntaxHighlighter>
            </Card>
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              Best Practices
            </h3>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>
                <strong>Use HTTPS</strong>: Always encrypt communication via HTTPS.
              </li>
              <li>
                <strong>Short Token Lifetimes</strong>: Implement short-lived tokens to reduce potential breaches.
              </li>
              <li>
                <strong>Token Refresh Mechanism</strong>: Use refresh tokens for seamless session management.
              </li>
              <li>
                <strong>Secure Cookie Settings</strong>: Set `secure` and `HttpOnly` flags for cookies.
              </li>
              <li>
                <strong>Regular Security Audits</strong>: Perform audits to ensure your system remains secure.
              </li>
            </ol>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
              Conclusion
            </h2>
            <p className="mb-6 text-muted-foreground">
              In this article, we covered secure authentication with Next.js and
              Express.js using HttpOnly cookies, API proxies, and token
              management for client and server components. By following these
              strategies, you can build a secure and scalable full-stack
              application.
            </p>
          </section>

          <Card className="mt-8 p-6 bg-muted/50 border border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-2">Further Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Take reference from these articles for more information on this
                topic:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <Link
                    href="https://medium.com/@adimuhamadfirmansyah/next-js-x-express-using-http-only-cookie-jwt-and-refresh-token-for-api-secure-authentication-and-b7ee46ac4da3"
                    className="text-primary hover:underline break-words"
                  >
                    Next.js x Express: Using HTTP-Only Cookie, JWT, and Refresh
                    Token for API Secure Authentication
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://maxschmitt.me/posts/next-js-http-only-cookie-auth-tokens"
                    className="text-primary hover:underline break-words"
                  >
                    Next.js HTTP-Only Cookie Auth Tokens
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://stackoverflow.com/questions/74388491/how-to-access-httponly-cookies-in-next-js"
                    className="text-primary hover:underline break-words"
                  >
                    How to access HttpOnly cookies in Next.js
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </article>
      </motion.div>
    </TracingBeam>
  );
}

