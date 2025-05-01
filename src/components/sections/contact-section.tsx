
'use client'; // Required for form handling

import type { FC } from 'next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin } from 'lucide-react';

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection: FC = () => {
  const { toast } = useToast(); // Initialize useToast

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    // Simulate form submission (replace with actual API call later)
    console.log('Form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    form.reset(); // Reset form after successful submission
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background"> {/* Added id and styling */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-primary">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-card border-border shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-card-foreground">Get in Touch</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    We'd love to hear from you! Reach out via email or visit us.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:arq.datascience@rajalakshmi.edu.in" className="text-foreground hover:underline">
                      arq.datascience@rajalakshmi.edu.in
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <p className="text-foreground">
                      Rajalakshmi Engineering College,<br />
                      Rajalakshmi Nagar, Thandalam,<br />
                      Chennai - 602 105, Tamil Nadu, India.
                    </p>
                  </div>
                </CardContent>
              </Card>
               {/* Placeholder for Map (Optional) */}
               <Card className="bg-card border-border shadow-sm">
                 <CardHeader>
                   <CardTitle className="font-heading text-xl text-card-foreground">Our Location</CardTitle>
                 </CardHeader>
                 <CardContent>
                   {/* Replace with an actual map embed or image */}
                   <div className="w-full h-64 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                     Map Placeholder
                   </div>
                 </CardContent>
               </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-card-foreground">Send us a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Regarding..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;
