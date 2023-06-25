import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type InputProps = {
  onAddTodo: (newTodo: string) => void;
};

const Input: React.FC<InputProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    onAddTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>
        {" "}
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Input;
