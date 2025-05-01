import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Eye, Target } from 'lucide-react'; // Example icons

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary">
          About ARQ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card border-border shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="items-center">
              <Target className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="font-heading text-2xl text-card-foreground">Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>
                To foster a vibrant community passionate about data science, enabling members to learn, collaborate, and innovate with data.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="items-center">
              <Eye className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="font-heading text-2xl text-card-foreground">Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>
                To become a leading student hub for data science excellence, recognized for its impactful projects and skilled members.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="items-center">
              <Activity className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="font-heading text-2xl text-card-foreground">Activities</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>
                Organizing workshops, guest lectures, hackathons, and collaborative projects focused on real-world data challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
