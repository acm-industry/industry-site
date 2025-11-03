import { Suspense } from 'react'
import Hero from '@/components/landing/Hero'
import CompaniesCarousel from '@/components/landing/CompaniesCarousel'
import WhatWeDo from '@/components/landing/WhatWeDo/WhatWeDo'
import FeaturedProjects from '@/components/landing/FeaturedProjects/FeaturedProjects'
import CallToAction from '@/components/landing/CallToAction'

export default function HomePage() {
  return (
    <div style={{ overflowX: 'clip', overflowY: 'visible' }}>
      {/* Wrap everything that might use router hooks */}
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <CompaniesCarousel />
        <WhatWeDo />
        <FeaturedProjects />
        <CallToAction />
      </Suspense>
    </div>
  )
}