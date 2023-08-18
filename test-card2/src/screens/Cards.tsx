import React from "react";
import ListCards from "../components/ListCards";
import { Outlet, Link } from "react-router-dom";

const Cards = () => {
  let x = {
    msg: "rak enty teba3 el cards",
  };
  return (
    <div>
      <h1 className="text-center mb-5">All cards</h1>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link to="/cards">List Cards</Link>
        </li>
        <li>
          <Link to="/cards/1">Cards Details</Link>
        </li>
        <li>
          <Link to="/cards/add"> Add Card</Link>
        </li>
      </ul>
      <Outlet context={x} />
    </div>
  );
};

export default Cards;
