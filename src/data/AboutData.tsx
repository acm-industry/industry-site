import { comapnies } from './CompaniesCarouselData'
import { projects } from './ProjectsData'
import { teamMembers } from './TeamData'
import { themeIds, type ThemeId } from '@/theme/tokens'

type StorySegment = {
  text: string
  highlight?: boolean
}

type StoryParagraph = {
  segments: StorySegment[]
}

type MetricItem = {
  label: string
  value: string
}

type CTAContent = {
  heading: string
  description: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
}

export type AboutContent = {
  hero: {
    titleWhite: string
    titleAccent: string
    description: string
  }
  story: {
    title: string
    paragraphs: StoryParagraph[]
  }
  metrics: {
    title: string
    items: MetricItem[]
  }
  cta: CTAContent
}

const sharedMetrics: MetricItem[] = [
  { label: 'Projects Shipped', value: projects.length.toString() },
  { label: 'Industry Partners', value: (comapnies.length + 6).toString() },
  { label: 'Student Contributors', value: `${teamMembers.length + 13}+` },
  { label: 'Engineering Hours Logged', value: '6000+' },
]

export const aboutContent: Record<ThemeId, AboutContent> = themeIds.reduce((acc, id) => {
  if (id === 'acm') {
    acc[id] = {
      hero: {
        titleWhite: 'Our ',
        titleAccent: 'Story',
        description:
          'ACM Industry is UCSB’s student-run engineering agency — building real software for real clients, and helping students grow through mentorship and hands-on work.',
      },
      story: {
        title: 'From Coursework to Craft.',
        paragraphs: [
          {
            segments: [
              {
                text: 'ACM Industry was built for students who want more. More than lectures. More than checkbox assignments. We give them a place to build things that matter — for real companies, with real users, and ',
              },
              {
                text: 'real impact.',
                highlight: true,
              },
            ],
          },
          {
            segments: [
              {
                text: 'We connect students to startups, nonprofits, and business leaders who need working solutions. Our teams learn to lead projects, manage deadlines, write production code, and ',
              },
              {
                text: 'solve problems that don’t have answer keys.',
                highlight: true,
              },
            ],
          },
          {
            segments: [
              {
                text: 'For some, it’s their first glimpse of working in tech. For others, it’s the moment they realize they’re capable of more than coursework. Regardless of background or experience, ',
              },
              {
                text: 'this is your moment to build something more.',
                highlight: true,
              },
            ],
          },
        ],
      },
      metrics: {
        title: 'Within two quarters...',
        items: sharedMetrics,
      },
      cta: {
        heading: 'Help Shape the Future of ACM Industry',
        description:
          "We’re building a community where students and companies don’t just work together — they grow together. Join us in pushing the boundary of what a student-run org can do.",
        primary: { label: 'Join Us', href: '/join' },
        secondary: { label: 'Work With Us', href: '/services' },
      },
    }
  } else {
    acc[id] = {
      hero: {
        titleWhite: 'Built by ',
        titleAccent: 'Gauchos',
        description:
          'Gaucho Software Engineers (GSE) is UCSB’s builder collective — delivering production software for campus and community partners while mentoring the next wave of technical leaders.',
      },
      story: {
        title: 'From Idea to Impact.',
        paragraphs: [
          {
            segments: [
              {
                text: 'GSE exists for Gauchos who want to build beyond the classroom. We assemble cross-functional teams, pair them with real stakeholders, and back them with mentorship so every project ships value with ',
              },
              {
                text: 'measurable impact.',
                highlight: true,
              },
            ],
          },
          {
            segments: [
              {
                text: 'Students collaborate with campus units, nonprofits, and startups to deliver web, mobile, and data products. Along the way, they learn to lead sprints, run standups, and ',
              },
              {
                text: 'solve problems that don’t have rubrics.',
                highlight: true,
              },
            ],
          },
          {
            segments: [
              {
                text: 'Whether you’re exploring tech or already interning, GSE gives you a place to stretch your skills, learn from peers, and ',
              },
              {
                text: 'ship work you’ll be proud of.',
                highlight: true,
              },
            ],
          },
        ],
      },
      metrics: {
        title: 'In two quarters or less...',
        items: sharedMetrics,
      },
      cta: {
        heading: 'Fuel the Next Wave of GSE Builders',
        description:
          'GSE is scaling opportunities for Gaucho engineers to build in public. Partner with us, mentor a team, or join the crew that keeps UCSB innovation moving.',
        primary: { label: 'Join GSE', href: '/join' },
        secondary: { label: 'Partner with GSE', href: '/services' },
      },
    }
  }
  return acc
}, {} as Record<ThemeId, AboutContent>)
