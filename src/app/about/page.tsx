import { Suspense } from 'react'
import AboutHero from '@/components/about/AboutHero'
import AboutStorySection from '@/components/about/AboutStory'
import AboutMetricsSection from '@/components/about/AboutMetrics'
import AboutCTA from '@/components/about/AboutCallToAction'
import CompaniesCarousel from '@/components/landing/CompaniesCarousel'

export default function AboutPage() {
  return (
    <div className="overflow-x-clip">
      {/* Wrap any client components that might use router hooks */}
      <Suspense fallback={<div>Loading...</div>}>
        <AboutHero />
        <AboutStorySection />
        <CompaniesCarousel />
      </Suspense>

      {/* Pure server-safe sections */}
      <AboutMetricsSection />
      <AboutCTA />
    </div>
  )
}