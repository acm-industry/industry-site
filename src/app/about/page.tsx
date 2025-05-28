import AboutHero from '@/components/about/AboutHero';
import AboutStorySection from '@/components/about/AboutStory';
import AboutMetricsSection from '@/components/about/AboutMetrics';
import WorkInProgress from '@/components/global/WorkInProgress';

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutStorySection />
      <AboutMetricsSection />
      {/* <AboutRocket /> */}
      <WorkInProgress />
    </div>
  );
}
