import React from 'react'
import styles from './RestorePass.module.scss'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom';


const RestorePass = () => {

    const [input, setInput] = React.useState('')
    const auth = getAuth();

    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendPasswordResetEmail(auth, input)
      .then(() => {
        alert('Password reset email sent!')
        })
      .catch((error) => {
        alert(error.message)
      });
    }

  return (
    <div>
        Enter your email and we will send you link
        <div className={styles.divv}>
            <form onSubmit={handleClick}>
                <input
                    type="email"
                    placeholder='Enter your email'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                <button>OK</button>
            </form>
            <button><Link to='/'>Return to main</Link></button>
        </div>
      
    </div>
  )
}

export default RestorePass
