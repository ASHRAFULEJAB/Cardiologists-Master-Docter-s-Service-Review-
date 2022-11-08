import React, { useEffect, useState } from 'react'
import ServicesHomePage from '../Services/ServicesHomePage'

const Home = () => {

  const [services, setServices] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:5000/services-home')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  return (
    <>
      {/* <div className='carousel w-full mb-5 mt-6'>
        <div id='slide1' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://placeimg.com/800/200/arch'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://placeimg.com/800/200/arch'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://placeimg.com/800/200/arch'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://placeimg.com/800/200/arch'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div> */}
      <div className='grid lg:grid-cols-3 grid-cols-1'>
      {
          services.map(service => <ServicesHomePage
            key={service._id}
            service={service}
          ></ServicesHomePage>)
      }
     </div>
    </>
  )
}

export default Home
