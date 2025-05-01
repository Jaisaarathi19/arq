
import type { FC } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface GalleryImage {
  id: number;
  imageUrl: string;
  alt: string;
  imageHint: string;
}

// Placeholder data - replace with actual gallery images
const galleryImages: GalleryImage[] = [
  { id: 1, imageUrl: 'https://picsum.photos/600/401', alt: 'Workshop Session 1', imageHint: 'workshop presentation learning' },
  { id: 2, imageUrl: 'https://picsum.photos/601/400', alt: 'Team Collaboration', imageHint: 'team meeting collaboration' },
  { id: 3, imageUrl: 'https://picsum.photos/600/402', alt: 'Hackathon Winners', imageHint: 'award ceremony winners' },
  { id: 4, imageUrl: 'https://picsum.photos/602/400', alt: 'Guest Speaker Event', imageHint: 'guest speaker stage presentation' },
  { id: 5, imageUrl: 'https://picsum.photos/600/403', alt: 'Coding Challenge', imageHint: 'students coding computers' },
  { id: 6, imageUrl: 'https://picsum.photos/603/400', alt: 'Networking Event', imageHint: 'people networking event' },
  { id: 7, imageUrl: 'https://picsum.photos/600/404', alt: 'Project Showcase', imageHint: 'project presentation showcase' },
  { id: 8, imageUrl: 'https://picsum.photos/604/400', alt: 'Club Members Group Photo', imageHint: 'group photo students university' },
  { id: 9, imageUrl: 'https://picsum.photos/600/405', alt: 'Data Visualization Display', imageHint: 'data visualization screen' },
];

const GallerySection: FC = () => {
  return (
     <section id="gallery" className="py-16 md:py-24 bg-secondary"> {/* Added id and styling */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-primary">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden border-border bg-card shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-video"> {/* Use aspect ratio for consistent image display */}
                    <Image
                      src={image.imageUrl}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="filter hover:filter-none transition-all duration-300" // Remove grayscale on hover
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
};

export default GallerySection;
