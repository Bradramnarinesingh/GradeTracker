import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import vis from "./visualize.webp"; // Image for Visualize Performance
import trackGrades from "./trackGrades.webp"; // Image for Track Your Grades
import setGoals from "./setGoals.webp"; // Image for Set Goals

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const features = [
    {
      title: "Track Your Grades",
      description:
        "Keep a detailed record of your grades throughout the academic year to monitor your progress.",
      img: trackGrades,
    },
    {
      title: "Set Goals",
      description:
        "Set academic goals and track your progress towards achieving them each semester.",
      img: setGoals,
    },
    {
      title: "Visualize Performance",
      description:
        "Use interactive charts to visualize your grades and understand trends over time.",
      img: vis,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state of the navbar
  };

  const closeNavbar = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  const navbarClass = () => {
    if (!isScrolled && isOpen) {
      return "navbar-top-clicked";
    } else if (isScrolled) {
      return "navbar-scrolled";
    } else {
      return "navbar-top";
    }
  };

  return (
    <div className="App">
      <nav className={`navbar navbar-expand-lg navbar fixed-top ${navbarClass()}`}>
        <a className="navbar-brand" href="#home" onClick={closeNavbar}>
          <img src={logo} height="30" alt="logo" />
          Grade Tracker
        </a>
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
        </button>
        <div className={`${isOpen ? "show" : "collapse"} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#home" onClick={closeNavbar}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={closeNavbar}>Features</a>
            </li>
          </ul>
          <button className="btn btn-danger sign-in-btn">Sign In</button>
        </div>
      </nav>
      <header className="App-header" id="home">
        <h1>Welcome to Grade Tracker</h1>
        <p>
          Grade Tracker is designed to help students monitor their academic
          performance by managing assessment weights and tracking grades against
          their goals while saving their current grades for later use and better academic planning.
        </p>
      </header>
      <div className="container mt-5" id="features">
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img
                  src={feature.img}
                  className="card-img-top"
                  alt={feature.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container">
          <span>&copy; 2024 Grade Tracker. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
