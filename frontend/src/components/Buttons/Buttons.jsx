import React from 'react'
import styles from './Buttons.module.css'
export default function Button({btnTxt, handler}) {
     if (!btnTxt) return null; 
  return (
    <button className={styles.btn} onClick={handler}>{btnTxt}</button>
  )
}