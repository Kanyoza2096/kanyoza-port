import { Code, Database, Globe, Smartphone, Cloud, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend', 
      icon: Database,
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['React Native', 'Expo', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Tools & Others',
      icon: Code,
      technologies: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      category: 'Performance',
      icon: Zap,
      technologies: ['Optimization', 'SEO', 'Accessibility', 'PWA', 'Analytics'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '25+' }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with a keen eye for design and a love for creating 
            innovative digital solutions that make a difference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started my journey in web development 5 years ago, driven by curiosity and 
                a passion for creating digital experiences that users love. What began as 
                a hobby quickly evolved into a career focused on building scalable, 
                user-centric applications.
              </p>
              <p>
                I specialize in modern JavaScript frameworks and have extensive experience 
                in both frontend and backend development. My approach combines technical 
                expertise with creative problem-solving to deliver solutions that not only 
                work flawlessly but also provide exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">What I Do</h3>
            <div className="space-y-4">
              {[
                'Full-stack web application development',
                'Mobile app development with React Native',
                'UI/UX design and prototyping',
                'API design and backend architecture',
                'Cloud deployment and DevOps',
                'Performance optimization and SEO'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="glass hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-20`}>
                      <skill.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;