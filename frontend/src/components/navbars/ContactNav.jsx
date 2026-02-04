import React from 'react'
import styles from './ContactNav.module.css'
import fb from '../../assets/social_ico/fb.png'
import x from '../../assets/social_ico/x.png'
import git from '../../assets/social_ico/github.png'
import insta from '../../assets/social_ico/insta.png'
import phone from '../../assets/contact_ico/phone.png'
import mail from '../../assets/contact_ico/mail.png'
export default function ContactNav() {
  return (
    <div className={styles.nav}>
      <ul className={styles.contact}>
        <li className={styles.item}>
          <img src={phone} alt='phone' className={styles.image}></img> <p>
            (+91) 9804-789-321</p>
          </li>
        <li className={styles.item}>
          <img src={mail} alt='mail' className={styles.image}></img><span>abc@gmail.com</span>
          </li>
      </ul>

      <ul className={styles.socials}>
        <li className={styles.item}><img src={x} alt="x"/></li>
        <li className={styles.item}><img src={fb} alt="facebook"/></li>
        <li className={styles.item}><img src={insta} alt="instagram"/></li>
        <li className={styles.item}><img src={git} alt="github"/></li>
      </ul>
    </div>
  )
}
