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

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
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
          <React.Fragment key={index}>
            <div
              style={{ textDecoration: todo.complete ? "line-through" : "" }}
            >
              {todo.text}
            </div>
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? "Incomlete" : "Complete"}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

export default App;
