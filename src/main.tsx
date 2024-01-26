import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className={`w-screen h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600 to-indigo-950`}>
      <App />
    </div>
  </React.StrictMode>,
)