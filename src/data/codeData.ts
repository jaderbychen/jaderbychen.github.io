import coverStick from "@/assets/cover-stick.png";
import cover996 from "@/assets/996.png";
import cover1s from "@/assets/1s.png";

export interface CodeProject {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
  externalLink?: string;
  technologies: string[];
}

export const codeProjects: CodeProject[] = [
  {
    id: "ai=fortune-slip-drawing",
    title: "AI fortune slip drawing",
    description: "[Chinese only] Let the model read your next move—then decide if you believe it.",
    coverImage: coverStick,
    date: "December 2025",
    externalLink: "https://stick-roll.vercel.app/",
    technologies: []
  },
  {
    id: "mini-game",
    title: "996 Simulator",
    description: "[Chinese only] A mini game to simulate work scenarios",
    coverImage: cover996,
    date: "November 2024",
    externalLink: "https://workaholic-simulation.vercel.app/",
    technologies: []
  },
  {
    id: "side-proj",
    title: "Retail Investor Advisor",
    description: "A tool to empower retail investors with sharp, actionable market insights to make informed portfolio decisions.",
    coverImage: cover1s,
    date: "October 2024",
    externalLink: "https://www.1nvestsense.com/",
    technologies: []
  }
];

export const getCodeProject = (id: string): CodeProject | undefined => {
  return codeProjects.find(project => project.id === id);
};
