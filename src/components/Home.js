import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {

  return (
    <div className="container">
    <h2>Select a Tool</h2>
    <div className='link-btn'>
      <Link to="/Register">
        <button className="todo">Register</button>
      </Link>
      <Link to="/Todo">
        <button className="todo">Todo</button>
      </Link>
      <Link to="/Calculator">
        <button className="calc">Calculator</button>
      </Link>
      <Link to="/Timer">
        <button className="time">Timer</button>
      </Link>
    </div>

  </div>
  );
}

export default Home;