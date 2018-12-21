import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="container header">
      <h3 className="font">Веселые песики</h3>
      <ul className="d-flex">
        <li>
          <Link to="/">В начало</Link>
        </li>
        <li>
          <Link to="/dog-list/">К песикам</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
