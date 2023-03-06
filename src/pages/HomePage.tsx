import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { useAuth } from '../hooks/use-auth'
import { removeUser, getUser } from '../store/slices/userSlice'

const Homepage = () => {

  const dispatch = useAppDispatch()

  // const {isAuth, email} = useAuth()

  dispatch(getUser())
  
    React.useEffect(() => {
      dispatch(getUser())
    },[])
    const email = useAppSelector(state => state.user.email)

  return email ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
    </div>
  ) : (
    <Navigate to='/login'/>
  )
}

export default Homepage
