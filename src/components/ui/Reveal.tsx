import { motion } from 'motion/react';
import { clsx } from 'clsx';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distort?: boolean;
}

export function Reveal({ children, className, delay = 0, duration = 0.8, distort = false }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: distort ? 'blur(4px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={clsx(className, 'relative')}
    >
      {children}
    </motion.div>
  );
}