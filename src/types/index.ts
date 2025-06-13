export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'languages';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}