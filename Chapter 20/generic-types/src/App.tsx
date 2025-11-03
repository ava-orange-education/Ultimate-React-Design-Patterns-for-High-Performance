import { useState } from "react";

export const useStateObject = <T,>(initial: T) => {
  const [value, set] = useState(initial);

  return { value, set };
};

function App() {
  const example = useStateObject({ name: "Nabendu" });

  return <></>;
}

export default App;
