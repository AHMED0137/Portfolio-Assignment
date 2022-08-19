import React from "react";
import "./Profile.css";
function Nav() {
  return (
    <div className="container" style={{ color: "white" }}>
      <nav className="navbar navbar-expand-lg navbar-light  row">
        <a
          className="navbar-brand offset-2 col-md-4"
          href="#"
          style={{ color: "white" }}
        >
          PortFolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse   col-md-8"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link list-item" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link list-item" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link list-item" href="#">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
