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
    start:'July 2024',
    end: 'present',
    title: "Software Engineer Intern",
    company: "Harris Computer (Cayenta)",
    description: "Currently constructing a modernized version of Cayenta's internal product repository platform abiding by new acceptance criteria. Spearheaded the evaluation and integration of Playwright as the E2E testing platform for UI stories.",
    technologies: ["Go","React.js", "TypeScript", "GraphQL", "Playwright", "Docker"]  
  },
  {
    start:'January 2023',
    end: 'August 2023',
    title: "Junior Application Developer",
    company: "Modrinth",
    description: "Built and deployed Modrinth Theseus, engaging in fullstack development and automated E2E testing. Demonstrated leadership during our migration from Electron.js to Tauri through mentorship and team engagement.",
    technologies: ["Rust","Vue.js", "TypeScript", "Git", "Cypress", "Docker"]  
  },
  {
    start:'September 2022',
    end:'December 2022',
    title: "Undergraduate Teaching Assistant",
    company: "SFU",
    description: "Regularly explained computer science concepts and assisted with assignments for first-year students, ranging from fundamental data structures such as arrays, trees, and linked-lists, all the way to principles in Object-Oriented Design in C++.",
    technologies: ["C++","Linux", "DS & A" ,"OOP"]  
  },
];
export default experience;
