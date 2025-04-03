
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Noah.dev</h3>
            <p className="text-gray-400">Building digital experiences that matter</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="icon"
              className="mb-4 border-gray-700 hover:bg-gray-800 text-gray-300"
            >
              <ArrowUp size={20} />
            </Button>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Noah. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
