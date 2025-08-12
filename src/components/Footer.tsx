import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/20 bg-card/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold gradient-text">KanyozaTech</span>
          </div>

          {/* Quote */}
          <p className="text-muted-foreground max-w-md leading-relaxed">
            "Building the future, one line of code at a time. Let's create something amazing together."
          </p>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} KanyozaTech. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="glass border-primary/20 hover:bg-primary/10 group"
          >
            Back to Top
            <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;