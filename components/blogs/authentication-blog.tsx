// pages/blog.tsx

import Head from "next/head";

const BlogPost = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Implementing Authentication with Next.js and Express</title>
        <meta
          name="description"
          content="Implementing Authentication with Next.js and Express using JWT and Cookies"
        />
      </Head>

      <header className="bg-red-600 p-4">
        <h1 className="text-3xl font-bold text-center">
          Implementing Authentication with Next.js and Express
        </h1>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-8">
          <h2 className="text-xl text-blue-400 font-semibold mb-4">
            Why Combine Next.js Server Components with Express Backend?
          </h2>
          <p className="text-gray-300 leading-7">
            Next.js server components leverage the strengths of both Next.js and
            Express.js. With this approach, you get the best of both worlds,
            such as SSR, SSG, and improved SEO from Next.js, while allowing
            Express.js to handle backend logic and routing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-blue-400 font-semibold mb-4">
            Why Use HttpOnly Cookies Instead of Local Storage?
          </h2>
          <p className="text-gray-300 leading-7">
            <strong className="text-white">Security against XSS:</strong>{" "}
            HttpOnly cookies are more resistant to XSS attacks since they are
            inaccessible via JavaScript, whereas local storage is vulnerable to
            XSS.
          </p>
          <p className="text-gray-300 leading-7">
            <strong className="text-white">Protection against CSRF:</strong>{" "}
            HttpOnly cookies, when used with the SameSite flag, provide
            protection against CSRF attacks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-blue-400 font-semibold mb-4">
            API Proxies in Next.js
          </h2>
          <p className="text-gray-300 leading-7">
            API proxies are crucial for handling authentication when making
            requests from client components to a backend. By creating an API
            route in Next.js, you ensure that cookies are correctly attached and
            sent with the request.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <h3 className="text-lg text-red-400 font-semibold">Code Example</h3>
            <pre className="text-xs text-gray-200 overflow-x-auto">
              {`
                import { getToken } from "@/lib/cookie";
                import { createOptions } from "@/lib/user";
                import { NextRequest, NextResponse } from "next/server";

                export async function GET(req: NextRequest) {
                  const url = 'https://express-api.com/api/auth';
                  const token = await getToken();
                  const res = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: \`Bearer \${token}\`,
                    },
                    next: { revalidate: 0 },
                  });
                  const data = await res.json();
                  return NextResponse.json({ message: data.message });
                }
              `}
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-blue-400 font-semibold mb-4">
            Best Practices
          </h2>
          <ul className="list-disc pl-5 text-gray-300">
            <li>Use HTTPS to encrypt communications.</li>
            <li>Implement short token lifetimes for security.</li>
            <li>Use secure cookie settings (e.g., HttpOnly, SameSite).</li>
            <li>Regularly audit your security setup.</li>
          </ul>
        </section>

        <footer className="bg-red-600 py-4 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Mohd Jami
          </p>
        </footer>
      </main>
    </div>
  );
};

export default BlogPost;
