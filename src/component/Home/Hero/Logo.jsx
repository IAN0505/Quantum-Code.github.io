import React from "react";

import "./Hero.css"
import Hero from "./Hero";


const Logo = () => {
    
  return (
    <>
    <Hero />
        <section className='sec1' id="course">
    <h1 className="heading">Courses</h1>
    <p className="p">The most popular   </p>
    <div className="course-box">

        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/aboutp2.jpg"} alt="" />
            <div className="details">
                <h1 className="tagtop">Lorem, ipsum.</h1>
                <h6 className="tagtop">Lorem ipsum dolor sit.</h6>
                <div className="star"></div>
                <div className="cost">$50.90</div>
            </div>
        </div>
        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/aboutp2.jpg"} alt="" />
            <div className="details">
                <h1 className="tagtop">Lorem, ipsum.</h1>
                <h6 className="tagtop">Lorem ipsum dolor sit.</h6>
                <div className="star"></div>
                <div className="cost">$50.90</div>
            </div>
        </div>

        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/aboutp2.jpg"} alt="" />
            <div className="details">
                <h1 className="tagtop">Lorem, ipsum.</h1>
                <h6 className="tagtop">Lorem ipsum dolor sit.</h6>
                <div className="cost">$50.90</div>
            </div>
        </div>
        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/aboutp2.jpg"} alt="" />
            <div className="details">
                <h1 className="tagtop">Lorem, ipsum.</h1>
                <h6 className="tagtop">Lorem ipsum dolor sit.</h6>
                <div className="cost">$50.90</div>
            </div>
        </div>
        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/aboutp2.jpg"} alt="" />
            <div className="details">
                <h1 className="tagtop">Lorem, ipsum.</h1>
                <h6 className="tagtop">Lorem ipsum dolor sit.</h6>
                <div className="cost">$50.90</div>
            </div>
        </div>
        <div className="courses">
            <img className="pic" src={process.env.PUBLIC_URL + "/image/aboutp2.jpg"} alt="" />
            <div className="details">
                <h1 className="tagtop">Lorem, ipsum.</h1>
                <h6 className="tagtop">Lorem ipsum dolor sit.</h6>
                <div className="cost">$50.90</div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default Logo