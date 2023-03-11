import React from 'react'
import styles from './index.module.scss'
import Cover from './Cover'
import AboutMe from './AboutMe'
import Skills from './Skills'

const Home = () => {
  return (
    <div className={styles.container}>
      <Cover></Cover>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  )
}

export default Home
