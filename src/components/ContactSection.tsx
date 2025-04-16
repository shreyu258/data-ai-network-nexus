
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a 
              href="mailto:shreyasgs1999@gmail.com" 
              className="flex items-center p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:border-tech-blue hover:shadow-lg transition-all duration-300"
            >
              <div className="mr-4 w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center">
                <Mail className="text-tech-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-tech-dark">Email</h3>
                <p className="text-tech-muted">shreyasgs1999@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+917019031718" 
              className="flex items-center p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:border-tech-blue hover:shadow-lg transition-all duration-300"
            >
              <div className="mr-4 w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center">
                <Phone className="text-tech-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-tech-dark">Phone</h3>
                <p className="text-tech-muted">+91 7019031718</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/shreyas-gs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:border-tech-blue hover:shadow-lg transition-all duration-300"
            >
              <div className="mr-4 w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center">
                <Linkedin className="text-tech-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-tech-dark">LinkedIn</h3>
                <p className="text-tech-muted">linkedin.com/in/shreyas-gs</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:border-tech-blue hover:shadow-lg transition-all duration-300"
            >
              <div className="mr-4 w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center">
                <Github className="text-tech-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-tech-dark">GitHub</h3>
                <p className="text-tech-muted">github.com/shreyasgs</p>
              </div>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-tech-muted mb-4">
              Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <a 
              href="mailto:shreyasgs1999@gmail.com" 
              className="inline-block px-8 py-3 bg-tech-blue text-white font-medium rounded-lg hover:bg-tech-blue/90 transition-colors"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
