import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import App from './App.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);