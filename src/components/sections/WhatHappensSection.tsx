import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import type { TWhatHappens } from '../../i18n/translations';

interface WhatHappensSectionProps {
  t: TWhatHappens;
}

export function WhatHappensSection({ t }: WhatHappensSectionProps) {
  return (
    <Section>

      <Reveal>
        <h2 className="text-sm tracking-[0.2em] text-amber-500 mb-12 uppercase font-bold">
          {t.label}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-3xl md:text-5xl font-light mb-16 max-w-4xl leading-snug">
          {t.headline}
        </p>
      </Reveal>

      <div className="grid gap-12 md:grid-cols-3">
        {t.cards.map((card, i) => (
          <Reveal
            key={i}
            delay={0.3 + i * 0.1}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <p className="text-2xl font-medium mb-2 text-amber-200">{card.title}</p>
            <p className="text-white/70">{card.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.8} className="mt-24 text-center">
        <p className="text-3xl md:text-6xl font-light">
          {t.closing1}
          <br />
          <span className="font-bold">{t.closing2}</span>
        </p>
      </Reveal>

    </Section>
  );
}