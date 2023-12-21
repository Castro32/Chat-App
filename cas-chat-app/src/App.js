import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {useAuthState} from 'react-firebase-hooks/auth'
import firebase from './firebase';
import SignIn from './components/SignIn/SignIn';


function App() {
  return (
    <div className="contaner">
      <section className='secContainer'>
        <Navbar/>
        <SignIn/>
      </section>
      
    </div>
  );
}

export default App;
