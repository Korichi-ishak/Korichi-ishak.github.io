import Image from "next/image";
import { 
  CodeIcon, 
  ExternalLinkIcon, 
  PaletteIcon 
} from "lucide-react";

export default function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="bg-[#222224] p-6 rounded-2xl border border-[#2C2C2E] shadow-lg group hover:border-[#CAFA43] transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <CodeIcon className="w-10 h-10 text-[#CAFA43] group-hover:rotate-12 transition-transform" />
        <a href={link} target="_blank" rel="noopener noreferrer"
          className="text-[#CAFA43] hover:bg-[#CAFA43]/10 p-2 rounded-full transition">
          <ExternalLinkIcon className="w-6 h-6" />
        </a>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      {/* Conditionally add images for selected projects */}
      {title.toLowerCase() === "astrolabs" && (
        <Image 
          src="/astrolabs.jpg" 
          alt="Astrolabs" 
          width={400} 
          height={250} 
          className="rounded-lg mt-4"
        />
      )}
      {title.toLowerCase() === "clinical" && (
        <Image 
          src="/clinicall.jpg" 
          alt="Clinical" 
          width={400} 
          height={250} 
          className="rounded-lg mt-4"
        />
      )}
      {title.toLowerCase() === "wassalni" && (
        <Image 
          src="/wassalni.jpg" 
          alt="Wassalni" 
          width={400} 
          height={250} 
          className="rounded-lg mt-4"
        />
      )}
      {title.toLowerCase() === "eag video editor" && (
        <Image 
          src="/Eag_Video_Editor.png" 
          alt="EAG Video Editor" 
          width={400} 
          height={250} 
          className="rounded-lg mt-4"
        />
      )}
      {title.toLowerCase() === "drip drop dz" && (
        <Image 
          src="/dripdrop.png" 
          alt="Drip Drop DZ" 
          width={400} 
          height={250} 
          className="rounded-lg mt-4"
        />
      )}
      {title.toLowerCase() === "plombi" && (
        <Image 
          src="/Plombi.png" 
          alt="Plombi" 
          width={400} 
          height={250} 
          className="rounded-lg mt-4"
        />
      )}
      {title.toLowerCase() === "khadamati" && (
        <Image 
          src="/khadamati_online.png" 
          alt="Khadamati" 
          width={400} 
          height={250} 
          className="rounded-lg mt-4"
        />
      )}
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <PaletteIcon className="w-4 h-4 mr-2 text-[#CAFA43]" />
        <span>{technologies.join(" • ")}</span>
      </div>
    </div>
  );
}