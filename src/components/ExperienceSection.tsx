
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="max-w-3xl">
          <div className="relative pl-8 pb-12 border-l-2 border-tech-blue/30">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-tech-blue"></div>
            
            <div className="mb-4">
              <div className="flex items-center space-x-2 text-sm text-tech-muted mb-1">
                <Calendar size={16} />
                <span>08/2021 – 08/2022</span>
                <span className="mx-2">•</span>
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-xl">Systems Engineer</h3>
                <span className="text-tech-muted">-</span>
                <span className="text-tech-blue">Tata Consultancy Services</span>
              </div>
            </div>
            
            <ul className="list-disc list-outside ml-6 space-y-2 text-tech-dark">
              <li>
                Designed and optimized SQL queries to reduce response time by 20%
                and enhance system performance, leveraging Python for query
                automation and performance analysis.
              </li>
              <li>
                Developed and executed automated scripts using Python and SQL for
                data extraction, transformation, and loading (ETL), improving accuracy
                by 10%.
              </li>
              <li>
                Implemented network monitoring solutions by configuring alerts for
                database systems and developing Python-based scripts to proactively
                detect and resolve connectivity issues.
              </li>
              <li>
                Engineered robust database solutions and integrated APIs using
                Python and SQL to streamline data flow between healthcare systems,
                ensuring seamless interoperability.
              </li>
              <li>
                Worked for a client, DAVITA Groups, in the kidney healthcare sector,
                managing patient records, optimizing data pipelines, and handling high
                volumes of sensitive data with utmost precision.
              </li>
              <li>
                Developed automation scripts using Python to enhance database
                management, streamline web development tasks, and improve overall
                system efficiency.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
