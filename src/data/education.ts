export type Education = {
  course: string;
  content: string;
};

const education: Education[] = [
  {
    course: "CMPT 225: Data Structures and Algorithms",
    content: "Implemented data structures, such as trees, heaps, and hashtables, and sorting algorithms in C++",
  },
  {
    course: "CMPT 276: Introduction to Software Engineering",
    content: "Practiced AGILE methods and Git techniques while building an Android application in Java",
  },
  {
    course: "CMPT 295: Intro to Computer Systems",
    content: "Learned about pointers and addressing, RISC-V assembly, and processor design   ",
  },
  {
    course: "CMPT 300: Operating Systems I",
    content: "Studied file systems, multi-threaded programming, processes, and memory in C",
  },
  {
    course: "CMPT 354: Database Systems I",
    content: "Implemented database systems using SQL Server and learned about entities and schema design",
  },
];

export default education;
