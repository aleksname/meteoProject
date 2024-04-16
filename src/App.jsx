import { useState } from 'react'
import './App.css'
import styles from './App.module.scss'
function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className={styles.wrapper}>
      <div className={styles.parent}>
        <h1 className={styles.heading}>Hello</h1>
        
        <div className="">
          <div className="">
            <input className={styles.input} type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="">
            <input className={styles.input} type="text" placeholder='Passoword' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
        
        <button className={styles.btn}>Clisk</button>
      </div>
    </div>
  )
}

export default App
