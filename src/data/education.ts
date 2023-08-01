export type Education = {
  course: string;
  content: string[];
};

const education: Education[] = [
  {
    course: "CMPT 225: Data Structures and Algorithms",
    content: ["Stacks/Queues", "Trees", "Sorting","Hashing", "Priority Queue"],
  },
  {
    course: "CMPT 276: Introduction to Software Engineering",
    content: ["Android", "AGILE methods", "Git practices"],
  },
  {
    course: "CMPT 295: Intro to Computer Systems",
    content: ["Memory", "RISC-V Assembly", "Cache","Processor Design", "Pipelining"],
  },
  {
    course: "CMPT 300: Operating Systems I",
    content: ["Multi-Threaded Programming", "File Systems"],
  },
  {
    course: "CMPT 300: Operating Systems I",
    content: ["Multi-Threaded Programming", "File Systems"],
  },
  {
    course: "CMPT 354: Database Systems I",
    content: ["SQL I/O", "Administration", "Security"],
  },
];

export default education;
