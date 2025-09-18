import React from 'react';
import { contactReasonsConfig } from '@/config';

interface ContactReason {
  icon: string;
  title: string;
  description: string;
}

interface ContactReasonProps {
  reason: ContactReason;
  index: number;
}

const ContactReasonItem: React.FC<ContactReasonProps> = ({ reason, index }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl mb-3">{reason.icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
      <p className="text-gray-600 text-sm">{reason.description}</p>
    </div>
  );
};

interface ContactReasonsProps {
  title?: string;
  subtitle?: string;
  className?: string;
  reasons?: ContactReason[];
  columns?: 2 | 3 | 4;
}

const ContactReasons: React.FC<ContactReasonsProps> = ({ 
  title = "Why Reach Out?",
  subtitle,
  className = "",
  reasons = contactReasonsConfig,
  columns = 4
}) => {
  const getGridColumns = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  return (
    <section className={`animate-fade-in ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className={`grid ${getGridColumns()} gap-6`}>
        {reasons.map((reason, index) => (
          <ContactReasonItem
            key={reason.title}
            reason={reason}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactReasons;
export { ContactReasonItem };
export type { ContactReasonsProps, ContactReasonProps, ContactReason };
