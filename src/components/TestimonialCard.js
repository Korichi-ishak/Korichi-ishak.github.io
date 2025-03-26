import { motion } from 'framer-motion';

export default function TestimonialCard({ quote, author, role }) {
  return (
    <motion.div 
      className="card p-8 relative overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <div className="absolute -top-4 -left-4 text-7xl text-blue-500/10 dark:text-blue-400/10">
        "
      </div>
      <p className="text-lg italic mb-6 relative z-10">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}