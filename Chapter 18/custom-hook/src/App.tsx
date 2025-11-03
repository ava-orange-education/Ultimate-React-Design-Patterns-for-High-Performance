import { useState } from "react";

export const useUrl = (defaultUrl: string) => {
  const [url, setUrl] = useState(defaultUrl);
  return [url, setUrl] as const;
};


function App() {
  const [url, setUrl] = useUrl("google.com");
  return <></>;
}

export default App;
