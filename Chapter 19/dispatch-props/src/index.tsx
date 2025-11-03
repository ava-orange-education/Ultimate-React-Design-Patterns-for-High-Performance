import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorProvider } from './context/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);

