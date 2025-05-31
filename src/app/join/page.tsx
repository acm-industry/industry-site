import JoinHero from '@/components/join/JoinHero'
import JoinRoles from '@/components/join/JoinRoles'
import JoinTimeline from '@/components/join/JoinTimeline/JoinTimeline';

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-black">
      <JoinHero />
      <JoinRoles />
      <JoinTimeline />
    </main>
  )
}
