import TeamHero from '@/components/team/TeamHero';
import TeamFilterAndMembers from '@/components/team/TeamFilterAndMembers';
import TeamCTA from '@/components/team/TeamCallToAction';
export default function TeamPage() {
  return (
    <div>
      <TeamHero />
      <TeamFilterAndMembers />
      <TeamCTA />
    </div>
  )
}
