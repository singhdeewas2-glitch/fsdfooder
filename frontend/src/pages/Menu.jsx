import React from 'react'
import styles from './Menu.module.css'
import ContactNav from '../components/navbars/ContactNav.jsx'
import NavBar from '../components/navbars/NavBar.jsx'
export default function Menu() {
    return (
        <div className={styles.main}>
            <ContactNav />
            <NavBar />
        </div>
    )
}
