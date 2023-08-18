import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/cards">List Cards</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
