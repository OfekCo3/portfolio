'use client';

import Image from 'next/image';
import { useState } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  imageUrl: string;
  category: string[];
  completedDate: string;
  projectType: 'personal' | 'academic';
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

// Function to get professional project type styling
const getProjectTypeBadge = (type: 'personal' | 'academic') => {
  const styles = {
    personal: {
      bg: 'bg-emerald-600',
      text: 'Personal Project',
      icon: '💼'
    },
    academic: {
      bg: 'bg-indigo-600', 
      text: 'Academic Project',
      icon: '🎓'
    }
  };
  return styles[type];
};



const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardClasses = featured
    ? "group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
    : "group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden";

  return (
    <div 
      className={cardClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        {!imageError ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={featured ? 600 : 400}
            height={featured ? 300 : 250}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-blue-600 font-medium text-sm">{project.title}</p>
            </div>
          </div>
        )}
        
        {/* Project Type Badge */}
        <div className="absolute top-3 right-3">
          <span className={`${getProjectTypeBadge(project.projectType).bg} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
            <span className="mr-1">{getProjectTypeBadge(project.projectType).icon}</span>
            {getProjectTypeBadge(project.projectType).text}
          </span>
        </div>

        {/* Category Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1 max-w-[60%]">
          {project.category.map((cat, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Overlay with Quick Actions */}
        {(project.githubUrl || project.linkedinUrl) && (
          <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </a>
              )}
              {project.linkedinUrl && (
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`font-bold text-gray-900 ${featured ? 'text-xl' : 'text-lg'} group-hover:text-blue-600 transition-colors duration-200`}>
            {project.title}
          </h3>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
            {new Date(project.completedDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short' 
            })}
          </span>
        </div>

        <p className={`text-gray-600 mb-4 ${featured ? 'text-base' : 'text-sm'} line-clamp-3`}>
          {featured ? project.longDescription : project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, featured ? 6 : 4).map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > (featured ? 6 : 4) && (
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                +{project.techStack.length - (featured ? 6 : 4)} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.linkedinUrl ? 'flex-1' : 'w-full'} bg-gray-900 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View Code</span>
            </a>
          )}
          {project.linkedinUrl && (
            <a
              href={project.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.githubUrl ? 'flex-1' : 'w-full'} bg-blue-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn Post</span>
            </a>
          )}
          {!project.githubUrl && !project.linkedinUrl && (
            <div className="w-full bg-gray-100 text-gray-500 text-center py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No Links Available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;