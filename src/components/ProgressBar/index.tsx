import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

type Props = {
  className?: string;
  percent: number;
}

const ProgressBar = (props: Props) => {
  const { percent } = props
  const [nowPercent, setNowPercent] = useState(0)

  useEffect(() => {
    let _progress = 0
    const timer = setInterval(() => {
      if (_progress < percent) {
        _progress += 1
        setNowPercent(_progress)
      }
    }, 10)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{ width: `${nowPercent}%` }} />
    </div>
  )
}

export default ProgressBar
