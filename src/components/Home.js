import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
    <h2>Home</h2>
    <Link to="/Todo">
      <button>Todo</button>
    </Link>
    <Link to="/Calculator">
      <button>Calculator</button>
    </Link>
    <Link to="/Stopwatch">
      <button>Stopwatch</button>
    </Link>
  </div>
  );
}

export default Home;