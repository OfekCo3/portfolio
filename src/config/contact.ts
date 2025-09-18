export interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  description: string;
}

export interface ContactReason {
  title: string;
  description: string;
  icon: string;
}


export const contactReasonsConfig: ContactReason[] = [
  {
    title: 'Job Opportunities',
    description: 'Internships, entry-level positions, or freelance work',
    icon: '💼'
  },
  {
    title: 'Collaboration',
    description: 'Open source projects, hackathons, or side projects',
    icon: '🤝'
  },
  {
    title: 'Mentorship',
    description: 'Looking for guidance or want to share knowledge',
    icon: '🎓'
  },
  {
    title: 'Just Chat',
    description: 'Networking, tech discussions, or general questions',
    icon: '💬'
  }
];


export const contactMethodsConfig = {
  email: {
    title: 'Email',
    value: 'ofekcohen3300@email.com',
    href: 'mailto:ofekcohen3300@email.com',
    description: 'Send me an email for any inquiries'
  },
  linkedin: {
    title: 'LinkedIn',
    value: 'linkedin.com/in/ofek-cohen33',
    href: 'https://linkedin.com/in/ofek-cohen33',
    description: 'Connect with me professionally'
  },
  github: {
    title: 'GitHub',
    value: 'github.com/OfekCo3',
    href: 'https://github.com/OfekCo3',
    description: 'Check out my code and projects'
  },
  location: {
    title: 'Location',
    value: 'Tel Aviv, Israel',
    href: '#',
    description: 'Currently based in Tel Aviv'
  }
};


export type ContactReasonsConfig = typeof contactReasonsConfig;
export type ContactMethodsConfig = typeof contactMethodsConfig;
