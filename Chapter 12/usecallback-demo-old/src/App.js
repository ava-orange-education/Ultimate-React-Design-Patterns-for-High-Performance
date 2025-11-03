import Ingredients from "./components/Ingredients";
import IngredientsInfo from "./components/IngredientsInfo";

function App() {
  return (
    <>
      <Ingredients ingredientsInfo={<IngredientsInfo />} />
    </>
  );
}

export default App;
