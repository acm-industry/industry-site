'use client'

import { useRef, useState, useEffect } from 'react'
import JoinContent from './JoinContent'
import JoinImage from './JoinImage'
import { events } from '@/data/JoinData';
import StarField from '@/components/global/StarField';

export default function JoinTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLDivElement | null>(null)
  const [lineTop, setLineTop] = useState(0)
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineHeightVh = events.length * 120 + 20;

  useEffect(() => {
    function updateLine() {
      if (sectionRef.current && headingRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        const headingRect = headingRef.current.getBoundingClientRect()
        const top = headingRect.bottom - sectionRect.top
        setLineTop(top + 50)
      } else {
        setLineTop(160)
      }
    }
    updateLine()
    window.addEventListener('resize', updateLine)
    return () => window.removeEventListener('resize', updateLine)
  }, [])

  useEffect(() => {
    function onScroll() {
      const offsets = cardRefs.current.map(ref =>
        ref ? Math.abs(ref.getBoundingClientRect().top + window.innerHeight * 0.15) : Infinity
      );
      const minIdx = offsets.indexOf(Math.min(...offsets));
      setActiveIdx(minIdx);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={el => {
        containerRef.current = el as HTMLDivElement | null;
        sectionRef.current = el as HTMLDivElement | null;
      }}
      className="relative w-full h-auto pt-32 bg-[var(--background)] text-[var(--foreground)] px-6 overflow-x-clip"
    >
      <StarField numberOfStars={1000} />

      {/* Section Title & Subheading */}
      <div
        ref={headingRef}
        className="relative z-10 max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-[0_0_20px_rgba(255,207,82,0.10)]">
          Project{' '}
          <span
            className="text-[var(--accent-gold)]"
            style={{ textShadow: '0 0 20px rgba(255, 207, 82, 0.3)' }}
          >
            Lifeline
          </span>
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          See what your ACM Industry quarter looks like, from onboarding to demo
          day.
        </p>
      </div>

      {/* Vertical gold line (starts after heading) */}
      <div
        className="absolute z-0 right-6 md:left-1/2"
        style={{
          top: lineTop,
          height: `calc(${timelineHeightVh}vh - ${lineTop}px)`,
        }}
      >
        <div
          className="w-[4px] h-full md:-translate-x-1/2"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, var(--accent-gold) 7%, var(--accent-gold) 93%, transparent 100%)',
          }}
        />
      </div>

      {/* Timeline stacked sticky cards */}
      <div
        className="relative max-w-6xl mx-auto"
        style={{ minHeight: `${timelineHeightVh}vh` }}
      >
        {events.map((event, idx) => (
          <div
            key={event.title}
            ref={el => { cardRefs.current[idx] = el; }}
            style={{ height: '120vh' }}
            className={`transition-opacity duration-300 ${activeIdx === idx ? 'opacity-100' : 'opacity-30'}`}
          >
            <div className="sticky top-1/4 h-[70vh] md:h-[45vh] flex flex-col md:flex-row items-center md:justify-between">
              {/* 1) CONTENT */}
              <div className="order-1 w-full md:w-1/2">
                <JoinContent event={event} />
              </div>

              {/* 2) DOT */}
              <div className="order-2 ml-6 md:ml-0 w-full flex justify-end md:w-8 md:justify-center mt-4 md:mt-0">
                <div className="w-8 h-8 rounded-full bg-[var(--accent-gold)] shadow-lg border-7 border-[var(--background)]" />
              </div>

              {/* 3) IMAGE */}
              <div className="order-3 w-full md:w-1/2 mt-4 md:mt-0">
                <JoinImage image={event.image} />
              </div>
            </div>
          </div>
        ))}

        {/* Hidden spacer to help push last card up */}
        <div style={{ height: '20vh' }}>
          <div className="sticky top-3/5 h-[5vh] flex items-center justify-between" />
        </div>
      </div>
    </section>
  )
}