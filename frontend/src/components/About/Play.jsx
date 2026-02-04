import React from "react";
import style from "./Play.module.css";
import visitImg from "../../assets/p4.png";
import visit from "../../assets/menu.png";
import Img from "../../assets/radio.png";
import timer from "../../assets/timer.png";
export default function Visit() {
  return (
    <section className={style.about}>
      <div className={style.imageWrapper}>
        <img src={visitImg} alt="restaurant" />
      </div>

      <div className={style.features}>
        <div className={style.feature}>
          <img src={visit} alt="menu" />
          <div className={style.featureText}>
            <h3>Multi Cuisine</h3>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>

        <div className={style.feature}>
          <img src={Img} alt="radio" />
          <div className={style.featureText}>
            <h3>Easy To Order</h3>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>

        <div className={style.feature}>
          <img src={timer} alt="timer" />
          <div className={style.featureText}>
            <h3>Fast Delivery</h3>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
