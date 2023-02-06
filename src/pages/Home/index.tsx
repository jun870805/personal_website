import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import Typewriter from 'react-ts-typewriter'
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Github } from '../../assets/icons/github.svg'
import { ReactComponent as CV } from '../../assets/icons/assignment.svg'
import { ReactComponent as ChevronDoubleDown } from '../../assets/icons/chevron_double_down.svg'

const Home = () => {
  const { t } = useTranslation()
  const [typewriterCursor, setTypewriterCursor] = useState(true)

  return (
    <>
      <div className={styles.infoContainer}>
        <div className={styles.title}>Peter Fan</div>
        <div className={styles.solgan}>
          <Typewriter
            text={t('home.solgan')}
            speed={60}
            loop={false}
            cursor={typewriterCursor}
            onFinished={() => setTypewriterCursor(false)}
          />
        </div>
        <div className={styles.linkContainer}>
          <div className={`${styles.icon} ${styles.github}`}><Github /></div>
          <div className={styles.icon}><Linkedin /></div>
          <div className={styles.icon}><CV /></div>
        </div>
      </div>
      <div className={styles.downContainer}>
        <ChevronDoubleDown />
      </div>
    </>
  )
}

export default Home
