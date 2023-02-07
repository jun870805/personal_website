import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { ReactComponent as PageNotFound } from '../../assets/icons/not_found.svg'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className={styles.notFound}>
      <PageNotFound />
      <p>{t('component.notFound.title')}</p>
      <Button onClick={() => navigate('../')}>{t('component.notFound.button')}</Button>
    </div>
  )
}

export default NotFound
