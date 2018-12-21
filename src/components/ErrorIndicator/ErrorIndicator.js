import React, { Component } from "react";
import icon from "./pesik.png";
import './errorIndicator.css'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
     <img src={icon} alt='error'/>
      <span className="boom">BOOM!</span>
      <span>Something has gone terribly wrong</span>
      <span>(but we already fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
