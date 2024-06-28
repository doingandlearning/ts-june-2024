// keyof  -> loop
// extends -> does it extend? true or false
// in

interface EventDetails {
  name: string;
  location: string;
  date: string;
  isPublic?: boolean;
}

// type ReadOnlyEventDetails = Readonly<EventDetails>

// type ReadOnlyEventDetails = {
//   readonly name: string;
//   readonly location: string;
//   readonly date: string;
//   readonly isPublic?: boolean;
// };

// type ReadOnlyEventDetails = {
//   readonly [Key in keyof EventDetails]: EventDetails[Key];
// };

interface Todo {
  title: string;
  description?: string;
  completed?: boolean;
  dueDate?: Date;
}
type ReadOnlyTodo = {
  readonly [Key in keyof Todo]: Todo[Key];
};

type OurReadonly<Type> = {
  readonly [Key in keyof Type]: Type[Key];
};

type ReadOnlyEvents = OurReadonly<EventDetails>;
