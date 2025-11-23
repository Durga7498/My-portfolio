export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  period?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Asset Management Dashboard',
    period: 'Apr 2024 – May 2024',
    description: 'Built an Asset Management Dashboard using MERN stack to manage 50+ motor assets and streamline maintenance operations. Created modular interfaces to add, edit, and delete assets with dynamic forms, achieving 100% input validation and confirmation. Developed maintenance ticketing system for tracking issues per asset, supporting CRUD operations and real-time status updates.',
    tags: ['MERN Stack', 'React', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/Durga7498/Asset-Management-Dashboard-',
    liveUrl: '',
    image: '/asset-management.png',
  },
  {
    id: '2',
    title: 'Tourist Stay Finder – Full-Stack Hotel Booking Application',
    period: 'Feb 2023 – Mar 2023',
    description: 'Designed and developed a responsive hotel booking web application enabling users to search, book, and manage tourist accommodations. Built the frontend using HTML, CSS, and JavaScript, and the backend APIs with Node.js and Express.js; managed data using MongoDB. Deployed the application with Netlify (frontend) and Render/Heroku (backend), integrating GitHub version control for continuous updates.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/Durga7498',
    liveUrl: 'https://amazing-muffin-6bb16a.netlify.app/',
    image: '/tourist-stay.png',
  },
  {
    id: '3',
    title: 'Real-Time Chat Application',
    period: 'Dec 2022 – Feb 2023',
    description: 'Developed a real-time chat platform enabling instant communication among multiple users with private and group chat functionality. Built a responsive UI with React, HTML, CSS, and JavaScript; managed backend operations using Node.js and MongoDB. Implemented secure user authentication, message storage, and real-time communication using Socket.IO and WebSockets.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'WebSockets'],
    githubUrl: 'https://github.com/Durga7498/-Real-Time-Chat-App',
    liveUrl: 'https://realtime-chat-app.netlify.app',
    image: '/chat-app.png',
  },
];

