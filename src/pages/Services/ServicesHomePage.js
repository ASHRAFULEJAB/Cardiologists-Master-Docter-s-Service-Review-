import React from 'react'
import { Link } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const ServicesHomePage = ({ service }) => {
  //   console.log(service)
  const { description, img, price, rating, title } = service

  return (
    <div
      className='max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 m-5 rounded-lg'
      bis_skin_checked='1'
    >
      <div
        className='flex justify-between pb-4 border-bottom'
        bis_skin_checked='1'
      >
        <div className='flex items-center' bis_skin_checked='1'>
          <Link
            rel='noopener noreferrer'
            to='#'
            className='mb-0 capitalize dark:text-gray-100'
          >
            {price}$
          </Link>
        </div>
        <Link rel='noopener noreferrer' to='/services'>
          See All
        </Link>
      </div>
      <div className='space-y-4' bis_skin_checked='1'>
        <div className='space-y-2' bis_skin_checked='1'>
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                alt=''
                className='block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500'
              />
            </PhotoView>
          </PhotoProvider>
          <div className='flex items-center text-xs' bis_skin_checked='1'>
            <span className='text-white font-bold'>Rating: {rating}</span>
          </div>
        </div>
        <div className='space-y-2' bis_skin_checked='1'>
          <Link rel='noopener noreferrer' to='#' className='block'>
            <h3 className='text-xl font-semibold dark:text-violet-400'>
              {title}
            </h3>
          </Link>
          <p className='leading-snug dark:text-gray-400'>
            {description.slice(0, 100)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesHomePage
