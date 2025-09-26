import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function NavBar({
  items,
  className
}) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  // Auto update active tab while scrolling through sections
  useEffect(() => {
    if (!items || items.length === 0) return;

    let ticking = false;

    const sectionMeta = items.map(i => ({
      name: i.name,
      ids: [
        (i.url || '').startsWith('#') ? i.url.slice(1) : null,
        ...(i.extraIds || [])
      ].filter(Boolean)
    }));

    const allSectionIds = sectionMeta.flatMap(m => m.ids);

    const getCurrentSection = () => {
      let current = items[0].name;
      const viewportAnchor = window.innerHeight * 0.28; // point from top to test
      for (const meta of sectionMeta) {
        for (const id of meta.ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportAnchor && rect.bottom >= viewportAnchor) {
            current = meta.name;
            break;
          }
        }
      }
      return current;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cur = getCurrentSection();
            setActiveTab(prev => prev === cur ? prev : cur);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use an IntersectionObserver as a fallback/initial trigger
    const observer = new IntersectionObserver(() => {
      const cur = getCurrentSection();
      setActiveTab(prev => prev === cur ? prev : cur);
    }, { threshold: [0.25, 0.5, 0.75] });

  allSectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial set after mount
    setTimeout(() => {
      const cur = getCurrentSection();
      setActiveTab(prev => prev === cur ? prev : cur);
    }, 100);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className
      )}>
      <div
        className="flex items-center gap-3 bg-black/70 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-white/80 hover:text-red-500",
                isActive && "bg-white/10 text-red-500"
              )}>
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-red-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}>
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-500 rounded-t-full">
                    <div
                      className="absolute w-12 h-6 bg-red-500/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-red-500/20 rounded-full blur-md -top-1" />
                    <div
                      className="absolute w-4 h-4 bg-red-500/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
