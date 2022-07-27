import React from "react";
import "../App.css";
import PwcProject1 from "./pwcProject1.jpg";
import PwcProject2 from "./pwcProject2.jpg";
import PwcProject3 from "./pwcProject3.jpg";
import PwcProject4 from "./pwcProject4.jpg";
import PwcProject5 from "./pwcProject5.jpg";
import PwcProject6 from "./pwcProject6.jpg";
import PwcProject7 from "./pwcProject7.jpeg";
import PwcProject8 from "./pwcProject8.jpeg";
import PwcProject9 from "./pwcProject9.jpeg";
import PwcProject10 from "./pwcProject10.jpeg";

function Gallery() {
  return (
    <div>
      <h2>Project Gallery</h2>
      <section style={{ display: "block" }}>
        <div className="grid-container">
          <div className="image">
            <img src={PwcProject1} alt="" />
            <p>The Experience Center Project</p>
            <img src={PwcProject2} alt="" />
            <p>The Talent Tech Bootcamp Project</p>
            <img src={PwcProject3} alt="" />
            <p>The PwC Trade Booth Project</p>
          </div>
          <div className="image">
            <img src={PwcProject4} alt="" />
            <p>The PwC BookCase Project</p>
            <img src={PwcProject5} alt="" />
            <p>The PwC Interior Design Project</p>
            <img src={PwcProject6} alt="" />
            <p>The PwC Digital Tech Project</p>
          </div>
          <div className="image">
            <img src={PwcProject7} alt="" />
            <p>The PwC Solar Project</p>
            <img src={PwcProject8} alt="" />
            <p>The Experience Center Project</p>
            <img src={PwcProject9} alt="" />
            <p>The PwC office building Project</p>
          </div>
          <div className="image">
            <img src={PwcProject10} alt="" />
            <p>The PwC Daylighting Project</p>
            <img src={PwcProject4} alt="" />
            <p>The PwC BookCase Project</p>
            <img src={PwcProject7} alt="" />
            <p>The PwC Solar Project</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
