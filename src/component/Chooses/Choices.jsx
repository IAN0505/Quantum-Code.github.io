import React from 'react'
import { Link } from 'react-router-dom';
import './Choices.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Choices = () => {
  return (
    <>
        <div className='CST'>
            <h1>Sign up as?</h1>
            
        <Link to="/Signup">
            <button className='CSTT'> 
            <h1 className='CI'> <AccountCircleRoundedIcon /></h1>
            Student 
            </button>
        </Link>
        <Link to="/SignupTeacher">
            <button className='CSTT' >
            <h1 className='CI'> <AccountCircleRoundedIcon /></h1>
                Teacher
                </button>
        </Link>
        </div>
        

    </>
  )
}

export default Choices