import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "Wiizdev",
      period: "Jan 2025 - Present",
      type: "work",
      details: [
        "Leading a team of developers and designers",
        "Strategic planning and business development",
        "Fullstack development and project management",
        "Client relationship management and growth"
      ]
    },
    {
      title: "Fullstack Developer",
      company: "Aurafolio",
      period: "Jun 2023 - Dec 2024",
      type: "work",
      details: [
        "High-performance, secure APIs with Node.js & Express",
        "Database optimization (MongoDB, Firebase, MySQL)",
        "Cloud integrations, auth and payments",
        "Scalable deployments and architecture"
      ]
    },
    {
      title: "Freelance Developer",
      company: "WordPress & Fullstack",
      period: "Jan 2022 - Present",
      type: "work",
      details: [
        "WordPress website development and customization",
        "Fullstack web applications",
        "UI/UX design and implementation",
        "Client consultation and project management"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <h2 className="section-title">Journey</h2>

      <Timeline experiences={experiences} />
    </section>
  );
}

function Timeline({ experiences }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("experience");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Vertical line with subtle red gradient */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/60 via-white/10 to-transparent"></div>

      <div className="space-y-10">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="relative pl-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(16px)",
              transition: "opacity 600ms ease, transform 600ms ease",
              transitionDelay: `${index * 120}ms`
            }}
          >
            {/* Node */}
            <div className="absolute left-0 top-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center ring-8 ring-black shadow-lg">
                  {item.type === "work" ? (
                    <BriefcaseIcon className="w-5 h-5 text-white" />
                  ) : (
                    <GraduationCapIcon className="w-5 h-5 text-white" />
                  )}
                </div>
                {/* soft glow */}
                <div className="absolute inset-0 rounded-full bg-red-500/30 blur-lg -z-10 animate-pulse"></div>
              </div>
            </div>

            {/* Card */}
            <div className="group bg-[#111111] border border-white/10 hover:border-red-500 rounded-xl p-6 transition-colors shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-500 transition-colors">{item.title}</h3>
                  <p className="text-white/80">{item.company || item.institution}</p>
                  <p className="text-white/50 text-sm mt-1">{item.period}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-white/80 text-sm">
                    <span className="mt-2 mr-2 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}