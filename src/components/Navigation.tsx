import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/neuraxine-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Neuraxine Logo" className="h-10 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
