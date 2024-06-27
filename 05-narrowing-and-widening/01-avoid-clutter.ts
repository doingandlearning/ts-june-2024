interface Person {
  name: string;
  born: {
    where: string;
    when: string;
  };
  died: {
    where: string;
    when: string;
  };
}

const person: Person = {
  name: "John Doe",
  born: { where: "New York", when: "January 1, 1990" },
  died: { where: "Los Angeles", when: "December 31, 2050" },
};
// excess property checks
