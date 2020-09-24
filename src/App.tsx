import React, { useState } from "react";

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input type="text" required />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
