import React, { useEffect } from "react";
import "../assets/styles/portfolio.css";
import urmechanic from "../assets/Images/urmechanic.png";
import wikipedia from "../assets/Images/wikipedia.jpg";
import road from "../assets/Images/road.jpg";
import medical from "../assets/Images/medical.jpg";
import goldprice from "../assets/Images/goldprice.jpg";
import battery from "../assets/Images/android_battery.jpg";
import chitchat from "../assets/Images/chitchat.jpg";
import stackoverflow from "../assets/Images/stackoverflow.png";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio">
        <div className="scope ">
          <span className="first">
            <div>
              <a href="https://urmechanic.co.in">
                <img src={urmechanic} alt="not found" />
              </a>
              <br />
              <h1 style={{ color: "white" }}>Aman</h1>
            </div>
          </span>
          <span className="second">
            <a href="https://github.com/VishnoiAman777/WikipediaGraphAnalysis">
              <img src={wikipedia} alt="not found" />
            </a>
          </span>
          <span className="third">
            <a href="https://github.com/VishnoiAman777/Analyzing-California-Road-Network-via-Hadoop">
              <img src={road} alt="not found" />
            </a>
          </span>
          <span className="fourth">
            <a href="https://github.com/VishnoiAman777/Medical-Diagnosis-Application">
              <img src={medical} alt="not found" />
            </a>
          </span>
          <span className="fifth">
            <a href="https://github.com/VishnoiAman777/Gold-Price-Prediction">
              <img src={goldprice} alt="not found" />
            </a>
          </span>
          <span className="sixth">
            <a href="https://github.com/VishnoiAman777/Battery-Manager">
              <img src={battery} alt="not found" />
            </a>
          </span>
          <span className="seventh">
            <a href="https://github.com/VishnoiAman777/Stack-Exchange-Analysis">
              <img src={stackoverflow} alt="not found" />
            </a>
          </span>
          <span className="eight">
            <a href="https://chit-chat-message.azurewebsites.net/">
              <img src={chitchat} alt="not found" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
