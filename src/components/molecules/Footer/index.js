import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="h1"> This is a Footer </h1>
      <div className="links">
        <Link to="" className="link">
          Home
        </Link>
        <Link to="test" className="link">
          Test
        </Link>
        <Link to="theodo" className="link">
          Theodo
        </Link>
        <Link to="pokemon" className="link">
          Pokemon
        </Link>
      </div>
    </div>
  );
}
