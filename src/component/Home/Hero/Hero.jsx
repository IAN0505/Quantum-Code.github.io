import React from 'react'
import "./Hero.css"
import HeroSection from './HeroSection'
import Why from './Why';
import Next from './Next';
import PromoSec from './PromoSec';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
               <div className="row">
               
               <h2>WELCOME TO QUANTOM <br />Code Learning</h2>
                <p>Where Teacher can Teach and Student Can learn</p>

                <Link to="/Teacher"><button className='TT' >
                   FOR TEACHER <ArrowForwardOutlinedIcon />
                </button></Link>
               
                <Link to="/Student"><button className='TY' >
                   FOR STUDENT <ArrowForwardOutlinedIcon />
                </button></Link>
               </div>
            </div>
        </section>
        <div className="margin"></div>
        
        
        <Why />
        <HeroSection />
        <PromoSec />
        <Next />
        
        
        
        
    </>
  )
}

export default Hero