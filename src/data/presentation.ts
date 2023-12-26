import socialImg1 from "../content/socials/_github.svg"
import socialImg2 from "../content/socials/_linkedin.svg"
import socialImg3 from "../content/socials/_mail.svg"



type Social = {
  label: string;
  link: string;
  image: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  education: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "aarham.haider@gmail.com",
  title: "Hey, I’m Aarham!",
  description:"I am a *third year CS Student @ SFU*, expecting to graduate in May 2025. I have a passion for *problem solving* and interest in building services that cater to the needs of many people. As a developer, I have honed skills in various technologies.\n Currently, I'm working extensively with *Rust* and *Vue.js* as a Application Developer at *Modrinth*. In my spare time, I have gained development experience with *C#* and have built programs using ASP.NET Core, WPF, and video games in Unity. Apart from building software, I enjoy classical music, basketball, and poking trees.",
  education: "Simon Fraser University | Bachelor's of Applied Science in Computer Science | 3.75/4.33 GPA",
  socials: [
    {
      label: "Github",
      link: "https://github.com/AarhamH",
      image: socialImg1
    },
    {
      label: "LinkedIn",
      link: "https://ca.linkedin.com/in/aarham-haider-5a0a4a1bb",
      image: socialImg2

    },
    {
      label: "Gmail",
      link: "mailto:aarham.haider@gmail.com",
      image: socialImg3

    },
  ],
};

export default presentation;
