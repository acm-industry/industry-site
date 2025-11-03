import React from "react";
import type { TimelineEvent } from "@/data/JoinData";

export default function JoinContent({ event }: { event: TimelineEvent }) {
  const accent = event.accent || 'var(--color-accent-primary)';
  const boxShadow = accent.startsWith('var(')
    ? '0 0 0 4px var(--color-accent-muted)'
    : `0 0 0 4px ${accent}33`;
  const Icon = event.icon;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {Icon && (
          <span
            className="flex items-center justify-center bg-[var(--color-background)] rounded-full p-2 mr-6 md:mr-0"
            style={{
              width: 48,
              height: 48,
              border: `4px solid ${accent}`,
              boxShadow,
            }}
          >
            <Icon className="w-9 h-9" color={accent} />
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
          {event.title}
        </h2>
      </div>
      {event.timeframe && (
        <span className="text-sm font-semibold text-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/15 rounded px-3 py-1 w-fit mb-1">
          {event.timeframe}
        </span>
      )}
      <ul className="list-disc ml-6 text-[var(--color-text-secondary)] text-base space-y-1 mr-5 md:mr-10">
        {event.bullets.map((b: string, idx: number) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  )
}
