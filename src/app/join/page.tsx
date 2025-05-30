import JoinHero from '@/components/join/JoinHero'
import JoinRoles from '@/components/join/JoinRoles'
import WorkInProgress from '@/components/global/WorkInProgress';
import JoinTimelineContainer from '@/components/join/JoinTimeline/JoinTimelineContainer';

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-black">
      <JoinHero />
      <JoinRoles />
      <JoinTimelineContainer />
      <WorkInProgress />
    </main>
  )
}
