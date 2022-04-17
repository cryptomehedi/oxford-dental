import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <div  className='md:flex justify-between items-center mt-4 md:px-16'>
            <h2 className='text-center text-2xl md:text-left mb-2 md:mb-0'>Dr. Jakaria Mahmud</h2>
            <Nav/>
        </div>
    );
};

export default Header;