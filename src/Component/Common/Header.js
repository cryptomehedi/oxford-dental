import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <div  className='md:flex justify-between items-center mt-4 md:px-16'>
            <div className='text-center mb-2 md:mb-0'><Link to='/' className=' font-semibold text-[#384E62] text-2xl md:text-left '>Dr. Jakaria Mahmud</Link></div>
            <Nav/>
        </div>
    );
};

export default Header;