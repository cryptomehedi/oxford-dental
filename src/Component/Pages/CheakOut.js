import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckOut = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="text-center my-16 ">
            <h3 className="text-3xl md:text-4xl"><span className="text-[#384E62]">Thanks </span><span className="text-green-400 font-semibold">{user.displayName}</span> For Checking Out</h3>
        </div>
    );
};

export default CheckOut;