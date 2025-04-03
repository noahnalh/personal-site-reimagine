
import { useEffect } from 'react';
import { 
  Code, 
  Layout, 
  Database, 
  Terminal, 
  Server, 
  PenTool 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = [
  {
    category: "Frontend Development",
    icon: Layout,
    skills: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
  },
  {
    category: "Development Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "VS Code", "Docker", "CI/CD", "Jest", "Webpack"]
  },
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
  },
  {
    category: "Design",
    icon: PenTool,
    skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles", "Wireframing"]
  }
];

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center reveal">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto reveal">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-group">
            {skillsData.map((category, index) => (
              <Card key={index} className="reveal hover:shadow-md transition-shadow duration-300 border-none shadow bg-card">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <category.icon size={24} />
                  </div>
                  <CardTitle>{category.category}</CardTitle>
                  <CardDescription>
                    {category.skills.length} technologies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-muted px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
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

export default Skills;
