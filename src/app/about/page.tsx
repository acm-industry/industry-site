import AboutHero from '@/components/about/AboutHero';
import AboutStorySection from '@/components/about/AboutStory';
import AboutMetricsSection from '@/components/about/AboutMetrics';
import WorkInProgress from '@/components/global/WorkInProgress';
import AboutCTA from '@/components/about/AboutCallToAction';

export default function AboutPage() {
  return (
    <div className='overflow-x-clip'>
      <AboutHero />
      <AboutStorySection />
      <AboutMetricsSection />
      {/* <AboutRocket /> */}
      <WorkInProgress />
      <AboutCTA />
    </div>
  );
}
