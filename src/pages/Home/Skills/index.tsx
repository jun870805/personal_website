import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import Tab from '../../../components/Tabs'
import ProgressBar from '../../../components/ProgressBar'
import { SKILL_TYPES, SKILL_LIST } from '../../../utils/Skills'

const Skills = () => {
  const { t } = useTranslation()
  const TAB_ITEMS = [t('home.skills.tabs.mobile'), t('home.skills.tabs.web'), t('home.skills.tabs.backend')]
  const [selectedTab, setSelectedTab] = useState(SKILL_TYPES.MOBILE)

  const handleTabOnSelected = (index: number) => {
    setSelectedTab(index)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{t('home.skills.title')}</div>
      <Tab
        tabTitles={TAB_ITEMS}
        selectedTab={selectedTab}
        tabOnClick={handleTabOnSelected}
      />
      <div className={styles.infoContainer}>
        {SKILL_LIST[selectedTab].map((skill) => (
          <div className={styles.skillContainer} key={skill.title}>
            <p>{skill.title}</p>
            <div className={styles.skill}>
              <ProgressBar percent={skill.percent} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
