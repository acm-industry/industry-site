import type { LucideIcon } from 'lucide-react'
import {
  GraduationCap,
  Handshake,
  Rocket,
  Braces,
  NotebookPen,
  BadgeCheck,
  ArrowRight,
  FolderKanban,
  Terminal,
  Users2,
} from 'lucide-react'

import type { ThemeId } from '@/theme/tokens'

type CTAButton = {
  label: string
  href: string
  icon: LucideIcon
}

type CTAContent = {
  heading: string
  description: string
  primary: CTAButton
  secondary: CTAButton
}

type WhatWeDoLink = {
  text: string
  icon: LucideIcon
}

export type WhatWeDoCard = {
  title: string
  description: string
  src: string
  link: string
  icon: LucideIcon
  link_value: WhatWeDoLink
}

type WhatWeDoContent = {
  titleWhite: string
  titleAccent: string
  description: string
  cards: WhatWeDoCard[]
}

type FeaturedProjectsContent = {
  titleWhite: string
  titleAccent: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export type LandingContent = {
  cta: CTAContent
  whatWeDo: WhatWeDoContent
  featuredProjects: FeaturedProjectsContent
}

const baseCards = ({ orgName }: { orgName: string }): WhatWeDoCard[] => [
  {
    title: 'Industry-Driven Projects',
    description:
      'We partner with real companies to solve meaningful problems — giving students experience with the tools, teams, and timelines that define modern product builds.',
    src: 'parallax/industry-driven.svg',
    link: '/services',
    icon: Rocket,
    link_value: {
      text: 'Explore Services',
      icon: FolderKanban,
    },
  },
  {
    title: 'Student-Built. Production-Ready.',
    description:
      "Our teams run the full lifecycle — discovery, design, implementation, deployment — using industry-standard workflows so deliverables are ready for real users.",
    src: 'parallax/pair-programming.svg',
    link: '/projects',
    icon: Braces,
    link_value: {
      text: 'View Projects',
      icon: Terminal,
    },
  },
  {
    title: 'Resume-Backed Experience',
    description:
      'Every engagement creates portfolio-grade work and stories recruiters care about. Students leave with code, commits, and confidence.',
    src: 'parallax/resume-backed.svg',
    link: '/join',
    icon: NotebookPen,
    link_value: {
      text: 'Join the Team',
      icon: ArrowRight,
    },
  },
  {
    title: 'Built with Top UCSB Talent',
    description:
      `For partners, ${orgName} represents a curated roster of Gaucho engineers — collaborative, vetted, and ready to ship.`,
    src: 'parallax/proud-coder.svg',
    link: '/team',
    icon: BadgeCheck,
    link_value: {
      text: 'Meet the Builders',
      icon: Users2,
    },
  },
]

export const landingContent: Record<ThemeId, LandingContent> = {
  acm: {
    cta: {
      heading: 'Get Involved with ACM.Industry',
      description:
        "Whether you're a student ready to learn by building or a company seeking a reliable engineering partner, let's create something impactful together.",
      primary: {
        label: 'For Students',
        href: '/join',
        icon: GraduationCap,
      },
      secondary: {
        label: 'For Companies',
        href: '/services',
        icon: Handshake,
      },
    },
    whatWeDo: {
      titleWhite: 'What We',
      titleAccent: 'Do',
      description:
        'We connect UCSB students with industry to build real products, solve meaningful problems, and shape the future of tech — together.',
      cards: baseCards({ orgName: 'ACM.Industry' }),
    },
    featuredProjects: {
      titleWhite: 'Featured',
      titleAccent: 'Projects',
      description:
        'See how our student teams build real products for real companies — creative, impactful, and industry-ready.',
      ctaLabel: 'View All Projects',
      ctaHref: '/projects',
    },
  },
  gse: {
    cta: {
      heading: 'Build with Gaucho Software Engineers',
      description:
        'GSE unites UCSB builders who want hands-on impact. Join a team, mentor rising talent, or partner with us to deliver production software.',
      primary: {
        label: 'Join GSE',
        href: '/join',
        icon: GraduationCap,
      },
      secondary: {
        label: 'Partner with GSE',
        href: '/services',
        icon: Handshake,
      },
    },
    whatWeDo: {
      titleWhite: 'How Gauchos',
      titleAccent: 'Build',
      description:
        'GSE pairs ambitious students with real stakeholders so every project ships value for campus, community, and industry partners.',
      cards: baseCards({ orgName: 'GSE' }).map((card, index) => {
        if (index === 3) {
          return {
            ...card,
            link_value: { ...card.link_value, text: 'Meet Our Gauchos' },
          }
        }
        if (index === 0) {
          return {
            ...card,
            link_value: { ...card.link_value, text: 'See GSE Services' },
          }
        }
        if (index === 1) {
          return {
            ...card,
            link_value: { ...card.link_value, text: 'Explore Success Stories' },
          }
        }
        return card
      }),
    },
    featuredProjects: {
      titleWhite: 'Gaucho-Built',
      titleAccent: 'Showcase',
      description:
        'Browse the products our Gaucho teams deliver for UCSB and partner organizations — polished, practical, and production-ready.',
      ctaLabel: 'Explore All Projects',
      ctaHref: '/projects',
    },
  },
}
