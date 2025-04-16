
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-tech-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-tech-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-tech-dark mb-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <span className="block">Hi, I'm</span> 
            <span className="text-tech-blue">Shreyas GS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-tech-muted font-light mb-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            Data Science & AI Specialist with expertise in Machine Learning, Deep Learning, and Generative AI
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <a 
              href="mailto:shreyasgs1999@gmail.com" 
              className="px-6 py-3 bg-tech-blue text-white font-medium rounded-lg hover:bg-tech-blue/90 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-tech-dark/20 text-tech-dark font-medium rounded-lg hover:border-tech-blue hover:text-tech-blue transition-colors"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex space-x-4 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <a href="https://www.linkedin.com/in/shreyas-gs/" target="_blank" rel="noopener noreferrer" className="text-tech-muted hover:text-tech-blue transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-tech-muted hover:text-tech-blue transition-colors">
              GitHub
            </a>
            <a href="tel:+917019031718" className="text-tech-muted hover:text-tech-blue transition-colors">
              +91 7019031718
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-tech-muted hover:text-tech-blue transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
