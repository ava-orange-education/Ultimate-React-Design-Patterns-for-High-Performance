import './App.css';
import Child from './components/Child'
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <ErrorBoundary fallback={<h1>Error in Child Component</h1>}>
        <Child />
      </ErrorBoundary>
    </div>
  );
}

export default App;
