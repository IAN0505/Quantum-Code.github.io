import React from "react";

import "./Course.css"


const CourseSec = () => {
    
  return (
    <>
        <section className='CRS' id="CR">
    <h1 className="heading">Courses</h1>
    <p className="p">The most popular   </p>
    <div className="CRB">

        <div className="CRC">
        <img className="cip" src={process.env.PUBLIC_URL + "/image/C1.png"} alt="" />
            <div className="details">
                <h1 className="CTT">HTML</h1>
                <h6 className="CTT">1-2 Weeks Course</h6>
                <div className="star"></div>
                <div className="CCR">$3.00</div>
            </div>
        </div>
        <div className="CRC">
          <img className="cip" src={process.env.PUBLIC_URL + "/image/C2.jpg"} alt="" />  
            <div className="details">
                <h1 className="CTT">CSS</h1>
                <h6 className="CTT">1-2 Weeks Course</h6>
                <div className="star"></div>
                <div className="CCR">$5.00</div>
            </div>
        </div>

        <div className="CRC">
           <img className="cip" src={process.env.PUBLIC_URL + "/image/C3.png"} alt="" /> 
            <div className="details">
                <h1 className="CTT">JavaScript</h1>
                <h6 className="CTT">2-3 Weeks Course</h6>
                <div className="CCR">$20.00</div>
            </div>
        </div>
        <div className="CRC">
           <img className="cip" src={process.env.PUBLIC_URL + "/image/C4.png"} alt="" /> 
            <div className="details">
                <h1 className="CTT">React JS</h1>
                <h6 className="CTT">2-3 Weeks Course</h6>
                <div className="CCR">$30.00</div>
            </div>
        </div>
        <div className="CRC">
           <img className="cip" src={process.env.PUBLIC_URL + "/image/C5.png"} alt="" /> 
            <div className="details">
                <h1 className="CTT">SQL</h1>
                <h6 className="CTT">3-4 Weeks Course</h6>
                <div className="CCR">$60.00</div>
            </div>
        </div>
        <div className="CRC">
            <img className="cip" src={process.env.PUBLIC_URL + "/image/C6.png"} alt="" />
            <div className="details">
                <h1 className="CTT">Python</h1>
                <h6 className="CTT">3-4 Weeks Course</h6>
                <div className="CCR">$90.00</div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default CourseSec
