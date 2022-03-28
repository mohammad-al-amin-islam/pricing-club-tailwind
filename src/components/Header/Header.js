import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='text-5xl'>Save your money </h1>
            <p>By giving it to me</p>
        </div>
    );
};

export default Header;