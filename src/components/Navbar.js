import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutSection: false,
      darkMode: false, // Light mode by default
    };
  }

  handleAboutClick = () => {
    this.setState({ showAboutSection: true });
    setTimeout(() => {
      this.setState({ showAboutSection: false });
    }, 5000); // Hide the message and About section after 5 seconds
  };

  toggleDarkMode = () => {
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode });
    this.props.toggleDarkMode(!darkMode); // Propagate the toggle to the App component
  };

  render() {
    return (
      <Router>
        <div>
          <nav className={`navbar navbar-expand-lg ${this.state.darkMode ? 'navbar-dark bg-dark' : 'bg-body-tertiary'}`}>
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">By Mohammad Daniyal</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={this.handleAboutClick}>About</Link>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="darkModeSwitch"
                  checked={this.state.darkMode}
                  onChange={this.toggleDarkMode}
                />
                <label className="form-check-label" htmlFor="darkModeSwitch">
                  {this.state.darkMode ? 'Dark Mode' : 'Light Mode'}
                </label>
              </div>
            </div>
          </nav>

          <Routes>
            {/* ... */}
            {this.state.showAboutSection && (
              <Route path="/about" element={<About />} />
            )}
          </Routes>
        </div>
      </Router>
    );
  }
}

// Home component
// const Home = () => (
//   <div className="container">
//     <h2>Home</h2>
//     {/* Home content */}
//   </div>
// );

// About component
const About = () => (
  <div className="container">
    <h2>About</h2>
    <p>This is a React.js based app which shows news from all over the world.</p>
  </div>
);

export default Navbar;
