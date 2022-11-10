import React, { useEffect, useState } from 'react'
import ServicesHomePage from '../Services/ServicesHomePage'
import imgae1 from '../../assets/images/pic1.jpg'
import imgae2 from '../../assets/images/pic2.png'
import imgae3 from '../../assets/images/pic3.jpg'
import imgae4 from '../../assets/images/pic4.jpg'
import useTitle from '../../hooks/useTitle'
import HomeDetails from './HomeDetails'

const Home = () => {
  const [services, setServices] = useState([])
  useTitle('Home')

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
        {services.map((service) => (
          <ServicesHomePage
            key={service._id}
            service={service}
          ></ServicesHomePage>
        ))}
      </div>
      <div className='carousel w-full'>
        <div id='item1' className='carousel-item w-full'>
          <img  src={imgae1}  alt=""className='w-full' />
        </div>
        <div id='item2' className='carousel-item w-full'>
          <img src={imgae2}  alt="" className='w-full' />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <img src={imgae3}  alt="" className='w-full' />
        </div>
        <div id='item4' className='carousel-item w-full'>
          <img src={imgae4}  alt="" className='w-full' />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
      <HomeDetails></HomeDetails>
    </>
  )
}

export default Home
