import React from "react";
import Button from "../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { TodoItemWrapper, ButtonTrash } from "./index.styles";

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
    <TodoItemWrapper completed={todo.completed}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      {todo.text}

      <ButtonTrash onClick={handleRemoveTodo}>
        <FontAwesomeIcon icon={faTrashCan} style={{ color: "#DD9B98" }} />
      </ButtonTrash>
    </TodoItemWrapper>
  );
};

export default Item;
