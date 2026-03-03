import { clsx } from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={clsx(
        'flex flex-col justify-center px-6 py-20 md:px-20 md:py-28 max-w-7xl mx-auto relative z-10',
        className,
      )}
    >
      {children}
    </section>
  );
}
