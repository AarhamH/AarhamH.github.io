export type Education = {
  course: string;
  content: string;
};

const education: Education[] = [
  {
    course: "CMPT 225: Data Structures and Algorithms",
    content: "Studied designs of data structures, such as trees, heaps, hashsets, and sorting algorithms in C++",
  },
  {
    course: "CMPT 276: Introduction to Software Engineering",
    content: "Practiced AGILE methods and Git techniques while building a web application with a custom tech stack",
  },
  {
    course: "CMPT 295: Intro to Computer Systems",
    content: "Learned about pointers and addressing, RISC-V assembly, and processor design",
  },
  {
    course: "CMPT 300: Operating Systems I",
    content: "Studied file systems, multi-threaded programming, I/O scheduling, and memory in C",
  },
  {
    course: "CMPT 307: Data Structures and Algorithms",
    content: "Practiced worst case and amortized complexity analysis, studied crypto systems as an application to modular algorithms, divide and conquer, graph paths and MST, and dynamic programming in bioinformatics context.",
  },
  {
    course: "CMPT 354: Database Systems I",
    content: "Learned about theoretical models, particularly Entity-Relationships, querying using SQL, and database optimization via functional dependencies.",
  },
  {
    course: "CMPT 383: Comparative Programming Languages",
    content: "Used Haskell to explore recursion, asbtract type classes (Functors, Applicatives, Monads), semantics, and static/infered type checking.",
  },
  {
    course: "MACM 316: Numerical Analysis",
    content: "Applied efficient and low error approximation algorithms for solving linear/non-linear systems, polynomial interpolation, differentiation, integration, and ordinary differential equations.",
  },

];

export default education;
