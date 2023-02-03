import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LOCAL_STORAGE_KEYS } from '../../utils/LocalStorages'
import { LANGUAGES } from '../../utils/Languages'
import styles from './index.module.scss'
import DropDown from '../DropDown'
import { ReactComponent as Language } from '../../assets/icons/language.svg'
import { ReactComponent as Menu } from '../../assets/icons/menu.svg'
import { ReactComponent as MenuOpen } from '../../assets/icons/menu_open.svg'
import { MENUS } from '../../utils/Menus'
import MobileMenu from '../Menu'

const Header = () => {
  const { i18n, t } = useTranslation()
  const ref = useRef<HTMLInputElement>(null)
  const defaultLanguageId = localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE)
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguageId ? LANGUAGES.findIndex((lang) => lang.key === defaultLanguageId) : 1)
  const [dropDownMenuIsOpen, setDropDownMenuIsOpen] = useState(false)

  const handleLanguageOnSelected = (index:number) => {
    setSelectedLanguage(index)
    const lang = LANGUAGES[index].key
    i18n.changeLanguage(lang)
    localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, lang)
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        setDropDownMenuIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <div className={`${styles.container} ${dropDownMenuIsOpen && styles.menuOpen}`} ref={ref}>
      <div className={styles.header}>
        <div className={styles.menu}>
          {MENUS.map((menu) => (
            <div className={styles.textButton} key={menu.key}>{t(menu.title)}</div>
          ))}
          <div className={styles.languageButton}>
            <DropDown
              align='right'
              button={
                <div className={styles.option}>
                  <div className={styles.icon}><Language /></div>
                  {LANGUAGES[selectedLanguage].title}
                </div>
              }
            >
              {LANGUAGES.map((lang, index) => (
                <div
                  className={styles.dropDownOption}
                  key={lang.key}
                  onClick={() => handleLanguageOnSelected(index)}
                >
                  {lang.value}
                </div>
              ))}
            </DropDown>
          </div>
          <div className={styles.menuButton}>
            {dropDownMenuIsOpen ? <MenuOpen onClick={() => setDropDownMenuIsOpen(false)}/> : <Menu onClick={() => setDropDownMenuIsOpen(true)}/>}
          </div>
        </div>
      </div>
      {dropDownMenuIsOpen && <div className={styles.openMenu}><MobileMenu /></div>}
    </div>
  )
}

export default Header
