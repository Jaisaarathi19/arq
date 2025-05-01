
import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

// Placeholder data - replace with actual team members
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Aisha Khan',
    role: 'President',
    imageUrl: 'https://picsum.photos/200/201',
    imageHint: 'woman portrait professional',
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    name: 'Ben Carter',
    role: 'Vice President',
    imageUrl: 'https://picsum.photos/201/200',
    imageHint: 'man portrait professional',
    linkedinUrl: '#',
  },
  {
    id: 3,
    name: 'Chloe Davis',
    role: 'Secretary',
    imageUrl: 'https://picsum.photos/200/202',
    imageHint: 'woman portrait smiling',
    githubUrl: '#',
  },
    {
    id: 4,
    name: 'David Evans',
    role: 'Treasurer',
    imageUrl: 'https://picsum.photos/202/200',
    imageHint: 'man portrait glasses',
    linkedinUrl: '#',
    githubUrl: '#',
  },
    {
    id: 5,
    name: 'Eva Rodriguez',
    role: 'Events Coordinator',
    imageUrl: 'https://picsum.photos/200/203',
    imageHint: 'woman portrait outdoor',
    linkedinUrl: '#',
  },
    {
    id: 6,
    name: 'Frank Green',
    role: 'Technical Lead',
    imageUrl: 'https://picsum.photos/203/200',
    imageHint: 'man portrait technology',
    linkedinUrl: '#',
    githubUrl: '#',
  },
];

const TeamPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-center mb-12 md:mb-16 text-primary">
            Meet the Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member) => (
              <Card key={member.id} className="bg-card border-border shadow-md overflow-hidden text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="items-center pt-6">
                  <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                    <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-heading text-2xl text-card-foreground">{member.name}</CardTitle>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent className="flex justify-center space-x-3 pb-6">
                  {member.linkedinUrl && (
                    <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                      <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  )}
                  {member.githubUrl && (
                    <Link href={member.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default TeamPage;
