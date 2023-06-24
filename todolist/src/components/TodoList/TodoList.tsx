import React, { useState } from "react";

import Input from "../Input";
import TodoItem from "../TodoItem";
import { Header } from "./TodoList.styles";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoList, setTodoList] = useState<
    { id: number; text: string; completed: boolean }[] | undefined
  >(todos);
  const [text, setText] = useState("");

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

  const handleOnClick = () => {
    const findTodo =
      todos && todos.length > 0
        ? todos.filter((todo) => todo.text.includes(text))
        : undefined;
    setTodoList(findTodo);
  };

  return (
    <>
      <Header>Todo List</Header>

      <div>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" disabled={!text} onClick={handleOnClick}>
          Search
        </button>
      </div>

      <div className="body">
        {todoList &&
          todoList.length > 0 &&
          todoList.map((todo) => {
            console.log(todo);
            return (
              <div className="body__item">
                <h3>{todo?.text}</h3>
              </div>
            );
          })}
      </div>

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
