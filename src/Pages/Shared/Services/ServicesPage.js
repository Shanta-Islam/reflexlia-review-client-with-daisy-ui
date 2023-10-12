import React from 'react';
import ServiceCard from './ServiceCard';


const ServicesPage = () => {
    return (
        <div className='py-20'>
            <h1 className='text-3xl font-bold text-center mb-10'>All Services</h1>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default ServicesPage;