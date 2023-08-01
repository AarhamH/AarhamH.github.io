import python from '../content/technologies/_python.svg'
import csharp from '../content/technologies/_csharp.svg'
import cpp from '../content/technologies/_cpp.svg'
import clang from '../content/technologies/_c.svg'
import html from '../content/technologies/_html.svg'
import css from '../content/technologies/_css.svg'
import javascript from '../content/technologies/_javascript.svg'

import dotnet from '../content/technologies/_dotnet.svg'
import react from '../content/technologies/_react.svg'
import git from '../content/technologies/_git.svg'
import sqlite from '../content/technologies/_sqlite.svg'
import azure from '../content/technologies/_azure.svg'
import linux from '../content/technologies/_linux.svg'
import node from '../content/technologies/_nodejs.svg'


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
    {   name: 'SQLite',
         language: sqlite,
         link: "https://www.sqlite.org/index.html"

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
