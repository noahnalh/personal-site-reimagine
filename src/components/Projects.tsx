
import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for an e-commerce platform with analytics, order management, and inventory tracking.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop",
    tags: ["Next.js", "React Query", "Node.js", "MongoDB", "Charts"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather App",
    description: "A modern weather application that provides real-time weather data and forecasts for any location.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Weather API", "Geolocation", "CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing tasks, projects, and deadlines with team collaboration features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
    tags: ["React", "Firebase", "Authentication", "Real-time Updates"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Recipe Finder",
    description: "An application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1480&auto=format&fit=crop",
    tags: ["JavaScript", "Food API", "Responsive Design", "Filter System"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application that allows users to log workouts, track progress, and set goals.",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=1474&auto=format&fit=crop",
    tags: ["React Native", "Health API", "Authentication", "Data Visualization"],
    liveLink: "#",
    githubLink: "#",
  }
];

const Projects = () => {
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center reveal">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto reveal">
            Here are some of the projects I've worked on
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-group">
            {projectsData.map((project, index) => (
              <Card key={index} className="reveal overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
