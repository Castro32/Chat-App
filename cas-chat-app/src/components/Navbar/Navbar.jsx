import React from 'react';
import './Navbar.css';

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
        
        </div>
    );
};

export default Navbar;
