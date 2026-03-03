import { useState } from 'react';
import type { TAgeDialog } from '../../i18n/translations';

interface AgeDialogProps {
  t: TAgeDialog;
  chatUrl: string;
  children: (open: () => void) => React.ReactNode;
}

export function AgeDialog({ t, chatUrl, children }: AgeDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children(() => setOpen(true))}

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="fixed inset-0 bg-black/80" onClick={() => setOpen(false)} />

          <div className="relative z-10 bg-[#222] border border-white/10 rounded-lg p-6 shadow-2xl w-full max-w-lg mx-4">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 opacity-60 hover:opacity-100 transition-opacity text-white"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2 className="text-lg font-semibold text-white mb-3">{t.title}</h2>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">{t.text}</p>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm font-medium border border-white/20 text-white rounded-md hover:bg-white/5 transition-colors"
              >
                {t.cancel}
              </button>
              <button
                onClick={() => { window.location.href = chatUrl; }}
                className="px-4 py-2 text-sm font-medium bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
              >
                {t.confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}