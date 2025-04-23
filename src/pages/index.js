import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { BriefcaseIcon, GraduationCapIcon, LightbulbIcon, ArrowUpIcon, MailIcon, LinkedinIcon, GithubIcon, PhoneIcon } from "lucide-react";

// Import components
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ContactForm from "../components/ContactForm";

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
    { title: "Drip Drop DZ", description: "Innovative design platform.", technologies: ["WordPress"], link: "https://dripdropdz.com" },
    { title: "Belfort Dzair", description: "Corporate website with modern design.", technologies: ["WordPress"], link: "https://belfortdzair.com" },
    { title: "Plombi", description: "Innovative plumbing services website.", technologies: ["WordPress"], link: "https://plombi.live-website.com" },
    { title: "Khadamati", description: "Premium Digital Services & Solutions", technologies: ["WordPress"], link: "https://khadamati-store.com" },
  ];
  
  const mobileProjects = [
    { title: "Wassalni", description: "Carpooling mobile app.", technologies: ["React Native", "Node.js","MongoDB"], link: "" },
    { title: "Clinical", description: "Medical mobile application.", technologies: ["React Native","Node.js","MongoDB"], link: "" },
    { title: "Astrolabs", description: "Mental health & personal assistance app.", technologies: ["React Native","Node.js","MongoDB","Firebase Firestore"], link: "" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#151515] text-white`}>
      <Navigation />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title">About Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="bg-[#222224] p-8 rounded-xl border border-[#2C2C2E] shadow-lg hover:border-[#CAFA43] transition-all duration-300">
                <p className="text-lg leading-relaxed text-gray-300">
                  I am driven by a passion for building efficient, scalable, and impactful digital solutions. Technology is constantly evolving, and I thrive on the challenge of solving complex problems, optimizing systems, and ensuring seamless user experiences.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mt-4">
                  Beyond just writing code, I aim to help businesses grow and adapt to the digital world by creating reliable backend infrastructures and intuitive web solutions. Every project is an opportunity to innovate, learn, and make a difference.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mt-4">
                  My goal is simple: deliver high-quality solutions that drive real value while continuously improving my skills and staying at the forefront of technology. 🚀
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-[#222224] p-6 rounded-xl border border-[#2C2C2E] shadow-lg hover:border-[#CAFA43] transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#CAFA43] mb-3">Professional Focus</h3>
                  <div className="flex items-start">
                    <div className="bg-[#2C2C2E] p-2 rounded-lg mr-4">
                      <BriefcaseIcon className="w-5 h-5 text-[#CAFA43]" />
                    </div>
                    <p className="text-gray-300">
                      Specializing in backend development with Node.js, database optimization, and creating efficient data workflows.
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#222224] p-6 rounded-xl border border-[#2C2C2E] shadow-lg hover:border-[#CAFA43] transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#CAFA43] mb-3">Academic Background</h3>
                  <div className="flex items-start">
                    <div className="bg-[#2C2C2E] p-2 rounded-lg mr-4">
                      <GraduationCapIcon className="w-5 h-5 text-[#CAFA43]" />
                    </div>
                    <p className="text-gray-300">
                      Pursuing a Master's in Big Data Management while applying my Bachelor's in Computer Science knowledge to real-world projects.
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#222224] p-6 rounded-xl border border-[#2C2C2E] shadow-lg hover:border-[#CAFA43] transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#CAFA43] mb-3">Work Philosophy</h3>
                  <div className="flex items-start">
                    <div className="bg-[#2C2C2E] p-2 rounded-lg mr-4">
                      <LightbulbIcon className="w-5 h-5 text-[#CAFA43]" />
                    </div>
                    <p className="text-gray-300">
                      Building technology that solves real problems with clean code, optimal performance, and user-centered design principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-[#1A1A1A]">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title">Projects</h2>
            
            <div className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold text-white">WordPress Websites</h3>
                <div className="h-0.5 bg-[#2C2C2E] flex-grow ml-4 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {wpProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold text-white">Mobile Applications</h3>
                <div className="h-0.5 bg-[#2C2C2E] flex-grow ml-4 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {mobileProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <SkillsSection />
        
        <ExperienceTimeline />
        
        <ContactForm />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-[#151515] border-t border-[#2C2C2E]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-3xl font-bold text-[#CAFA43]">IK</span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:ishakkorichi09@gmail.com" 
              className="text-gray-400 hover:text-[#CAFA43] transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <MailIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/ishak-korichi-77a398321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#CAFA43] transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Chrestiondior77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#CAFA43] transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://wa.me/213541945025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#CAFA43] transition-all duration-300 transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <PhoneIcon className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ishak Korichi. All Rights Reserved.</p>
        </div>
        
        {/* Scroll to top button */}
        {isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed right-6 bottom-6 bg-[#222224] p-3 rounded-full border border-[#2C2C2E] hover:border-[#CAFA43] shadow-lg transition-all duration-300 hover:transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="w-5 h-5 text-[#CAFA43]" />
          </button>
        )}
      </footer>
    </div>
  );
}