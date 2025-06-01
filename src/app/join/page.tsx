import JoinHero from '@/components/join/JoinHero'
import JoinRoles from '@/components/join/JoinRoles'
import JoinTimeline from '@/components/join/JoinTimeline/JoinTimeline';
import JoinCallToAction from '@/components/join/JoinCallToAction';
import JoinFAQ from '@/components/join/JoinFAQ/JoinFAQ';

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <JoinHero />
      <JoinRoles />
      <JoinTimeline />
      <JoinFAQ/>
      <JoinCallToAction />
    </main>
  )
}
