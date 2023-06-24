import React from "react";
import Button from "../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { TodoItemWrapper } from "./index.styles";

type ItemProps = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
};

const Item: React.FC<ItemProps> = ({ todo, onToggleTodo, onRemoveTodo }) => {
  const handleToggleTodo = () => {
    onToggleTodo(todo.id);
  };

  const handleRemoveTodo = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <TodoItemWrapper
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      {todo.text}
      <Button onClick={handleRemoveTodo}>
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </TodoItemWrapper>
  );
};

export default Item;
