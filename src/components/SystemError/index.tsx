import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { ReactComponent as Error } from '../../assets/icons/system_error.svg'
import Button from '../Button'

const SystemError = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.systemError}>
      <Error />
      <p>{t('component.systemError.title')}</p>
      <Button onClick={() => window.location.reload()}>{t('component.systemError.button')}</Button>
    </div>
  )
}

export default SystemError
