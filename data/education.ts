export interface Education {
  id: string;
  year: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  tags: string[];
  cgpa?: string;
}

export const education: Education[] = [
  {
    id: '1',
    year: '2025',
    degree: 'Bachelor of Technology in Electronics And Telecommunication Engineering',
    institution: 'G. H. Raisoni College of Engineering',
    location: 'Nagpur, India',
    description: 'I have completed my degree in Electronics and Telecommunication Engineering, where I developed a strong foundation in software development, web technologies, and full-stack development. I have also gained hands-on experience through various projects and internships.',
    tags: ['Electronics', 'Telecommunication', 'FullStackDeveloper', 'SoftwareEngineering'],
    cgpa: '8.0 CGPA',
  },
  {
    id: '2',
    year: '2021',
    degree: 'Pre-University Education (PCMC Stream)',
    institution: 'Agnihotri Pre-University College',
    location: 'Wardha, India',
    description: 'Completed Pre-University education with PCMC stream. Major focus on Physics, Chemistry, Mathematics, and Computer Science. Developed strong foundation in analytical thinking and problem-solving skills.',
    tags: ['Physics', 'Chemistry', 'Mathematics', 'ComputerScience', 'PCMC'],
  },
  {
    id: '3',
    year: '2019',
    degree: 'Primary & High School',
    institution: 'Shir Datta Vidya Mandir School',
    location: 'Butibori, India',
    description: 'Completed foundational education with strong emphasis on core subjects including science, mathematics, and languages. Built strong academic foundation and developed interest in technology and problem-solving.',
    tags: ['PrimaryEducation', 'HighSchool', 'Science', 'Mathematics'],
  },
];

