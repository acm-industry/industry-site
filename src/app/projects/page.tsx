import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsFilterAndCards from '@/components/projects/ProjectsFilterAndCards';
import ScrollProjectShowcase from '@/components/projects/ProjectDetails/ProjectsDetails';
import ProjectsCTA from '@/components/projects/ProjectsCTA';

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsHero />
      <ProjectsFilterAndCards />
      <ScrollProjectShowcase />
      {/* <ProjectsMetrics /> */}
      <ProjectsCTA />
    </div>
  );
}
