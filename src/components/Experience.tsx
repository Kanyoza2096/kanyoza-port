import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA (Remote)',
      description: [
        'Lead development of microservices architecture serving 100K+ daily active users',
        'Implemented CI/CD pipelines reducing deployment time by 80%',
        'Mentored junior developers and conducted code reviews',
        'Built real-time collaborative features using WebSocket and Redis'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
      type: 'full-time'
    },
    {
      id: 2,
      company: 'StartupHub Inc.',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'New York, NY',
      description: [
        'Developed MVP from concept to launch in 6 months',
        'Built responsive web applications with React and TypeScript',
        'Designed and implemented RESTful APIs with Express.js',
        'Collaborated with designers to create pixel-perfect UIs'
      ],
      technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Stripe'],
      type: 'full-time'
    },
    {
      id: 3,
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      duration: '2019 - 2020',
      location: 'Austin, TX',
      description: [
        'Created 15+ responsive websites for various clients',
        'Improved website performance by 40% through optimization',
        'Worked with design teams to implement interactive animations',
        'Maintained and updated legacy codebases'
      ],
      technologies: ['Vue.js', 'Sass', 'WordPress', 'jQuery', 'Gulp'],
      type: 'full-time'
    },
    {
      id: 4,
      company: 'Freelance',
      position: 'Web Developer',
      duration: '2018 - 2019',
      location: 'Remote',
      description: [
        'Built custom websites for small businesses and startups',
        'Provided technical consultation and project planning',
        'Delivered projects on time and within budget consistently',
        'Managed client relationships and project communications'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
      type: 'freelance'
    }
  ];

  const education = [
    {
      institution: 'Stanford University',
      degree: 'Master of Science in Computer Science',
      duration: '2016 - 2018',
      location: 'Stanford, CA',
      highlights: ['Specialization in Human-Computer Interaction', 'GPA: 3.8/4.0']
    },
    {
      institution: 'UC Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2012 - 2016',
      location: 'Berkeley, CA',
      highlights: ['Magna Cum Laude', 'President of CS Student Association']
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'Scrum Master Certified (SMC)'
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey building scalable applications and leading 
            development teams across various industries.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="glass hover-lift">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-2xl font-bold text-foreground">
                          {exp.position}
                        </h4>
                        <Badge 
                          variant={exp.type === 'full-time' ? 'default' : 'outline'}
                          className="glass"
                        >
                          {exp.type === 'full-time' ? 'Full-time' : 'Freelance'}
                        </Badge>
                      </div>
                      <div className="flex items-center text-primary font-semibold text-lg mb-3">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="glass border-border/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="glass hover-lift">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <div className="text-primary font-semibold mb-3">
                      {edu.institution}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Certifications</h3>
            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;