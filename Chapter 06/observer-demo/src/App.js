import Parent from "./components/Parent";
import mitt from "mitt";

export const emitter = mitt()

function App() {
  return (
    <>
      <Parent />
    </>
  );
}

export default App;
