import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import "./icons.css";
const Icons = () => {
  return (
    <div className="grid-container">
      <div className="text">
      <h1>2,</h1>
      <h2><span>M</span>y <span>S</span>kills</h2>
        <p>
        I learn the skills that are necessary to be a Junior Front End Developer from Univeristy,
        Bootcamp and lots of online tuturiol and motivated to learn more, I thrive on my Behaviour skills
        with persistence and growth mindset and dedicated to learn everyday. 
        </p>
        --------------------------------------
      </div>
      <div className="icons">
        <FaHtml5  className="html"/>
        <FaCss3 className="css" />
        <h2>JS</h2>
        <FaReact className="react"/>
        <FaBootstrap className="boot" />
        <FaNodeJs className="node"/>
        <h2>Express</h2>
        <h2>WP</h2>
      </div>
    </div>
  );
};

export default Icons;
