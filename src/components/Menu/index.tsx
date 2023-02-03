import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LOCAL_STORAGE_KEYS } from '../../utils/LocalStorages'
import { LANGUAGES } from '../../utils/Languages'
import styles from './index.module.scss'
import { MENUS } from '../../utils/Menus'

const MobileMenu = () => {
  const { i18n, t } = useTranslation()
  const defaultLanguageId = localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE)
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguageId ? LANGUAGES.findIndex((lang) => lang.key === defaultLanguageId) : 1)

  const handleLanguageOnSelected = (index:number) => {
    setSelectedLanguage(index)
    const lang = LANGUAGES[index].key
    i18n.changeLanguage(lang)
    localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, lang)
  }

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.textButtonContainer}>
        {MENUS.map((menu) => (
          <div className={styles.textButton} key={menu.key}>{t(menu.title)}</div>
        ))}
      </div>
      <div className={styles.languageContainer}>
        {LANGUAGES.map((lang, index) => (
          <div
            key={lang.key}
            className={`${styles.languageButton} ${LANGUAGES[selectedLanguage].title === lang.title && styles.selected}`}
            onClick={() => handleLanguageOnSelected(index)}>
            {t(lang.value)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu
