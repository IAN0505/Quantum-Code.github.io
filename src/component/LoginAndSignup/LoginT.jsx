import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import './LoginAndSignup.css';
import { auth } from '../Firebase/TeacherFirebase';

const LoginT = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            alert("Success");
            navigate("/TeacherDashboard");

        } catch (error) {
            console.error(error);
            alert("Invalid Account");
        }
    };

    return (
        <div className='form-container'>
            <h1 className='TLT'>
                Teacher Login
                </h1>
            <form className='FLT' onSubmit={handleLogin}>
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
                <p class="page-link"> <span class="page-link-label">Forgot Password?</span></p>
                <button className='BLT' type='submit'>Login</button>
            </form>
            <Link to="/SignupTeacher">
                <p className="sign-up-label">
                    Don't have an account?
                    <span className="sign-up-link">
                        Sign up
                        </span></p>
            </Link>
        </div>
    );
}

export default LoginT;
