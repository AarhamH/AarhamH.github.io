import python from '../content/technologies/python.svg'
import csharp from '../content/technologies/csharp.svg'
import cpp from '../content/technologies/cpp.svg'
import clang from '../content/technologies/clang.png'
import html from '../content/technologies/html.svg'
import css from '../content/technologies/css.svg'
import javascript from '../content/technologies/javascript.svg'
import matlab from '../content/technologies/matlab.png'


import dotnet from '../content/technologies/dotnet.svg'
import react from '../content/technologies/react.svg'
import git from '../content/technologies/git.svg'
import visualstudio from '../content/technologies/visual-studio.svg'
import azure from '../content/technologies/azure.svg'
import linux from '../content/technologies/linux.png'






export type Technology = {
    language: string
}

export const languages : Technology[] = 
[
    { language: csharp},
    { language: clang},
    { language: cpp},
    { language: python},
    { language: html},
    { language: css},
    { language: javascript},
    { language: matlab},

]

export const technologies : Technology[] = 
[
    { language: dotnet},
    { language: azure},
    { language: visualstudio},
    { language: react},
    { language: git},
    { language: linux},



]
