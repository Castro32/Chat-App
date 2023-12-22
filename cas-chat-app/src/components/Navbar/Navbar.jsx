import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu); // Toggle the showMenu state when the menu icon is clicked
    };

    return (
        <div className='Navbar'>
            <div className='bar'>
                <img src='./chat.jpg' alt='logo' />
            </div>
            <div className='nav'>
                <img src='./menu-bar.png' alt='menu-bar' onClick={handleMenuClick} />
            </div>
            {showMenu && ( 
                <div className=" cont h-menu">
                    <a href="chat" style={{ gap: '10px' }}>Chat</a>
                    <a href="voice call" style={{ padding: '1px' }}>Voice Call</a>
                    <a href="video call" style={{ padding: '1px' }}>Video Call</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
