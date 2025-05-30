'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Users, Megaphone, Handshake } from 'lucide-react'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'
import React from 'react'

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
    description: 'Manage the projects, mentor students, and drive our projects to success.',
    icon: Users,
  },
  {
    title: 'Marketing Intern',
    description: 'Craft compelling graphics, videos, narratives, and more to grow our community and share our story.',
    icon: Megaphone,
  },
  {
    title: 'Marketing Director',
    description: 'Lead the marketing team and drive our marketing strategy to expand through UCSB and the Industry.',
    icon: Megaphone,
  },
  {
    title: 'Outreach Intern',
    description: 'Build relationships with industry partners. Help create opportunities for our teams and students to build.',
    icon: Handshake,
  },
  {
    title: 'Outreach Director',
    description: 'Lead the outreach team and drive our outreach strategy to connect us to the best companies in the industry.',
    icon: Handshake,
  }
]

export default function JoinRoles() {
  return (
    <section className="relative w-full px-6 py-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <StarField numberOfStars={80} />
      <SectionGlow size={700} opacity={0.03} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          All Our Roles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => {
            if (roles.length % 3 === 1 && idx === roles.length - 1) {
              return (
                <React.Fragment key={role.title}>
                  <div className="hidden lg:block" key="placeholder-before" />
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 0 25px rgba(255, 207, 82, 0.15)',
                      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="relative p-6 rounded-xl border border-white/10 bg-[var(--bg-tertiary)]/50 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-lg"
                        style={{ 
                          backgroundColor: 'rgba(255, 207, 82, 0.10)',
                          color: 'var(--accent-gold)'
                        }}
                      >
                        <role.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                        <p className="text-[var(--text-secondary)]">{role.description}</p>
                      </div>
                    </div>
                  </motion.div>
                  <div className="hidden lg:block" key="placeholder-after" />
                </React.Fragment>
              )
            }
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 25px rgba(255, 207, 82, 0.15)',
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                className="relative p-6 rounded-xl border border-white/10 bg-[var(--bg-tertiary)]/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ 
                      backgroundColor: 'rgba(255, 207, 82, 0.10)',
                      color: 'var(--accent-gold)'
                    }}
                  >
                    <role.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                    <p className="text-[var(--text-secondary)]">{role.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
          {roles.length % 3 === 2 && <div className="hidden lg:block" />}
        </div>
      </div>
    </section>
  )
} 