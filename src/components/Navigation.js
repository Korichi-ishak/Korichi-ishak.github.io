import { useState, useEffect } from "react";
import { HomeIcon, BriefcaseIcon, CodeIcon, UserIcon, MailIcon, MenuIcon, XIcon } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "experience", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { id: "home", text: "Home", icon: HomeIcon },
    { id: "about", text: "About", icon: UserIcon },
    { id: "projects", text: "Projects", icon: CodeIcon },
    { id: "skills", text: "Skills", icon: BriefcaseIcon },
    { id: "contact", text: "Contact", icon: MailIcon }
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#222224]/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="relative">
          <span className="text-2xl font-bold text-white">IK</span>
          <span className="absolute -top-1 -right-2 w-2 h-2 bg-[#CAFA43] rounded-full"></span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 z-50" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ id, text, icon: Icon }) => (
            <NavItem 
              key={id}
              href={`#${id}`}
              Icon={Icon}
              text={text}
              isActive={activeSection === id}
            />
          ))}
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (  
          <div className="fixed inset-0 bg-[#151515]/95 md:hidden flex flex-col items-center justify-center space-y-6 p-4">
            {navItems.map(({ id, text, icon: Icon }) => (
              <NavItem 
                key={id}
                href={`#${id}`}
                Icon={Icon}
                text={text}
                isActive={activeSection === id}
                onClick={() => setIsOpen(false)}
                isMobile={true}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ href, Icon, text, isActive, onClick, isMobile = false }) {
  return (
    <a 
      href={href} 
      className={`group flex items-center transition-all duration-300 ${
        isMobile ? 'text-xl py-3' : ''
      } ${
        isActive 
          ? "text-[#CAFA43] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#CAFA43] after:rounded-full"
          : "text-gray-300 hover:text-[#CAFA43]"
      }`}
      onClick={onClick}
    >
      <Icon className={`${isMobile ? 'w-6 h-6 mr-3' : 'w-5 h-5 mr-2'} group-hover:rotate-6 transition-transform`} />
      {text}
    </a>
  );
}