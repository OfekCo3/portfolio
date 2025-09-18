import React from 'react';
import { timelineConfig, type TimelineItem } from '@/config';

interface TimelineItemComponentProps {
  item: TimelineItem;
  index: number;
  isLast: boolean;
}

const TimelineItemComponent: React.FC<TimelineItemComponentProps> = ({ item, index, isLast }) => {
  const getTypeIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'work':
        return (
          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md">
            <div className="w-full h-full bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        );
      case 'education':
        return (
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md">
            <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
          </div>
        );
      case 'milestone':
        return (
          <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-md">
            <div className="w-full h-full bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        );
      case 'goal':
        return (
          <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-md">
            <div className="w-full h-full bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
        );
      case 'volunteering':
        return (
          <div className="w-4 h-4 bg-pink-500 rounded-full border-2 border-white shadow-md">
            <div className="w-full h-full bg-pink-500 rounded-full animate-pulse"></div>
          </div>
        );
      default:
        return (
          <div className="w-4 h-4 bg-gray-500 rounded-full border-2 border-white shadow-md">
            <div className="w-full h-full bg-gray-500 rounded-full animate-pulse"></div>
          </div>
        );
    }
  };

  const getTypeColor = (type: TimelineItem['type']) => {
    switch (type) {
      case 'work':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'education':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'milestone':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'goal':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'volunteering':
        return 'text-pink-600 bg-pink-50 border-pink-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="relative flex items-start group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
      {/* Timeline line */}
      <div className="absolute left-6 top-6 w-0.5 bg-gray-200 h-full group-last:hidden"></div>
      
      {/* Timeline dot */}
      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full border border-gray-200 shadow-md mr-6 group-hover:scale-110 transition-transform duration-200">
        {getTypeIcon(item.type)}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pb-8">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900 leading-tight">
              {item.title}
            </h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </span>
          </div>
          
          <div className="flex items-center mb-3">
            <span className="inline-flex items-center text-sm font-medium text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {item.year}
            </span>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

interface TimelineProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showBackground?: boolean;
  items?: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ 
  title = "My Journey",
  subtitle = "Key milestones in my career and education",
  className = "",
  showBackground = true,
  items = timelineConfig
}) => {
  // Sort items by year (most recent first)
  const sortedItems = [...items].sort((a, b) => {
    // Extract the start year from ranges like "2018-2020" or single years like "2023"
    const getStartYear = (year: string) => parseInt(year.split('-')[0]);
    return getStartYear(b.year) - getStartYear(a.year);
  });

  return (
    <section className={`py-20 ${showBackground ? 'bg-white' : ''} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {sortedItems.map((item, index) => (
            <TimelineItemComponent
              key={`${item.year}-${item.title}`}
              item={item}
              index={index}
              isLast={index === sortedItems.length - 1}
            />
          ))}
        </div>

        {/* Timeline end marker */}
        <div className="flex justify-center mt-8">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
export { TimelineItemComponent };
export type { TimelineProps, TimelineItemComponentProps };
