import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { BriefcaseIcon, GraduationCapIcon, LightbulbIcon, ArrowUpIcon, MailIcon, LinkedinIcon, GithubIcon, PhoneIcon } from "lucide-react";

// Import components
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import LogoSkills from "../components/LogoSkills";
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
    { title: "Point de location", description: "Digital car rental – book, pay & drive in clicks", technologies: ["WordPress"], link: "https://lepointdelocation.com" },
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
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white`}>
      <Navigation />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title">About Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="bg-[#222224] p-8 rounded-xl border border-white/10 shadow-lg hover:border-red-500 transition-all duration-300">
                <p className="text-lg leading-relaxed text-white/80">
                  I am a passionate fullstack developer, data analyst, and UI/UX designer with extensive experience in project management and team leadership. I specialize in creating comprehensive digital solutions that drive business growth and deliver exceptional user experiences.
                </p>
                <p className="text-lg leading-relaxed text-white/80 mt-4">
                  With expertise spanning from frontend design to backend architecture, data analysis, and team coordination, I bring a holistic approach to every project. My goal is to build scalable, efficient, and impactful solutions while leading teams to success.
                </p>
                <p className="text-lg leading-relaxed text-white/80 mt-4">
                  As the founder of Wiizdev and with experience at leading companies like Aurafolio and Digitaria.Inc, I combine technical excellence with strategic vision to deliver results that exceed expectations. 🚀
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-[#222224] p-6 rounded-xl border border-white/10 shadow-lg hover:border-red-500 transition-all duration-300">
                  <h3 className="text-xl font-bold text-red-500 mb-3">Fullstack Development</h3>
                  <div className="flex items-start">
                    <div className="bg-[#2C2C2E] p-2 rounded-lg mr-4">
                      <BriefcaseIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-white/80">
                      Specializing in end-to-end development with modern technologies, creating scalable applications from concept to deployment.
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#222224] p-6 rounded-xl border border-white/10 shadow-lg hover:border-red-500 transition-all duration-300">
                  <h3 className="text-xl font-bold text-red-500 mb-3">Leadership & Management</h3>
                  <div className="flex items-start">
                    <div className="bg-[#2C2C2E] p-2 rounded-lg mr-4">
                      <GraduationCapIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-white/80">
                      Leading teams and managing projects with a focus on delivering high-quality solutions while fostering innovation and growth.
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#222224] p-6 rounded-xl border border-white/10 shadow-lg hover:border-red-500 transition-all duration-300">
                  <h3 className="text-xl font-bold text-red-500 mb-3">Data & Design Expertise</h3>
                  <div className="flex items-start">
                    <div className="bg-[#2C2C2E] p-2 rounded-lg mr-4">
                      <LightbulbIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-white/80">
                      Combining data analysis insights with intuitive UI/UX design to create solutions that are both functional and user-friendly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title">Projects</h2>
            
            <div className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold text-white">WordPress Websites</h3>
                <div className="h-0.5 bg-white/10 flex-grow ml-4 rounded-full"></div>
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
                <div className="h-0.5 bg-white/10 flex-grow ml-4 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {mobileProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <LogoSkills />
        
        <ExperienceTimeline />
        
        <ContactForm />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-3xl font-bold text-red-500">IK</span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:ishakkorichi09@gmail.com" 
              className="text-white/70 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <MailIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/ishak-korichi-77a398321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Chrestiondior77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://wa.me/213541945025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <PhoneIcon className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Ishak Korichi. All Rights Reserved.</p>
        </div>
        
        {/* Scroll to top button */}
        {isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed right-6 bottom-6 bg-[#222224] p-3 rounded-full border border-white/10 hover:border-red-500 shadow-lg transition-all duration-300 hover:transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="w-5 h-5 text-red-500" />
          </button>
        )}
      </footer>
    </div>
  );
}
