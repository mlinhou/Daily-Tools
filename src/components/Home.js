import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
    <h2>Home</h2>
    <Link to="/Todo">
      <button>Todo App</button>
    </Link>
    <Link to="/Calculator">
      <button>Calculator App</button>
    </Link>
  </div>
  );
}

export default Home;