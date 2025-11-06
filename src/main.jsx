import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4';
import App from './App.jsx'
ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
