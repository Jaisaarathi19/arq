
import type { NextPage } from 'next';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import EventsSection from '@/components/sections/events-section';
import TeamSection from '@/components/sections/team-section'; // Import Team section
import GallerySection from '@/components/sections/gallery-section'; // Import Gallery section
import ContactSection from '@/components/sections/contact-section'; // Import Contact section
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Wrap content in a div */}
        <SiteHeader /> {/* Include SiteHeader */}
        <main className="flex-grow"> {/* Ensure main tag wraps page content */}
          <HeroSection />
          <AboutSection />
          <EventsSection />
          <TeamSection /> {/* Add Team section */}
          <GallerySection /> {/* Add Gallery section */}
          <ContactSection /> {/* Add Contact section */}
        </main>
        <SiteFooter /> {/* Include SiteFooter */}
    </div>
  );
};

export default Home;
