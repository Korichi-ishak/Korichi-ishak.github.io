import ProjectCard from "../components/ProjectCard";
import { Geist, Geist_Mono } from "next/font/google";
import { 
  HomeIcon, 
  BriefcaseIcon, 
  CodeIcon, 
  UserIcon, 
  MailIcon, 
  LinkedinIcon, 
  GithubIcon, 
  SendIcon, 
  PhoneIcon 
} from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const wpProjects = [
    { title: "EAG Video Editor", description: "Elegant video editing website powered by WordPress.", technologies: ["WordPress", "UI/UX Design"], link: "https://eagvideoeditor.com" },
    { title: "Diego De La Fuintes", description: "Professional portfolio website.", technologies: ["WordPress"], link: "https://diegodelafuintes.fr" },
    { title: "Qorrolli Renovation", description: "Renovation services website.", technologies: ["WordPress"], link: "https://qorrollirenovation.fr" },
    { title: "Maison Chevalier", description: "Luxury real-estate showcase.", technologies: ["WordPress"], link: "https://maison-chevalier.fr" },
    { title: "Between Us", description: "Modern creative site.", technologies: ["WordPress"], link: "https://between-us.fr" },
    { title: "Drip Drop DZ", description: "Innovative design platform.", technologies: ["WordPress"], link: "https://dripdropdz.com" },
    { title: "Belfort Dzair", description: "Corporate website with modern design.", technologies: ["WordPress"], link: "https://belfortdzair.com" },
    { title: "Breizh Agency", description: "Agency portfolio website.", technologies: ["WordPress"], link: "https://breizh-agency.fr" },
    { title: "Nerolia Propreté", description: "Clean and professional cleaning services site.", technologies: ["WordPress"], link: "https://nerolia-proprete.fr" },
    { title: "Plombi", description: "Innovative plumbing services website.", technologies: ["WordPress"], link: "https://plombi.live-website.com" },
    { title: "EF Énergie Solutions", description: "Energy solutions website.", technologies: ["WordPress"], link: "https://efenergiesolutions.fr" },
    { title: "AD EauPro", description: "Water solutions platform.", technologies: ["WordPress"], link: "https://ad-eaupro.fr" },
  ];

  const mobileProjects = [
    { title: "Wassalni", description: "Carpooling mobile app.", technologies: ["React Native", "Flutter"], link: "https://example.com/wassalni" },
    { title: "Clinical", description: "Medical mobile application.", technologies: ["React Native"], link: "https://example.com/clinical" },
    { title: "Astrolabs", description: "Mental health & personal assistance app.", technologies: ["Flutter"], link: "https://example.com/astrolabs" },
  ];

  return (
    <div className="dark min-h-screen bg-[#151515] text-white">
      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#222224]/80 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-[#CAFA43]">IK</div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="group flex items-center text-gray-300 hover:text-[#CAFA43] transition">
              <UserIcon className="w-5 h-5 mr-2 group-hover:rotate-6 transition" />
              About
            </a>
            <a href="#projects" className="group flex items-center text-gray-300 hover:text-[#CAFA43] transition">
              <CodeIcon className="w-5 h-5 mr-2 group-hover:rotate-6 transition" />
              Projects
            </a>
            <a href="#skills" className="group flex items-center text-gray-300 hover:text-[#CAFA43] transition">
              <BriefcaseIcon className="w-5 h-5 mr-2 group-hover:rotate-6 transition" />
              Skills
            </a>
            <a href="#contact" className="group flex items-center text-gray-300 hover:text-[#CAFA43] transition">
              <MailIcon className="w-5 h-5 mr-2 group-hover:rotate-6 transition" />
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 max-w-6xl mx-auto px-4">
        {/* Introduction Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-[#CAFA43]">Ishak Korichi</h1>
          <h2 className="text-2xl text-gray-300 mb-6">
            Backend Developer | Data Analyst | Node.js Expert
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Crafting scalable backend solutions and optimizing data workflows with expertise in Node.js, React, and MongoDB.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">WordPress Websites</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {wpProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Mobile Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            Skills
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-[#CAFA43]"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Languages", 
                items: ["JavaScript", "Python", "Go", "R"],
                icon: "💻"
              },
              { 
                title: "Frameworks & Libraries", 
                items: ["Node.js", "React", "React Native", "Flutter"],
                icon: "🚀"
              },
              { 
                title: "Databases", 
                items: ["MongoDB", "PostgreSQL"],
                icon: "📊"
              },
              { 
                title: "Cloud & Backend", 
                items: ["Firebase", "REST APIs", "JWT Authentication"],
                icon: "☁️"
              },
              { 
                title: "Other", 
                items: ["WordPress", "UI/UX Design"],
                icon: "🎨"
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-[#222222] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border border-transparent hover:border-[#CAFA43]"
              >
                <div className="absolute top-2 right-2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#CAFA43]">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-center space-x-2 text-gray-300 group-hover:text-white transition-colors"
                    >
                      <span className="w-2 h-2 bg-[#CAFA43] rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            Experience
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-[#CAFA43]"></span>
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-[#222222] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#CAFA43]">Backend Developer & Data Analyst at Aurafolio</h3>
              <p className="mt-2 text-sm text-gray-400">Jun 2023 - Present</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Designed high-performance APIs with Node.js/Express</li>
                <li>Optimized databases (MongoDB, Firebase, MySQL) improving performance by 40%</li>
                <li>Integrated cloud services & implemented authentication systems</li>
                <li>Deployed scalable architectures</li>
              </ul>
            </div>
            <div className="p-6 bg-[#222222] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#CAFA43]">Freelance Developer (WordPress & UI/UX)</h3>
              <p className="mt-2 text-sm text-gray-400">Mar 2023 - Present</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Interactive UI/UX prototyping</li>
                <li>Developed high-performance WordPress websites</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            Education
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-[#CAFA43]"></span>
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-[#222222] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#CAFA43]">Master's in Big Data Management</h3>
              <p className="mt-2 text-sm text-gray-400">Université Badji Mokhtar (2024 - 2026)</p>
              <p className="mt-2 text-sm">Skills Gained: Python, Data Analysis, Machine Learning</p>
            </div>
            <div className="p-6 bg-[#222222] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#CAFA43]">Bachelor's in Computer Science</h3>
              <p className="mt-2 text-sm text-gray-400">Université Badji Mokhtar (2021 - 2024)</p>
              <p className="mt-2 text-sm">Relevant Courses: Databases, Algorithms, Data Structures</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            Contact
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-[#CAFA43]"></span>
          </h2>
          <form className="max-w-md mx-auto space-y-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-[#222222] border border-transparent text-white p-3 rounded-lg focus:outline-none focus:border-[#CAFA43] transition-all duration-300 placeholder-gray-500"
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-[#222222] border border-transparent text-white p-3 rounded-lg focus:outline-none focus:border-[#CAFA43] transition-all duration-300 placeholder-gray-500"
              required 
            />
            <textarea 
              placeholder="Message" 
              className="w-full bg-[#222222] border border-transparent text-white p-3 rounded-lg focus:outline-none focus:border-[#CAFA43] transition-all duration-300 placeholder-gray-500"
              rows="5" 
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-[#CAFA43] text-black py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 font-bold uppercase tracking-wider"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* About Section */}
        <section id="about" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            About Me
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-[#CAFA43]"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-center">
            I love development because it allows me to solve real-world problems and innovate with technology.
            My technical philosophy is rooted in a passion for efficiency and scalability—optimizing workflows and crafting robust solutions.
            Key achievements include optimizing databases to boost performance by 40% and creating secure, scalable APIs.
            Looking for a skilled developer? Let's connect!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:ishakkorichi09@gmail.com" 
              className="text-[#CAFA43] hover:scale-110 transition"
            >
              <MailIcon className="w-7 h-7" />
            </a>
            <a 
              href="https://linkedin.com/in/ishak-korichi-77a398321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#CAFA43] hover:scale-110 transition"
            >
              <LinkedinIcon className="w-7 h-7" />
            </a>
            <a 
              href="https://github.com/Chrestiondior77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#CAFA43] hover:scale-110 transition"
            >
              <GithubIcon className="w-7 h-7" />
            </a>
            <a 
              href="https://wa.me/213541945025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#CAFA43] hover:scale-110 transition"
            >
              <PhoneIcon className="w-7 h-7" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Ishak Korichi. All Rights Reserved.</p>
        </footer>
    </div>
  );
}
