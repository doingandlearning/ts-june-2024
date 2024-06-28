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

// Added to let TS know this files definitions don't need to worry about clashing
// definitions elsewhere in the project.
export {};
