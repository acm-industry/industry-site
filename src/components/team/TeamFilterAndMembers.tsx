'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'
import { roles, teamMembers } from '@/data/TeamData'
import { projects as allProjects } from '@/data/ProjectsData'

interface TeamMember {
  name: string
  group: string[]
  role: string
  img: string
  linkedin: string
  project?: string
}

export default function TeamSection() {
  const [filter, setFilter] = useState('All')
  // Used to force re-mount cards on filter change
  const [filterAnimationKey, setFilterAnimationKey] = useState(0)

  // When filter changes, increment the animation key
  function handleSetFilter(role: string) {
    setFilter(role)
    setFilterAnimationKey(prev => prev + 1)
  }

  // Filtered members logic
  const filteredMembers =
    filter === 'All'
      ? teamMembers
      : teamMembers.filter(member => member.group.includes(filter))

  // Grouped by primary group for "All"
  const groupedByPrimary = roles
    .filter(role => role !== 'All')
    .map(role => ({
      role,
      members: teamMembers.filter(member => member.group[0] === role),
    }))
    .filter(group => group.members.length > 0)

  return (
    <motion.section 
      className="relative w-full px-6 sm:px-10 lg:px-20 py-24 bg-[var(--background)] text-[var(--foreground)] z-10 smooth-element"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Filter Chips */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {roles.map((role) => (
            <motion.button
              key={role}
              onClick={() => handleSetFilter(role)}
              className={clsx(
                'px-5 py-2.5 text-base font-medium rounded-full border transition-all duration-200 shadow-sm smooth-element',
                filter === role
                  ? 'bg-[var(--color-accent-primary)] text-black border-transparent shadow-[0_0_15px_var(--color-accent-muted)]'
                  : 'border-white/20 text-white hover:bg-white/10 hover:border-white/30'
              )}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.08, ease: [0.16, 1, 0.3, 1] }
              }}
              transition={{ duration: 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              {role}
            </motion.button>
          ))}
        </motion.div>

        {/* Split by section if All */}
        <AnimatePresence mode="wait">
          {filter === 'All' ? (
            <motion.div
              key="all-sections"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              {groupedByPrimary.map(({ role, members }, sectionIndex) => (
                <motion.div 
                  key={role} 
                  className="mb-16"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: sectionIndex * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{ willChange: 'transform, opacity' }}
                >
      <motion.h3 
        className="text-xl font-semibold text-left mb-6 border-l-4 border-[var(--color-accent-primary)] pl-4 smooth-element"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: sectionIndex * 0.1 + 0.2,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    {role}
                  </motion.h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    <AnimatePresence>
                      {members.map((member, idx) => (
                        <TeamCard 
                          key={`${role}-${filterAnimationKey}-${member.name}`} 
                          member={member} 
                          delay={sectionIndex * 0.1 + idx * 0.05}
                          filterKey={filterAnimationKey}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={`filter-${filter}`}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              <AnimatePresence>
                {filteredMembers.map((member, idx) => (
                  <TeamCard 
                    key={`${filterAnimationKey}-${member.name}`} 
                    member={member} 
                    delay={idx * 0.05}
                    filterKey={filterAnimationKey}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Add custom CSS for smooth animations */}
      <style jsx>{`
        .smooth-element {
          will-change: transform, opacity;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </motion.section>
  )
}

type TeamCardProps = { member: TeamMember; delay?: number; filterKey: number }
function TeamCard({ member, delay = 0, filterKey }: TeamCardProps) {
  // Use filterKey in keys for children to force re-mount on filter change
  // Project lookup
  const project = member.project ? allProjects.find(p => p.id === member.project) : null;
  const accent = project?.colors?.accent || '#ffffff';
  const background = project?.colors?.background || '#0B0B0B';
  const logoSrc = project?.company_logo ? `/companies/` + project.company_logo : null;

  return (
    <motion.div 
      className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-md backdrop-blur-sm smooth-element"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        boxShadow: '0 10px 30px var(--color-accent-muted)',
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
      }}
      whileTap={{ scale: 0.95 }}
      style={{ willChange: 'transform' }}
    >
      <motion.div 
        className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4 sm:mb-5 rounded-xl overflow-hidden border-4 border-[var(--color-accent-primary)] shadow smooth-element"
        initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{
          scale: 1.05,
          rotateZ: 2,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }}
        style={{ willChange: 'transform' }}
        key={`img-${filterKey}`}
      >
        <Image src={member.img} alt={member.name} fill className="object-cover" unoptimized={true} priority/>
      </motion.div>
      <motion.h3 
        className="text-lg sm:text-xl font-bold mb-1"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ 
          duration: 0.4, 
          delay: delay + 0.05,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={{ willChange: 'transform, opacity' }}
        key={`name-${filterKey}`}
      >
        {member.name}
      </motion.h3>
      <motion.p 
        className="text-sm sm:text-base text-[var(--text-secondary)] mb-3 sm:mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ 
          duration: 0.4, 
          delay: delay + 0.1,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={{ willChange: 'transform, opacity' }}
        key={`role-${filterKey}`}
      >
        {member.role}
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-2 mt-2 items-center justify-center">
        {project && logoSrc && (
          <motion.a
            href={`/projects?project=${project.id}`}
            className="inline-flex items-center justify-center w-22 h-10 rounded-full shadow border-1 transition-all duration-300 p-3"
            style={{
              willChange: 'transform',
              borderColor: accent,
              background: background,
              transition: 'box-shadow 0.08s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            whileHover={{
              scale: 1.08,
              y: -2,
              boxShadow: `0 0 10px 2px ${accent}66`,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={logoSrc} alt={project.name + ' logo'} width={70} height={70} className="object-contain mx-auto" unoptimized={true} priority />
          </motion.a>
        )}
        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 text-black shadow transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ 
            scale: 1.08, 
            y: -2,
            boxShadow: '0 0 10px 2px rgba(255, 207, 82, 0.25)',
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
          }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            willChange: 'transform',
            transition: 'all 0.08s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          key={`linkedin-${filterKey}`}
        >
          <Linkedin size={18} />
          LinkedIn
        </motion.a>
      </div>
    </motion.div>
  )
}
