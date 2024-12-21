export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  technologies: string[];
}