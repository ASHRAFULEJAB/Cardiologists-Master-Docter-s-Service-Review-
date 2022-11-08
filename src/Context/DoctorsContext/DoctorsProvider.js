import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
  } from 'firebase/auth'
import app from '../../firebase/firebaseConfig'
  
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export const  DoctorsContext = createContext()
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
  const GoogleLogin = () => {
    return signInWithPopup(auth,googleProvider)
  }
  const userLogout = () => {
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
        register,
        userLogin,
        userLogout,
        GoogleLogin
}

    return (
        <DoctorsContext.Provider value={DoctorInfo}>
            {children}
        </DoctorsContext.Provider>
    );
};

export default DoctorsProvider;