import React, { useState } from "react";

import Input from "../Input";
import TodoItem from "../TodoItem";
import Search from "../Search";

import { Header } from "./TodoList.styles";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string): void => {
    if (newTodo.trim() === "") return;

    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, todo]);
  };

  const toggleTodo = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id: number): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header>Todo List</Header>

      <Search todos={todos} />

      <Input onAddTodo={addTodo} />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleTodo={toggleTodo}
            onRemoveTodo={removeTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
