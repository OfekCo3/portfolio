'use client';

import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';
import type { Project } from '@/components/ProjectCard';
import { useState, useEffect } from 'react';
import { personalConfig, homePageSkills } from '@/config';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const typedProjectsData = projectsData as Project[];
  const featuredProjects = typedProjectsData.filter(project => project.projectType === 'personal').slice(0, 3);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/[0.03] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  👋 Welcome to my portfolio
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I&apos;m{' '}
                  <span className="gradient-text">{personalConfig.name}</span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-600 mt-4 font-medium">
                  {personalConfig.title}
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {personalConfig.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 btn-hover-lift"
                >
                  View My Projects
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 btn-hover-lift"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{projectsData.length}+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{personalConfig.stats.yearsOfCoding}</div>
                  <div className="text-sm text-gray-600">Years Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{personalConfig.stats.technologies}</div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Animation */}
            <div className="relative animate-slide-in-right">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 animate-float">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                      <div className="text-blue-600">const</div>
                      <div className="text-purple-600 ml-2">developer</div>
                      <div className="text-gray-700 ml-4">= {'{'}</div>
                      <div className="text-green-600 ml-6">name: &quot;{personalConfig.name}&quot;,</div>
                      <div className="text-green-600 ml-6">role: &quot;CS Student&quot;,</div>
                      <div className="text-green-600 ml-6">passion: &quot;Innovation&quot;</div>
                      <div className="text-gray-700 ml-4">{'};'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in various technologies and domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              View All Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I work with modern technologies to create robust and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {homePageSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg mb-4 mx-auto flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-200`}>
                  {skill.name.charAt(0)}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            I&apos;m always interested in new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200 btn-hover-lift"
            >
              Start a Conversation
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 btn-hover-lift"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}