import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './i18n'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App/>
  </StrictMode>
);

// Analytics isn't needed for the first paint — load it once the browser is idle
const loadAnalytics = () =>
  import('react-ga4').then(({ default: ReactGA }) =>
    ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS)
  );
if ('requestIdleCallback' in window) {
  requestIdleCallback(loadAnalytics, { timeout: 4000 });
} else {
  setTimeout(loadAnalytics, 2000);
}
