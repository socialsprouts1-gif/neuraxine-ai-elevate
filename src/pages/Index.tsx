import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <CTA />
      </main>
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Neuraxine. Empowering businesses through intelligent automation.</p>
        </div>
      </footer>
      <elevenlabs-convai agent-id="agent_6801k7n0yq1hezmrs4jg7m0qjq74"></elevenlabs-convai>
    </div>
  );
};

export default Index;
