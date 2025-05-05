
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation'; // Import usePathname

interface NavItem {
  href: string;
  label: string;
  isPageLink?: boolean; // Flag to indicate if it's a page link (vs. section link)
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', isPageLink: true },
  { href: '/#about', label: 'About' },
  { href: '/#events', label: 'Events' },
  { href: '/#team', label: 'Team' }, // Changed to section link
  { href: '/#gallery', label: 'Gallery' }, // Changed to section link
  { href: '/#contact', label: 'Contact' }, // Changed to section link
];

const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false); // State for mobile menu
  const pathname = usePathname(); // Get current path

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     // Always prevent default and scroll for hash links on the homepage
     if (href.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.substring(2); // Remove '/#'
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false); // Close mobile menu on click
     } else if (href === '/') {
         // If it's the home link, check if already on homepage
         if (pathname === '/') {
             e.preventDefault();
             window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
             setMobileMenuOpen(false); // Close mobile menu
         } else {
            // Let NextLink handle navigation to home page
             setMobileMenuOpen(false); // Close mobile menu
         }
     } else {
        // For other page links, let NextLink handle it.
         setMobileMenuOpen(false); // Close mobile menu
     }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 my-6" onClick={(e) => scrollToSection(e, '/')}>
          <Image src="/ARQLOGO.png" alt="ARQ Logo" width={100} height={100} className="text-primary" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  // Highlight active page link (only for '/')
                  item.isPageLink && pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background">
               {/* Keep SheetTrigger wrapping Link to allow closing via X button */}
               <SheetTrigger asChild>
                 <Link href="/" className="flex items-center space-x-2 mb-6 pl-4 pt-4 my-2" onClick={(e) => scrollToSection(e, '/')}>
                    <Image src="/ARQLOGO.png" alt="ARQ Logo" width={24} height={24} className="text-primary" />
                    <span className="font-heading text-xl font-bold text-foreground">ARQ</span>
                 </Link>
                </SheetTrigger>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    // No need for SheetTrigger here if handled by onClick
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                        "text-lg font-medium hover:text-primary pl-4",
                        item.isPageLink && pathname === item.href ? "text-primary" : "text-muted-foreground"
                        )}
                        onClick={(e) => scrollToSection(e, item.href)}
                    >
                        {item.label}
                    </Link>
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
