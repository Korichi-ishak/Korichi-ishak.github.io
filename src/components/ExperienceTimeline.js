import { BriefcaseIcon, GraduationCapIcon, SparklesIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "./ui/SectionHeader";

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "Wiizdev",
      period: "Jan 2025 - Present",
      type: "work",
      impact: "Building product culture & scalable delivery",
      details: [
        "Leadership: roadmap, hiring, mentoring",
        "Architecting multi-tenant & secure platforms",
        "Driving client acquisition & retention",
        "Hands-on fullstack shipping critical features"
      ]
    },
    {
      title: "Fullstack Developer",
      company: "PROGIX",
      period: "2025 - Aug 2025",
      type: "work",
      impact: "Delivered scalable modules & accelerated feature throughput",
      details: [
        "Implemented fullstack features (React / Node.js / MongoDB)",
        "Optimized API performance & reduced response latency",
        "Collaborated on architecture & code review standards",
        "Integrated authentication & secure data flows"
      ]
    },
    {
      title: "Fullstack Developer",
      company: "Aurafolio",
      period: "Jun 2023 - Dec 2024",
      type: "work",
      impact: "Shipped performant APIs & UI systems",
      details: [
        "Designed robust Node.js service layer",
        "Optimized queries & caching strategies",
        "Integrated auth, payments & cloud storage",
        "Improved deployment & release workflows"
      ]
    },
    {
      title: "Freelance Developer",
      company: "WordPress & Fullstack",
      period: "Jan 2022 - Present",
      type: "work",
      impact: "Delivering tailored digital solutions",
      details: [
        "Custom WordPress themes & plugins",
        "Fullstack web app prototypes & MVPs",
        "UI/UX wireframes → pixel-perfect build",
        "Direct client collaboration & iteration"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-28 px-4">
      {/* ambient background effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(220,38,38,0.12),transparent_60%)] opacity-70" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(255,0,0,0.08),transparent_65%)]" />
      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          kicker="TIMELINE"
          title={<><span className='text-white'>Experience</span> Timeline</>}
          subtitle="Milestones of leadership, engineering depth & product impact."
        />
        <AdvancedTimeline experiences={experiences} />
      </div>
    </section>
  );
}

function AdvancedTimeline({ experiences }) {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visibility, setVisibility] = useState(() => experiences.map(() => false));

  useEffect(() => { setMounted(true); }, []);

  // Observe each item for staggered reveal
  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('[data-timeline-item]');
    if (!nodes || !IntersectionObserver) return;
    const reveal = (index) => {
      setVisibility(v => (v[index] ? v : v.map((val,i)=> i===index ? true : val)));
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) reveal(index);
      });
    }, { threshold: 0.18 }); // slightly easier to trigger
    nodes.forEach(n => io.observe(n));

    // Fallback: on scroll, reveal items close to viewport bottom
    const fallback = () => {
      nodes.forEach((n) => {
        const rect = n.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          const idx = Number(n.getAttribute('data-index'));
          reveal(idx);
        }
      });
    };
    fallback();
    window.addEventListener('scroll', fallback, { passive: true });
    window.addEventListener('resize', fallback);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', fallback);
      window.removeEventListener('resize', fallback);
    };
  }, [experiences]);

  // Scroll progress for spine fill
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      const start = rect.top - vh * 0.15; // when enters
      const end = rect.bottom - vh * 0.6; // near leaving
      const progress = Math.min(1, Math.max(0, 1 - end / (end - start)));
      if (progressRef.current) {
        progressRef.current.style.height = `${progress * 100}%`;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto mt-16">
      {/* central spine */}
      <div aria-hidden className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-red-500/30 to-transparent" />
        <div ref={progressRef} className="absolute left-0 top-0 w-px bg-gradient-to-b from-red-500 via-red-400 to-red-300 shadow-[0_0_12px_-2px_rgba(255,0,0,0.7)] transition-[height] duration-500" style={{ height: 0 }} />
      </div>

      <ol className="space-y-20 md:space-y-32">
        {experiences.map((exp, i) => {
          const alignLeft = i % 2 === 0; // alternate
          const isVisible = visibility[i];
          return (
            <li
              key={i}
              data-timeline-item
              data-index={i}
              className="relative"
            >
              {/* connector line small for mobile */}
              <div aria-hidden className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-white/10 to-transparent" />
              {/* node */}
              <div className={`absolute ${alignLeft ? 'md:left-1/2 md:-translate-x-1/2' : 'md:left-1/2 md:-translate-x-1/2'} ${'left-0'} top-2 md:top-1`}> 
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center ring-4 ring-black shadow-xl shadow-red-500/30">
                    {exp.type === 'work' ? (
                      <BriefcaseIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    ) : (
                      <GraduationCapIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    )}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-red-500/40 blur-md animate-pulse" />
                  <div className="absolute -inset-2 rounded-full bg-red-500/15 blur-xl" />
                </div>
              </div>

              {/* card wrapper */}
              <div
                className={`md:w-[48%] ${alignLeft ? 'md:pr-10 md:text-right md:ml-0 md:mr-auto' : 'md:pl-10 md:text-left md:mr-0 md:ml-auto'} pt-1 pl-14 md:pl-0`}
              >
                <div
                  className={`group relative rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl overflow-hidden transition-all duration-700 will-change-transform
                  before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,0,0.18),transparent_60%)] before:opacity-0 group-hover:before:opacity-100 before:transition
                  hover:border-red-500/60 hover:shadow-[0_8px_40px_-10px_rgba(255,0,0,0.35)]
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Accent corner */}
                  <span className={`absolute ${alignLeft ? 'top-0 right-0' : 'top-0 left-0'} w-20 h-20 bg-gradient-to-br from-red-600/40 to-transparent opacity-30`} />
                  {/* Shine sweep */}
                  <span className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] before:translate-x-[-130%] group-hover:before:translate-x-[130%] before:transition before:duration-[1500ms]" />
                  <div className={`relative p-7 ${alignLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className={`flex ${alignLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-5 md:gap-6`}>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1 md:justify-between">
                          <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight">
                            <span className="relative inline-block">
                              {exp.title}
                              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-red-500 via-white/70 to-transparent group-hover:w-full transition-all duration-700" />
                            </span>
                          </h3>
                          <span className="hidden md:inline-block text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full bg-red-500/15 border border-red-500/40 text-red-300 uppercase">{exp.type}</span>
                        </div>
                        <p className="text-red-400 font-medium text-sm mb-1">{exp.company}</p>
                        <p className="text-white/50 text-[12px] mb-3">{exp.period}</p>
                        <p className="text-[13px] text-white/65 leading-relaxed italic mb-4 flex items-center gap-2">
                          <SparklesIcon className="w-4 h-4 text-red-400" /> {exp.impact}
                        </p>
                        <ul className="space-y-2.5">
                          {exp.details.map((d, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-white/70 text-[13px] leading-relaxed group/item">
                              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_0_3px_rgba(255,0,0,0.15)] group-hover/item:scale-125 transition" />
                              <span className="flex-1">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}