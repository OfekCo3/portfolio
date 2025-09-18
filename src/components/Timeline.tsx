import React from 'react';
import { timelineConfig, type TimelineItem } from '@/config';

interface TimelineItemComponentProps {
  item: TimelineItem;
  index: number;
  isLast?: boolean;
}

const TimelineItemComponent: React.FC<TimelineItemComponentProps> = ({ item, index }) => {
  const getTypeColor = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return 'bg-blue-100 text-blue-800';
      case 'work':
        return 'bg-green-100 text-green-800';
      case 'milestone':
        return 'bg-purple-100 text-purple-800';
      case 'goal':
        return 'bg-orange-100 text-orange-800';
      case 'volunteering':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
        <div className={`animate-fade-in ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`} style={{ animationDelay: `${index * 200}ms` }}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                {item.type}
              </span>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

      {/* Year */}
      <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
        <span className="text-2xl font-bold text-blue-600">{item.year}</span>
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
  // Sort items by year (most recent first for display, but we can also do chronological)
  const sortedItems = [...items].sort((a, b) => {
    // Extract the start year from ranges like "2018-2020" or single years like "2023"
    const getStartYear = (year: string) => parseInt(year.split('-')[0]);
    return getStartYear(a.year) - getStartYear(b.year); // Chronological order (oldest first)
  });

  return (
    <section className={`py-20 ${showBackground ? 'bg-white' : ''} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {sortedItems.map((item, index) => (
              <TimelineItemComponent
                key={`${item.year}-${item.title}`}
                item={item}
                index={index}
                isLast={index === sortedItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
export { TimelineItemComponent };
export type { TimelineProps, TimelineItemComponentProps };
