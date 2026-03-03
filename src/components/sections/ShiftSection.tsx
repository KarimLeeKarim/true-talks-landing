import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { SoundWave } from '../ui/SoundWave';
import type { TShift } from '../../i18n/translations';

interface ShiftSectionProps {
  t: TShift;
}

export function ShiftSection({ t }: ShiftSectionProps) {
  return (
    <Section>

      <Reveal>
        <h2 className="text-sm tracking-[0.2em] text-blue-400 mb-12 uppercase font-bold">
          {t.label}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-4xl md:text-7xl font-bold mb-16">
          {t.headline} <span className="text-blue-400">{t.headlineAccent}</span>.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Strikethrough list */}
        <div className="space-y-6">
          {t.strikethrough.map((text, i) => (
            <Reveal key={i} delay={0.2 + i * 0.1}>
              <p className="text-2xl md:text-4xl text-white/50 line-through decoration-red-500/50 decoration-2">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Voice + qualities */}
        <div className="flex flex-col justify-center mt-12 md:mt-0">
          <Reveal delay={0.8}>
            <p className="text-5xl md:text-8xl font-bold text-white mb-8">{t.voice}</p>
          </Reveal>
          <div className="space-y-2">
            {t.qualities.map((text, i) => (
              <Reveal key={i} delay={1 + i * 0.1}>
                <div className="flex items-center gap-4">
                  <SoundWave className="w-6 h-6" color="bg-blue-400" />
                  <p className="text-xl md:text-3xl text-white/90">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}