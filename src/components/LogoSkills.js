import React from "react";
import { LogoCarousel } from "./ui/logo-carousel";

function LogoImg({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

const logos = [
  { id: "js", img: (props) => <LogoImg {...props} alt="JavaScript" src="https://cdn.simpleicons.org/javascript/ffffff" /> },
  { id: "ts", img: (props) => <LogoImg {...props} alt="TypeScript" src="https://cdn.simpleicons.org/typescript/ffffff" /> },
  { id: "react", img: (props) => <LogoImg {...props} alt="React" src="https://cdn.simpleicons.org/react/ffffff" /> },
  { id: "nextjs", img: (props) => <LogoImg {...props} alt="Next.js" src="https://cdn.simpleicons.org/nextdotjs/ffffff" /> },
  { id: "node", img: (props) => <LogoImg {...props} alt="Node.js" src="https://cdn.simpleicons.org/nodedotjs/ffffff" /> },
  { id: "express", img: (props) => <LogoImg {...props} alt="Express" src="https://cdn.simpleicons.org/express/ffffff" /> },
  { id: "mongodb", img: (props) => <LogoImg {...props} alt="MongoDB" src="https://cdn.simpleicons.org/mongodb/ffffff" /> },
  { id: "firebase", img: (props) => <LogoImg {...props} alt="Firebase" src="https://cdn.simpleicons.org/firebase/ffffff" /> },
  { id: "tailwind", img: (props) => <LogoImg {...props} alt="Tailwind CSS" src="https://cdn.simpleicons.org/tailwindcss/ffffff" /> },
  { id: "python", img: (props) => <LogoImg {...props} alt="Python" src="https://cdn.simpleicons.org/python/ffffff" /> },
  { id: "r", img: (props) => <LogoImg {...props} alt="R" src="https://cdn.simpleicons.org/r/ffffff" /> },
  { id: "mysql", img: (props) => <LogoImg {...props} alt="MySQL" src="https://cdn.simpleicons.org/mysql/ffffff" /> },
  { id: "git", img: (props) => <LogoImg {...props} alt="Git" src="https://cdn.simpleicons.org/git/ffffff" /> },
  { id: "github", img: (props) => <LogoImg {...props} alt="GitHub" src="https://cdn.simpleicons.org/github/ffffff" /> },
];

export default function LogoSkills() {
  return (
    <section id="skills" className="py-16 px-4">
      <h2 className="section-title">Technical Skills</h2>
      <div className="max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#111111] p-4">
        <LogoCarousel columnCount={4} logos={logos} />
      </div>
    </section>
  );
}
