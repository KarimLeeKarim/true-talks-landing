import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { AgeDialog } from '../ui/AgeDialog';
import { SpeakingHeadline } from '../ui/SpeakingHeadline';
import type { TTranslations } from '../../i18n/translations';

interface HeroSectionProps {
  t: TTranslations;
  chatUrl: string;
  authUrl: string;
}

export function HeroSection({ t, chatUrl, authUrl }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto relative z-10 pt-32 pb-20">

      <div className="flex flex-col gap-2 mb-12">
        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
            {t.hero.line1}
          </h1>
        </Reveal>
        <Reveal delay={0.3} distort>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white/50 leading-[0.9] blur-[1px]">
            {t.hero.line2}
          </h1>
        </Reveal>
      </div>

      <Reveal delay={0.6}>
        <p className="text-2xl md:text-4xl text-[#f5f5f5] font-light max-w-2xl mb-12">
          {t.hero.tagline}
        </p>
      </Reveal>

      <Reveal delay={0.8}>
        <p className="text-xl md:text-3xl font-medium tracking-wide mb-4">
          {t.hero.cta1}
        </p>
      </Reveal>

      <SpeakingHeadline text={t.hero.cta2} />

      <AgeDialog t={t.ageDialog} chatUrl={chatUrl}>
        {(openDialog) => (
          <Reveal delay={1.2} className="mt-16 flex flex-col sm:flex-row gap-4">
            <button
              onClick={openDialog}
              className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {t.hero.btnPrimary}
            </button>
            <a
              href={authUrl}
              className="px-8 py-4 border border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors text-center"
            >
              {t.hero.btnSecondary}
            </a>
          </Reveal>
        )}
      </AgeDialog>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
      >
        <ArrowDown size={24} />
      </motion.div>

    </section>
  );
}
