import React from 'react'
import styles from './Form.module.scss'
import {FC} from 'react'
import { Link } from 'react-router-dom'

interface FormProps {
    title: string,
    handleClick: (email:string, pass: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleClick(email, pass)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'/>
        <input
          type='password'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder='password'/>
        <button>
          {title}
        </button>
      </form>
      <div>
        Forgot password? <button><Link to='/forgot'>Click here</Link></button>
      </div>
    </div>
  )
}

export default Form
