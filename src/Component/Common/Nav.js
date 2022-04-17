import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import CustomLink from './CustomLink';



const Nav = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <nav>
            <ul className={`flex bg-white justify-center w-full sticky font-semibold`}>
                <CustomLink  className="mx-2 md:mx-5" to="/">Home</CustomLink>
                <CustomLink  className="mx-2 md:mx-5" to="/services">Services</CustomLink>
                <CustomLink  className="mx-2 md:mx-5" to="/blogs">Blogs</CustomLink>
                <CustomLink  className="mx-2 md:mx-5" to="/about">About</CustomLink>
                
                {
                    user ? 
                    <div>
                        <button onClick={handleSignOut} className="font-bold mx-2 text-red-500">Sign Out</button>
                    </div>
                    :
                    <div>
                    <CustomLink  className="mx-2 md:mx-5" to="/login">Login</CustomLink>
                    </div>
                }
            </ul>
        </nav>
    );
};

export default Nav;