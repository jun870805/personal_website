import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './index.module.scss'

const BasicLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  )
}

export default BasicLayout
