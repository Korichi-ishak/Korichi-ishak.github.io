import Image from "next/image";
import ProjectCard from "../components/ProjectCard"; // Import the reusable project card component
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const projects = [
    {
      title: "Project 1",
      description: "A web application for managing tasks.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/example/project1",
    },
    {
      title: "Project 2",
      description: "A mobile app for tracking fitness goals.",
      technologies: ["React Native", "Firebase"],
      link: "https://github.com/example/project2",
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20">
      {/* Introduction Section */}
      <section id="introduction" className="text-center mb-16">
        <h1 className="text-4xl font-bold">Korichi Ishak</h1>
        <h2 className="text-2xl text-gray-600">Backend Developer & Data Analyst</h2>
        <p className="mt-4 text-lg">
          A developer specialized in Node.js, MongoDB, Firebase, and data analysis. Passionate about building APIs, optimizing databases, and cloud computing.
        </p>
      </section>

      {/* Navigation Menu */}
      <nav className="row-start-1 w-full flex justify-center gap-8 bg-gray-100 p-4 fixed top-0 z-10">
        <a href="#about" className="hover:underline">À propos de moi</a>
        <a href="#projects" className="hover:underline">Mes projets</a>
        <a href="#education" className="hover:underline">Mes formations</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-16">
        <Image
          className="dark:invert"
          src="./next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/pages/index.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="./vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Languages</h3>
              <ul className="list-disc pl-5">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Go</li>
                <li>R</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
              <ul className="list-disc pl-5">
                <li>Node.js</li>
                <li>React</li>
                <li>React Native</li>
                <li>Flutter</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Databases</h3>
              <ul className="list-disc pl-5">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Cloud & Backend</h3>
              <ul className="list-disc pl-5">
                <li>Firebase</li>
                <li>API REST</li>
                <li>JWT Authentication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Others</h3>
              <ul className="list-disc pl-5">
                <li>WordPress</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Backend Developer & Data Analyst</strong> at Aurafolio
            </li>
            <li>
              <strong>Freelance Developer</strong>: API development, cloud integration, database optimization.
            </li>
          </ul>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <form className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              required
            />
            <textarea
              placeholder="Message"
              className="border p-2 rounded"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* About Me Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p>
            I chose development because I love solving problems and creating
            efficient solutions. My goal is to become a leading expert in backend
            development and data analysis, contributing to impactful projects.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16">
          <p>Email: <a href="mailto:ishakkorichi09@gmail.com" className="text-blue-500 hover:underline">ishakkorichi09@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/your-profile" className="text-blue-500 hover:underline">GitHub Profile</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" className="text-blue-500 hover:underline">LinkedIn Profile</a></p>
          <p>WhatsApp: +123456789</p>
        </footer>
      </main>
    </div>
  );
}
