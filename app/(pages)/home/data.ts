type Thumbnail = {
  title: string;
  description: string;
  author: string;
  date: string;
  like: number;
  comment: number;
  categories?: string[] | string;
};

const Thumbnails: Thumbnail[] = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus accusamus incidunt!",
    author: "Nameless Author",
    date: "Jul 23",
    like: 100,
    comment: 100,
    categories: ["Technology", "Programming"],
  },
  {
    title: "Dolor Sit Amet",
    description:
      "Dolor sit amet consectetur adipisicing elit. Aliquam minus accusamus incidunt!",
    author: "Anonymous Writer",
    date: "Aug 15",
    like: 150,
    comment: 75,
    categories: ["Artificial Intelligence", "Programming"],
  },
  {
    title: "Consectetur Adipisicing",
    description:
      "Consectetur adipisicing elit. Aliquam minus accusamus incidunt!",
    author: "Unknown Author",
    date: "Sep 10",
    like: 200,
    comment: 50,
    categories: ["Data Science", "Machine Learning"],
  },
  {
    title: "Elit Aliquam",
    description:
      "Elit aliquam minus accusamus incidunt! Lorem ipsum dolor sit amet consectetur.",
    author: "Famous Author",
    date: "Oct 5",
    like: 250,
    comment: 125,
    categories: ["Software Engineering", "Programming"],
  },
  {
    title: "Minus Accusamus",
    description:
      "Minus accusamus incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    author: "Mystery Author",
    date: "Nov 12",
    like: 300,
    comment: 80,
    categories: "Other",
  },
  {
    title: "Incidunt Aliquam",
    description:
      "Incidunt aliquam minus accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    author: "Secret Writer",
    date: "Dec 1",
    like: 350,
    comment: 90,
    categories: "Other",
  },
  {
    title: "Lorem Dolor",
    description:
      "Lorem dolor sit amet consectetur adipisicing elit. Aliquam minus accusamus incidunt!",
    author: "Hidden Author",
    date: "Jan 20",
    like: 400,
    comment: 110,
    categories: ["Artificial Intelligence", "Data Science"],
  },
  {
    title: "Sit Amet Consectetur",
    description:
      "Sit amet consectetur adipisicing elit. Aliquam minus accusamus incidunt!",
    author: "Anonymous Author",
    date: "Feb 14",
    like: 450,
    comment: 130,
    categories: ["Machine Learning", "Programming"],
  },
  {
    title: "Adipisicing Elit",
    description:
      "Adipisicing elit. Aliquam minus accusamus incidunt! Lorem ipsum dolor sit amet consectetur.",
    author: "Renowned Writer",
    date: "Mar 8",
    like: 500,
    comment: 140,
    categories: ["Software Engineering", "Programming"],
  },
];

export default Thumbnails;
