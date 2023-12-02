import React  from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Logo from './component/Home/Hero/Logo';
import Contact from './component/Contact/Contact';
import Course from './component/Courses/Course';
import Teacher from './component/Teacher/Teacher';
import Student from './component/Student/Student';
import Login from './component/LoginAndSignup/Login';
import Signup from './component/LoginAndSignup/Signup';
import StudentDashboard from './component/Dashboard/StudentDashboard';
import TeacherDashboard from './component/Dashboard/TeacherDashboard';
import Choices from './component/Chooses/Choices';
import SignupTeacher from './component/LoginAndSignup/SignupTeacher';
import ChoicesLogin from './component/Chooses/ChoicesLogin';
import LoginT from './component/LoginAndSignup/LoginT';

const App = () => {
 
  

  return (
    <Router>
      
      <Routes>
        <Route path='/Logo' element={<Logo />} />
        <Route path='/' element={<Home />} />
        <Route path='/Course' element={<Course />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Teacher' element={<Teacher /> } />
        <Route path='/Student' element={<Student /> } />
        <Route path='/Login' element={<Login />} />
        <Route path='/LoginT' element={<LoginT />} /> 
        <Route path='/Signup' element={<Signup />} />
        <Route path='/SignupTeacher' element={<SignupTeacher />} />
        <Route path='/StudentDashboard' element={<StudentDashboard />} />
        <Route path='/TeacherDashboard' element={<TeacherDashboard />} />
        <Route path='/Choices' element={<Choices />} />
        <Route path='/ChoicesLogin' element={<ChoicesLogin />} />
      </Routes>
      
    </Router>
  );
  }
export default App;
