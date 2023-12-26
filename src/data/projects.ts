import projImg1 from '../content/images/music-player.png'
import projImg2 from '../content/images/nba-quicksearch.png'
import projImg3 from '../content/images/piano.png'
import projImg4 from '../content/images/menumap.png'




export type Project = {
  title: string;
  techs: string[];
  link: string;
  year: string;
  image?: string;
  important?: boolean;
};

const projects: Project[] = [
  {
    title: "MyPiano",
    techs: ["C#","ASP.NET","JavaScript","Vue","PostgreSQL","Docker"],
    link: "https://github.com/AarhamH/MyPiano",
    year: "2023",
    important: true,
    image: projImg3
  },
  {
    title: "MVVM Music Player",
    techs: ["C#", ".NET WPF", "Entity Framework Core","SQLite", "NUnit"],
    link: "https://github.com/AarhamH/MVVM-MusicPlayer",
    year: "2023",
    important: true,
    image: projImg1
  },
  {
    title: "NBA Quicksearch",
    techs: ["Javascript", "React Native", "Expo", "API"],
    link: "https://github.com/AarhamH/NBA-Quicksearch",
    year: "2023",
    important: true,
    image: projImg2
  },
  {
    title: "Image Editor",
    techs: ["Python", "PyGame", "Numpy"],
    link: "https://github.com/AarhamH/python-image-manipulator",
    year: "2021",
    important: false,
    image: projImg4
  },
  {
    title: "Travelling Salesman Solver",
    techs: ["C++"],
    link: "https://github.com/AarhamH/tsp-solver",
    year: "2022",
    image: projImg2
  },
  {
    title: "Portfolio",
    techs: ["Astro", "Typescript", "Tailwind", "Azure"],
    link: "https://github.com/AarhamH/aarhamh.github.io",
    year: "2023",
    important: false,
    image: projImg3
  },
  {
    title: "Multithread Chat Program",
    techs: ["C", "Linux", "Pthreads", "Sockets", "UDP"],
    link: "https://github.com/AarhamH/multithread-chat-cli",
    year: "2023",
    important: false,
    image: projImg3
  },
  {
    title: "MenuMap",
    techs: ["JavaScript", "React", "Tailwind", "Jest", "Netlify", "AGILE", "JIRA"],
    link: "https://github.com/AarhamH/MenuMap",
    year: "2023",
    important: true,
    image: projImg4
  },

  


];

export default projects;
