export const profileData = {
  name: "Rakesh Matta",
  title: "Full Stack Developer",
  email: "rakeshmatta110305@gmail.com",
  phone: "+91 9177820572",
  linkedin: "https://www.linkedin.com/in/rakesh-matta-722b11330",
  github: "https://github.com/rakesh-adam",
  intro: "A passionate Software Developer skilled in Python, front-end, and back-end development. I love building efficient applications and exploring new technologies.",
  funFacts: [
    "I scored a perfect 10.0 GPA in SSC 🎓",
    "I'm a certified Python developer from FreeCodeCamp 🐍",
    "I love turning ideas into code adventures ⚔️",
    "Currently pursuing B.Tech in CSE at BVC Engineering College 🏫",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Budget App",
    description: "Python-based budget app with transaction tracking, category management, and spending analysis. Visualizes category-wise spending percentages with charts.",
    technologies: ["Python", "OOP", "Data Structures"],
    github: "https://github.com/rakesh-adam",
  },
  {
    id: 2,
    title: "Shape Calculator",
    description: "Python app with Rectangle and Square classes for calculating area, perimeter, diagonal, and visual ASCII art representation of shapes.",
    technologies: ["Python", "OOP", "Inheritance"],
    github: "https://github.com/rakesh-adam",
  },
  {
    id: 3,
    title: "Email Client App",
    description: "Python-based email client with User, Email, and Inbox classes. Features sending, receiving, reading, and deleting emails with timestamp tracking.",
    technologies: ["Python", "OOP", "Datetime"],
    github: "https://github.com/rakesh-adam",
  },
];

export const skills = [
  { name: "HTML5", level: 90, color: "ocean" as const },
  { name: "CSS", level: 85, color: "forest" as const },
  { name: "JavaScript", level: 80, color: "gold" as const },
  { name: "Python", level: 85, color: "forest" as const },
  { name: "Java", level: 70, color: "ocean" as const },
  { name: "C", level: 65, color: "mountain" as const },
  { name: "MySQL", level: 70, color: "gold" as const },
  { name: "Bootstrap", level: 75, color: "ocean" as const },
  { name: "Git & GitHub", level: 80, color: "forest" as const },
];

export const experiments = [
  {
    title: "Java Full Stack Internship",
    description: "2-month internship at Talentshine — built web apps using Java, learned industry best practices.",
    type: "internship",
  },
  {
    title: "FreeCodeCamp Python Cert",
    description: "Completed the Scientific Computing with Python certification from FreeCodeCamp.",
    type: "certification",
  },
  {
    title: "Full Stack Web Dev Cert",
    description: "Certified in Full Stack Web Development from Talentshine, covering Java front-end & back-end.",
    type: "certification",
  },
];
