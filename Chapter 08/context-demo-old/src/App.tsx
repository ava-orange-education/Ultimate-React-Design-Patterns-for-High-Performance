import './App.css';
import Buttons from './components/Buttons';
import { CartProvider } from './components/CartProvider';
import Display from './components/Display';


function App() {
  return (
    <CartProvider>
      <Display />
      <Buttons />
    </CartProvider>
  );
}

export default App;
