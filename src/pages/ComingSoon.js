import React from "react";
import "../assets/styles/ComingSoon.css";
import clockImage from '../assets/images/clockImage.png';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="container">
        <h1 className="title">Exciting Things Are Coming Soon!</h1>
        <p className="description">
          At Yestoryd, we are dedicated to nurturing young minds and fostering a love for creativity.
        </p>
         <img src={clockImage} alt="Coming Soon Clock" className="clock-image" />
      </div>
    </div>
  );
};

export default ComingSoon;
