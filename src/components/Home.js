import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/home.css";
import 'animate.css';


const Home = () => {
  return (
    <div className="upperdiv">
      <div className="container">
        <h2 className="my-2 nameStyle animate__rubberBand animate__animated">Aman Vishnoi</h2>
        <h4 className="my-3 infoStyle animate__rubberBand animate__animated">
          Data Science enthusiast and web developer.
        </h4>
        
        <p>
          <a href="https://www.linkedin.com/in/amanvishnoi777/" target="_blank" className="linkedin">
            <i className="fa-brands fa-2x fa-linkedin"></i>
          </a>
          <a href="https://github.com/VishnoiAman777" target="_blank" className="github">
            <i className="fa-brands fa-2x fa-github px-5"> </i>
          </a>
          <a href="mailto: amanvishnoi@iitbhilai.ac.in" target="_blank" className="gmail">
            <i className="fa-solid fa-2x fa-envelope-open"></i>
          </a>
        </p>
        <Link to="/about" className="btn-about">MY SKILLS</Link>
      </div>
    </div>
  );
};

export default Home;
