import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const handleClick = () => {
    console.log("input", input);
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
