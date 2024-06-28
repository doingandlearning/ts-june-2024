type UserRole = "admin" | "manager" | "regular user";

type User<TRole extends UserRole = "regular user"> = {
  name: string;
  role: TRole;
};

type TaskStatus = "pending" | "completed" | "archived";
type Task = {
  title: string;
  description: string;
  dueDate?: Date;
  assignedTo?: User<UserRole>;
};

type IsAdmin<T> = T extends { role: "admin" } ? true : false;
// type IsAdmin<T extends User> = T['role'] extends 'admin' ? true : false;

type NonAdminRoles = Exclude<UserRole, "admin">;

type RequiredTaskFields = {
  title: string;
  description: string;
  dueDate: NonNullable<Date>;
  assignedTo: NonNullable<User<UserRole>>;
};

// Or type

type RequiredTaskFieldsB = Required<Task>;

// Or

type Merged = Task & {
  dueDate: NonNullable<Date>;
  assignedTo: NonNullable<User<UserRole>>;
};

function fetchTaskDetails(): Task {
  // ...implementation...
  const john: User<"admin"> = { name: "John Doe", role: "admin" };
  return {
    title: "Sample Task",
    description: "Some description",
    dueDate: new Date(),
    assignedTo: john,
  };
}

type FetchedTaskDetails = ReturnType<typeof fetchTaskDetails>;

class TaskClass {
  title: string;
  description: string;
  dueDate?: Date;
  assignedTo?: User;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
  // ... more methods ...
}

type TaskInstance = InstanceType<typeof TaskClass>;

// Testing IsAdmin
const user1: User<"admin"> = { name: "John", role: "admin" };
const user2: User<"manager"> = { name: "Jane", role: "manager" };
let testIsAdmin1: IsAdmin<typeof user1> = true; // Should compile
// let testIsAdmin2: IsAdmin<typeof user2> = false; // Uncommenting this line should cause a compile error

// Testing NonAdminRoles
let managerRole: NonAdminRoles = "manager"; // Should compile
// let adminRole: NonAdminRoles = 'admin'; // Uncommenting this line should cause a compile error

const userJohn: User<"admin"> = { name: "John", role: "admin" };
// Testing RequiredTaskFields
let completeTask: RequiredTaskFields = {
  title: "Complete Task",
  description: "A task with all required fields.",
  dueDate: new Date(),
  assignedTo: { name: "John", role: "admin" } as User<"admin">,
};

// For ReturnType and InstanceType, just ensuring the above types compile without errors is sufficient.

export {};
