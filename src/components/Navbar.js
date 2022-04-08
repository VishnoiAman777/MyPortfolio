import React from "react";
import {Link} from "react-router-dom"
import resume from "../assets/Web.pdf"
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
const path = location.pathname;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className={`nav-link  ${path == "/"?"active": ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${path == "/about"?"active": ""}`} to="/about">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" href={resume}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${path == "/portfolio"?"active": ""}`}  to="/portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
