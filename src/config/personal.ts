export const personalConfig = {
  // Basic Information
  name: "Ofek Cohen",
  initials: "OC",
  title: "Software Engineer & Computer Science Graduate",
  location: "Tel Aviv, Israel",
  study: "B.Sc. Computer Science – Data Science",
  university: "The Academic College of Tel-Aviv Yaffo",
  experience: "Software Engineering & Technical Leadership",
  focus: "Software Engineering & System Architecture",
  profileImage: "/images/profile.jpg",
  
  // Bio & Descriptions
  heroDescription: "I'm Ofek Cohen, a Computer Science graduate with a passion for building robust, scalable software solutions. I specialize in creating innovative systems that solve real-world problems, combining technical excellence with strategic thinking. My journey reflects determination and continuous learning, from award-winning projects to mentoring emerging developers.",
  
  aboutDescription: "I'm a Computer Science graduate with expertise in software engineering. My approach combines analytical thinking with creative problem-solving to deliver impactful technology solutions.",
  
  personalStory: [
    "I'm Ofek, a recent Computer Science graduate from The Academic College of Tel-Aviv Yaffo.",
    "My portfolio showcases diverse technical capabilities — from Guardify AI, an award-winning system that earned 2nd place among 70+ graduation projects, to scalable web applications and innovative Chrome extensions.",
    "I bring both technical expertise and leadership experience, having mentored emerging developers and guided teams through complex technical challenges while maintaining high code quality standards.",
    "I'm seeking opportunities to contribute to impactful software engineering teams where I can apply my technical skills, collaborative mindset, and passion for building exceptional user experiences."
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
    brandDescription: "Software engineer passionate about building scalable solutions and exceptional user experiences.",
    copyright: "Built with Next.js and TailwindCSS"
  }
};

export type PersonalConfig = typeof personalConfig;
