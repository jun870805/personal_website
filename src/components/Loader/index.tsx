import React from 'react'
import styles from './index.module.scss'
import { PulseLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <PulseLoader color='#84CEE4' speedMultiplier={0.6} margin='6px' />
    </div>
  )
}

export default Loader
