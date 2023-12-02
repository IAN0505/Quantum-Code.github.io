import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import React, { useState } from 'react';
import { auth } from '../Firebase/TeacherFirebase';
import { useNavigate } from 'react-router-dom';
import './LoginAndSignup.css'

const SignupTeacher = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

  

    const Submit = async (e) => {
        e.preventDefault();
        if (password !== ConfirmPassword){
            alert("Password do not match")
        }
        else {
           
       
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password, );
            const user = userCredential.user;


            const db = ref(getDatabase());
            set(db, `users/${user.uid}`, {
                email: user.email,

                name: Name,
            });

            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            alert("Sign up Success")

            navigate("/TeacherDashboard");
        } catch (error) {
            console.error(error);
            alert("Sign Up Failed")
        }
    };
};

    return (
        <div className='form-containerT'> 
              <h1 className='TLT' >
              Teacher Sign Up
                </h1>
            <form className='FLT' onSubmit={Submit}>

            <input
                    type="text"
                    placeholder='Name'
                    required
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    className='ILT'
                />
                <input
                    type="text"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='ILT'
                />
                <input
                    type="password"
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='ILT'
                />
                <input
                    type="password"
                    placeholder='Confirm Password'
                    required
                    value={ConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='ILT'
                />
                <button className='BLT' type='submit'>Submit</button>
                
            </form>
        </div>
    );
}

export default SignupTeacher;
