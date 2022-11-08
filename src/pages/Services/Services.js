import React, { useEffect, useState } from 'react';
import ServicesDetails from './ServicesDetails';

const Services = () => {
    const [servicesPage,setServicesPage]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
          .then((res) => res.json())
          .then((data) => setServicesPage(data))
      }, [])
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1'>
            {
                servicesPage.map(service => <ServicesDetails
                
                    key={service._id}
                    service={service}
                ></ServicesDetails>)
            }
        </div>
    );
};

export default Services;