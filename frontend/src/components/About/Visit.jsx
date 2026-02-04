import React from 'react'
import style from "./Visit.module.css"
import visitimg from '../../assets/visit.png'
export default function Visitus() {
  return (
    <section className={style.visit}>
    <div className={style.right}>
        <img src={visitimg} className={style.img} alt="visit us" />
        </div>
        <div className={style.left}>
        <h1>We provide healthy food for your family.</h1>
        <h3>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city’s rich culinary culture, we aim to honor our local roots while infusing a global palate.</h3>
        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
    </div>  
    </section>
  )
}
