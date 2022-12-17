import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import { App } from './components';

// Apply the Day.js UTC and relative time plugins
dayjs.extend(utc);
dayjs.extend(relativeTime);

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
