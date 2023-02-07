import React from 'react'
import { BeatLoader } from 'react-spinners'
import { BUTTON_SIZE } from '../../utils/ButtonSize'
import styles from './index.module.scss'

type Props = {
  style?:object;
  className?:string;
  isHollow?:boolean;
  onClick?:Function;
  disabled?:boolean;
  loading?:boolean;
  children?:any;
  size?:string;
  nonBorder?: boolean;
}

const Button = (props:Props) => {
  const {
    className = '',
    style = {},
    isHollow = false,
    onClick = () => {},
    disabled = false,
    loading = false,
    children,
    nonBorder,
    size = BUTTON_SIZE.LARGE
  } = props

  const handleOnClick = () => {
    if (loading || disabled) return
    onClick()
  }

  return (
    <button
      style={style}
      className={`${styles[size]} ${disabled ? styles.disabled : ''} ${isHollow ? styles.isHollow : ''} ${nonBorder && styles.nonBorder} ${disabled && isHollow ? styles.disabledHollow : ''} ${className}`}
      onClick={() => handleOnClick()}
    >
      {loading ? (<BeatLoader color='#FFFFFF' speedMultiplier={0.6} margin='3px' size={8} />) : children}
    </button>
  )
}

export default Button
