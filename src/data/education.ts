export type Education = {
  course: string;
  content: string;
};

const education: Education[] = [
  {
    course: "CMPT 300: Operating Systems I",
    content: "Studied file systems, multi-threaded programming, I/O scheduling, and memory in C",
  },
  {
    course: "CMPT 307: Data Structures and Algorithms",
    content: "Practiced worst case and amortized complexity, modular algorithms via a cryptography case study, divide and conquer, graphs, and dynamic programming in bioinformatics context.",
  },
  {
    course: "CMPT 354: Database Systems I",
    content: "Studied SQL and database optimization via functional dependencies.",
  },
  {
    course: "CMPT 383: Comparative Programming Languages",
    content: "Used Haskell to explore recursion and asbtract type classes (Functors, Applicatives, Monads), along with a high-level overview of the Hindley-Minler type system and lambda calculus",
  },
];

export default education;
