import React, { useState } from 'react';
import GoogleButton from 'react-google-button'
import './SignIn.css'



const SignIn =()=>{
    const [action, setAction] = useState('Sign Up');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return(
        <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === 'Log-In' ? <div></div> : <div className='input'>
          <img src='./profile_3135715.png' alt='Profile' />
          <input type='text' placeholder='Enter full name' />
        </div>}

        <div className='input'>
          <img src='./mail_646135.png' alt='Email' />
          <input type='email' placeholder='example@gmail.com' />
        </div>

        <div className='input'>
          <img src='./password_159478.png' alt='Password' />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
          />
          <div className='password-toggle-icon' onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img src='./eyes_5904983.png' alt='Hide Password' />
            ) : (
              <img src='./view_402758.png' alt='Show Password' />
            )}
          </div>
        </div>
      </div>

      {action === 'Sign-Up' ? <div></div> :
        <div className='forgot-password'>
          Forgot Password?<span>  Click Here!</span>
        </div>
      }

      <div className='submit-container'>
        <div
          className={action === 'Log-In' ? 'submit gray' : 'submit'}
          onClick={() => { setAction('Sign-Up') }}
        >
          Sign-Up
        </div>
        <div
          className={action === 'Sign-Up' ? 'submit gray' : 'submit'}
          onClick={() => { setAction('Log-In') }}
        >
          Log-In
        </div>
      </div>
      <div className="button">
     <GoogleButton/>
      </div>
    </div>
     
  );
};

           



export default SignIn