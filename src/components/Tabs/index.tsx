import React from 'react'
import styles from './index.module.scss'
import { Translation } from 'react-i18next'

interface TabsProps {
  tabTitles: string[];
  selectedTab: number;
  tabOnClick: Function;
  className?:string;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { tabTitles, selectedTab = 0, tabOnClick, className } = props

  function handleTabOnClick (index:number) {
    if (index === selectedTab) return
    tabOnClick(index)
  }

  return (
    <div className={styles.tabsContainer}>
      <div className={`${styles.tabs} ${className}`}>
        {tabTitles.map((title, index) => (
          <div
            className={`${styles.tab} ${selectedTab === index ? styles.selectedTab : ''}`}
            key={`tab-${title}`}
            onClick={() => handleTabOnClick(index)}
          >
            <Translation>
              {t => <>{t(title)}</>}
            </Translation>
            <div
              className={styles.bottomLine}
              style={{ visibility: selectedTab === index ? 'visible' : 'hidden' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
