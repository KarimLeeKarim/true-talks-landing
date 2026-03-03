import { motion } from 'motion/react';

const WAVES = [
  { size: '200vw', delay: 0 },
  { size: '150vw', delay: 2 },
  { size: '100vw', delay: 4 },
] as const;

export function BackgroundWave() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-10 flex items-center justify-center overflow-hidden">
      {WAVES.map((wave, i) => (
        <motion.div
          key={i}
          className="absolute border border-white rounded-full"
          style={{ width: wave.size, height: wave.size }}
          animate={{ scale: [0.8, 1.2], opacity: [0.1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: wave.delay }}
        />
      ))}
    </div>
  );
}