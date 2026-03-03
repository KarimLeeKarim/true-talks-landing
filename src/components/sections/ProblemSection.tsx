import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import type { TProblem } from '../../i18n/translations';

interface ProblemSectionProps {
  t: TProblem;
}

export function ProblemSection({ t }: ProblemSectionProps) {
  return (
    <Section>
      <div className="border-l-2 border-amber-500/50 pl-6 md:pl-12 py-4">

        <Reveal>
          <h2 className="text-sm tracking-[0.2em] text-amber-500 mb-8 uppercase font-bold">
            {t.label}
          </h2>
        </Reveal>

        <div className="space-y-6 md:space-y-10">
          {t.lines.map((line, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <p className="text-3xl md:text-6xl font-light text-white/80">{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6} className="mt-16 md:mt-24">
          <p className="text-2xl md:text-5xl font-medium text-white">{t.quote}</p>
        </Reveal>

        <div className="mt-16 md:mt-24 space-y-4 text-lg md:text-2xl text-white/60 font-light max-w-3xl">
          {t.body.map((line, i) => (
            <Reveal key={i} delay={0.7 + i * 0.1}>
              <p>{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1.1} className="mt-20">
          <p className="text-3xl md:text-5xl font-bold leading-tight">
            {t.closingBold}
            <br />
            <span className="text-white/40 blur-[0.5px]">{t.closingFade}</span>
          </p>
        </Reveal>

      </div>
    </Section>
  );
}