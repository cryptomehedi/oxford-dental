

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div className="text-center my-16 ">
            <h2 className="text-3xl md:text-4xl" >Thanks for <span className="text-[#384E62]">Choosing</span> <span className='text-green-400 font-bold'>{serviceId}</span> Service</h2>
            <div className='mt-5 md:mt-10'><Link to="/checkout" className="bg-neutral-400 p-3 rounded-xl font-semibold hover:bg-green-400 hover:text-white duration-300">Check Out Now</Link></div>
        </div>
    );
};

export default ServiceDetails;