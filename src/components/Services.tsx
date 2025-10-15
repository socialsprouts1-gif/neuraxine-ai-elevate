import { Bot, Workflow, BarChart3, Zap, Database, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Deploy intelligent chatbots that handle customer support, sales inquiries, and engagement 24/7."
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automate repetitive workflows and business processes to free up your team for strategic work."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with AI-powered analytics and predictive intelligence."
  },
  {
    icon: Zap,
    title: "Custom AI Tools",
    description: "Build tailored automation solutions designed specifically for your business needs."
  },
  {
    icon: Database,
    title: "E-commerce Integration",
    description: "Integrate AI into your e-commerce platform to optimize operations and customer experience."
  },
  {
    icon: MessageSquare,
    title: "Marketing Automation",
    description: "Automate marketing campaigns, lead generation, and customer engagement at scale."
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive AI automation services tailored to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
