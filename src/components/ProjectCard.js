import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CodeIcon, ExternalLinkIcon } from "lucide-react";

export default function ProjectCard({ title, description, technologies, link, imageUrl }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  const frameRef = useRef(null);
  const rafRef = useRef(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Pointer reactive 3D tilt + spotlight without triggering React re-render each mouse move
  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    pointer.current = { x, y };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const rotateX = (0.5 - pointer.current.y) * 12; // tilt range
        const rotateY = (pointer.current.x - 0.5) * 14;
        const spotlight = `radial-gradient(circle at ${pointer.current.x * 100}% ${pointer.current.y * 100}%, rgba(255,255,255,0.18), rgba(255,255,255,0) 55%)`;
        cardRef.current.style.setProperty('--spotlight', spotlight);
        cardRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        if (frameRef.current) {
          frameRef.current.style.opacity = '1';
          frameRef.current.style.transform = `translateY(-4px) scale(1.015)`;
        }
      });
    }
  };

  const handlePointerLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
      cardRef.current.style.setProperty('--spotlight', 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), rgba(255,255,255,0) 55%)');
    }
    if (frameRef.current) {
      frameRef.current.style.opacity = '0.35';
      frameRef.current.style.transform = 'translateY(0) scale(1)';
    }
  };
  
  // Convert title to image name format
  const titleForImage = title.toLowerCase().replace(/\s+/g, "_");
  
  // Project slugs that have bundled images (fallback when imageUrl not explicitly passed)
  const knownProjects = [
    "astrolabs", "clinical", "wassalni", "eag_video_editor", "drip_drop_dz", "plombi", "khadamati",
    // Added web/WordPress projects for potential future auto-mapping
    "goodpc", "divanhane", "queendeq", "autotechno", "point_de_location"
  ];
  
  // Determine if we should attempt to render an image (either explicit or known slug)
  const shouldHaveImage = knownProjects.includes(titleForImage) || !!imageUrl;
  
  // Determine image path
  let imagePath = imageUrl;
  if (!imagePath && knownProjects.includes(titleForImage)) {
    // Auto-detection only when explicit imageUrl not supplied
    if (titleForImage === "eag_video_editor") imagePath = "/Eag_Video_Editor.png";
    else if (titleForImage === "drip_drop_dz") imagePath = "/dripdrop.png";
    else if (titleForImage === "plombi") imagePath = "/Plombi.png";
    else if (titleForImage === "khadamati") imagePath = "/khadamati_online.png";
    else imagePath = `/${titleForImage}.jpg`;
  }
  
  // Sanitize link (trim + ensure protocol)
  let sanitizedLink = link ? link.trim() : '';
  if (sanitizedLink && !/^https?:\/\//i.test(sanitizedLink)) {
    sanitizedLink = `https://${sanitizedLink}`;
  }
  
  return (
    <div className={`relative ${sanitizedLink ? 'cursor-pointer' : ''}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Outer halo + animated gradient ring */}
      <div ref={frameRef} aria-hidden className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-40 transition duration-500" style={{ background: 'linear-gradient(135deg, rgba(255,0,0,0.55), rgba(255,255,255,0.07) 35%, rgba(255,0,0,0.4) 70%)', mask: 'linear-gradient(#fff,#fff) content-box, linear-gradient(#fff,#fff)', WebkitMaskComposite: 'xor', padding: 1 }} />
      <div
        ref={cardRef}
        className="group relative rounded-3xl border border-white/10 bg-[#101011] overflow-hidden transition-all duration-500 will-change-transform"
        style={{ '--spotlight': 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), rgba(255,255,255,0) 55%)' }}
      >
        {/* dynamic spotlight layer */}
        <div aria-hidden className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 mix-blend-overlay" style={{ background: 'var(--spotlight)' }} />
        {/* subtle noise / texture */}
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.15),transparent_60%)] opacity-60" />
        {/* Shine sweep */}
        <div aria-hidden className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] before:translate-x-[-120%] group-hover:before:translate-x-[120%] before:transition before:duration-[1600ms] before:ease-out" />

        {sanitizedLink && (
          <a href={sanitizedLink} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir le projet ${title}`} className="absolute inset-0 z-30" />
        )}

        {/* Media / Hero image */}
        {shouldHaveImage && imagePath && !imageError && (
          <div className="relative w-full overflow-hidden rounded-t-3xl" style={{ paddingBottom: '67%' }}>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#171717] via-[#1f1f20] to-[#151515] animate-pulse" />
            )}
            <Image
              src={imagePath}
              alt={title}
              fill
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              className={`object-cover transition duration-[1600ms] ease-out group-hover:scale-[1.08] group-hover:brightness-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-10">
              {technologies.slice(0,2).map((t,i)=>(
                <span key={i} className="px-3 py-1 rounded-full text-[10px] tracking-wide font-medium bg-black/55 backdrop-blur-sm border border-red-500/40 text-red-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                  {t}
                </span>
              ))}
            </div>
            {sanitizedLink && (
              <div className="absolute top-4 right-4 z-10 bg-red-500/90 hover:bg-red-500 text-black p-2 rounded-full transition duration-300 shadow-lg shadow-red-500/30">
                <ExternalLinkIcon className="w-4 h-4" />
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-xl font-semibold text-white leading-tight mb-2">
                <span className="inline-block relative">
                  {title}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-red-500 via-white/70 to-transparent group-hover:w-full transition-all duration-700" />
                </span>
              </h3>
              <p className="text-[13px] text-white/60 line-clamp-2 leading-relaxed">{description}</p>
            </div>
          </div>
        )}

        {/* Content body (shown always, but if image exists it's the lower panel) */}
        <div className={`relative z-20 flex flex-col ${shouldHaveImage && !imageError ? 'p-5 pt-4' : 'p-6 pt-8'} gap-4`}>
          {/* Ghost / background label */}
          <div aria-hidden className="pointer-events-none absolute -top-6 -left-2 text-7xl font-black tracking-tighter text-white/5 select-none">
            {title.split(' ')[0].slice(0,10)}
          </div>
          {(!shouldHaveImage || imageError) && (
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/40 to-red-500/10 border border-red-500/40 flex items-center justify-center shadow-inner shadow-red-500/30">
                <CodeIcon className="w-7 h-7 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2 leading-tight">{title}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-1">{description}</p>
              </div>
            </div>
          )}

          {/* Tech stack chips animated */}
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, i) => (
                <span key={i} className="relative px-3 py-1 rounded-md text-[11px] uppercase tracking-wide font-medium overflow-hidden border border-white/10 text-white/70 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:text-white hover:border-red-500/60 hover:bg-red-500/10 group/item"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="relative z-10">{tech}</span>
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/30 to-red-600/0 opacity-0 group-hover/item:opacity-100 transition duration-500" />
                </span>
              ))}
            </div>

          {/* CTA */}
          {sanitizedLink && (
            <div className="flex items-center gap-2 pt-2 text-[13px] font-medium text-red-400">
              <span className="relative">
                Visit Project
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gradient-to-r from-red-500 to-transparent group-hover:w-full transition-all duration-500" />
              </span>
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Ambient bottom glow */}
        <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[160%] h-48 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.35),transparent_60%)] opacity-0 group-hover:opacity-100 transition duration-700" />
      </div>
    </div>
  );
}