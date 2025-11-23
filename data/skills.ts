export interface Skill {
  name: string;
  icon: string; // Icon name from react-icons
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { name: 'ReactJS', icon: 'FaReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'JavaScript (ES6+)', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'HTML5', icon: 'FaHtml5' },
      { name: 'CSS3', icon: 'FaCss3Alt' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: 'FaNode' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'Python', icon: 'FaPython' },
      { name: 'Java', icon: 'FaJava' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Prisma', icon: 'SiPrisma' },
      { name: 'MySQL', icon: 'SiMysql' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Methodologies',
    skills: [
      { name: 'Git', icon: 'FaGitAlt' },
      { name: 'RESTful APIs', icon: 'FaCode' },
      { name: 'Responsive Design', icon: 'FaMobileAlt' },
      { name: 'Figma', icon: 'FaFigma' },
      { name: 'Docker', icon: 'FaDocker' },
    ],
  },
];

