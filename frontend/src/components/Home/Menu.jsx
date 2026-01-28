import React from 'react'
import style from './Menu.module.css'
import { Link } from 'react-router-dom'
export default function Menu() {
  return (
    <section className={style.page}>
        <h1>Best food for your taste</h1>
        <p>       Discover delectable cuisine and unforgettable moments
        in our welcoming, culinary haven.</p>
    <div className={style.button}>
        <Link to="/get" className={style.book}> Book A Table</Link>
        <Link to="/set" className={style.explore}>Explore Menu</Link>
      
    </div>
    </section>
  )
}
