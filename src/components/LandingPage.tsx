import { translations, type Lang } from '../i18n/translations';
import { BackgroundWave } from './ui/BackgroundWave';
import { NavBar } from './ui/NavBar';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { ShiftSection } from './sections/ShiftSection';
import { WhatHappensSection } from './sections/WhatHappensSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { SafetySection } from './sections/SafetySection';
import { HopeSection } from './sections/HopeSection';
import { ClosingSection } from './sections/ClosingSection';

interface LandingPageProps {
  lang: Lang;
}

export default function LandingPage({ lang }: LandingPageProps) {
  const t = translations[lang];
  const appUrl = (import.meta as any).env?.PUBLIC_APP_URL ?? 'http://localhost:5173';
  const chatUrl = `${appUrl}/chat`;
  const authUrl = `${appUrl}/auth`;

  return (
    <div className="bg-[#1a1a1a] text-[#f5f5f5] min-h-screen selection:bg-amber-500/30 selection:text-white font-sans overflow-x-hidden">
      <BackgroundWave />
      <NavBar brand={t.brand} lang={lang} />

      <main className="relative z-10">
        <HeroSection        t={t}           chatUrl={chatUrl} authUrl={authUrl} />
        <ProblemSection     t={t.problem}                                        />
        <ShiftSection       t={t.shift}                                          />
        <WhatHappensSection t={t.whatHappens}                                    />
        <HowItWorksSection  t={t.howItWorks}                                     />
        <SafetySection      t={t.safety}                                         />
        <HopeSection        t={t.hope}                                           />
        <ClosingSection     t={t}           chatUrl={chatUrl} authUrl={authUrl} />
      </main>
    </div>
  );
}