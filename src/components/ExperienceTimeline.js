import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import Image from "next/image";

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Backend Developer & Data Analyst",
      company: "Aurafolio",
      period: "Jun 2023 - Present",
      logo: "/aurafolio.png",
      type: "work",
      details: [
        "Designing and developing high-performance, secure APIs with Node.js & Express",
        "Advanced database optimization (MongoDB, Firebase, MySQL)",
        "Integrating cloud solutions, authentication, and payment systems",
        "Deploying scalable backend architectures",
        "Providing strategic and technical consulting"
      ]
    },
    {
      title: "Freelance Developer",
      company: "WordPress & UI/UX",
      period: "Mar 2023 - Present",
      logo: "/wordpress-logo-png-file-11662328823hnwldnbjf4-removebg-preview.png",
      type: "work",
      details: [
        "Creating interactive UI/UX prototypes",
        "Developing optimized, high-performing WordPress websites"
      ]
    },
    {
      title: "Master's in Big Data Management",
      institution: "Université Badji Mokhtar",
      period: "Sep 2024 - Jun 2026",
      logo: "/Badji_Mokhtar_-_Annaba_University_Logo-removebg-preview.png",
      type: "education",
      details: [
        "Skills Gained: Python, Data Analysis, Machine Learning"
      ]
    },
    {
      title: "Bachelor's in Computer Science",
      institution: "Université Badji Mokhtar",
      period: "Oct 2021 - Jun 2024",
      logo: "/Badji_Mokhtar_-_Annaba_University_Logo-removebg-preview.png",
      type: "education",
      details: [
        "Relevant Courses: Databases, Algorithms, Data Structures"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <h2 className="section-title">Journey</h2>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#2C2C2E] transform md:translate-x-[-50%]"></div>
        
        {experiences.map((item, index) => (
          <div 
            key={index} 
            className={`mb-12 relative ${
              index % 2 === 0 ? 'md:pr-8 md:ml-auto md:mr-0' : 'md:pl-8'
            } md:w-1/2 fade-in`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-8px] md:left-auto md:right-[-8px] w-4 h-4 rounded-full bg-[#CAFA43] z-10 transform md:translate-x-1/2 top-6"></div>
            
            <div className="bg-[#222224] p-6 rounded-xl border border-[#2C2C2E] shadow-lg hover:border-[#CAFA43] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 mr-4 flex-shrink-0">
                  <Image
                    src={item.logo}
                    alt={item.company || item.institution}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#CAFA43]">{item.title}</h3>
                  <p className="text-gray-300">{item.company || item.institution}</p>
                  <p className="text-sm text-gray-400">{item.period}</p>
                </div>
                <div className="ml-auto">
                  {item.type === "work" ? (
                    <BriefcaseIcon className="w-5 h-5 text-[#CAFA43]" />
                  ) : (
                    <GraduationCapIcon className="w-5 h-5 text-[#CAFA43]" />
                  )}
                </div>
              </div>
              
              <ul className="space-y-2 text-sm">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#CAFA43] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}