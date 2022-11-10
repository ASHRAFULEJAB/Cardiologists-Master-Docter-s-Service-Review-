import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { DoctorsContext } from '../../Context/DoctorsContext/DoctorsProvider'
import useTitle from '../../hooks/useTitle'
import MyReviewsCard from './MyReviewsCard'

const MyReviews = () => {
  const { userDoctor, userLogout } = useContext(DoctorsContext)
  useTitle('My Review')
  const [doctorReview, setDoctorReview] = useState([])
  useEffect(() => {
    fetch(
      `https://cardiologists-master-server.vercel.app/reviews?email=${userDoctor?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          return userLogout()
        }
        return res.json()
      })
      .then((data) => {
        setDoctorReview(data)
    
      })
  }, [userDoctor?.email, userLogout])

  const handleReviewDelete = (id) => {
    const procced = window.confirm('Are you sure you want to delete this order')
    if (procced) {
      fetch(`https://cardiologists-master-server.vercel.app/reviews/${id}`, {
        method: 'DELETE',
       
      })
        .then((res) => res.json())
        .then((data) => {
          
          if (data.deletedCount > 0) {
            const remaing = doctorReview.filter((or) => or._id !== id)
            setDoctorReview(remaing)
          }
        })
    }
  }
  
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {doctorReview.map((review) => (
            <MyReviewsCard
              key={review._id}
              review={review}
              handleReviewDelete={handleReviewDelete}
              
            ></MyReviewsCard>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyReviews
