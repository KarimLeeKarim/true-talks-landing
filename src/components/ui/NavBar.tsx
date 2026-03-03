import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import type { Lang } from '../../i18n/translations';

const LANGS = ['en', 'ru', 'az'] as const;

interface NavBarProps {
  brand: string;
  lang: Lang;
}

export function NavBar({ brand, lang }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50',
        'transition-[background,border-color,box-shadow] duration-300 ease-in-out',
        scrolled
          ? 'bg-white/5 backdrop-blur-2xl border-b border-white/8 shadow-[0_2px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent',
      )}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

        {/* Brand */}
        <span
          className={clsx(
            'font-bold text-xl tracking-tighter transition-all duration-300',
            scrolled ? 'text-white' : 'text-white mix-blend-difference',
          )}
        >
          {brand}
        </span>

        {/* Language switcher */}
        <div className="flex gap-1">
          {LANGS.map((l) => (
            <a
              key={l}
              href={`/${l}`}
              className={clsx(
                'text-xs font-bold tracking-wider px-2.5 py-1.5 rounded-full transition-all duration-200',
                l === lang
                  ? 'text-white bg-white/10'
                  : 'text-white/35 hover:text-white/70 hover:bg-white/5',
              )}
            >
              {l.toUpperCase()}
            </a>
          ))}
        </div>

      </div>
    </motion.header>
  );
}