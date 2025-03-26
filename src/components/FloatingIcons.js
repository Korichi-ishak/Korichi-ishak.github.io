import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, SiMongodb, SiFirebase } from 'react-icons/all';
// Additional icons can be added here
const icons = [
  { icon: <FaReact className="text-blue-400" />, size: 32 },
  { icon: <FaNodeJs className="text-green-500" />, size: 36 },
  { icon: <SiMongodb className="text-green-300" />, size: 32 },
  { icon: <SiFirebase className="text-orange-400" />, size: 32 },
  // ...more icons...
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0.3,
          }}
          animate={{
            x: [null, Math.random() * 100 - 50],
            y: [null, Math.random() * 100 - 50],
            transition: {
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
          // Added will-change and transform-gpu for performance
          className="absolute will-change-transform transform-gpu"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 5) % 70}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}
