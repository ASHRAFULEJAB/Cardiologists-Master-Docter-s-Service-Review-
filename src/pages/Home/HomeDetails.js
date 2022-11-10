import React from 'react'
import { Link } from 'react-router-dom'

const HomeDetails = () => {
  return (
    <div>
      {/* Appionment */}
      <div className='relative'>
        <img
          src='https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
          className='absolute inset-0 object-cover w-full h-full'
          alt=''
        />
        <div className='relative bg-gray-900 bg-opacity-75'>
          <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col items-center justify-between xl:flex-row'>
              <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
                <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
                  Cardiologists <br className='hidden md:block' />
                  Here <span className='text-teal-400'>For Your Service</span>
                </h2>
                <p className='max-w-xl mb-4 text-base text-gray-400 md:text-lg'>
                  YOU can see all the services and make an a[ppionment for ur
                  better health....
                </p>
                <Link
                  to='/services'
                  aria-label=''
                  className='inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700'
                >
                  See more
                  <svg
                    className='inline-block w-3 ml-2'
                    fill='currentColor'
                    viewBox='0 0 12 12'
                  >
                    <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
                  </svg>
                </Link>
              </div>
              <div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
                <div className='bg-white rounded shadow-2xl p-7 sm:p-10'>
                  <h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
                    Make an Appionment
                  </h3>
                  <form>
                    <div className='mb-1 sm:mb-2'>
                      <label
                        htmlFor='firstName'
                        className='inline-block mb-1 font-medium'
                      >
                        First name
                      </label>
                      <input
                        placeholder='John'
                        required
                        type='text'
                        className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline'
                        id='firstName'
                        name='firstName'
                      />
                    </div>
                    <div className='mb-1 sm:mb-2'>
                      <label
                        htmlFor='lastName'
                        className='inline-block mb-1 font-medium'
                      >
                        Last name
                      </label>
                      <input
                        placeholder='Doe'
                        required
                        type='text'
                        className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline'
                        id='lastName'
                        name='lastName'
                      />
                    </div>
                    <div className='mb-1 sm:mb-2'>
                      <label
                        htmlFor='email'
                        className='inline-block mb-1 font-medium'
                      >
                        E-mail
                      </label>
                      <input
                        placeholder='john.doe@example.org'
                        required
                        type='text'
                        className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline'
                        id='email'
                        name='email'
                      />
                    </div>
                    <div className='mt-4 mb-2 sm:mb-4'>
                      <button
                        type='submit'
                        className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none'
                      >
                        Confirm Appionment
                      </button>
                    </div>
                    <p className='text-xs text-gray-600 sm:text-sm'>
                      We respect your privacy.ThanK you.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Paitent */}
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8'>
          <h2 className='max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group'>
            <span className='inline-block mb-1 sm:mb-4'>
              Meet Some
              <br className='hidden md:block' />
              Pateints
            </span>
            <div className='h-1 ml-auto duration-300 origin-left transform bg-purple-400 scale-x-30 group-hover:scale-x-100' />
          </h2>
          <p className='text-gray-700 lg:text-sm lg:max-w-md'>
            "Meet some of our happliy recovered client.Thanks"
          </p>
        </div>
        <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
         <Link to='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src='https://assets.popbuzz.com/2022/16/who-plays-nick-nelson-in-heartstopper--kit-connor-1650534682-view-0.png'
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  Best Doctor i have ever seen
                </p>
              </div>
            </div>
        </Link>
         <Link to='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src='https://i.mydramalist.com/66zKd_5f.jpg'
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  You will get best services
                </p>
              </div>
            </div>
        </Link>
         <Link to='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src='https://assets.teenvogue.com/photos/5c829092fa0b8705b1120e08/4:3/w_3000,h_2250,c_limit/00-tout-nick-jonas.jpg'
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  GOT lucky,to have this kind doctor
                </p>
              </div>
            </div>
        </Link>
         <Link to='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src='https://www.forbesindia.com/media/images/2022/Aug/img_192753_actorpriyankachopra.jpg'
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  Best doctor  in the town .Gave wonder services..
                </p>
              </div>
            </div>
        </Link>
        </div>
        <div className='text-center'>
         <Link
            to='/services'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800'
          >
            See more
            <svg
              className='inline-block w-3 ml-2'
              fill='currentColor'
              viewBox='0 0 12 12'
            >
              <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
            </svg>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeDetails
