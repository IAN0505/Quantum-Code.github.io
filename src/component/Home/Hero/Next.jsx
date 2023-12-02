import React, { useState } from 'react';
import './Hero.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Next = () => {
  const [current, setCurrent] = useState(1);

  const BackArrow = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };

  const ForwardArrow = () => {
    if (current < 3) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className='NN'>
      <section className="SSS">
        <div className="ct">
          <h3 className="st">Quantom Code People</h3>
         
          <div className="cts">
            <div className="m">
              <h1 className='h'>Customers get real results with QUANTOM CODE</h1>
              <p className='pt'>
                Absorb technology—and people—make a tangible impact on the 1,100+
                customers partnering with us. Watch the video to hear successes,
                then connect with us to get a demo.
              </p>
            </div>

            <div className='iii'>
              <img className="i" src={process.env.PUBLIC_URL + "/image/people1.jpg"} alt="" />
            </div>
          </div>
        </div>
      </section>

      {current === 1 && (
        <div className='NNN'>
          <div className='com'>``</div>
          <p>
            Having used almost every learning management system on the planet,
            I would say, look around, make your list — then come look at the
            QUANTOM CODE LMS.
          </p>
          <h6 className='NNNN'>Steve Price, CEO and President, LearnPort, Inc.</h6>
        </div>
      )}
      {current === 2 && (
        <div className='NNN'>
          <div className='com'>``</div>
          <p>
            Having worked with the team at QUANTOM CODE for more than two years
            I would be hard pressed to recommend any other Learning Management
            System to anyone looking for one.
          </p>
          <h6 className='NNNN'>Colin Dempsey, Director of Support, Security Innovation</h6>
        </div>
      )}
      {current === 3 && (
        <div className='NNN'>
          <div className='com'>``</div>
          <p>
            I've worked with a variety of Learning Management Systems over the
            last 15 years and I have to say that QUANTOM CODE LMS is hands down
            the best I've ever worked with.
          </p>
          <h6 className='NNNN'>Dave Robertson VP Organizational Development, Guild Mortgage</h6>
        </div>
      )}

      <div className='AA'>
        <div className="arrow" onClick={BackArrow}><ArrowBackIosIcon /></div>
        <div className="arrow" onClick={ForwardArrow}><ArrowForwardIosIcon /></div>
      </div>
    </div>
  );
};

export default Next;
