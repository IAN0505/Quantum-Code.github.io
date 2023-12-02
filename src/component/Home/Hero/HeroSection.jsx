import React from "react";

import "./Hero.css"


const HeroSection = () => {
   
  return (
    <>
        <section className='sec1' id="course">
    <h1 className="heading">Trusted by Today's Biggest Brands</h1>
    
    <div className="course-box">

        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/Trusted1.png"} alt="" />
        </div>
        
        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/Trusted2.png"} alt="" />
        </div>

        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/Trusted3.png"} alt="" />
        </div>

        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/Trusted4.png"} alt="" />
        </div>

        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/Trusted5.png"} alt="" />
        </div>

        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/Trusted6.png"} alt="" />
        </div>
    </div>
</section>

    </>
  )
}

export default HeroSection