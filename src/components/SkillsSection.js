import { useEffect, useState } from 'react';
import { 
  Server, Code, Database, Flame, GitBranch, 
  Smartphone, BarChart, Monitor, Palette, 
  Cpu, BrainCircuit
} from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Fullstack Development",
      icon: Server,
      color: "#ef4444",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Express", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "Frontend & Design",
      icon: Monitor,
      color: "#ef4444",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 75 }
      ]
    },
    {
      title: "Data Analysis",
      icon: BarChart,
      color: "#ef4444",
      skills: [
        { name: "Python", level: 85 },
        { name: "R", level: 70 },
        { name: "SQL", level: 90 },
        { name: "Data Visualization", level: 80 },
        { name: "Machine Learning", level: 70 },
        { name: "Statistics", level: 75 }
      ]
    },
    {
      title: "Project Management",
      icon: BrainCircuit,
      color: "#ef4444",
      skills: [
        { name: "Agile/Scrum", level: 85 },
        { name: "Team Leadership", level: 90 },
        { name: "Project Planning", level: 85 },
        { name: "Client Management", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "DevOps", level: 75 }
      ]
    },
    {
      title: "WordPress & CMS",
      icon: Palette,
      color: "#ef4444",
      skills: [
        { name: "WordPress", level: 95 },
        { name: "Custom Themes", level: 90 },
        { name: "Plugin Development", level: 85 },
        { name: "WooCommerce", level: 80 },
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    }
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="section-title">Technical Skills</h2>
      
      <div id="skills-section" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div 
              key={index}
              className="bg-[#222224] p-6 rounded-xl shadow-lg relative overflow-hidden border border-transparent hover:border-red-500 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="mb-6 flex items-center">
                <div className="p-3 rounded-lg bg-[#1A1A1A] mr-3">
                  <IconComponent className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-500">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-white/80">{skill.name}</span>
                      <span className="text-xs font-medium text-white/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#2C2C2E] rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-red-500 h-2.5 rounded-full relative"
                        style={{ 
                          width: visible ? `${skill.level}%` : '0%',
                          transition: 'width 1s ease-in-out',
                          transitionDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      >
                        <span className="absolute top-0 right-0 h-full w-2 bg-white opacity-30 rounded-full animate-pulse"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}