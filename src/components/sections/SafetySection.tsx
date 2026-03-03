import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import type { TSafety } from '../../i18n/translations';

interface SafetySectionProps {
  t: TSafety;
}

export function SafetySection({ t }: SafetySectionProps) {
  return (
    <Section>
      <div className="bg-red-900/10 border border-red-500/20 p-8 md:p-16 rounded-3xl relative overflow-hidden">

        {/* Decorative shield icon */}
        <div className="absolute top-0 right-0 p-8 opacity-20">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-red-500">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <Reveal>
          <h2 className="text-sm tracking-[0.2em] text-red-400 mb-12 uppercase font-bold">
            {t.label}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Safety items */}
          <div className="space-y-6">
            {t.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full shrink-0" />
                  <p className="text-xl md:text-2xl font-light">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Statements */}
          <div className="flex flex-col justify-center space-y-6">
            <Reveal delay={0.4}>
              <p className="text-3xl md:text-4xl font-bold text-white">{t.respect}</p>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="text-3xl md:text-4xl font-bold text-white/70">{t.safetyLine}</p>
            </Reveal>
          </div>

        </div>
      </div>
    </Section>
  );
}