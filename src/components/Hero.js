import { useState, useEffect, useRef } from "react";
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, CodeIcon } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const roles = ["Backend Developer", "Data Analyst", "UI/UX Designer", "Node.js Expert"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Scroll to the Hero section on page load
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
      
      // If completed typing the word
      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      }
      
      // If completed deleting the word
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };
    
    const timeout = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);
  
  return (
    <section id="home" ref={heroRef} className="grid-bg pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Ishak <span className="text-[#CAFA43]">Korichi</span>
            </h1>
            <div className="h-16 md:h-12">
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                <span className="inline-block">{typedText}</span>
                <span className="inline-block w-1 h-8 bg-[#CAFA43] ml-1 animate-blink"></span>
              </h2>
            </div>
            <p className="max-w-md text-gray-400 my-6 leading-relaxed">
              Crafting scalable backend solutions and optimizing data workflows with expertise in Node.js, React, and MongoDB.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-[#CAFA43] text-black font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-[#CAFA43] text-[#CAFA43] font-semibold rounded-full hover:bg-[#CAFA43]/10 transition-all"
              >
                View Projects
              </a>
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a 
                href="https://linkedin.com/in/ishak-korichi-77a398321" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#CAFA43] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Korichi-ishak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#CAFA43] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a 
                href="mailto:ishakkorichi09@gmail.com" 
                className="text-gray-400 hover:text-[#CAFA43] transition-colors"
                aria-label="Email"
              >
                <MailIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#CAFA43] p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/pdp.jpg" // Make sure to add your profile picture
                  alt="Ishak Korichi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#222224] p-3 rounded-full border-2 border-[#CAFA43]">
              <CodeIcon className="w-6 h-6 text-[#CAFA43]" />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-[#222224] py-2 px-4 rounded-full border-2 border-[#CAFA43] text-sm font-medium">
              Node.js Expert
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a 
          href="#about" 
          className="animate-bounce bg-[#222224] p-3 rounded-full border border-[#2C2C2E]"
          aria-label="Scroll down"
        >
          <ArrowDownIcon className="w-5 h-5 text-[#CAFA43]" />
        </a>
      </div>
    </section>
  );
}