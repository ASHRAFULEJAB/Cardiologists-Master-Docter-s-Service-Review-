import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { DoctorsContext } from '../../Context/DoctorsContext/DoctorsProvider'
import ServicePageReview from './ServicePageReview'

const ReviewServicePage = ({ reviews }) => {
  const { userDoctor,loader } = useContext(DoctorsContext)
  const serviceLoader = useLoaderData()

  const { _id, description, img, price, rating, title, treatment, service_id } =
    serviceLoader
  const [servicePage, setServicePage] = useState([])
  const [reviewDetails, setReviewDetails] = useState([])

  const handleReview = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value

    const review = {
      service: _id,
      serviceName: title,
      name,
      email,
      message,
    }

    fetch('https://cardiologists-master-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset()
        }
        console.log(data)
        setServicePage(data)
      })

    //       if (email) {

    //       } else {
    //           <>
    //            <h1>Please login to add a review</h1>
    //           <Link to='/login'><button>Login</button></Link></>
    //    }
  }

  useEffect(() => {
    fetch(`https://cardiologists-master-server.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        // const newData = [...servicePage, data]
        setReviewDetails([data])
        console.log(data)
      })
  }, [_id])
  if (loader) {
    return (
      <div
        className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400'
        bis_skin_checked='1'
      ></div>
    )
  }
  return (
    <>
      {' '}
      <div
        className='flex flex-col m-3 max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100'
        bis_skin_checked='1'
      >
        <div className='flex flex-col items-center w-full' bis_skin_checked='1'>
          <h2 className='text-3xl font-semibold text-center'>
            Your opinion matters!
          </h2>
          <div
            className='flex flex-col items-center py-6 space-y-3'
            bis_skin_checked='1'
          >
            <span className='text-center'>How was your experience?</span>
            <div className='flex space-x-3' bis_skin_checked='1'>
              <button
                type='button'
                title='Rate 1 stars'
                aria-label='Rate 1 stars'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-10 h-10 dark:text-yellow-500'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              </button>
              <button
                type='button'
                title='Rate 2 stars'
                aria-label='Rate 2 stars'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-10 h-10 dark:text-yellow-500'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              </button>
              <button
                type='button'
                title='Rate 3 stars'
                aria-label='Rate 3 stars'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-10 h-10 dark:text-yellow-500'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              </button>
              <button
                type='button'
                title='Rate 4 stars'
                aria-label='Rate 4 stars'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-10 h-10 dark:text-yellow-500'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              </button>
              <button
                type='button'
                title='Rate 5 stars'
                aria-label='Rate 5 stars'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-10 h-10 dark:text-gray-600'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              </button>
            </div>
          </div>
          {userDoctor?.email ? (
            <>
              {' '}
              <form onSubmit={handleReview}>
                <div className='flex flex-col w-full' bis_skin_checked='1'>
                  <div className='space-y-1 text-sm' bis_skin_checked='1'>
                    <label
                      htmlFor='username'
                      className='block dark:text-gray-400'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='username'
                      placeholder='Enter Your Name'
                      className='w-full px-10 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border'
                    />
                  </div>
                  <div className='space-y-1 text-sm' bis_skin_checked='1'>
                    <label
                      htmlFor='username'
                      className='block dark:text-gray-400'
                    >
                      Email
                    </label>
                    <input
                      type='text'
                      name='email'
                      id='username'
                      defaultValue={userDoctor?.email}
                      placeholder='Enter Your Email'
                      className='w-full px-10 border py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
                    />
                  </div>
                  <textarea
                    rows='3'
                    name='message'
                    placeholder='Message...'
                    className='py-4 px-10 border  mt-3 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900'
                  ></textarea>

                  <button
                    type='submit'
                    className='py-4 my-8 font-semibold rounded-md dark:text-gray-100 dark:bg-violet-700'
                  >
                    Leave feedback
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1> Please login to add a review</h1>
              <Link to='/login'>
                <button className='p-4  font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400'>
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
        <div className='flex items-center justify-center' bis_skin_checked='1'>
          <Link
            rel='noopener noreferrer'
            href='#'
            className='text-sm dark:text-gray-400'
          >
            Maybe later
          </Link>
        </div>
      </div>
      {reviewDetails.length === 0 ? (
        <>
          <h1 className='text-center text-3xl font-bold text-red-600'>
            No reviews were added
          </h1>
        </>
      ) : (
        <>
          {reviewDetails.map((details) => (
            <ServicePageReview
              key={details._id}
              details={details}
            ></ServicePageReview>
          ))}
        </>
      )}
    </>
  )
}

export default ReviewServicePage
