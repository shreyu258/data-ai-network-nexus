
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-tech-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-display font-semibold text-xl">Shreyas GS</span>
            <p className="text-sm text-gray-400 mt-1">Data Science & AI Specialist</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Shreyas GS. All rights reserved.
          </p>
          
          <p className="text-sm text-gray-400 mt-4 md:mt-0 flex items-center">
            Built with <Heart className="text-tech-blue h-4 w-4 mx-1" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
