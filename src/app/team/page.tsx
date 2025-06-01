import TeamHero from '@/components/team/TeamHero';
import TeamFilterAndMembers from '@/components/team/TeamFilterAndMembers';
import TeamCTA from '@/components/team/TeamCallToAction';
export default function TeamPage() {
  return (
    <div className='overflow-x-clip'>
      <TeamHero />
      <TeamFilterAndMembers />
      <TeamCTA />
    </div>
  )
}
