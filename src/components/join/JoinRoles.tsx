'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Users, Megaphone, Handshake } from 'lucide-react'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'
import { useTheme } from '@/theme/ThemeContext'
import clsx from 'clsx'

const roles = [
  {
    title: 'Developer',
    description: 'Build impactful solutions using cutting-edge technologies. Work on real projects that make a difference.',
    icon: Code2,
  },
  {
    title: 'Project Executive',
    description: 'Lead teams and drive project success. Develop leadership skills while managing real-world projects.',
    icon: Users,
  },
  {
    title: 'Technical Director',
    description: 'Manage projects, mentor students, and drive our projects to success.',
    icon: Users,
  },
  {
    title: 'Marketing Intern',
    description: 'Craft compelling graphics, videos, narratives, and more to grow our community and share our story.',
    icon: Megaphone,
  },
  {
    title: 'Marketing Director',
    description: 'Lead the marketing team and drive our strategy to expand through UCSB and the Industry.',
    icon: Megaphone,
  },
  {
    title: 'Outreach Intern',
    description: 'Build relationships with industry partners. Help create opportunities for our teams and students to build.',
    icon: Handshake,
  },
  {
    title: 'Outreach Director',
    description: 'Lead the outreach team and connect us with top companies in the industry.',
    icon: Handshake,
  }
]

export default function JoinRoles() {
  const { theme } = useTheme()
  const isACM = theme === 'acm'

  return (
    <section
      className={clsx(
        'relative w-full px-6 py-24 overflow-hidden transition-colors duration-500',
        isACM ? 'text-white' : 'text-[var(--color-text-primary)]'
      )}
      style={{
        background: 'var(--color-background)',
      }}
    >
      {/* Background Effects */}
      <StarField numberOfStars={100} />
      <SectionGlow
        size={isACM ? 800 : 850}
        opacity={isACM ? 0.035 : 0.05}
        color={isACM ? 'var(--color-accent-primary)' : 'var(--color-accent-highlight)'}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{
            color: 'var(--color-accent-primary)',
            textShadow: '0 0 15px var(--color-accent-muted)',
          }}
        >
          All Our Roles
        </motion.h2>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => {
            // Fix grid alignment when last row has only 1 card
            const isSingleInLastRow = roles.length % 3 === 1 && idx === roles.length - 1

            const Card = (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={clsx(
                  'relative p-6 rounded-xl border backdrop-blur-sm transition-shadow duration-500',
                  isACM
                    ? 'border-white/10 bg-white/[0.03] hover:shadow-[0_0_25px_var(--color-accent-muted)]'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)]/60 hover:shadow-[0_0_25px_var(--color-accent-muted)]'
                )}
                style={{
                  boxShadow: '0 0 20px var(--color-accent-muted)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--color-accent-muted)',
                      color: 'var(--color-accent-primary)',
                    }}
                  >
                    <role.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {role.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">
                      {role.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )

            // Center the last single card if uneven
            if (isSingleInLastRow) {
              return (
                <React.Fragment key={role.title}>
                  <div className="hidden lg:block" />
                  {Card}
                  <div className="hidden lg:block" />
                </React.Fragment>
              )
            }

            return Card
          })}

          {/* Balance last row if only 2 items */}
          {roles.length % 3 === 2 && <div className="hidden lg:block" />}
        </div>
      </div>
    </section>
  )
}