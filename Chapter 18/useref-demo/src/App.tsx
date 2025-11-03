import { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const mutableRefValue = useRef<number>(20);

  mutableRefValue.current = 20;

  return (
    <>
      <input ref={inputRef} />
    </>
  );
}

export default App;
