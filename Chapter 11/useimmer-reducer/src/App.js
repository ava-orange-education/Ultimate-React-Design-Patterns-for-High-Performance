import styled from "styled-components";
import ShoppingList from "./components/ShoppingList";

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 6xl;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 25px;
  padding-right: 25px;
`;

function App() {
  return (
    <>
      <StyledApp>
        <ShoppingList />
      </StyledApp>
    </>
  );
}

export default App;
