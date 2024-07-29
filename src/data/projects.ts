import musicplayer from '../content/images/music-player.png'
import nbaquicksearch from '../content/images/nba-quicksearch.png'
import piano from '../content/images/piano.png'
import lambda from '../content/images/lambda.png'




export type Project = {
  title: string;
  techs: string[];
  link: string;
  year: string;
  image?: string;
  isDisplayed?: boolean;
};

const projects: Project[] = [
  {
    title: "MyPiano",
    techs: ["C#","ASP.NET","JavaScript","Vue","PostgreSQL","Docker"],
    link: "https://github.com/AarhamH/MyPiano",
    year: "2023",
    isDisplayed: true,
    image: piano
  },
  {
    title: "MVVM Music Player",
    techs: ["C#", ".NET WPF", "Entity Framework Core","SQLite", "NUnit"],
    link: "https://github.com/AarhamH/MVVM-MusicPlayer",
    year: "2023",
    isDisplayed: true,
    image: musicplayer
  },
  {
    title: "NBA Quicksearch",
    techs: ["Javascript", "React Native", "Expo", "API"],
    link: "https://github.com/AarhamH/NBA-Quicksearch",
    year: "2023",
    isDisplayed: true,
    image: nbaquicksearch
  },
  {
    title: "Image Editor",
    techs: ["Python", "PyGame", "Numpy"],
    link: "https://github.com/AarhamH/python-image-manipulator",
    year: "2021",
  },
  {
    title: "Travelling Salesman Solver",
    techs: ["C++"],
    link: "https://github.com/AarhamH/tsp-solver",
    year: "2022",
  },
  {
    title: "Portfolio",
    techs: ["Astro", "Typescript", "Tailwind", "Azure"],
    link: "https://github.com/AarhamH/aarhamh.github.io",
    year: "2023",
  },
  {
    title: "Multithread Chat Program",
    techs: ["C", "Linux", "Pthreads", "Sockets", "UDP"],
    link: "https://github.com/AarhamH/multithread-chat-cli",
    year: "2023",
  },
  {
    title: "MenuMap",
    techs: ["JavaScript", "React", "Tailwind", "Jest", "Netlify", "AGILE", "JIRA"],
    link: "https://github.com/AarhamH/MenuMap",
    year: "2023",
  },
  {
    title: "happy(lang)",
    techs: ["Haskell", "LISP"],
    link: "https://github.com/AarhamH/happylang",
    year: "2024",
    isDisplayed: true,
    image: lambda
  },
  


];

export default projects;
