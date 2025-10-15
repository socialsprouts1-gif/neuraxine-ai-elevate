import Navigation from "@/components/Navigation";
import { Bot, Workflow, BarChart3, Zap, Database, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Deploy intelligent chatbots that handle customer support, sales inquiries, and engagement 24/7.",
    features: [
      "Natural language processing",
      "Multi-language support",
      "CRM integration",
      "Analytics dashboard"
    ]
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automate repetitive workflows and business processes to free up your team for strategic work.",
    features: [
      "Workflow design & optimization",
      "API integrations",
      "Custom triggers & actions",
      "Real-time monitoring"
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with AI-powered analytics and predictive intelligence.",
    features: [
      "Predictive analytics",
      "Custom dashboards",
      "Data visualization",
      "Business intelligence"
    ]
  },
  {
    icon: Zap,
    title: "Custom AI Tools",
    description: "Build tailored automation solutions designed specifically for your business needs.",
    features: [
      "Bespoke AI solutions",
      "Industry-specific models",
      "Scalable architecture",
      "Ongoing optimization"
    ]
  },
  {
    icon: Database,
    title: "E-commerce Integration",
    description: "Integrate AI into your e-commerce platform to optimize operations and customer experience.",
    features: [
      "Inventory management",
      "Product recommendations",
      "Dynamic pricing",
      "Order automation"
    ]
  },
  {
    icon: MessageSquare,
    title: "Marketing Automation",
    description: "Automate marketing campaigns, lead generation, and customer engagement at scale.",
    features: [
      "Campaign automation",
      "Lead scoring",
      "Email personalization",
      "Social media management"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="text-5xl sm:text-6xl font-bold">
                <span className="text-foreground">Our </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive AI automation solutions designed to transform your business operations and drive growth
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 p-12 sm:p-16 border border-primary/30 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                <div className="relative z-10 text-center space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Let's discuss how our AI automation solutions can transform your business
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link to="/contact">
                      <Button size="lg" className="group bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow">
                        Get in Touch
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Neuraxine. Empowering businesses through intelligent automation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
