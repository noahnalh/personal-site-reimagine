
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Show arrow after a delay
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 3500);

    // Setup reveal animation observer
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
      clearTimeout(timer);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 reveal">
          <span className="inline-block animate-wave origin-bottom-right">👋</span> Hi, I'm <span className="gradient-text">Noah</span>
        </h1>
        
        <div className="mb-8 overflow-hidden">
          <h2 className="typewriter animate-typing inline-block text-xl md:text-3xl font-medium">
            Software Developer & Web Designer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto reveal">
          I build exceptional and accessible digital experiences for the web.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal">
          <Button 
            onClick={scrollToProjects}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-6 text-lg"
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      <div className={`mt-16 animate-bounce transition-opacity duration-1000 ${showArrow ? 'opacity-100' : 'opacity-0'}`}>
        <ArrowDown 
          size={32} 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="cursor-pointer text-muted-foreground hover:text-accent transition-colors"
        />
      </div>
    </section>
  );
};

export default Hero;
