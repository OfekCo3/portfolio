'use client';

import { useState, useEffect } from 'react';
import { 
  interestsConfig,
  personalConfig 
} from '@/config';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            {personalConfig.heroDescription}
          </p>
        </div>

        {/* Quick Facts Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in">Quick Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">{personalConfig.location}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <div className="text-2xl mb-2">🎓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Study</h3>
                <p className="text-gray-600">{personalConfig.study}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <div className="text-2xl mb-2">💼</div>
                <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-600">{personalConfig.experience}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Focus</h3>
                <p className="text-gray-600">{personalConfig.focus}</p>
              </div>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <Skills 
          title="Technical Skills"
          subtitle="Technologies and tools I work with to bring ideas to life"
          showBackground={false}
          className="mb-20"
        />

        {/* Timeline Section */}
        <Timeline 
          title="My Journey"
          subtitle="A timeline of my educational and professional milestones in computer science and development"
          showBackground={false}
          className="mb-20"
        />

        {/* Interests Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interests & Passions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Areas of technology and development that excite me and drive my continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interestsConfig.map((interest, index) => (
              <div
                key={interest.name}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {interest.name}
                </h3>
                <p className="text-gray-600">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect!</h2>
          <p className="text-xl mb-8 opacity-90">
            I&apos;m always interested in meeting new people and discussing exciting opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200 btn-hover-lift"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 btn-hover-lift"
            >
              View My Work
            </a>
          </div>
        </section>
        
      </div>
    </div>
  );
}
