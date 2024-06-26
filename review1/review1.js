"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todos_json_1 = __importDefault(require("./todos.json"));
const typedTodos = todos_json_1.default.todos;
let todo1 = typedTodos[0];
let todo2 = typedTodos[1];
typedTodos.sort((a, b) => a.userId - b.userId);
console.log(typedTodos);
const userIdToFilter = 1;
// Todos for a specific user
const todosForUser = typedTodos.filter((todo) => todo.userId === userIdToFilter);
// Uncompleted todos for the user
const uncompletedTodosForUser = todosForUser.filter((todo) => todo.completed === false);
console.log(todosForUser);
console.log(uncompletedTodosForUser);
