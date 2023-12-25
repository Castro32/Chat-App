import React from 'react';
import './ForgotPassword.css';
const ForgotPassword=()=>{
  const [action, setAction] = useState('Sign Up');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return(
        <div className='container'>
          <img src='chat.jpg' alt='logo'/>
          <div className='input'>
          <img src='./mail_646135.png' alt='Email' />
          <input type='email' placeholder='example@gmail.com' />
          </div>

          <div className='input'>
          <img src='./password_159478.png' alt='Password' />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'/>
          </div>
          <div className='password-toggle-icon' onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img src='./eyes_5904983.png' alt='Hide Password' />
            ) : (
              <img src='./view_402758.png' alt='Show Password' />
            )}
          </div>
        </div>
    );
            }


export default ForgotPassword