import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.infoContainer}>
      <div className={styles.content}>{t('aboutMe.content1')}</div>
      <div className={styles.content}>{t('aboutMe.content2')}</div>
      <div className={styles.content}>{t('aboutMe.content3')}</div>
      <div className={styles.content}>{t('aboutMe.content4')}</div>
    </div>
  )
}

export default AboutMe
