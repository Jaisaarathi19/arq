
import type { NextPage } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import EventsSection from '@/components/sections/events-section';
import SiteHeader from '@/components/layout/site-header'; // Add SiteHeader back
import SiteFooter from '@/components/layout/site-footer'; // Add SiteFooter back

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Wrap content in a div */}
        <SiteHeader /> {/* Include SiteHeader */}
        <main className="flex-grow"> {/* Ensure main tag wraps page content */}
          <HeroSection />
          <AboutSection />
          <EventsSection />
          {/* Team, Gallery, Contact are separate pages */}
        </main>
        <SiteFooter /> {/* Include SiteFooter */}
    </div>
  );
};

export default Home;
