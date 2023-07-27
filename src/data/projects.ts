import projImg1 from '../content/images/music-player.png'
import projImg2 from '../content/images/nba-quicksearch.png'

export type Project = {
  title: string;
  techs: string[];
  link: string;
  image: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "MVVM Music Player",
    techs: ["C#", "XAML", "Entity Framework Core","SQLite"],
    link: "https://github.com/MaeWolff/dictionary-app",
    image: projImg1
  },
  {
    title: "NBA Quicksearch",
    techs: ["Javascript (React Native)", "Expo", "API"],
    link: "https://www.linablidi.fr/",
    image: projImg2
  },
  {
    title: "Image Editor",
    techs: ["Python (PyGame, Numpy)"],
    link: "/",
    image: projImg2
  },
  {
    title: "Image Editor",
    techs: ["Python (PyGame, Numpy)"],
    link: "/",
    image: projImg2
  },
];

export default projects;
