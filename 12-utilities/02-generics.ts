// keyof  -> loop
// extends -> does it extend? true or false
// in

interface EventDetails {
  name: string;
  location: {
    venueDetails: {
      manager: string;
      contact_number: number;
    };
    capacity: number;
    parkingQuality: number;
  };
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

// map((key)=> ({[key]: Todo[key]}))

type OurReadonly<Type> = {
  readonly [Key in keyof Type]: Type[Key];
};

// type Readonly<T> = {
// 	readonly [P in keyof T]: T[P];
// };

type ReadOnlyEventDetails = OurReadonly<EventDetails>;

type DeeplyReadonly<Type> = {
  readonly [Key in keyof Type]: Type[Key] extends string | boolean
    ? Type[Key]
    : DeeplyReadonly<Type[Key]>;
};

type DeeplyReadOnlyEventDetails = DeeplyReadonly<EventDetails>;

// is the type value a string or a boolean?
// Yes? Return it
// No? Call DeeplyReadonly on the string value

const newEvent: DeeplyReadOnlyEventDetails = {
  name: "Glastonbury",
  location: {
    venueDetails: {
      manager: "Farmer",
      contact_number: 123,
    },
    capacity: 100000,
    parkingQuality: 0,
  },
  date: "2024-06-28",
  isPublic: true,
};

newEvent.location.venueDetails.manager = "Bob";
