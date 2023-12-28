import React, {useState}from 'react';
import './ForgotPassword.css';
const ForgotPassword=()=>{
  const [action, setAction] = useState('Sign Up');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return(
        <div className='tainer'>
          <div className="inputs">
          <div className='input'>
          <img src='./mail_646135.png' alt='Email' />
          <input type='email' placeholder='example@gmail.com' />
          </div>

          <div className='input'>
          <img src='./password_159478.png' alt='enter password' />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='enter new password'/>
            <div className='password-toggle-icon' onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img src='./eyes_5904983.png' alt='Hide Password' />
            ) : (
              <img src='./view_402758.png' alt='Show Password' />
            )}
          </div>
          </div>
          
          <div className='input'>
          <img src='./password_159478.png' alt='enter password' />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='confirm new password'/>
            <div className='password-toggle-icon' onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img src='./eyes_5904983.png' alt='Hide Password' />
            ) : (
              <img src='./view_402758.png' alt='Show Password' />
            )}
          </div>
          </div>
          </div>
          <button className="buttn" >
            Submit
        </button>
        </div>
    );
            }


export default ForgotPassword