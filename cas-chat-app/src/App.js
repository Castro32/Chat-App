import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import SignIn from './components/SignIn/SignIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

function App() {
  const [user] = useAuthState(firebase.auth());

  return (
    <div className="container">
      <section className='secContainer'>
        {!user && <SignIn />} {/* Show SignIn only when user is not logged in */}
        {!user && <ForgotPassword />} {/* Show ForgotPassword only when user is not logged in */}
      </section>
    </div>
  );
}


export default App;
