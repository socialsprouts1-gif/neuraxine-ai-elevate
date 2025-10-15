import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="text-5xl sm:text-6xl font-bold">
                <span className="text-foreground">Get in </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your business with AI automation? Let's start the conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="bg-secondary border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and how we can help..."
                        required
                        rows={6}
                        className="bg-secondary border-border resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Let's Build the Future Together</h2>
                  <p className="text-muted-foreground text-lg">
                    Whether you're looking to automate processes, deploy AI chatbots, or build custom solutions, 
                    our team is here to help you achieve your goals.
                  </p>
                </div>

                <div className="space-y-4">
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                        <p className="text-muted-foreground">contact@neuraxine.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
                        <p className="text-muted-foreground">Available Mon-Fri, 9am-6pm EST</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                        <p className="text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t border-border mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Neuraxine. Empowering businesses through intelligent automation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
