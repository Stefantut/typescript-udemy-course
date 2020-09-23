import React from "react";

function App(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;
  return (
    <div className="App">
      <header className="App-header">
        <p>{sum(2, 18)}</p>
      </header>
    </div>
  );
}

export default App;
