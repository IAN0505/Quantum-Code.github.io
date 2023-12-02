import React, { useState } from 'react';
import './Hero.css';

const PromoSec = () => {
  const [shouldClearForm, setShouldClearForm] = useState(true);

  const Submit = async () => {
    try {
      const formData = new FormData(document.getElementById('myForm'));

      const response = await fetch("https://api.apispreadsheets.com/data/q65PL4jBO1RL2EwY/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("We Receive The Message");

        if (shouldClearForm) {
          document.getElementById("myForm").reset();
        }
      } else {
        console.error("Not defined");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="registration">
      <div className="reminder">
        <p>Register Now To Get a Promo Code</p>
        <h1>Promo Code Last</h1>
        <div className="time">
          <div className="date">18 <br /> Days</div>
          <div className="date">23 <br /> Hours </div>
          <div className="date">06 <br /> Minutes</div>
          <div className="date">58 <br /> Seconds</div>
        </div>
      </div>

        <div className="form">
      <form id="myForm" >
        <h3>Register Now</h3>
        <input type="text" placeholder="Name" name="Name" />
        <input type="text" placeholder="Email Address" name="Email Address" />
        <input type="text" placeholder="Phone Number" name="Phone Number" />
      </form>

        <button className='aqua' onClick={Submit}>Submit</button>
        </div>
    </section>
  );
};

export default PromoSec;
