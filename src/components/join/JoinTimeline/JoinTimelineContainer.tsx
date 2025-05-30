'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import JoinContent from './JoinContent'
import JoinImage from './JoinImage'

const events = [
  {
    title: 'Pre-Quarter: Apply & Get Onboarded',
    timeframe: '2–3 weeks before quarter',
    bullets: [
      'Submit your application for a team role (developer, designer, etc.)',
      'If accepted, you\'ll be invited to onboarding and placed on a project team',
      'Optional: If your project involves advanced tools or concepts, you\'ll receive resources and instruction to get you up to speed',
    ],
    image: '/placeholder-timeline-1.png',
  },
  {
    title: 'Week 0–1: Project Kickoff + Onboarding',
    bullets: [
      'Meet your team, Project Executive, and other students',
      'Get introduced to the project scope, technical stack, and goals',
      'Review documentation, GitHub repos, and tools you\'ll use',
      'If needed, complete mini-lessons or tutorials based on your project (e.g. learning Supabase, ARKit, Flask, etc.)',
    ],
    image: '/placeholder-timeline-2.png',
  },
  {
    title: 'Week 2–8: Weekly Build Cycle',
    bullets: [
      'Each week follows a consistent rhythm:',
      'Start of Week: You\'ll be assigned specific tasks from the project GitHub issue board, based on the roadmap your team defined with leadership',
      'Mid-Week Check-In: Quick async update in Discord threads or a short call. Discuss blockers, progress, and if help is needed',
      'End-of-Week Standup: Join your team\'s standup meeting, share what you\'ve built, demo your work, and get feedback',
      'If your task is complete, you\'ll be assigned a new one or continue improving',
    ],
    image: '/placeholder-timeline-3.png',
  },
  {
    title: 'Throughout the Quarter',
    bullets: [
      'You\'ll get mentorship from Project Execs, leads, and sometimes alumni',
      'Technical leads may jump in to help with complex issues',
      'You\'ll gradually gain more autonomy over your section of the project',
    ],
    image: '/placeholder-timeline-4.png',
  },
  {
    title: 'Week 8–10: Wrap-Up + Demo Prep',
    bullets: [
      'Polish your final features and fix bugs',
      'Collaborate with your team to prep a demo',
      'Rehearse your 5–10 minute presentation',
    ],
    image: '/placeholder-timeline-5.png',
  },
  {
    title: 'Week 10–11: Wrap-Up + Demo Prep',
    bullets: [
      'Present your work to other ACM students and project partners',
      'Attend the social event + celebration',
      'Your work will be featured on our site, Instagram, and LinkedIn',
    ],
    image: '/placeholder-timeline-6.png',
  },
  {
    title: 'After the Project',
    bullets: [
      'Some projects continue into the next quarter — you may stay on or help onboard the next group',
      'You\'re welcome to return as a developer, designer, or even apply to be a Project Executive next time!',
    ],
    image: '/placeholder-timeline-7.png',
  },
];

export default function StickyProjectTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLDivElement | null>(null)
  const [lineTop, setLineTop] = useState(0)
  const [lineHeight, setLineHeight] = useState(0)

  const timelineHeightVh = events.length * 120 + 20;

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const idx = Math.floor(v * events.length)
      setCurrentIndex(Math.min(events.length - 1, idx))
    })
  }, [scrollYProgress])

  useEffect(() => {
    function updateLine() {
      if (sectionRef.current && headingRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        const headingRect = headingRef.current.getBoundingClientRect()
        const top = headingRect.bottom - sectionRect.top
        setLineTop(top + 50)
        setLineHeight(sectionRect.height - top - 200)
      } else {
        setLineTop(160)
        setLineHeight(900)
      }
    }
    updateLine()
    window.addEventListener('resize', updateLine)
    return () => window.removeEventListener('resize', updateLine)
  }, [])

  return (
    <section ref={el => {
      containerRef.current = el as HTMLDivElement | null;
      sectionRef.current = el as HTMLDivElement | null;
    }} className="relative w-full h-[900vh] bg-[var(--background)] text-[var(--foreground)] px-6 py-20">
      {/* Section Title & Subheading */}
      <div ref={headingRef} className="relative z-10 max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-[0_0_20px_rgba(255,207,82,0.10)]">
          Project <span className="text-[var(--accent-gold)]" style={{textShadow: '0 0 20px rgba(255, 207, 82, 0.3)'}}>Lifeline</span>
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">See what your ACM Industry quarter looks like, from onboarding to demo day.</p>
      </div>

      {/* Vertical gold line (starts after heading) */}
      <div className="absolute left-1/2 z-0" style={{top: lineTop, height: `calc(${timelineHeightVh}vh - ${lineTop}px)`}}>
        <div
          className="w-[2px] h-full -translate-x-1/2"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, var(--accent-gold) 7%, var(--accent-gold) 93%, transparent 100%)'
          }}
        />
      </div>

      {/* Timeline stacked sticky cards */}
      <div className="relative max-w-6xl mx-auto" style={{ minHeight: `${timelineHeightVh}vh` }}>
        {events.map((event, idx) => (
          <div key={event.title} style={{ height: '120vh' }}>
            <div className="sticky top-1/4 h-[40vh] flex items-center justify-between">
              <JoinContent event={event} />
              {/* Gold dot between content and image */}
              <div className="w-8 flex justify-center">
                <div className="w-7 h-7 rounded-full bg-[var(--accent-gold)] shadow-lg border-7 border-[var(--background)]" />
              </div>
              <JoinImage image={event.image} />
            </div>
          </div>
        ))}
        {/* Hidden spacer to help push last card up */}
          <div style={{ height: '20vh' }}>
            <div className="sticky top-1/4 h-[10vh] flex items-center justify-between"/>
          </div>
      </div>
    </section>
  )
}