'use client'

import { useState } from 'react'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'
import { roles, teamMembers } from '@/data/TeamData'

interface TeamMember {
  name: string
  group: string[]
  role: string
  img: string
  linkedin: string
}

export default function TeamSection() {
  const [filter, setFilter] = useState('All')

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
    <section className="relative w-full px-6 sm:px-10 lg:px-20 py-24 bg-[var(--background)] text-[var(--foreground)] z-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {roles.map(role => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={clsx(
                'px-5 py-2.5 text-base font-medium rounded-full border transition-all duration-200 shadow-sm',
                filter === role
                  ? 'bg-[var(--accent-gold)] text-black border-transparent shadow-[0_0_15px_rgba(255,207,82,0.4)]'
                  : 'border-white/20 text-white hover:bg-white/10 hover:border-white/30'
              )}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Split by section if All */}
        {filter === 'All' ? (
          groupedByPrimary.map(({ role, members }) => (
            <div key={role} className="mb-16">
              <h3 className="text-xl font-semibold text-left mb-6 border-l-4 border-[var(--accent-gold)] pl-4">
                {role}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {members.map((member, idx) => (
                  <TeamCard key={idx} member={member} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// Team card component
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-md backdrop-blur-sm transition hover:scale-[1.02]">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4 sm:mb-5 rounded-xl overflow-hidden border-4 border-[var(--accent-gold)] shadow">
        <Image src={member.img} alt={member.name} fill className="object-cover" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-3 sm:mb-4">{member.role}</p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm sm:text-base font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 text-black shadow-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,207,82,0.5)] hover:scale-105"
      >
        <Linkedin size={18} />
        LinkedIn
      </a>
    </div>
  )
}