import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// Toggle dark mode class on the root element
const toggleDarkMode = (darkMode) => {
  if (darkMode) {
    rootElement.classList.add('dark-mode');
  } else {
    rootElement.classList.remove('dark-mode');
  }
};

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App toggleDarkMode={toggleDarkMode} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
