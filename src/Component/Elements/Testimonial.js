import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TestimonialDetials from './TestimonialDetials';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        axios.get('testimonial.json')
        .then(data => setTestimonials(data.data))
    },[])
    return (
        <div id="services">
            <h2 className='font-semibold text-center text-4xl my-6'>Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {
                    testimonials.map(testimonial => <TestimonialDetials testimonial={testimonial} key={testimonial.id} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;