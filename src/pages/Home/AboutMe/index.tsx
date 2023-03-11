import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.infoContainer}>
      <div className={styles.title}>{t('home.aboutMe.title')}</div>
      <div className={styles.content}>
        <p>{t('home.aboutMe.content1')}</p>
        <p>{t('home.aboutMe.content2')}</p>
        <p>{t('home.aboutMe.content3')}</p>
        <p>{t('home.aboutMe.content4')}</p>
      </div>
    </div>
  )
}

export default AboutMe
