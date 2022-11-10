import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const UpdateReview = () => {
  const router = useParams()
  const navigate = useNavigate()
    const { id } = router
    console.log(id)
  const [doctorReview, setDoctorReview] = useState([])

  
  const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target
    const message = form.message.value
    const  reviews = {
        message,
    }
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify( reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount> 0) {
            navigate("/my-reviews")
         
        }
        console.log(data)
      })
  }
  return (
    <form onSubmit={handleUpdate}>
      {' '}
      <div className='flex items-center m-5'>
        <label className='inline-block w-40 mr-6 text-right font-bold text-gray-600'>
          Update Name
        </label>
        <input
          type='text'
          name='message'
          placeholder='Type here'
          className='input input-bordered input-primary w-full max-w-xs'
        />
      <div className='text-right'>
        <button className='py-3 px-8 bg-green-400 text-white font-bold'>
          Add
        </button>
      </div>
      </div>
    </form>
  )
}

export default UpdateReview
