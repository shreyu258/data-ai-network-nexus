
import { BookOpen, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Education</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-tech-blue">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-tech-blue/10 rounded-full">
                    <BookOpen className="text-tech-blue h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Master of Science (MSc)</h3>
                    <p className="text-tech-blue font-medium">University of Birmingham</p>
                    <p className="text-tech-muted text-sm">Electronic and Computer Engineering - 4.25/5</p>
                    <p className="text-tech-muted text-sm mt-1">09/2022 – 09/2023 | Birmingham, United Kingdom</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-tech-blue">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-tech-blue/10 rounded-full">
                    <BookOpen className="text-tech-blue h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Bachelor of Engineering (B.E.)</h3>
                    <p className="text-tech-blue font-medium">BMS College of Engineering</p>
                    <p className="text-tech-muted text-sm">Electronics and Communication Engineering - 9/10</p>
                    <p className="text-tech-muted text-sm mt-1">08/2017 – 08/2021 | Bengaluru, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-5 border border-gray-100 hover:border-tech-blue/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="text-tech-blue h-5 w-5" />
                  <h3 className="font-medium">Cisco Certified Network Associate (CCNA)</h3>
                </div>
                <p className="text-sm text-tech-muted">
                  Validates expertise in networking fundamentals, security, automation, and troubleshooting, essential for configuring and managing network infrastructure.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 border border-gray-100 hover:border-tech-blue/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="text-tech-blue h-5 w-5" />
                  <h3 className="font-medium">Microsoft Certified: Azure Network Engineer Associate</h3>
                </div>
                <p className="text-sm text-tech-muted">
                  Demonstrates expertise in designing, implementing, and managing Azure networking solutions, including security, connectivity, and hybrid environments.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 border border-gray-100 hover:border-tech-blue/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="text-tech-blue h-5 w-5" />
                  <h3 className="font-medium">LangChain for LLM Application Development!</h3>
                </div>
                <p className="text-sm text-tech-muted">
                  Expertise in using LangChain to build and optimize applications powered by large language models (LLMs), enabling seamless integration, automation, and enhanced AI-driven workflows.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 border border-gray-100 hover:border-tech-blue/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="text-tech-blue h-5 w-5" />
                  <h3 className="font-medium">LangChain Chat with Your Data</h3>
                </div>
                <p className="text-sm text-tech-muted">
                  Skilled in leveraging LangChain to build AI-powered chat applications that interact with and analyze custom data sources for intelligent insights and automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
