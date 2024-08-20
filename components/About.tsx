export default function About() {
  return (
    <footer className="bg-transparent z-10 text-white py-12">
      <div className="lg:max-w-7xl mx-auto px-4 grid items-center md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1  gap-8">
        <div>
          <h5 className="font-bold text-lg mb-4 lg:text-left text-center">
            GENERAL
          </h5>
          <ul className="space-y-2 lg:text-left text-center lg:text-left text-center">
            <li>
              <a className="hover:underline" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/blogs">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4 lg:text-left text-center">
            SPECIFICS
          </h5>
          <ul className="space-y-2 lg:text-left text-center">
            <li>
              <a className="hover:underline" href="#">
                Stats
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Toolbox
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Speaking
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4 lg:text-left text-center">
            EXTRA
          </h5>
          <ul className="space-y-2 lg:text-left text-center">
            <li>
              <a className="hover:underline" href="#">
                Changelog
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Meet up
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://mjkm.vercel.app/mjr">
                Resume
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Snippets
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4 lg:text-left text-center">
            NEWSLETTER
          </h5>
          <p className="mb-4">Get new articles delivered to your inbox!</p>
          <form className="flex w-10">
            <input
              className="flex-1 px-4  w-48 py-2 rounded-l-md bg-white lg:text-left text-center text-black"
              placeholder="youremail@example.com"
              type="email"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
