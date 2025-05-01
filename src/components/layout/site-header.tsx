
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Binary } from 'lucide-react'; // Using Binary for logo
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
  { href: '/team', label: 'Team', isPageLink: true },
  { href: '/gallery', label: 'Gallery', isPageLink: true },
  { href: '/contact', label: 'Contact', isPageLink: true },
];

const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname(); // Get current path

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     // Only prevent default and scroll for hash links on the homepage
     if (href.startsWith('/#') && pathname === '/') {
        e.preventDefault();
        const targetId = href.substring(2); // Remove '/#'
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
     }
     // For other links (page links or hash links on different pages), let NextLink handle it.
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
        <Link href="/" className="flex items-center space-x-2" >
           <Binary className="h-7 w-7 text-primary" />
          <span className="font-heading text-2xl font-bold text-foreground">ARQ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  // Highlight active page link (excluding hash links for now)
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background">
               <SheetTrigger asChild>
                 <Link href="/" className="flex items-center space-x-2 mb-6 pl-4 pt-8">
                    <Binary className="h-6 w-6 text-primary" />
                    <span className="font-heading text-xl font-bold text-foreground">ARQ</span>
                 </Link>
                </SheetTrigger>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                   <SheetTrigger key={item.href} asChild>
                        <Link
                        href={item.href}
                         className={cn(
                            "text-lg font-medium hover:text-primary pl-4",
                             item.isPageLink && pathname === item.href ? "text-primary" : "text-muted-foreground"
                         )}
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
```