
import { useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted!');
  };

  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center reveal">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto reveal">
            Have a question or want to work together? Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="reveal">
              <div className="bg-navy-light rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Mail className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hello@noahdev.com" className="text-gray-300 hover:text-accent">
                        hello@noahdev.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+14155552671" className="text-gray-300 hover:text-accent">
                        (415) 555-2671
                      </a>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <form onSubmit={handleSubmit} className="bg-navy-light rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can I help you?" 
                      required 
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      rows={4}
                      required 
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
