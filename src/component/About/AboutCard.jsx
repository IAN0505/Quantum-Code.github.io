import React from "react";

import "./About.css";




const AboutCard = () => {
 

  return (
    <>
    <div className="flexall">
    <img className="A123" src={process.env.PUBLIC_URL + "/image/aboutp1.jpg"} alt="" />
      <section className="sec-01">
      
        <div className="top">
          <h1 className="main-title">Learn In-Demand Skills Today</h1>
          <div className="content">
            <div className="image">
              <img src={process.env.PUBLIC_URL + "/image/A2.jpg"} alt="" />
            </div>
            <div className="text-box">
              <h3>Industry-Driven Curriculum</h3>
              <p className="APAP">Our curriculum follows industry standards and focuses on specialized skills that are highly valued by companies.</p>
            </div>
          </div>
          <div className="media-icons">
            
          </div>
        </div>
      </section>

      <section className="sec-02">
        <div className="top1">
          <h3 className="main-title2">Who Are We</h3>
          <div className="content2">
            <div className="image2">
              <img src={process.env.PUBLIC_URL + "/image/A1.jpg"} alt="" />
            </div>
            <div className="info">
              <div className="info-title">Hundreds of Industry Partners</div>
              <p>We work with our partners across various industries around the globe to provide our graduates with employment opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-03">
        <div className="container">
          <h3 className="section-title">What We Offer</h3>
          <div className="content3">
            <div className="meadia-info">
              <li><a href="">Courses Coaching</a></li>
              <li><a href="">Full Time</a></li>
              <li><a href="">Part Time</a></li>
              <li><a href="">Certificate</a></li>
              <li><a href="">Hands On Activity</a></li>
            </div>
            <div className="image1">
              <img src={process.env.PUBLIC_URL + "/image/aboutp2.jpg"} alt="" />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default AboutCard;
