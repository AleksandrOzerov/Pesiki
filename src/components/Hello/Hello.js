import React from "react";
import "./hello.css";
import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Добро пожаловать!</h5>
        <p className="card-text">
          В нашем приложении вы сможете найти много веселых песиков.
        </p>
        <Link to="/dog-list">Перейти к списку пород</Link>
      </div>
    </div>
  );
};
export default Hello;
