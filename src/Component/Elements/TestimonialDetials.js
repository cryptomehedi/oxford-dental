import React from 'react';


const TestimonialDetials = ({testimonial}) => {
    const {img, name, ratings, description} = testimonial;
    return (
        <div className="bg-[#BBE1FE] shadow-2xl mb-6 md:mb-0 rounded-lg p-4">
            <div className="bg-[#D5FAFE] text-center h-96 p-4 rounded-lg shadow-2xl">
                <div className="flex justify-center"><img className='rounded-full' src={img} alt="" /></div>
                <p>Name: {name}</p>
                <p>Rating: {ratings}</p>
                <p><small>{description}</small></p>
                
            </div>
        </div>
    );
};

export default TestimonialDetials;