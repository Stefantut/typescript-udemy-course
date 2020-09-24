import React, { useState } from "react";

type FormElem = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    setValue("");
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
    </div>
  );
}

export default App;
