/* eslint-disable quote-props */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { LOCAL_STORAGE_KEYS } from './utlis/LocalStorages'
import en from './locales/en-US.json'
import tw from './locales/zh-TW.json'

const resources = {
  'en': {
    translation: en
  },
  'tw': {
    translation: tw
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE) || 'en',
  fallbackLng: localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE) || 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
