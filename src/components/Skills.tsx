import React from 'react';
import { skillsConfig, type Skill } from '@/config';

interface SkillCategoryProps {
  skill: Skill;
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ skill, index }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border border-gray-100"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
        {skill.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skill.technologies.map((tech, techIndex) => (
          <span
            key={tech}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-blue-100 hover:border-blue-200 transition-colors duration-200"
            style={{ animationDelay: `${(index * 150) + (techIndex * 50)}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

interface SkillsProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showBackground?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ 
  title = "Technical Skills",
  subtitle = "Technologies and tools I work with",
  className = "",
  showBackground = true
}) => {
  return (
    <section className={`py-20 ${showBackground ? 'bg-gray-50' : ''} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsConfig.map((skill, index) => (
            <SkillCategory 
              key={skill.category} 
              skill={skill} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
export { SkillCategory };
export type { SkillsProps, SkillCategoryProps };
