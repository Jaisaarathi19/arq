import type {Metadata} from 'next';
import { Inter, Syne } from 'next/font/google'; // Import Inter and Syne
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

// Configure fonts
const fontSans = Inter({ // Use Inter for body/sans-serif
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = Syne({ // Use Syne for headings
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '700', '800'], // Include desired weights
});

export const metadata: Metadata = {
  title: 'ARQ Digital Nexus', // Updated title
  description: 'Website for ARQ Data Science Club at Rajalakshmi Engineering College', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      {/* Apply fonts and dark theme default */}
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased dark', // Set dark theme by default
          fontSans.variable,
          fontHeading.variable // Add heading font variable
        )}
      >
        {children}
        <Toaster /> {/* Add Toaster for notifications */}
      </body>
    </html>
  );
}
