import React from 'react';
import './Navbar.css';
import { auth } from '../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import SignIn from '../SignIn/SignIn'; 

const Navbar = () => {

    const handleMenuClick = () => {
        alert("Menu Clicked!!!");
    };

    return (
        <div className='Navbar'>
            <div className='bar'>
                <img src='./chat.jpg' alt='logo' />
            </div>
            <div className='nav'>
                <img src='./menu-bar.png' alt='menu-bar' onClick={handleMenuClick} />
            </div>
            <SignIn />
        </div>
    );
};

export default Navbar;
