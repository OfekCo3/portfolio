'use client';

import { useState, useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import ContactMethods from '@/components/ContactMethods';
import ContactReasons from '@/components/ContactReasons';
import type { FormData } from '@/components/ContactForm';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleFormSubmit = async (data: FormData) => {
    // Simulate form submission (replace with actual form handling)
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
  };


  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            I&apos;m always interested in new opportunities, exciting projects, and meeting fellow developers. 
            Let&apos;s connect and discuss how we can work together!
          </p>
        </div>

        {/* Reasons to Contact */}
        <ContactReasons className="mb-16" />

        {/* Contact Form and Methods - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Send Me a Message</h2>
              <ContactForm 
                title=""
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>

          {/* Other Ways to Connect */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Other Ways to Connect</h2>
              <ContactMethods 
                title=""
                layout="vertical"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
