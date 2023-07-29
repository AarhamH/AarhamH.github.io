import python from '../content/technologies/python.svg'
import csharp from '../content/technologies/csharp.svg'
import cpp from '../content/technologies/cpp.svg'
import clang from '../content/technologies/clang.png'
import html from '../content/technologies/html.svg'
import css from '../content/technologies/css.svg'
import javascript from '../content/technologies/javascript.svg'

import dotnet from '../content/technologies/dotnet.svg'
import react from '../content/technologies/react.svg'
import git from '../content/technologies/git.svg'
import visualstudio from '../content/technologies/visual-studio.svg'
import azure from '../content/technologies/azure.svg'
import linux from '../content/technologies/linux.png'
import node from '../content/technologies/nodejs.svg'


export type Technology = {
    name: string
    language: string
    link: string
}

export const languages : Technology[] = 
[
    {   name: 'C#',
        language: csharp,
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/"
    },
    {   name: 'C',
        language: clang,
        link: "https://learn.microsoft.com/en-us/cpp/c-language/?view=msvc-170"

    },
    {   name: 'C++',
        language: cpp,
        link: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170"

    },
    {   name: 'Python',
        language: python,
        link: "https://www.python.org/"

    },
    {   name: 'HTML',
        language: html,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"

    },
    {   name: 'CSS',
        language: css,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"

    },
    {   name: 'JavaScript',
        language: javascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"

    },


]

export const technologies : Technology[] = 
[
    {   name: '.NET',
        language: dotnet,
        link: "https://dotnet.microsoft.com/en-us/"

    },
    {   name: 'Azure',
        language: azure,
        link: "https://azure.microsoft.com/en-ca"

    },
    {   name: 'VS IDE',
         language: visualstudio,
         link: "https://visualstudio.microsoft.com/"

    },
    {   name: 'NodeJS',
        language: node,
        link: "https://nodejs.org/en"
    },
    {   name: 'React',
        language: react,
        link: "https://react.dev/"

    },
    {   name: 'Git',
        language: git,
        link: "https://git-scm.com/"

    },
    {   name: 'Linux',
        language: linux,
        link: "https://ubuntu.com/"

    },



]
