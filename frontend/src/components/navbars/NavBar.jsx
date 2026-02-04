import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import CustomButton from '../Buttons/CustomButton.jsx'
import logo from '../../assets/logo.png'
export default function MenuBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logoimg}/>
        <p>Bistro Bliss</p>
      </div>
      
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/book">Home</Link></li>
          <li className={styles.item}><Link to="/about">About</Link></li>
          <li className={styles.item}><Link to="/menu">Menu</Link></li>
          <li className={styles.item}><Link to="/pages">Pages</Link></li>
          <li className={styles.item}><Link to="/contact">Contact</Link></li>
        </ul>
        <CustomButton btnTxt="Book A Table" />
    </div>
  )
}
