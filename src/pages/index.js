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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8 sm:p-20 text-gray-900">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold">Korichi Ishak</div>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-500 transition">About Me</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
        </div>
      </nav>
      
      <main className="pt-20 max-w-5xl mx-auto">
        {/* Introduction Section */}
        <section id="introduction" className="text-center my-16">
          <h1 className="text-5xl font-extrabold">Korichi Ishak</h1>
          <h2 className="text-2xl text-gray-600 mt-4">Backend Developer & Data Analyst</h2>
          <p className="mt-6 text-lg">
            A developer specialized in Node.js, MongoDB, Firebase, and data analysis.
            Passionate about building APIs, optimizing databases, and cloud computing.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Go</li>
                <li>R</li>
              </ul>
            </div>
            {/* Frameworks & Libraries */}
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Node.js</li>
                <li>React</li>
                <li>React Native</li>
                <li>Flutter</li>
              </ul>
            </div>
            {/* Databases */}
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Databases</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            {/* Cloud & Backend */}
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Cloud & Backend</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Firebase</li>
                <li>API REST</li>
                <li>JWT Authentication</li>
              </ul>
            </div>
            {/* Others */}
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Others</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>WordPress</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-semibold">
                Backend Developer & Data Analyst
              </h3>
              <p className="mt-2">Aurafolio</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-2xl font-semibold">Freelance Developer</h3>
              <p className="mt-2">API development, cloud integration, database optimization.</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
          <form className="max-w-md mx-auto space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* About Me Section */}
        <section id="about" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg text-center">
            I chose development because I love solving problems and creating efficient solutions.
            My goal is to become a leading expert in backend development and data analysis,
            contributing to impactful projects.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 shadow-inner mt-16">
        <div className="max-w-5xl mx-auto text-center space-y-2">
          <p>
            Email: <a href="mailto:ishakkorichi09@gmail.com" className="text-blue-500 hover:underline">ishakkorichi09@gmail.com</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/your-profile" className="text-blue-500 hover:underline">GitHub Profile</a>
          </p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/your-profile" className="text-blue-500 hover:underline">LinkedIn Profile</a>
          </p>
          <p>WhatsApp: +123456789</p>
        </div>
      </footer>
    </div>
  );
}
