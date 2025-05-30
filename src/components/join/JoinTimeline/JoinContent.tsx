export default function JoinContent({ event }: { event: any }) {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-[var(--foreground)]">{event.title}</h2>
      {event.timeframe && (
        <span className="text-sm font-medium text-[var(--accent-gold)] bg-[var(--accent-gold)]/10 rounded px-3 py-1 w-fit">{event.timeframe}</span>
      )}
      <ul className="list-disc ml-6 text-[var(--text-secondary)] text-base space-y-1">
        {event.bullets.map((b: string, idx: number) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  )
}