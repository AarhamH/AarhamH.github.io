export type Experience = {
  start: string
  end: string
  title: string
  company: string
  description: string
  technologies: string[]
};

const experience:Experience[] = [
  {
    start:'May 2024',
    end: 'December 2024',
    title: "Software Engineer Intern",
    company: "Harris Computer (Cayenta)",
    description: "Currently constructing a modernized version of Cayenta's internal product repository platform abiding by new acceptance criteria. Spearheaded the evaluation and integration of Playwright as the E2E testing platform for screen stories.",
    technologies: ["Go","React.js", "TypeScript", "GraphQL", "Playwright", "Docker"]  
  },
  {
    start:'January 2023',
    end: 'August 2023',
    title: "Junior Application Developer",
    company: "Modrinth",
    description: "Built and deployed Modrinth Theseus and Labrinth, engaging in fullstack development and QA. Demonstrated leadership during our migration from Electron.js to Tauri through mentorship and team engagement.",
    technologies: ["Rust","Vue.js", "TypeScript", "Git", "Cypress", "Docker"]  
  },
  {
    start:'September 2022',
    end:'December 2022',
    title: "Undergraduate Teaching Assistant",
    company: "SFU",
    description: "Held lab sessions for over 30 students, covering lecture material and assignments. Built internal tooling in Python and C++ to streamline automated marking.",
    technologies: ["C++", "Python", "Linux"]  
  },
];
export default experience;
