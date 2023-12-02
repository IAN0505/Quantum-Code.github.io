import React from 'react'
import { Link } from 'react-router-dom';
import './Choices.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const ChoicesLogin = () => {
  return (
    <>
    <div className='CST' >
    <h1>Login as?</h1>
    
     <Link to="/Login">
            <button  className='CSTT'>
            <h1 className='CI'> <AccountCircleRoundedIcon /></h1>
           Student
              </button>
        </Link>
        <Link to="/LoginT">
            <button  className='CSTT'>
              <h1 className='CI'> <AccountCircleRoundedIcon /></h1>
           
             Teacher
              </button>
        </Link>
    </div>
        
    </>
  )
}

export default ChoicesLogin