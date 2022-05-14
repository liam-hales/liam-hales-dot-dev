import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components';

// Get the root DOM element and check if it exists
// If not throw an error
const rootElement = document.getElementById('root');
if (rootElement == null) {
  throw new Error('Element "root" does not exist in the DOM');
}

// Render the App component into
// the root DOM element
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
