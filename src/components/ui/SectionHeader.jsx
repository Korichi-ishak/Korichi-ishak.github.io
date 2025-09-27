import { motion } from 'framer-motion';

export default function SectionHeader({ kicker, title, subtitle, align='left', className='' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>      
      {kicker && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          className="block text-[11px] tracking-widest font-semibold text-red-500/70 uppercase mb-3"
        >{kicker}</motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white via-white to-red-500/80 bg-clip-text text-transparent"
      >{title}</motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-4 text-white/60 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >{subtitle}</motion.p>
      )}
    </div>
  );
}