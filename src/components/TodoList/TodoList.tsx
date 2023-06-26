import React, { useState } from "react";

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
  ActionsWrapper,
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

  const handleOnClickSearch = () => {
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnClickSearch();
    }
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
        <ActionsWrapper>
          <InputWrapper>
            <InputStyle
              type="text"
              value={newTodo}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter a new todo"
            />
            <IconWrapper onClick={handleAddTodo}>
              <FontAwesomeIcon icon={faPlus} style={{ color: "#1abc9c" }} />
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <InputStyle
              type="text"
              placeholder="Search..."
              value={text}
              onChange={(e: any) => setText(e.target.value)}
              onKeyPress={handleSearchKeyPress}
            />
            <IconWrapper type="button" onClick={handleOnClickSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </IconWrapper>
          </InputWrapper>
        </ActionsWrapper>

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
      </TodoListWrapper>
    </>
  );
};

export default TodoList;
