import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  return (
    <div className="container">
      <section className='secContainer'>
        <Navbar/>
      </section>
    </div>
  );
}

export default App;
