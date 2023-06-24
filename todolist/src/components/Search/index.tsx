import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type SearchProps = {
  todos: Todo[];
};

const Search: React.FC<SearchProps> = ({ todos }) => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<
    { id: number; text: string; completed: boolean }[] | undefined
  >(todos);

  const handleOnClick = () => {
    const findTodo =
      todos && todos.length > 0
        ? todos.filter((todo) => todo.text.includes(text))
        : undefined;
    setTodoList(findTodo);
  };

  return (
    <>
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
    </>
  );
};

export default Search;
