import React, { useState } from "react";

import Input from "../Input";
import TodoItem from "../TodoItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  Header,
  TodoListWrapper,
  TodosWrapper,
  InputWrapper,
  IconWrapper,
  InputStyle,
} from "./TodoList.styles";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<
    { id: number; text: string; completed: boolean }[] | undefined
  >(todos);

  const handleOnClick = () => {
    const findTodo =
      todos && todos.length > 0
        ? todos.filter((todo) =>
            todo.text.toLowerCase().includes(text.toLowerCase())
          )
        : undefined;
    setTodoList(findTodo);
  };

  const addTodo = (newTodo: string): void => {
    if (newTodo.trim() === "") return;

    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, todo]);
    todoList && setTodoList([...todoList, todo]);
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

    setTodoList(
      (prevTodos) =>
        prevTodos &&
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
    setTodoList(
      (prevTodos) => prevTodos && prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <Header>Todo List</Header>

      <TodoListWrapper>
        <InputWrapper>
          <InputStyle
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />
          <IconWrapper type="button" onClick={handleOnClick}>
            <FontAwesomeIcon icon={faSearch} />
          </IconWrapper>
        </InputWrapper>

        <TodosWrapper>
          {todoList?.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleTodo={toggleTodo}
              onRemoveTodo={removeTodo}
            />
          ))}
        </TodosWrapper>

        <InputWrapper>
          <InputStyle
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter a new todo"
          />
          <IconWrapper onClick={handleAddTodo}>
            <FontAwesomeIcon icon={faPlus} />
          </IconWrapper>
        </InputWrapper>
      </TodoListWrapper>
    </>
  );
};

export default TodoList;
