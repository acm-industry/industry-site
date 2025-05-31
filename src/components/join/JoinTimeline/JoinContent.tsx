import React from "react";

interface Event {
  title: string;
  timeframe?: string;
  bullets: string[];
  icon?: React.ReactNode;
  iconAccent?: string;
}

export default function JoinContent({ event }: { event: Event }) {
  const accent = event.iconAccent || 'var(--accent-blue)';
  const boxShadow = accent.startsWith('var(')
    ? '0 0 0 4px rgba(255, 207, 82, 0.2)'
    : `0 0 0 4px ${accent}33`;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {event.icon && (
          <span
            className="flex items-center justify-center bg-[var(--background)] rounded-full p-2 mr-6 md:mr-0"
            style={{
              width: 48,
              height: 48,
              border: `4px solid ${accent}`,
              boxShadow,
            }}
          >
            {event.icon}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
          {event.title}
        </h2>
      </div>
      {event.timeframe && (
        <span className="text-sm font-semibold text-[var(--accent-gold)] bg-[var(--accent-gold)]/10 rounded px-3 py-1 w-fit mb-1">
          {event.timeframe}
        </span>
      )}
      <ul className="list-disc ml-6 text-[var(--text-secondary)] text-base space-y-1 mr-5 md:mr-10">
        {event.bullets.map((b: string, idx: number) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  )
}