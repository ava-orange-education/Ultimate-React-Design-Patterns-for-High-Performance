import { useUser } from "./components/use-user";

function App() {
  const state = useUser("/user");

  if (state.status === "fetching") return <p>Fetching...</p>;
  if (state.status === "fetched") return <p>Fetched</p>;
  if (state.status === "error") return <p>Error: {state.error.message}</p>;

  return <></>;
}

export default App;
