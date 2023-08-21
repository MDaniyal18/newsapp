// App.js
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  toggleDarkMode = (darkMode) => {
    const rootElement = document.getElementById('root');
    if (darkMode) {
      rootElement.classList.add('dark-mode');
    } else {
      rootElement.classList.remove('dark-mode');
    }
  };

  render() {
    return (
      <div>
        <Navbar toggleDarkMode={this.toggleDarkMode} />
        <News pageSize={5} />
      </div>
    );
  }
}
