import projImg1 from '../content/images/music-player.png'
import projImg2 from '../content/images/nba-quicksearch.png'

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
    title: "MVVM Music Player",
    techs: ["C#", "XAML", "Entity Framework Core","SQLite"],
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
    important: true,
    image: projImg2
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
    link: "https://github.com/AarhamH/tsp-solver",
    year: "2023",
    important: true,
    image: projImg2
  },

];

export default projects;
