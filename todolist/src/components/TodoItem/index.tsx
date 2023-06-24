import React from "react";
import Button from "../Button";

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
    <li
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
      <Button onClick={handleRemoveTodo}>Remove</Button>
    </li>
  );
};

export default Item;
