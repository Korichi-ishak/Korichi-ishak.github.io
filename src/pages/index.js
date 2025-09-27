import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { BriefcaseIcon, GraduationCapIcon, LightbulbIcon, ArrowUpIcon, MailIcon, LinkedinIcon, GithubIcon, PhoneIcon } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";

// Import components
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import LogoSkills from "../components/LogoSkills";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ContactForm from "../components/ContactForm";
import About from "../components/About";

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
    {
      title: "GOODPC",
      description: "E‑commerce vitrine pour PC sur mesure : catalogue optimisé, mise en avant des configurations et UX rapide.",
      technologies: ["Vite", "React", "Node.js", "MongoDB"],
      link: "https://itech-theta.vercel.app",
      imageUrl: "/recyc.png"
    },
    {
      title: "DivanHane",
      description: "Site restaurant / lounge : présentation du menu, ambiance visuelle chaleureuse, optimisation mobile pour réservations.",
      technologies: ["Vite", "React", "Node.js", "MongoDB"],
      link: "https://divanhane.vercel.app",
      imageUrl: "/divanhan.png"
    },
    {
      title: "QueenDEQ",
      description: "Plateforme féminine avec tests de personnalité (type d’homme, style, bien‑être) et contenus lifestyle interactifs.",
      technologies: ["Vite", "React", "Node.js", "MongoDB"],
      link: "https://www.queendeq.com",
      imageUrl: "/quq.png"
    },
    {
      title: "Autotechno",
      description: "Catalogue pièces auto & services avec structure SEO, navigation catégorisée et design épuré.",
      technologies: ["Vite", "React", "Node.js", "MongoDB"],
      link: "https://autotechno.vercel.app",
      imageUrl: "/autotech.png"
    },
    {
      title: "Point de location",
      description: "Plateforme de location de voitures : recherche rapide, fiches véhicules et parcours de réservation fluide.",
      technologies: ["WordPress"],
      link: "https://lepointdelocation.com",
      imageUrl: "/pdloc.png"
    },
  ];
  
  const mobileProjects = [
    { title: "Wassalni", description: "Carpooling mobile app.", technologies: ["React Native", "Node.js","MongoDB"], link: "" },
    { title: "Clinical", description: "Medical mobile application.", technologies: ["React Native","Node.js","MongoDB"], link: "" },
    { title: "Astrolabs", description: "Mental health & personal assistance app.", technologies: ["React Native","Node.js","MongoDB","Firebase Firestore"], link: "https://play.google.com/store/apps/details?id=com.knoxdrill.frontend&hl=en" },
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
        
        <About />
        
        {/* Shipped Products Section */}
        <section id="projects" className="py-24 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              kicker="SHOWCASE"
              title={<><span className='text-white'>Shipped</span> Products</>}
              subtitle="Production builds spanning fullstack web platforms & mobile experiences."
            />
            <div className="mb-20">
              <SectionHeader
                kicker="PLATFORMS"
                title={<><span className='text-white'>Platform</span> Builds</>}
                className="mb-10"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {wpProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                kicker="MOBILE"
                title={<><span className='text-white'>Mobile</span> Apps</>}
                subtitle="React Native products focused on usability, retention & performance."
                className="mb-10"
              />
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
