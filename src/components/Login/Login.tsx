import React from 'react'
import styles from './Login.module.scss'
import { useAppDispatch } from '../../hooks/redux-hooks'
import Form from '../Form/Form'
import { setUser } from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogin = (email:string, password:string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          dispatch(setUser({
              email:user.email,
              id: user.uid,
              token: user.refreshToken
          }))
          navigate('/')
      })
            .catch(() => alert('Wrong username or password'))
    }

  return (
    <Form
    title='sign in'
    handleClick={handleLogin}/>
  )
}

export default Login
