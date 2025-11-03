import { Suspense } from 'react'
import JoinHero from '@/components/join/JoinHero'
import JoinRoles from '@/components/join/JoinRoles'
import JoinTimeline from '@/components/join/JoinTimeline/JoinTimeline'
import JoinCallToAction from '@/components/join/JoinCallToAction'
import JoinFAQ from '@/components/join/JoinFAQ/JoinFAQ'

function JoinContent() {
  return (
    <>
      <JoinHero />
      <JoinRoles />
      <JoinTimeline />
      <JoinFAQ />
      <JoinCallToAction />
    </>
  )
}

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      {/* wrap all client subtrees in Suspense */}
      <Suspense fallback={<div>Loading join page...</div>}>
        <JoinContent />
      </Suspense>
    </main>
  )
}