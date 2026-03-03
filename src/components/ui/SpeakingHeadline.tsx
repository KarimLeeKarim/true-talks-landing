import { useState } from 'react';
import { motion } from 'motion/react';

// Pre-generate scatter once per mount — not on every render
function generateScatter(count: number) {
  return Array.from({ length: count }, () => ({
    x:      (Math.random() - 0.5) * 300,
    y:      (Math.random() - 0.5) * 200,
    rotate: (Math.random() - 0.5) * 90,
    delay:  Math.random() * 0.90,
  }));
}

interface SpeakingHeadlineProps {
  text: string;
  className?: string;
}

export function SpeakingHeadline({ text, className = '' }: SpeakingHeadlineProps) {
  const chars = text.split('');
  const [scatter] = useState(() => generateScatter(chars.length));

  return (
    <div className={`flex flex-wrap items-end ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          className="text-xl md:text-3xl font-medium tracking-wide"
          initial={{
            opacity:  0,
            x:        scatter[i].x,
            y:        scatter[i].y,
            rotate:   scatter[i].rotate,
            scale:    0.6,
            filter:   'blur(15px)',
          }}
          animate={{
            opacity:  1,
            x:        0,
            y:        0,
            rotate:   0,
            scale:    1,
            filter:   'blur(0px)',
          }}
          transition={{
            duration: 2,
            delay:    2.0 + scatter[i].delay,
            ease:     [0.16, 1, 0.3, 1]
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
