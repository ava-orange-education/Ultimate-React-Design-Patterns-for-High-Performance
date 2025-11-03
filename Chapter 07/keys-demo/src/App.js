import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <div className="App">
      {changeShirts ? (
        <>
          <h1>Shirts counts: </h1> <Counter key="shirts" />{" "}
        </>
      ) : (
        <>
          <h1>Shoes counts: </h1> <Counter key="shoes" />{" "}
        </>
      )}
      <br />
      <button onClick={() => setChangeShirts(changeShirts => !changeShirts)}>Switch</button>
    </div>
  );
}

export default App;
