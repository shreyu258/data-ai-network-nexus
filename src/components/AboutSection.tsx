
import { Brain, Database, Network } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="gradient-card p-6 tech-card-hover border border-transparent">
            <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center mb-4">
              <Database className="text-tech-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
            <p className="text-tech-muted">
              Skilled in data wrangling, transformation, and critical analysis. Proficient in SQL, Snowflake, 
              and data modeling to extract meaningful insights from complex datasets.
            </p>
          </div>
          
          <div className="gradient-card p-6 tech-card-hover border border-transparent">
            <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center mb-4">
              <Network className="text-tech-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Networking</h3>
            <p className="text-tech-muted">
              Cisco certified with expertise in network fundamentals, security, automation, and troubleshooting. 
              Experienced in implementing monitoring solutions and resolving connectivity issues.
            </p>
          </div>
          
          <div className="gradient-card p-6 tech-card-hover border border-transparent">
            <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center mb-4">
              <Brain className="text-tech-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Generative AI & LLMs</h3>
            <p className="text-tech-muted">
              Passionate about large language models and generative AI applications. Experienced in building 
              chatbots, recommendation systems, and AI-driven workflows with cutting-edge technologies.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-tech-dark max-w-3xl">
            A highly motivated data science professional with expertise in Machine Learning, Deep Learning,
            and Generative AI. Skilled in Python, TensorFlow, and PyTorch, with hands-on experience in
            developing predictive models, intelligent systems, and AI-driven solutions. Adept at extracting
            meaningful insights from data, identifying patterns, and building innovative chatbot
            applications. Passionate about leveraging AI to solve complex problems and drive data-driven
            decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
