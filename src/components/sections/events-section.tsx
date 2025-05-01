import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
}

// Placeholder data - replace with actual data fetching later
const eventsData: Event[] = [
  {
    id: 1,
    title: 'Intro to Python for Data Science',
    date: 'October 15, 2023',
    description: 'A beginner-friendly workshop covering the basics of Python programming essential for data analysis.',
    imageUrl: 'https://picsum.photos/400/250',
    imageHint: 'python code programming',
    tags: ['Workshop', 'Beginner', 'Python']
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    date: 'November 5, 2023',
    description: 'Explored core concepts of machine learning, including supervised and unsupervised learning techniques.',
    imageUrl: 'https://picsum.photos/400/251', // Ensure unique URLs if needed
    imageHint: 'machine learning network',
     tags: ['Workshop', 'ML', 'Intermediate']
  },
  {
    id: 3,
    title: 'Data Visualization with Matplotlib',
    date: 'December 1, 2023',
    description: 'Hands-on session on creating insightful data visualizations using the Matplotlib library.',
    imageUrl: 'https://picsum.photos/400/252',
    imageHint: 'data visualization chart graph',
    tags: ['Workshop', 'Visualization', 'Python']
  },
   {
    id: 4,
    title: 'Guest Lecture: AI in Healthcare',
    date: 'January 20, 2024',
    description: 'Industry expert shared insights on the applications and challenges of AI in the healthcare domain.',
    imageUrl: 'https://picsum.photos/400/253',
    imageHint: 'ai healthcare technology',
    tags: ['Guest Lecture', 'AI', 'Healthcare']
  },
   {
    id: 5,
    title: 'Data Hackathon Challenge',
    date: 'February 10-11, 2024',
    description: 'A 24-hour hackathon where teams competed to solve a real-world data problem.',
    imageUrl: 'https://picsum.photos/400/254',
    imageHint: 'hackathon coding competition',
    tags: ['Hackathon', 'Competition', 'Data Analysis']
  },
];

const EventsSection: FC = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary">
          Events & Workshops
        </h2>

        <ScrollArea className="w-full whitespace-nowrap rounded-md">
           <div className="flex w-max space-x-6 pb-4">
            {eventsData.map((event) => (
              <Card key={event.id} className="w-[350px] border-border bg-card shadow-md overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                 <div className="relative h-48 w-full">
                   <Image
                    src={event.imageUrl}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale filter" // Apply grayscale
                    data-ai-hint={event.imageHint} // Add AI hint
                  />
                 </div>

                <CardHeader className="flex-grow">
                  <CardTitle className="font-heading text-xl text-card-foreground">{event.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{event.date}</CardDescription>
                   <p className="mt-2 text-sm text-card-foreground/90 flex-grow">
                      {event.description}
                    </p>
                </CardHeader>
                 <CardFooter className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {event.tags.map((tag) => (
                         <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                 </CardFooter>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

      </div>
    </section>
  );
};

export default EventsSection;
