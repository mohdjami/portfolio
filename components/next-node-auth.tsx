import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
    <TracingBeam>
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Authentication and Authorization in Next.js with Express Backend
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-muted-foreground">
              <time dateTime="2023-08-15">August 15, 2023</time>
              <Badge variant="outline">Security</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">Express</Badge>
            </div>
          </header>

          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-primary hover:underline"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section id="intro" className="mb-12">
            <p className="text-lg sm:text-xl mb-6 text-muted-foreground">
              Authentication and authorization are crucial aspects of web
              application security. When working with Next.js and an Express
              backend, implementing a robust authentication system can be
              challenging due to the different behaviors of server components,
              client components, and route handlers in Next.js. A regular
              approach won't suffice. In this post, we'll explore how to use
              cookies with JWT for secure authentication, addressing common
              pitfalls and best practices.
            </p>

            <Card className="my-6 p-4 bg-muted">
              <h2 className="text-xl font-semibold mb-2">Note:</h2>
              <p className="text-sm sm:text-base">
                This article assumes you have a good understanding of Next.js
                and Node.js and can code full-stack applications from scratch.
                However, I'll briefly cover the fundamentals and provide
                insights into my strategies for authentication, authorization,
                and communication between the frontend and backend, focusing on
                handling cookies in client components, server components, and
                route handlers with an Express backend.
              </p>
            </Card>
          </section>

          <section id="benefits" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
              Benefits of Combining Next.js Server Components with an Express
              Backend
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Best of Both Worlds
            </h3>
            <p className="mb-4">
              Next.js server components leverage the strengths of both Next.js
              and Express.js:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Preserved Features</strong>: Server-side rendering
                (SSR), static site generation (SSG), and improved SEO.
              </li>
              <li>
                <strong>Flexibility</strong>: Developers can build dynamic web
                applications tailored to specific needs.
              </li>
              <li>
                <strong>Customization</strong>: Express.js allows for low-level
                server control and custom backend logic.
              </li>
              <li>
                <strong>Separation of Concerns</strong>: Simplifies scaling and
                organizing large projects by separating frontend and backend
                logic.
              </li>
              <li>
                <strong>Scalability</strong>: Helps achieve scalable
                architectures for larger projects.
              </li>
              <li>
                <strong>Performance Optimization</strong>: Optimizes both
                client- and server-side performance independently.
              </li>
              <li>
                <strong>Development Experience</strong>: Benefits from features
                like automatic code splitting, hot reloading, and TypeScript
                support.
              </li>
            </ul>
            <p>
              For projects requiring custom backend logic or integration with
              existing systems, combining Next.js with Express.js can be highly
              beneficial. Express APIs can also be used independently to
              integrate with mobile, desktop, or other services.
            </p>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
              Why Use HttpOnly Cookies Instead of Local Storage?
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-4">
              <li>
                <strong>Security against XSS attacks</strong>: HttpOnly cookies
                are not accessible via JavaScript, reducing the risk of XSS
                attacks, while local storage is vulnerable.
              </li>
              <li>
                <strong>Protection against CSRF attacks</strong>: HttpOnly
                cookies mitigate CSRF risks with the SameSite flag and anti-CSRF
                tokens. Local storage doesn't offer built-in CSRF protection.
              </li>
              <li>
                <strong>Session management</strong>: Cookies handle session
                management across pages better than local storage, which is
                limited to the page context.
              </li>
              <li>
                <strong>OWASP Recommendations</strong>: The OWASP community
                advises against storing session identifiers in local storage and
                recommends HttpOnly cookies for secure token storage.
              </li>
            </ul>
            <p>
              While local storage offers convenience and larger storage
              capacity, HttpOnly cookies provide better security and
              standardization.
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
                <strong>HttpOnly Cookies</strong>: Store JWT tokens in HttpOnly
                cookies to reduce the risk of client-side JavaScript access and
                token theft.
              </li>
              <li>
                <strong>Separate Backend Communication</strong>: We'll address
                the challenges of authenticating requests between a separate
                Express backend and a Next.js application.
              </li>
              <li>
                <strong>API Proxies</strong>: Use API proxies to manage
                authentication when making requests from client components to
                external services. This ensures cookies are correctly passed.
              </li>
            </ul>

            <Card className="my-6 p-4 bg-muted overflow-hidden">
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
                <strong>Cookie Accessibility</strong>: Cookies are not
                automatically sent with requests from Next.js to external
                services.
              </li>
              <li>
                <strong>Server-Side Component Requests</strong>: Cookies must be
                explicitly included in server-side fetch requests.
              </li>
              <li>
                <strong>Client-Side vs. Server-Side Requests</strong>:
                Authentication mechanisms differ between client-side and
                server-side requests.
              </li>
            </ul>
          </section>

          <section id="solutions" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
              Solutions for Separate Backends
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Handling Client-Side Authentication:
            </h3>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>
                <strong>API Proxies</strong>: Create a Next.js API route to act
                as a proxy for requests to the Express backend.
              </li>
              <li>
                <strong>Fetch Requests</strong>: In client components, include
                credentials in fetch requests. Use an API proxy route for cookie
                handling.
              </li>
              <li>
                <strong>Next.js Route Handlers</strong>: Use `cookies()` from
                `next/headers` to access cookies in route handlers and send the
                token in headers to the Express backend for verification.
              </li>
            </ol>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              Handling Server-Side Authentication:
            </h3>
            <p className="mb-4">
              When making requests from server-side components, explicitly
              include cookies in the fetch request headers using functions like
              `getToken()`.
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
                <strong>Use HTTPS</strong>: Always encrypt communication via
                HTTPS.
              </li>
              <li>
                <strong>Short Token Lifetimes</strong>: Implement short-lived
                tokens to reduce potential breaches.
              </li>
              <li>
                <strong>Token Refresh Mechanism</strong>: Use refresh tokens for
                seamless session management.
              </li>
              <li>
                <strong>Secure Cookie Settings</strong>: Set `secure` and
                `HttpOnly` flags for cookies.
              </li>
              <li>
                <strong>Regular Security Audits</strong>: Perform audits to
                ensure your system remains secure.
              </li>
            </ol>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
              Conclusion
            </h2>
            <p className="mb-6">
              In this article, we covered secure authentication with Next.js and
              Express.js using HttpOnly cookies, API proxies, and token
              management for client and server components. By following these
              strategies, you can build a secure and scalable full-stack
              application.
            </p>
          </section>

          <Card className="mt-8 p-4 bg-muted">
            <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
            <p className="mb-2">
              Take reference from these articles for more information on this
              topic:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="https://medium.com/@adimuhamadfirmansyah/next-js-x-express-using-http-only-cookie-jwt-and-refresh-token-for-api-secure-authentication-and-b7ee46ac4da3"
                  className="text-primary hover:underline break-words"
                >
                  Next.js x Express: Using HTTP-Only Cookie, JWT, and Refresh
                  Token for API Secure Authentication
                </a>
              </li>
              <li>
                <a
                  href="https://maxschmitt.me/posts/next-js-http-only-cookie-auth-tokens"
                  className="text-primary hover:underline break-words"
                >
                  Next.js HTTP-Only Cookie Auth Tokens
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/questions/74388491/how-to-access-httponly-cookies-in-next-js"
                  className="text-primary hover:underline break-words"
                >
                  How to access HttpOnly cookies in Next.js
                </a>
              </li>
            </ul>
          </Card>
        </article>
      </div>
    </TracingBeam>
  );
}
