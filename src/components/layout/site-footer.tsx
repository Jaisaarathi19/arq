import type { FC } from 'react';
import Link from 'next/link';
import { Binary, Mail, Linkedin, Github } from 'lucide-react'; // Example icons

const SiteFooter: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border py-8 text-muted-foreground">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
             <Link href="#hero" className="flex items-center space-x-2 mb-2" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'}) }}>
                <Binary className="h-6 w-6 text-primary" />
                <span className="font-heading text-xl font-bold text-foreground">ARQ</span>
            </Link>
            <p className="text-sm">
              &copy; {currentYear} ARQ Data Science Club - REC. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link href="mailto:arq.datascience@rajalakshmi.edu.in" target="_blank" rel="noopener noreferrer" aria-label="Email ARQ Club">
              <Mail className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
             {/* Add actual LinkedIn/GitHub links when available */}
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
             <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
