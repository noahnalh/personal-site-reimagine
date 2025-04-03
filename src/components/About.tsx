
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center reveal">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1074&auto=format&fit=crop" 
                  alt="Professional headshot" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-accent/10 rounded-2xl"></div>
              </div>
            </div>
            
            <div className="reveal-group">
              <p className="text-lg mb-4 reveal">
                I'm a passionate software developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I enjoy creating elegant solutions to complex problems.
              </p>
              
              <p className="text-lg mb-4 reveal">
                My journey in software development began during my college years, and since then, I've been continuously learning and adapting to new technologies. I believe in writing clean, maintainable code and building applications that provide exceptional user experiences.
              </p>
              
              <p className="text-lg mb-6 reveal">
                When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, or experimenting with photography.
              </p>
              
              <div className="flex flex-wrap gap-4 reveal">
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText size={18} />
                  Resume
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Github size={18} />
                  GitHub
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Linkedin size={18} />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
