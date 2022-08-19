import React from "react";
import { TypeAnimation } from "react-type-animation";
import Nav from "./nav";
import "./Profile.css";
function Profile() {
  return (
    <div className="bg-banner">
      <div className="container nav-port">
        <Nav />
      </div>
      {/* main container */}
      <div className="p-container container-fluid">
        <div className="p-parrent row">
          <div className="p-details col-sm-7 col-md-6">
            {/* social media contact links */}
            <div className="colz  ">
              {/* all icons */}
              <div className="col-icons">
                <a href="#">
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-square-whatsapp"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
              </div>
            </div>
            {/* name */}
            <div className="p-detail-name">
              <span className="name-text">
                Hello, I'M <span className="Heightlighted-text">Ahmad</span>
              </span>
            </div>
            {/* role */}
            <div className="p-detail-role">
              <span className="role-text">
                <h3>
                  <TypeAnimation
                    sequence={[
                      "Front-end Developer 🥇",
                      1000,
                      "Full Stack Developer 🥈",
                      1000,
                      "Php Developer ⌛",
                      1000,
                      "Mern Developer ⏳",
                      1000,
                      "",
                      500,
                    ]}
                    //  Continuing previous Text
                    style={{ fontSize: "1em" }}
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                  />
                </h3>
                {/* tag line */}
                <span className="tag-line">
                  <h4>
                    Full Hold and Grip of creating Web based Applications.
                  </h4>
                </span>
              </span>
            </div>
            {/* buttons */}
            <div className="p-optins">
              <button className="btn primary-btn"> Hire Me</button>
              <a href="Ahmad.pdf" download="Mr.Ahmad.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          {/* profile picture */}
          <div className="p-pic col-sm-12 col-md-5">
            <div className="p-pic-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
