import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {img, name, price, id} = service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className="bg-[#BBE1FE] shadow-2xl mb-6 md:mb-0 rounded-lg p-4">
            <div className="bg-[#D5FAFE] p-4 rounded-lg shadow-2xl">
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <button onClick={()=> navigateToServiceDetail(id)} className="bg-gray-400 hover:text-white font-semibold duration-300 hover:bg-[#384E62] mt-4 p-1 rounded">Book for :  {name}</button>
            
        </div>
        </div>
    );
};

export default Service;