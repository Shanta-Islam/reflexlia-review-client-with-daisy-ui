import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ServiceViewCard from './ServiceViewCard';


const ServiceCard = ({ datasize }) => {
    const [serviceDetails, setServiceDetails] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/services${datasize ? `?datasize=${datasize}` : ''}`;
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setServiceDetails(actualData);
                // setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [datasize]);
    return (
        <div className="container mx-auto px-3 md:px-5 mt-5 flex justify-center flex-col-reverse md:flex-row gap-0">
            <div className="text-center">
                
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1 gap-4 mb-5'>
                {serviceDetails.map(service => <ServiceViewCard key={service._id} service={service}></ServiceViewCard>)}
            </div>
        </div>
    );
};

export default ServiceCard;