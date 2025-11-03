import type { LucideIcon } from 'lucide-react'
import {
  ArrowRightCircle,
  PartyPopper,
  Rocket,
  Repeat,
  Users,
  MonitorPlay,
  UserPlus,
} from 'lucide-react'

import type { ThemeId } from '@/theme/tokens'

export type TimelineEvent = {
  title: string
  timeframe?: string
  bullets: string[]
  image: string
  icon: LucideIcon
  accent: string
}

export type JoinFAQItem = {
  question: string
  answer: string
}

export type JoinHeroContent = {
  titlePrefix: string
  titleHighlight: string
  titleSuffix?: string
  description: string
}

const eventsTemplate = (orgShort: string): TimelineEvent[] => [
  {
    title: 'Apply & Get Onboarded',
    timeframe: '2–3 weeks before the quarter',
    bullets: [
      'Submit your application for a team role (developer, designer, or product).',
      'If accepted, you’ll be invited to onboarding and placed on a project team.',
      'Optional: prep resources and tech primers are provided if your project uses unfamiliar tools.',
    ],
    image: 'apply.svg',
    icon: UserPlus,
    accent: '#047C91',
  },
  {
    title: 'Project Kickoff & Orientation',
    timeframe: 'Weeks 0–1',
    bullets: [
      'Meet your teammates, leads, and stakeholders.',
      'Review the project scope, tech stack, and goals for the quarter.',
      'Set up repos, design systems, and productivity tools together.',
    ],
    image: 'onboarding.svg',
    icon: Rocket,
    accent: '#F59E42',
  },
  {
    title: 'Weekly Build Cycle',
    timeframe: 'Weeks 2–8',
    bullets: [
      'Kick off the week with tasks from the team board and align on priorities.',
      'Share async updates or hop into quick check-ins to surface blockers.',
      'Ship increments, review PRs, and demo at the end-of-week standup.',
    ],
    image: 'build.svg',
    icon: Repeat,
    accent: '#A259FF',
  },
  {
    title: 'Ongoing Mentorship & Support',
    timeframe: 'Throughout the quarter',
    bullets: [
      'Get mentorship from execs, alumni, and partner engineers.',
      'Pair on tricky problems and learn production best practices.',
      'Take more ownership as the quarter progresses.',
    ],
    image: 'mentorship.svg',
    icon: Users,
    accent: '#2EC4B6',
  },
  {
    title: 'Final Touches & Demo Prep',
    timeframe: 'Weeks 8–10',
    bullets: [
      'Polish features, handle QA, and cut scope where needed.',
      'Coordinate a cohesive story that highlights user impact.',
      'Rehearse your 5–10 minute presentation for Demo Day.',
    ],
    image: 'finalize.svg',
    icon: MonitorPlay,
    accent: '#F96E46',
  },
  {
    title: 'Present & Celebrate',
    timeframe: 'Weeks 10–11',
    bullets: [
      `Present your project to ${orgShort} leadership, alumni, and partner companies.`,
      'Celebrate with the community and capture photos for your portfolio.',
      'Your work will be featured across our site and socials.',
    ],
    image: 'present.svg',
    icon: PartyPopper,
    accent: '#43AA8B',
  },
  {
    title: 'Stay Involved After',
    timeframe: 'Ongoing',
    bullets: [
      'Some teams continue next quarter — stay on or help onboard new members.',
      'Return as a contributor, apply to be a Project Executive, or mentor new builders.',
    ],
    image: 'stay-in-touch.svg',
    icon: ArrowRightCircle,
    accent: '#F15BB5',
  },
]

const faqTemplate = (orgShort: string): JoinFAQItem[] => [
  {
    question: `Why should I join ${orgShort}?`,
    answer:
      'You’ll work on production-grade software for real users with mentorship, structured team processes, and a community that wants you to grow.',
  },
  {
    question: 'Who can join a project team?',
    answer:
      'Any UCSB student can apply — we welcome developers, designers, product thinkers, and operations folks eager to collaborate.',
  },
  {
    question: 'Do I need experience to join?',
    answer:
      'Not necessarily. Many members are shipping their first project. We provide onboarding, guides, and mentorship to help you ramp up.',
  },
  {
    question: 'How are teams structured?',
    answer:
      'Every team has a Project Executive plus builders across engineering, design, and product. You’ll collaborate through weekly standups, async updates, and GitHub workflows.',
  },
  {
    question: 'How can I stay in the loop?',
    answer:
      `Applications open 2–3 weeks before the quarter. Join our interest list or follow us on Instagram and LinkedIn for announcements.`,
  },
]

export const joinHeroContent: Record<ThemeId, JoinHeroContent> = {
  acm: {
    titlePrefix: 'Applications are ',
    titleHighlight: 'Closed',
    description:
      'Thank you for your interest in ACM Industry! We’ll be kicking off our next cycle in Fall 2025.',
  },
  gse: {
    titlePrefix: 'Applications are ',
    titleHighlight: 'Closed',
    description:
      'Thanks for your interest in Gaucho Software Engineers. We reopen applications at the start of each quarter — join the interest list so you don’t miss the next launch.',
  },
}

export const getJoinEvents = (theme: ThemeId): TimelineEvent[] =>
  eventsTemplate(theme === 'acm' ? 'ACM Industry' : 'GSE')

export const getJoinFAQ = (theme: ThemeId): JoinFAQItem[] =>
  faqTemplate(theme === 'acm' ? 'ACM Industry' : 'GSE')
