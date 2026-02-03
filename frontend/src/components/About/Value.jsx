import React from 'react'
import style from './Value.module.css' 
import image from "../../assets/hand.png";
export default function Value() {
  return (
    <div>
      <section className={style.info}>
  <div className={style.left}>
    <h2>A little information for our valuable guest</h2>
    <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>

    <div className={style.stats}>
      <div className={style.stat}>
        <h3>3</h3>
        <span>Locations</span>
      </div>
      <div className={style.stat}>
        <h3>1995</h3>
        <span>Founded</span>
      </div>
      <div className={style.stat}>
        <h3>65+</h3>
        <span>Staff Members</span>
      </div>
      <div className={style.stat}>
        <h3>100%</h3>
        <span>Satisfied Customers</span>
      </div>
    </div>
  </div>

  <div className={style.right}>
    <img src={image} alt="food prep" />
  </div>
</section>

    </div>
  )
}
