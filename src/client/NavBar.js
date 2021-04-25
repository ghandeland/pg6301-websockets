import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <Link to="/">Homepage</Link>
        {' | '}
        <Link to="/chat">Chat</Link>
        {' | '}
        <Link to="/profile">Profile</Link>
        {' | '}
        <Link to="/login">Login</Link>
      </div>
    );
}

export default NavBar
