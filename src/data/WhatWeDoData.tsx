import { Rocket, Braces, NotebookPen, BadgeCheck, ArrowRight, FolderKanban, Terminal, Users2 } from 'lucide-react';

export const whatwedoTitleWhite = "What We ";
export const whatwedoTitleGold = "Do";

export const whatwedoDescription = "We connect UCSB students with industry to build real products, solve meaningful problems, and shape the future of tech — together.";

export const whatwedo = [
    {
      title: 'Industry-Driven Projects',
      description:
        "We partner with real companies to solve real challenges — giving students exposure to tools, teams, and timelines that matter.",
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
        "Our work isn't just student-led — it's student-owned. Teams take ideas from concept to deployment, using industry-standard tools and practices.",
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
        "Students leave with portfolio-grade work and real-world stories — backed by contributions that show up in GitHub commits and company deliverables.",
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
        "For companies, ACM.Industry means access to UCSB's best engineers and builders — organized, vetted, and driven to deliver.",
      src: 'parallax/proud-coder.svg',
      link: '/about',
      icon: BadgeCheck,
      link_value: {
        text: 'Meet the Talent',
        icon: Users2,
      },
    },
  ];