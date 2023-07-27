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
    image: ""
  },
  {
    title: "NBA Quicksearch",
    techs: ["Javascript (React Native)", "Expo", "API"],
    link: "https://www.linablidi.fr/",
    image:""
  },
  {
    title: "Image Editor",
    techs: ["Python (PyGame, Numpy)"],
    link: "/",
    image: ""
  },
];

export default projects;
