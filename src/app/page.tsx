import type { NextPage } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import EventsSection from '@/components/sections/events-section';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        {/* Add other sections (Team, Gallery, Contact) later */}
      </main>
      <SiteFooter />
    </div>
  );
};

export default Home;
