import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import notFound from '../../assets/images/notFound.png'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.notFound}>
      <img src={notFound} alt='' />
      <p>{t('component.notFound.title')}</p>
    </div>
  )
}

export default NotFound
