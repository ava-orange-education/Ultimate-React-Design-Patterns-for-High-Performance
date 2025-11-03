import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
