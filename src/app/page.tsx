import Hero from '@/components/landing/Hero'
import CompaniesCarousel from '@/components/landing/CompaniesCarousel'
import WhatWeDo from '@/components/landing/WhatWeDo/WhatWeDo'
import FeaturedProjects from '@/components/landing/FeaturedProjects/FeaturedProjects'
import CallToAction from '@/components/landing/CallToAction'

export default function HomePage() {

  return (
    <div className='overflow-x-clip'>
      <Hero />
      <CompaniesCarousel />
      <WhatWeDo />
      <FeaturedProjects />
      {/* Metrics */}
      {/* Meet the Team */}
      <CallToAction />
    </div>
  )
}