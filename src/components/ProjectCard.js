import { useState } from "react";
import Image from "next/image";
import { CodeIcon, ExternalLinkIcon } from "lucide-react";

export default function ProjectCard({ title, description, technologies, link, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Convert title to image name format
  const titleForImage = title.toLowerCase().replace(/\s+/g, "_");
  
  // These are the project names from your code that should have images
  const knownProjects = ["astrolabs", "clinical", "wassalni", "eag_video_editor", "drip_drop_dz", "plombi", "khadamati"];
  
  // Check if this is a project that should have an image
  const shouldHaveImage = knownProjects.includes(titleForImage);
  
  // Determine image path
  let imagePath = imageUrl;
  if (!imagePath && shouldHaveImage) {
    // Try different image extensions if specific one not provided
    if (titleForImage === "eag_video_editor") {
      imagePath = "/Eag_Video_Editor.png";
    } else if (titleForImage === "drip_drop_dz") {
      imagePath = "/dripdrop.png";
    } else if (titleForImage === "plombi") {
      imagePath = "/Plombi.png";
    } else if (titleForImage === "khadamati") {
      imagePath = "/khadamati_online.png";
    } else {
      imagePath = `/${titleForImage}.jpg`;
    }
  }
  
  return (
    <div 
      className="bg-[#222224] rounded-xl border border-white/10 shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-red-500 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top section with image */}
      {shouldHaveImage && !imageError && (
        <div className="relative w-full h-48 overflow-hidden">
          {/* Fallback colored background in case image fails */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-[#1A1A1A]"></div>
          
          {/* Image with error handling */}
          <Image 
            src={imagePath}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          
          {/* Tech tag overlay */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-red-500 border border-red-500/30">
            {technologies[0]}
          </div>
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-3 right-3 bg-red-500 text-black p-2 rounded-full transform transition-transform duration-300 group-hover:rotate-12"
              aria-label="Visit project"
            >
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          )}
          
          {/* Debug info - remove in production */}
          {process.env.NODE_ENV === 'development' && (
            <div className="absolute bottom-0 left-0 bg-black/80 text-white text-xs p-1">
              Image path: {imagePath}
            </div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
            {title}
          </h3>
          {(!shouldHaveImage || imageError) && <CodeIcon className="w-8 h-8 text-red-500 group-hover:rotate-12 transition-transform" />}
        </div>
        
        <p className="text-white/70 mb-4 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-[#2C2C2E] text-white/80 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {link && (!shouldHaveImage || imageError) && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-red-500 hover:underline"
          >
            View Project <ExternalLinkIcon className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </div>
  );
}