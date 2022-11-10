import React from 'react'

const MyReviewsCard = ({ review, handleReviewDelete, updateReviews }) => {
  const { serviceName, message, _id,status } = review
  return (
    <tr>
      <th>
        <button
          onClick={() => handleReviewDelete(_id)}
          className='btn btn-circle btn-outline'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </th>
      <td>{status ? serviceName : 'Pending'}</td>
      <td>{message.slice(0, 50)}</td>
      <td>
        <button
          onClick={() => updateReviews(_id)}
          
        >
          
          <label htmlFor='my-modal-6' className='btn btn-outline btn-success'>
            Edit
          </label>

          
          <input type='checkbox' id='my-modal-6' className='modal-toggle' />
          <div className='modal modal-bottom sm:modal-middle'>
            <div className='modal-box'>
              <h3 className='font-bold text-lg'>
                Congratulations random Internet user!
              </h3>
              <p className='py-4'>
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className='modal-action'>
                <label htmlFor='my-modal-6' className='btn'>
                  Update
                  
                </label>
              </div>
            </div>
          </div>
        </button>
      </td>
    </tr>
  )
}

export default MyReviewsCard
