export interface Certification {
  id: string;
  name: string;
  issuer: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Web Development Fundamentals',
    issuer: 'IBM',
  },
  {
    id: '2',
    name: 'Software Engineer',
    issuer: 'HackerRank',
  },
  {
    id: '3',
    name: 'Technology Job Simulation',
    issuer: 'Deloitte',
  },
  {
    id: '4',
    name: 'Java Programming',
    issuer: 'CodSoft',
  },
];

