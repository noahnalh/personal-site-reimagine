
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold gradient-text"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Noah.dev
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-accent/90 text-white"
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md py-4 animate-fadeIn">
          <div className="flex flex-col space-y-4 px-4">
            <a onClick={() => scrollToSection('about')} className="text-lg py-2">About</a>
            <a onClick={() => scrollToSection('skills')} className="text-lg py-2">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="text-lg py-2">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="text-lg py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
