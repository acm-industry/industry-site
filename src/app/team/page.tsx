import { Suspense } from 'react'
import TeamHero from '@/components/team/TeamHero'
import TeamFilterAndMembers from '@/components/team/TeamFilterAndMembers'
import TeamCTA from '@/components/team/TeamCallToAction'

export default function TeamPage() {
  return (
    <div className="overflow-x-clip">
      {/* Wrap potential client components that might use router hooks */}
      <Suspense fallback={<div>Loading team...</div>}>
        <TeamHero />
        <TeamFilterAndMembers />
      </Suspense>

      {/* Server-safe static section */}
      <TeamCTA />
    </div>
  )
}