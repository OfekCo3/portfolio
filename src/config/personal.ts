export const personalConfig = {
  // Basic Information
  name: "Ofek Cohen",
  initials: "OC",
  title: "Computer Science Student & Full-Stack Developer",
  location: "Tel Aviv, Israel",
  study: "B.Sc. Computer Science – Data Science",
  university: "The Academic College of Tel-Aviv Yaffo",
  experience: "3+ Years Coding, Teaching & Projects",
  focus: "AI, Data Science & Full-Stack Development",
  profileImage: "/images/profile.jpg",
  
  // Bio & Descriptions
  heroDescription: "I'm Ofek Cohen, a passionate Computer Science student with a can-do attitude. I love creating innovative solutions that combine software engineering, AI, and cloud technologies. My journey reflects determination and curiosity, from completing the Israel National Trail to mentoring the next generation of developers.",
  
  aboutDescription: "I'm a passionate Computer Science student with a love for creating innovative solutions through code. My journey in technology has been driven by curiosity and a desire to make a positive impact.",
  
  personalStory: [
    "Hi! I'm Ofek, a Computer Science student at The Academic College of Tel-Aviv Yaffo, specializing in Data Science. My passion for coding started in high school and grew stronger as I took on bigger challenges.",
    "I thrive on building impactful projects — from Guardify AI (an award-winning Generative AI system) to my Virtual Pet Chrome extension, and multiple game development projects.",
    "Beyond coding, I mentor young programmers, helping them learn Python, OOP, and databases, and I love guiding teams to achieve their goals.",
    "I'm always eager to grow, learn new technologies, and work with innovative teams that build solutions with real-world impact."
  ],
    
  // Quick Stats for Hero Section
  stats: {
    yearsOfCoding: "3+",
    technologies: "15+",
    // These will be calculated automatically from projects data
    projectsCount: "auto", // Will be replaced with actual count
    completedProjects: "auto"
  },
  
  // Footer
  footer: {
    brandDescription: "Computer Science student passionate about creating innovative solutions through code.",
    copyright: "Built with Next.js and TailwindCSS"
  }
};

export type PersonalConfig = typeof personalConfig;
