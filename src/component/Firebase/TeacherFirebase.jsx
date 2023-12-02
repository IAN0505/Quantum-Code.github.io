import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfigTeacher = {
  apiKey: "AIzaSyB2pR2ka5czcPnMMNq7FP0AyYv6ooxYkPw",
  authDomain: "teachersignup-f8796.firebaseapp.com",
  projectId: "teachersignup-f8796",
  storageBucket: "teachersignup-f8796.appspot.com",
  messagingSenderId: "1089677934904",
  appId: "1:1089677934904:web:b7353aba37d2bb68b241cd"
};


let teacherApp;
try {
  teacherApp = getApp('teacherApp');
} catch (error) {
  teacherApp = initializeApp(firebaseConfigTeacher, 'teacherApp');
}
const auth = getAuth(teacherApp);
export { teacherApp as app, auth };
