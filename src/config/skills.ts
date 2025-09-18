export interface Skill {
  category: string;
  technologies: string[];
}

export const skillsConfig: Skill[] = [
  {
    category: 'Frontend Development',
    technologies: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    category: 'Backend Development',
    technologies: ['Node.js', 'Express', 'Python', 'Flask', 'FastAPI', 'RESTful APIs']
  },
  {
    category: 'Database & Storage',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'SQLAlchemy']
  },
  {
    category: 'DevOps & Tools',
    technologies: ['Git', 'Docker', 'GCP', 'AWS', 'Vercel', 'GitHub Actions', 'Linux']
  },
  {
    category: 'Machine Learning & AI',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'TensorFlow', 'Generative AI']
  }
];

// Skills for the home page (simplified display)
export const homePageSkills = [
  { name: 'React', color: 'from-blue-400 to-blue-600' },
  { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
  { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
  { name: 'Node.js', color: 'from-green-500 to-green-700' },
  { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
  { name: 'TailwindCSS', color: 'from-cyan-400 to-cyan-600' },
];

export type SkillsConfig = typeof skillsConfig;
