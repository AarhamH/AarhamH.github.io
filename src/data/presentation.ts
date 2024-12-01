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
  education: {
    institution: string,
    degree: string
    gpa: string
  };
  socials: Social[];
};

const presentation: Presentation = {
  mail: "aarham.haider@gmail.com",
  title: "hey, i’m aarham!",
  description:"I am interested in solving problems and building fun software. Nearing 2 years software engineering experience, I have worked in diverse software teams and expanded my domain knowledge in an array of technologies, software patterns, and techniques. I mainly work in Go, but also loved hacking around with Rust and Haskell. Apart from software, I enjoy classical music, preacher curls, and poking trees.",
  education: {
    institution: "Simon Fraser University",
    degree: "Bachelor's of Applied Science in Computing Science",
    gpa: "3.84"
  },
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
