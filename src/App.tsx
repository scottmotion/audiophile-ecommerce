import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <button
          onClick={() => setCount(count => count + 1)}
          className="btn btn-1"
        >
          count is {count}
        </button>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
