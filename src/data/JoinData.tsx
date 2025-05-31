import { ArrowRightCircle, PartyPopper, Rocket, Repeat, Users, MonitorPlay, UserPlus } from "lucide-react";

export const events = [
    {
      title: 'Apply & Get Onboarded',
      timeframe: '2–3 weeks before the quarter',
      bullets: [
        'Submit your application for a team role (e.g. developer, designer)',
        'If accepted, you’ll be invited to onboarding and placed on a project team',
        'Optional: If your project involves advanced tools or concepts, we’ll provide resources to get you up to speed',
      ],
      image: 'apply.svg',
      icon: <UserPlus className="w-9 h-9 text-[var(--accent-blue)]" />,
      iconAccent: '#047C91',
    },
    {
      title: 'Project Kickoff & Orientation',
      timeframe: 'Weeks 0–1',
      bullets: [
        'Meet your team, Project Executive, and other collaborators',
        'Get introduced to the project scope, tech stack, and goals',
        'Review documentation, GitHub repos, and core tools',
        'If needed, complete short tutorials (e.g. Supabase, ARKit, Flask)',
      ],
      image: 'onboarding.svg',
      icon: <Rocket className="w-9 h-9 text-[#F59E42]" />,
      iconAccent: '#F59E42',
    },
    {
      title: 'Weekly Build Cycle',
      timeframe: 'Weeks 2–8',
      bullets: [
        'Start of Week: Receive specific tasks from the project GitHub board',
        'Mid-Week: Post async updates or join a quick check-in to discuss blockers and progress',
        'End of Week: Join your team’s standup, demo your work, and get feedback',
        'New tasks will be assigned based on progress or areas for improvement',
      ],
      image: 'build.svg',
      icon: <Repeat className="w-9 h-9 text-[#A259FF]" />,
      iconAccent: '#A259FF',
    },
    {
      title: 'Ongoing Mentorship & Support',
      timeframe: 'Throughout the quarter',
      bullets: [
        'Receive mentorship from Project Execs, tech leads, and alumni',
        'Get help resolving blockers or technical challenges',
        'Gain more ownership over your section of the project as the quarter progresses',
      ],
      image: 'mentorship.svg',
      icon: <Users className="w-9 h-9 text-[#2EC4B6]" />,
      iconAccent: '#2EC4B6',
    },
    {
      title: 'Final Touches & Demo Prep',
      timeframe: 'Weeks 8–10',
      bullets: [
        'Polish final features and resolve outstanding bugs',
        'Collaborate with your team to prepare a full demo',
        'Rehearse your 5–10 minute presentation for Demo Day',
      ],
      image: 'finalize.svg',
      icon: <MonitorPlay className="w-9 h-9 text-[#F96E46]" />,
      iconAccent: '#F96E46',
    },
    {
      title: 'Present & Celebrate',
      timeframe: 'Weeks 10–11',
      bullets: [
        'Present your project to ACM members and partner companies',
        'Attend the celebration and social event!',
        'Your work will be featured on our website, Instagram, and LinkedIn',
      ],
      image: 'present.svg',
      icon: <PartyPopper className="w-9 h-9 text-[#43AA8B]" />,
      iconAccent: '#43AA8B',
    },
    {
      title: 'Stay Involved After',
      timeframe: 'Ongoing',
      bullets: [
        'Some projects continue next quarter — stay on or help onboard new members',
        'You’re welcome to return as a contributor or apply to be a Project Executive',
      ],
      image: 'stay-in-touch.svg',
      icon: <ArrowRightCircle className="w-9 h-9 text-[#F15BB5]" />,
      iconAccent: '#F15BB5',
    },
  ];  