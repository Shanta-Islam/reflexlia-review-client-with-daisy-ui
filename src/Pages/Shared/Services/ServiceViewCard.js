import React from 'react';
import { Link } from 'react-router-dom';

const ServiceViewCard = ({ service }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description.slice(0,100)}...</p>
                <div className='flex'>
                    <p className='text-xl'>Price: <span className='font-bold'>৳ {service.price}</span> </p>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-1" className="mask mask-star"/>
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/service/${service._id}`}>
                        <button className="btn">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceViewCard;