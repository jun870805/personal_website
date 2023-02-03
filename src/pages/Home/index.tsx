import React from 'react'
import logo from '../../assets/icons/logo.svg'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
          Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
          Learn React
      </a>
    </div>
  )
}

export default Home
