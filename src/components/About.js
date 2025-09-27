import Image from "next/image";
import { BriefcaseIcon, GraduationCapIcon, LightbulbIcon, UsersIcon, RocketIcon, CodeIcon } from "lucide-react";

const highlights = [
  {
    icon: <BriefcaseIcon className="w-5 h-5 text-red-500" />,
    title: "Fullstack Engineering",
    text: "Design & build scalable web/mobile platforms (frontend + backend) with a product mindset."
  },
  {
    icon: <CodeIcon className="w-5 h-5 text-red-500" />,
    title: "Technical Architecture",
    text: "From clean component systems to API design, database modeling & deployment flows."
  },
  {
    icon: <LightbulbIcon className="w-5 h-5 text-red-500" />,
    title: "Data‑Driven UI/UX",
    text: "Blend analytics & usability to ship fast, intuitive experiences that convert."
  },
  {
    icon: <UsersIcon className="w-5 h-5 text-red-500" />,
    title: "Team Leadership",
    text: "Mentor devs, coordinate delivery, align business goals & engineering quality."
  },
  {
    icon: <GraduationCapIcon className="w-5 h-5 text-red-500" />,
    title: "Continuous Learning",
    text: "Evolving across React, Node.js, mobile, cloud, design systems & data tooling."
  },
  {
    icon: <RocketIcon className="w-5 h-5 text-red-500" />,
    title: "Product Acceleration",
    text: "Rapid prototyping → stable releases with measurable impact & scalability."
  }
];

const stats = [
  { label: "Projects Delivered", value: 25 },
  { label: "Team Leadership", value: "5+" },
  { label: "Stacks Mastered", value: "8" },
  // Shorten label & value styling to avoid overflow issues
  { label: "Startup & Agency", value: "XP" }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_20%,#dc262680,transparent_60%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="inline-block text-xs tracking-widest font-semibold text-red-500/80 uppercase mb-4">Who I Am</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Building <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">usable</span> & <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">scalable</span> digital products
            </h2>
            <div className="space-y-4 text-white/80 text-lg leading-relaxed max-w-2xl">
              <p>
                I am a multidisciplinary <span className="text-red-500 font-medium">fullstack & mobile developer</span> with strong focus on product velocity, clean architecture and user‑centric design. I bridge frontend craft, backend robustness, data insight and UX strategy.
              </p>
              <p>
                Founder at <span className="text-red-500 font-medium">Wiizdev</span>, contributor in agency/startup contexts, and experienced in leading squads to deliver complex features—balancing speed, quality & clarity.
              </p>
              <p>
                I love transforming fuzzy ideas into elegant interfaces, resilient services & measurable outcomes. From React / Vite / Next.js & React Native to Node.js, MongoDB and UI systems—my stack is optimized for iteration & scale.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(s => {
                const longValue = String(s.value).length > 3;
                return (
                  <div key={s.label} className="flex flex-col justify-center items-center bg-[#1d1d1f] border border-white/10 rounded-xl p-4 text-center hover:border-red-500 transition-all min-h-[92px]">
                    <div className={`font-bold text-white mb-1 ${longValue ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>{s.value}</div>
                    <div className="text-[10px] sm:text-[11px] tracking-wide uppercase text-white/50 font-medium leading-snug break-words px-1">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#161617] via-[#1c1c1e] to-[#1f1f21] p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_70%_30%,#dc262660,transparent_60%)]" />
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                  <RocketIcon className="w-5 h-5 text-red-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-white/60 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> Mission
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed text-white/70">
                    Ship <span className="text-white">fast</span>, build <span className="text-white">resilient</span> systems and craft <span className="text-white">elegant UX</span> that balance user delight, business value & long‑term technical sustainability.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Velocity","Clarity","Ownership","Craft"].map(tag => (
                      <span key={tag} className="text-[10px] tracking-wide px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/50">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -inset-px rounded-xl pointer-events-none ring-0 group-hover:ring-1 group-hover:ring-red-500/40 transition" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map(h => (
                <div key={h.title} className="group relative rounded-xl bg-[#1d1d1f] border border-white/10 p-5 hover:border-red-500 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#2a2a2c] p-2 rounded-lg">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm tracking-wide">{h.title}</h4>
                      <p className="text-xs text-white/60 leading-relaxed">{h.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
