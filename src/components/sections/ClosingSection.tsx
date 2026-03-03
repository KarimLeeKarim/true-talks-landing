import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { AgeDialog } from '../ui/AgeDialog';
import type { TTranslations } from '../../i18n/translations';

interface ClosingSectionProps {
  t: TTranslations;
  chatUrl: string;
  authUrl: string;
}

export function ClosingSection({ t, chatUrl, authUrl }: ClosingSectionProps) {
  return (
    <Section className="items-center text-center">

      <Reveal>
        <p className="text-2xl md:text-4xl font-light mb-4 text-white/50">{t.closing.line1}</p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-4xl md:text-7xl font-bold mb-16">{t.closing.line2}</p>
      </Reveal>

      <Reveal delay={0.5} className="mb-16">
        <h2 className="text-[12vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
          {t.brand}
        </h2>
      </Reveal>

      <AgeDialog t={t.ageDialog} chatUrl={chatUrl}>
        {(openDialog) => (
          <Reveal delay={0.8} className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <button
              onClick={openDialog}
              className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              {t.closing.btnPrimary}
            </button>
            <a
              href={authUrl}
              className="px-8 py-4 border border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors text-center"
            >
              {t.closing.btnSecondary}
            </a>
          </Reveal>
        )}
      </AgeDialog>

      <div className="mt-24 opacity-30 text-sm">{t.closing.copyright}</div>

    </Section>
  );
}