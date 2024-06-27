interface Book {
  title: string;
  author: {
    firstName: string;
    lastName: string;
  };
  published: {
    year: number;
    city: string;
  };
}

const book: Book = {
  title: "TypeScript Basics",
  author: { firstName: "John", lastName: "Doe" },
  published: { year: 2020, city: "New York" },
};

console.log(book);
