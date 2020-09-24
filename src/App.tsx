import React, { useState } from "react";

type FormElem = React.FormEvent<HTMLFormElement>; // type for e

interface ITodo {
  text: string;
  complete: boolean;
}

// Extending interface, can't be done with types
interface ITodo2 extends ITodo {
  tags: string[];
}

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]); // array of objects

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <div key={index}>{todo.text}</div>
        ))}
      </section>
    </div>
  );
}

export default App;
