import { comapnies } from "./CompaniesCarouselData"
import { projects } from "./ProjectsData"
import { teamMembers } from "./TeamData"

export const aboutTitleWhite = "Our "
export const aboutTitleGold = "Story"
export const aboutDescription = "ACM Industry is UCSB’s student-run engineering agency — building real software for real clients, and helping students grow through mentorship and hands-on work."

export const aboutStoryTitle = "From Coursework to Craft."

export const aboutStoryParagraph1White = "ACM Industry was built for students who want more. More than lectures. More than checkbox assignments. We give them a place to build things that matter — for real companies, with real users, and "
export const aboutStoryParagraph1Gold = "real impact."

export const aboutStoryParagraph2White = "We connect students to startups, nonprofits, and business leaders who need working solutions. Our teams learn to lead projects, manage deadlines, write production code, and "
export const aboutStoryParagraph2Gold = "solve problems that don’t have answer keys."

export const aboutStoryParagraph3White = "For some, it’s their first glimpse of working in tech. For others, it’s the moment they realize they’re capable of more than coursework. Regardless of background or experience, "
export const aboutStoryParagraph3Gold = "this is your moment to build something more."

export const metricsTitle = "Within two quarters..."

export const metrics = [
    { label: 'Projects Shipped', value: (projects.length).toString() },
    { label: 'Industry Partners', value: (comapnies.length+6).toString() },
    { label: 'Student Contributors', value: (teamMembers.length + 13).toString() + '+' },
    { label: 'Engineering Hours Logged', value: '6000+' },
  ]
