import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {useAuthState} from 'react-firebase-hooks/auth'
import firebase from './firebase';
import SignIn from './components/SignIn/SignIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';


function App() {
  return (
    <div className="contaner">
      <section className='secContainer'>
        <Navbar/>
        <SignIn/>
        <ForgotPassword/>
      </section>
    </div>
  );
}
export default App;
