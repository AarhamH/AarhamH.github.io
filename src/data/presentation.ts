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
  description:"I am a *fourth year CS Student @ SFU*, expecting to graduate in May 2025. I have a passion for *problem solving* and interest in building services that cater to the needs of many people. As a developer, I have honed skills in various technologies and have had extensive real world experience in software teams.\n As an application developer at Modrinth, I worked extensively with *Rust* in building middleware services for the Theseus client and providing compatibility with the user's native JRE, along with work in the client side by building interactive UIs with *Vue.js*. In my spare time, I have gained development experience with *C#* and *C++* in Windows development environments, and have used technologies such as ASP.NET, WPF, and CMake. I also enjoy exploring the functional world by experimenting with Haskell and Lisp. Apart from building software, I enjoy classical music, basketball, and poking trees.",
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
