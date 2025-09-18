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

export type SkillsConfig = typeof skillsConfig;
