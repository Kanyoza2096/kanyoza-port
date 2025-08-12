import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast', 
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex % roles.length];
    let charIndex = 0;
    
    const typeText = () => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          charIndex = 0;
          setDisplayText('');
          setCurrentIndex(prev => prev + 1);
        }, 2000);
      }
    };

    typeText();
  }, [currentIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-slide-down">
            <p className="text-lg text-muted-foreground mb-4">Hello, I'm</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              KanyozaTech
            </h1>
          </div>

          {/* Animated Role */}
          <div className="animate-slide-up delay-300 mb-8">
            <div className="h-20 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-semibold text-foreground">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in delay-700 mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies. 
              Specializing in React, Node.js, and cutting-edge web solutions that drive innovation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up delay-1000 flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform glow-primary text-lg px-8 py-6"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('mailto:contact@kanyozatech.dev')}
              className="glass border-primary/20 hover:bg-primary/10 text-lg px-8 py-6"
            >
              Get In Touch
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in delay-1200 flex justify-center space-x-8 mb-16">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:contact@kanyozatech.dev', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 glass rounded-full hover:bg-primary/10 transition-colors group"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={scrollToProjects}
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;