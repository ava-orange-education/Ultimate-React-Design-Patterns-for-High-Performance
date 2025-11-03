const useLocalStorage = <T,>(identifier: string) => {
  const set = (key: string, value: T) => {
    window.localStorage.setItem(key + identifier, JSON.stringify(value));
  };

  const get = (key: string): T | null => {
    return JSON.parse(window.localStorage.getItem(key + identifier) || "null");
  };
  return { set, get };
};

function App() {
  const client = useLocalStorage<{ level: string }>("client");

  client.set("level", { level: "student" });

  const clientLevel = client.get("level");

  return <></>;
}

export default App;
