import { useDeferredValue, useState } from 'react';
import './App.css';
import { SlowComponent } from './components/SlowComponent';

function App() {
  const [keyword, setKeyword] = useState("");
  const deferredKeyword = useDeferredValue(keyword);

  return (
    <div className='App'>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <SlowComponent keyword={deferredKeyword} />
    </div>
  );
}

export default App;
