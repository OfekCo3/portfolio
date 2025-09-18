export interface Interest {
  name: string;
  icon: string;
  description: string;
}

export const interestsConfig: Interest[] = [
  { 
    name: 'Data Science & AI', 
    icon: '🤖', 
    description: 'Exploring Generative AI, CV, and NLP applications' 
  },
  { 
    name: 'Full-Stack Development', 
    icon: '🌐', 
    description: 'Building scalable web apps with modern frameworks' 
  },
  { 
    name: 'Game Development', 
    icon: '🎮', 
    description: 'Creating games with ECS, SDL3, and Box2D' 
  },
  { 
    name: 'Cloud Computing', 
    icon: '☁️', 
    description: 'Working with GCP, Docker, and distributed systems' 
  },
  { 
    name: 'Mentorship', 
    icon: '🤝', 
    description: 'Helping new programmers learn and grow' 
  }
];

export type InterestsConfig = typeof interestsConfig;
