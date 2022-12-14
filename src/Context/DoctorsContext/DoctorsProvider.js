import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import app from '../../firebase/firebaseConfig'

const auth = getAuth(app)

export const DoctorsContext = createContext()
const DoctorsProvider = ({ children }) => {
  const [userDoctor, setUserDoctor] = useState(null)
  const [loader, setLoader] = useState(true)

  const register = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const userLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const GoogleLogin = (provider) => {
    setLoader(true)
    return signInWithPopup(auth, provider)
  }
  const updateDoctorProfile = (profile) => {
    setLoader(true)
    return updateProfile(auth.currentUser, profile)
  }
  const userLogout = () => {
    setLoader(false)
    localStorage.removeItem('token')
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserDoctor(currentUser)

      setLoader(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const DoctorInfo = {
    loader,
    userDoctor,
    setLoader,
    register,
    userLogin,
    userLogout,
    GoogleLogin,
    updateDoctorProfile,
  }

  return (
    <DoctorsContext.Provider value={DoctorInfo}>
      {children}
    </DoctorsContext.Provider>
  )
}

export default DoctorsProvider
