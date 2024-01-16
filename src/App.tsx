import * as esbuild from "esbuild-wasm";
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const handleClick = async () => {
    if (!ref.current) {
      return;
    }
    const result = await ref.current.transform(input, {
      loader: "jsx",
      target: "es2015",
    });
    console.log(result);
    setCode(result.code);
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
