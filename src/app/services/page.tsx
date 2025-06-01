import ServicesHero from '@/components/services/ServicesHero';
import WorkInProgress from '@/components/global/WorkInProgress';

export default function ServicesPage() {
  return (
    <div className='overflow-x-clip'>
      <ServicesHero />
      <WorkInProgress />
    </div>
  );
}
