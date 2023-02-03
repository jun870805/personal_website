import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

type Props = {
  button:any;
  children:any;
  hoverOpen?:boolean;
  align?:string; // left, right
}

const DropDown = (props:Props) => {
  const ref = useRef<HTMLInputElement>(null)
  const {
    button,
    children,
    hoverOpen = false,
    align = 'left'
  } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  useEffect(() => {
    if (!hoverOpen) return
    const handleHover = (event:any) => {
      if ((ref.current && ref.current?.contains(event.target))) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }
    document.addEventListener('mouseenter', handleHover, true)
    return () => {
      document.removeEventListener('mouseenter', handleHover, true)
    }
  }, [])

  return (
    <div
      className={styles.button}
      onClick={() => setIsOpen(!isOpen)}
      ref={ref}
    >
      {button}
      {isOpen && (
        <div className={styles.options}>
          <div className={styles.space} />
          <div className={styles.optionsContainer} style={align === 'left' ? { left: '0' } : { right: '0' }}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropDown
