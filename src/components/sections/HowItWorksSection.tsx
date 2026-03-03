import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import type { THowItWorks } from '../../i18n/translations';

interface HowItWorksSectionProps {
  t: THowItWorks;
}

export function HowItWorksSection({ t }: HowItWorksSectionProps) {
  return (
    <Section>

      <Reveal>
        <h2 className="text-sm tracking-[0.2em] text-white/50 mb-16 uppercase font-bold">
          {t.label}
        </h2>
      </Reveal>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-24">
        {t.steps.map((step, i) => (
          <Reveal key={i} delay={i * 0.2} className="flex-1">
            <div className="text-6xl md:text-8xl font-bold text-white/5 mb-4">0{i + 1}</div>
            <div className="text-2xl md:text-3xl font-medium">{step.title}</div>
            <div className="text-base text-white/40 mt-1">{step.sub}</div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.6} className="text-center space-y-4">
        <p className="text-xl md:text-3xl text-white/50">
          {t.noFeed} {t.noAudience} {t.noPerformance}
        </p>
        <p className="text-4xl md:text-7xl font-bold text-white">{t.justConversation}</p>
      </Reveal>

    </Section>
  );
}