export interface Internship {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  tags: string[];
}

export const internships: Internship[] = [
  {
    id: '1',
    company: 'AD Infocom System Pvt. Ltd',
    position: 'Web Developer',
    period: 'Dec 2024 – May 2025',
    description: [
      'Built a CMMS using MERN stack to enhance asset tracking, improve safety, and streamline 10+ recurring maintenance workflows.',
      'Developed a role-specific dashboard for admins, technicians, and viewers to manage 100+ tasks with clear role-based permissions.',
      'Worked in the software development team under the mentorship of Mr Prabhakar sir, focusing on building scalable full-stack web applications.',
      'Collaborated on backend APIs using Node.js and Express, with MongoDB as the primary database.',
    ],
    tags: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React', 'Full-Stack Development'],
  },
];

