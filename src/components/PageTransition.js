import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -20 },
  enter: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  },
  exit: { opacity: 0, x: 20 }
};

export default function PageTransition({ children }) {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.main>
  );
}
