'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Rocket, Users, LineChart } from 'lucide-react'
import Hero from '@/components/landing/Hero'
import WhatWeDo from '@/components/landing/WhatWeDo'

const stats = [
  { label: 'Members', value: 500 },
  { label: 'Projects', value: 72 },
  { label: 'Partners', value: 16 },
  { label: 'Workshops', value: 38 },
]

const timeline = [
  'Apply to Join',
  'Get Matched With a Project',
  'Meet Your Team',
  'Build Something Real',
  'Showcase at Industry Night',
]

export default function HomePage() {
  const [count, setCount] = useState(stats.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) =>
        prev.map((val, i) =>
          val < stats[i].value ? val + Math.ceil(stats[i].value / 30) : stats[i].value
        )
      )
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Hero />
      <WhatWeDo />

      {/* Programs Grid */}
      <section className="py-16 bg-gray-100 dark:bg-zinc-900 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { icon: <Rocket />, title: 'Startup Collabs', desc: 'Build MVPs with local founders.' },
            { icon: <Briefcase />, title: 'Industry Projects', desc: 'Work with real companies.' },
            { icon: <Users />, title: 'Student Teams', desc: 'Lead or join project groups.' },
            { icon: <LineChart />, title: 'Research & AI', desc: 'Experiment with cutting-edge tech.' },
          ].map((item, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="bg-white dark:bg-black rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 dark:border-gray-800 transition"
            >
              <div className="text-blue-600 dark:text-yellow-400 mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-blue-600 dark:text-yellow-400">
                {count[i]}
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white dark:from-indigo-950 dark:to-black px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">How It Works</h2>
          <div className="relative border-l-2 border-blue-300 dark:border-yellow-500 pl-6 space-y-12">
            {timeline.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[15px] top-1 w-3 h-3 rounded-full bg-blue-600 dark:bg-yellow-400"></div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 grayscale hover:grayscale-0 transition-all">
            {/* Replace with logos */}
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="h-16 bg-gray-300 dark:bg-zinc-800 rounded-md animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black text-center px-6">
        <h2 className="text-3xl font-bold">Ready to build something real?</h2>
        <p className="mt-2 text-sm">Applications are open. Projects are waiting.</p>
        <a
          href="/join"
          className="mt-6 inline-block bg-white dark:bg-black text-blue-600 dark:text-yellow-400 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Apply Now
        </a>
      </section>
    </>
  )
}