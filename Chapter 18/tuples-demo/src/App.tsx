import { useUser } from "./components/use-user";

function App() {
  const [status, value] = useUser<{ name: string }>("/user");

  if (status === "fetching") {
    return <div>Fetching...</div>;
  }

  if (status === "error") {
    return <div>Error: {value.message}</div>;
  }

  return <div>{value.name}</div>;
}

export default App;
