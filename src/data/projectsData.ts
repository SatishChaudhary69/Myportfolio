import { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Dream Travel",
    description: "Smart travel package selector app built with a user-first experience in mind. A mobile app designed as a travel and tour packaging solution for users who want to explore destinations based on their interests, featuring beautiful destination galleries, personalized package selection, and seamless booking experience.",
    image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React Native", "Firebase", "Mobile App", "Authentication", "UI/UX"],
    github: "https://github.com/SatishChaudhary69/dream-travel",
    featured: true
  },
  {
    id: 2,
    title: "Vending Machine System",
    description: "A comprehensive vending machine system with both hardware simulation in C and a web-based interface using HTML, CSS, and JavaScript.",
    image: "https://images.pexels.com/photos/3943746/pexels-photo-3943746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["C", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/username/vending-machine",
    featured: true
  },
  {
    id: 3,
    title: "Client-Server Network Model",
    description: "Implemented a network model demonstrating client-server architecture using Java, featuring robust communication protocols and data handling.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Java", "Networking", "Client-Server", "Socket Programming"],
    github: "https://github.com/username/network-model",
    featured: true
  },
  {
    id: 4,
    title: "Local Business Website",
    description: "Custom-designed responsive website for a local business, featuring modern design and optimal user experience.",
    image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://example-business.com",
    featured: false
  },
  {
    id: 5,
    title: "Content Creator Portfolio",
    description: "Designed and developed a portfolio website showcasing thumbnail designs and creative work for social media creators.",
    image: "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Web Design", "HTML", "CSS", "Portfolio"],
    link: "https://creator-portfolio.com",
    featured: false
  }
];