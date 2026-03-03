import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import type { THope } from '../../i18n/translations';

interface HopeSectionProps {
  t: THope;
}

export function HopeSection({ t }: HopeSectionProps) {
  return (
    <Section>

      <Reveal>
        <h2 className="text-sm tracking-[0.2em] text-blue-300 mb-12 uppercase font-bold">
          {t.label}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-4xl md:text-7xl font-light leading-tight mb-20">
          {t.headline1}
          <br />
          <span className="font-serif italic text-blue-200">{t.headline2}</span>
        </p>
      </Reveal>

      <div className="space-y-4 mb-20">
        {t.cultures.map((item, i) => (
          <Reveal key={i} delay={0.3 + i * 0.1}>
            <p className="text-2xl md:text-4xl text-white/60">{item}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.8}>
        <p className="text-3xl md:text-6xl font-bold">
          {t.closingParts[0]}
          <span className="text-blue-300">{t.closingParts[1]}</span>
          {t.closingParts[2]}
        </p>
      </Reveal>

    </Section>
  );
}