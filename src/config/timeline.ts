export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'milestone' | 'goal' | 'volunteering';
}

export const timelineConfig: TimelineItem[] = [
  {
    year: '2018-2020',
    title: 'Service in the IDF',
    description: 'Served as a psychotechnical interviewer and later commander, leading a team of 15+ soldiers.',
    type: 'work'
  },
  {
    year: '2020',
    title: 'She Codes – Python Course',
    description: 'Joined She Codes community and completed a Python programming course.',
    type: 'education'
  },
  {
    year: '2021',
    title: 'She Codes – Event Coordinator',
    description: 'Volunteered as an event coordinator, organizing community events and workshops.',
    type: 'volunteering'
  },
  {
    year: '2022',
    title: 'Started Computer Science Degree',
    description: 'Began my B.Sc. in Computer Science at MTA, specializing in Data Science.',
    type: 'education'
  },
  {
    year: '2022',
    title: 'She Codes – Python Mentor',
    description: 'Became a mentor at She Codes, guiding women in Python and programming fundamentals.',
    type: 'volunteering'
  },
  {
    year: '2023',
    title: 'C++ & OOP Instructor – Cyber Education Center',
    description: 'Taught future programmers (ages 16–17) C++ and OOP fundamentals at the Cyber Education Center.',
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
