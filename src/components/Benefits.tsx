import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Increase Efficiency",
    description: "Automate repetitive tasks and let your team focus on high-value strategic work."
  },
  {
    title: "Cut Costs",
    description: "Reduce operational expenses with intelligent automation that scales with your business."
  },
  {
    title: "Data-Driven Decisions",
    description: "Make faster, smarter decisions backed by real-time AI-powered insights and analytics."
  },
  {
    title: "Seamless Integration",
    description: "Our solutions integrate smoothly with your existing tools and workflows."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold">
                <span className="text-foreground">Work Smarter,</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Not Harder
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Neuraxine combines cutting-edge AI technologies with practical business strategy 
                to help startups and enterprises streamline operations and scale effortlessly.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower companies to increase efficiency, reduce costs, and 
                accelerate growth through intelligent automation.
              </p>
            </div>

            {/* Right Content - Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
