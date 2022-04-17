import React from 'react';
import Banner from '../Elements/Banner';
import Testimonial from '../Elements/Testimonial';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services/>
            <Testimonial/>
        </div>
    );
};

export default Home;