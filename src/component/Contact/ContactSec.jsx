import React, { useState } from 'react';
import $ from 'jquery';
import './Contact.css'


const ContactSec = () => {
  const [shouldClearForm, setShouldClearForm] = useState(true);
  const Submit = () => {
    $.ajax({
      url: "https://api.apispreadsheets.com/data/z20pUbUFdnRAlqny/",
      type: "post",
      data: $("#myForm").serializeArray(),
      success: function () {
        alert("We Receive The Message");

        if (shouldClearForm) {
          document.getElementById("myForm").reset();
        } else {
          console.error("Not defined");
        }
      },
    });
  };

  return (
    
    <>
      
      
    <div className='CD'>
    
       <div>
    <h1 className='phil'>Come To Us</h1>
    <p>
      <span className='Region'>Location</span> Central Visayas, Cebu, Cebu City ,Lahug, Level 2, 383 George Street

    </p>

    <h1 className='Contact us'>Contact Us</h1>
    <p>
      <span className='Number'>Number</span>  +63 977 673 4028
      <br />
      <span className='Email'>Email</span> Mark@gmail.com
    </p>

  </div>
      



    <div className='CS'>
      <form id="myForm" >
		<label className='CSL' >Name</label>
		<input className='CSI' name="Name" />
		<br/>
		<label className='CSL' >Email</label>
		<input className='CSI' name="Email" />
		<br/>
		<label className='CSL' >Phone Number</label>
		<input className='CSI' name="Phone Number" />
		<br/>
		<label className='CSL' >Message</label>
		<input className='CSM' name="Message" />
		<br/>
	</form>
  <button className='CSB' onClick={Submit}>Let's Talk</button>
    </div>
    </div>
    
    </>
  );
};

export default ContactSec;
