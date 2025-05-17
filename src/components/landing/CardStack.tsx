'use client';

import { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';
import Card from './Card';
import { Rocket, Braces, NotebookPen, BadgeCheck, ArrowRight, FolderKanban, Terminal, Users2 } from 'lucide-react';

const projects = [
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

export default function CardStack({ firstCardRef }: { firstCardRef: React.RefObject<HTMLDivElement | null> }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        const Icon = project.icon;
        const LinkIcon = project.link_value.icon;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            title={project.title}
            description={project.description}
            src={project.src}
            link={project.link}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            projects={projects}
            icon={Icon ? <Icon size={28} /> : undefined}
            actionText={project.link_value.text}
            actionIcon={LinkIcon ? <LinkIcon size={28} /> : undefined}
            ref={undefined}
          />
        );
      })}
      <div ref={firstCardRef}/>
    </main>
  );
}