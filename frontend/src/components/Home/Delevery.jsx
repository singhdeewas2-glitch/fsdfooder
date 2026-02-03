import React from "react";
import style from "./Delevery.module.css";
import elevery from "../../assets/img.png";
import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
export default function Delevery() {
  return (
    <section className={style.del}>
      <ul className={style.porson}>
        <img src={elevery} className={style.img} alt="delevery" />
        <div className={style.dele}>
          <h1>Fastest Food Delivery in City</h1>
          <h3>
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.
          </h3>
          <li className={style.icon}>
            <img src={icon} className={style.sign} alt="icon" />
            <p>Delivery within 30 minutes</p>
          </li>
          <li className={style.icon} >
            <img src={icon} className={style.sign} alt="icon" />
            <p>Best Offer & Prices</p>
          </li>
          <li className={style.icon}>
            <img src={icon} className={style.sign} alt="icon" />
            <p>Online Services Available</p>
          </li>
        </div>
      </ul>
    </section>
  );
}
