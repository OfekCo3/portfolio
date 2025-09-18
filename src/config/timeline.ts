export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'milestone' | 'goal';
}

export const timelineConfig: TimelineItem[] = [
  {
    year: '2018-2020',
    title: 'Service in the IDF',
    description: 'Served as a psychotechnical interviewer and later commander, leading a team of 15+ soldiers.',
    type: 'work'
  },
  {
    year: '2022',
    title: 'Started Computer Science Degree',
    description: 'Began my B.Sc. in Computer Science at MTA, specializing in Data Science.',
    type: 'education'
  },
  {
    year: '2023',
    title: 'Mentorship & Teaching',
    description: 'Guided future programmers (ages 16–17) in Python, OOP, and DB, while also mentoring peers.',
    type: 'work'
  },
  {
    year: '2025',
    title: 'Guardify AI',
    description: 'Built an AI-driven shoplifting detection platform with CV, LLM agents, and cloud pipelines. Won 2nd place at MTA final project competition.',
    type: 'milestone'
  },
  {
    year: '2025',
    title: 'Looking for Opportunities',
    description: 'Actively seeking internships and entry-level positions to apply my skills in Data Science & Full-Stack Development.',
    type: 'goal'
  }
];

export type TimelineConfig = typeof timelineConfig;
