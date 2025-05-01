'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Binary } from 'lucide-react'; // Using Binary for logo
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  // { href: '#team', label: 'Team' },
  // { href: '#gallery', label: 'Gallery' },
  // { href: '#contact', label: 'Contact' },
];

const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
     }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="#hero" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, '#hero')}>
           <Binary className="h-7 w-7 text-primary" />
          <span className="font-heading text-2xl font-bold text-foreground">ARQ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background">
              <nav className="flex flex-col space-y-4 pt-8">
                <Link href="#hero" className="flex items-center space-x-2 mb-6 pl-4" onClick={(e) => {scrollToSection(e, '#hero'); document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()}}>
                    <Binary className="h-6 w-6 text-primary" />
                    <span className="font-heading text-xl font-bold text-foreground">ARQ</span>
                 </Link>
                {navItems.map((item) => (
                   <SheetTrigger key={item.href} asChild>
                        <Link
                        href={item.href}
                        className="text-lg font-medium text-muted-foreground hover:text-primary pl-4"
                        onClick={(e) => scrollToSection(e, item.href)}
                        >
                        {item.label}
                        </Link>
                   </SheetTrigger>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
