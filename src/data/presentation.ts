type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "aarham.haider@gmail.com",
  title: "Hey, I’m Aarham!",
  description:"I am a *second year CS Student @ SFU*, expecting to graduate in May 2024. I have a passion for *problem solving* and building interesting services that touch many people's needs. As an aspiring developer, I have honed skills in various technologies.\n At the moment, I am really enjoying *C#* development within *.NET*, and have built programs using *ASP.NET Core, WPF, and Blazor*. I am also experienced with various other technolgies, such as *Python, C/C++, and Javascript (React/React Native)*. Outside of programming, I enjoy classical music, basketball, and model designing in Blender!",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
