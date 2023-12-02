import React from 'react'
import './Hero.css'


const Why = () => {
   
  return (
    <>
        <section className="why">
        <div className="whyA">
          <h3 className="whyB">Why Choose Us</h3>
          <div className="whyC">
            <div className="whyD">
              <h1 className='whyE'>Experience Excellence in Every Aspect</h1>
              <p className='whyF'>Discover the reasons why our services stand out among the
                 rest. We are committed to providing unparalleled quality and satisfaction to our clients.</p>
            </div>
            <div className='whyG'>
              <img className="whyI" src={process.env.PUBLIC_URL + "/image/about.webp"} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Why