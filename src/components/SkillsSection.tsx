
import { Code, Database, Server, Cpu, Layers, BarChart } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Database Development",
      icon: <Database className="text-tech-blue" />,
      skills: ["SQL", "Snowflake", "Data Modeling", "ETL/ELT Processes"]
    },
    {
      title: "Data Science",
      icon: <Layers className="text-tech-blue" />,
      skills: ["Generative AI", "Tensorflow", "Keras", "Dash by Plotly", "Matplotlib", "Seaborn", "Opencv", "Pandas", "Numpy"]
    },
    {
      title: "Algorithms",
      icon: <Cpu className="text-tech-blue" />,
      skills: ["Clustering", "Recommendation Systems", "Artificial Neural Networks", "Convolutional Neural Networks", "Recurrent Neural Networks", "Transfer Learning", "Transformers", "Knowledge Graph"]
    },
    {
      title: "Programming",
      icon: <Code className="text-tech-blue" />,
      skills: ["Java", "Python", "MCP server"]
    },
    {
      title: "Software Tools",
      icon: <Server className="text-tech-blue" />,
      skills: ["Git", "Nginx", "Docker", "Ansible", "Wireshark", "Packet Tracer", "ITIL processes"]
    },
    {
      title: "Data Analysis",
      icon: <BarChart className="text-tech-blue" />,
      skills: ["Data Wrangling", "Data Transformation", "Critical Analysis", "Tableau"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-tech-blue/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-bubble">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
