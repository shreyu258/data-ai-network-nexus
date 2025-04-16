
import { Github, ExternalLink } from 'lucide-react';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  demoLink?: string;
};

const Project = ({ title, description, image, githubLink, demoLink }: ProjectProps) => {
  return (
    <div className="project-card group">
      <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Links that appear on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-tech-dark hover:bg-tech-blue hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-tech-dark hover:bg-tech-blue hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 bg-white border-t border-gray-100">
        <h3 className="text-lg font-semibold mb-2 text-tech-dark">{title}</h3>
        <p className="text-tech-muted text-sm">{description}</p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "JupyterMCP – Jupyter & Claude AI Integration",
      description: "Built a Model Context Protocol (MCP) server enabling Claude AI to interact with Jupyter Notebooks. Implemented WebSocket-based two-way communication for cell execution, editing, and notebook control.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      githubLink: "https://github.com/shreyu258/Jupyter_MCP_Server",
      demoLink: null
    },
    {
      title: "AI-Powered Bank Customer Complaint Classifier",
      description: "Designed and implemented an AI-driven system utilizing DistilBERT to categorize and prioritize bank customer complaints, improving efficiency and enhancing overall customer experience.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      demoLink: "https://huggingface.co/spaces/shreyas258/bank_ticket_classifer_demo"
    },
    {
      title: "Personalized Pub Med Chatbot",
      description: "An AI-powered tool that enables users to search and retrieve relevant medical literature from PubMed efficiently. Built using Streamlit and deployed in Hugging Face Spaces.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      demoLink: "https://huggingface.co/spaces/shreyas258/pub_med_search"
    },
    {
      title: "Python Lab Assistant",
      description: "Developed a project that analyzes Python code to identify issues, ensuring users understand errors and their causes. The project also assists in debugging and provides clear explanations.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      githubLink: "https://github.com/shreyu258/pyhton_lab_assistant",
      demoLink: null
    },
    {
      title: "Activity Detection using Wi-Fi Access Point",
      description: "Spearheaded research on Wi-Fi CSI for passive human behavior recognition using dynamic CSI fluctuations. Developed a machine learning pipeline for activity detection.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      githubLink: null,
      demoLink: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
