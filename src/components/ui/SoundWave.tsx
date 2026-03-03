import { motion } from 'motion/react';
import { clsx } from 'clsx';

interface SoundWaveProps {
  className?: string;
  color?: string;
}

export function SoundWave({ className = '', color = 'bg-white' }: SoundWaveProps) {
  return (
    <div className={clsx('flex items-center gap-1', className)}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={clsx('w-1 rounded-full', color)}
          animate={{ height: ['10px', '24px', '10px'], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
          style={{ height: 10 }}
        />
      ))}
    </div>
  );
}