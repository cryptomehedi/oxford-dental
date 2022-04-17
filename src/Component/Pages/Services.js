
import React from 'react';
import useServicesData from '../Hooks/UseServicesData';
import Service from './Service';

const Services = () => {
    const [services] = useServicesData()
    return (
        <div id="services">
            <h2 className='font-semibold text-center text-4xl my-6'>My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {
                    services.map(service => <Service service={service} key={service.id} />)
                }
            </div>
        </div>
    );
};

export default Services;