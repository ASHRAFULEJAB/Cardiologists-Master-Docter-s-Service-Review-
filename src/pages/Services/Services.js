import React, { useContext, useEffect, useState } from 'react';
import ServicesDetails from './ServicesDetails';
import { DoctorsContext } from '../../Context/DoctorsContext/DoctorsProvider'

const Services = () => {
    const {loader,setLoader}=useContext(DoctorsContext)
    const [servicesPage,setServicesPage]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
          .then((res) => res.json())
          .then((data) => {
            //   if (!data) {
                 
            //     return (
            //         <div
            //           className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400'
            //           bis_skin_checked='1'
            //         ></div>)
            // }
               setLoader()
              setServicesPage(data)
          })
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