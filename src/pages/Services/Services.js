import React, { useContext, useEffect, useState } from 'react'
import ServicesDetails from './ServicesDetails'
import { DoctorsContext } from '../../Context/DoctorsContext/DoctorsProvider'
import useTitle from '../../hooks/useTitle'

const Services = () => {
  const { loader, setLoader } = useContext(DoctorsContext)
  const [servicesPage, setServicesPage] = useState([])
  useTitle('Service')
  useEffect(() => {
    fetch('https://cardiologists-master-server.vercel.app/services')
      .then((res) => res.json())
      .then((data) => {
       
        setLoader()
        setServicesPage(data)
      })
  }, [])
  if (loader) {
    return (
      <div
        className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400'
        bis_skin_checked='1'
      ></div>
    )
  }
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1'>
      {loader ? (
        <>
          <h1>pleasw wait</h1>
        </>
      ) : (
        <>
          {servicesPage.map((service) => (
            <ServicesDetails
              key={service._id}
              service={service}
            ></ServicesDetails>
          ))}
        </>
      )}
    </div>
  )
}

export default Services
