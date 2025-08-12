import { useState } from 'react';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import taskManagerImage from '@/assets/project-taskmanager.jpg';
import fitnessImage from '@/assets/project-fitness.jpg';
import analyticsImage from '@/assets/project-analytics.jpg';
import designSystemImage from '@/assets/project-designsystem.jpg';
import blockchainImage from '@/assets/project-blockchain.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: ecommerceImage,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team workspaces, and analytics.',
      image: taskManagerImage,
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'tRPC', 'Tailwind'],
      category: 'frontend',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app for fitness tracking with workout plans and progress analytics.',
      image: fitnessImage,
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'Charts'],
      category: 'mobile',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics dashboard with AI insights, data visualization, and predictive analysis.',
      image: analyticsImage,
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'D3.js', 'Docker'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Design System Library',
      description: 'Comprehensive design system with reusable components, documentation, and theming support.',
      image: designSystemImage,
      technologies: ['React', 'Storybook', 'Styled Components', 'TypeScript'],
      category: 'frontend',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      description: 'Secure voting platform built on blockchain technology with transparency and immutability.',
      image: blockchainImage,
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      category: 'blockchain',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'blockchain', label: 'Blockchain' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise across different 
            technologies and domains.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`glass border-primary/20 ${
                activeFilter === filter.id 
                  ? 'bg-primary text-primary-foreground glow-primary' 
                  : 'hover:bg-primary/10'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs glass border-border/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 glass border-primary/20 hover:bg-primary/10 group"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="hover:bg-muted/20"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass border-primary/20 hover:bg-primary/10 group"
          >
            View All Projects
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;