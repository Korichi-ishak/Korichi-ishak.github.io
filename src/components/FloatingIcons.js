import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiFirebase } from 'react-icons/si';
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
            x: 0,
            y: 0,
            opacity: 0.2,
          }}
          animate={{
            x: [0, 10, 0],
            y: [0, 10, 0],
            transition: {
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
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
