import { Suspense } from 'react'
import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectsFilterAndCards from '@/components/projects/ProjectsFilterAndCards'
import ScrollProjectShowcase from '@/components/projects/ProjectDetails/ProjectsDetails'
import ProjectsCTA from '@/components/projects/ProjectsCTA'

export default function ProjectsPage() {
  return (
    <div className="overflow-x-clip">
      {/* Wrap client-side or router-hook components in Suspense */}
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectsHero />
        <ProjectsFilterAndCards />
        <ScrollProjectShowcase />
      </Suspense>

      {/* Server-safe section */}
      <ProjectsCTA />
    </div>
  )
}