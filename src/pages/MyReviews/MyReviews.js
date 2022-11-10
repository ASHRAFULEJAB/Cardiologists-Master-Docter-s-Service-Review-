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
    fetch(`http://localhost:5000/reviews?email=${userDoctor?.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          return userLogout()
         
        }
        return res.json()
      })
      .then((data) => {
        setDoctorReview(data)
        console.log(data)
      })
  }, [userDoctor?.email,userLogout])

  const handleReviewDelete = (id) => {
    const procced = window.confirm('Are you sure you want to delete this order')
    if (procced) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE',
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem('token')}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount > 0) {
            const remaing = doctorReview.filter((or) => or._id !== id)
            setDoctorReview(remaing)
          }
        })
    }
  }
  const updateReviews = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status:'Approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const remaing = doctorReview.filter((ord) => ord._id !== id)
          const approving = doctorReview.find((or) => or._id === id)
          approving.status = 'Approved'
          const orderRemain = [approving, ...remaing]
          setDoctorReview(orderRemain)
        }
      })
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
                  updateReviews={updateReviews}
            ></MyReviewsCard>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyReviews
