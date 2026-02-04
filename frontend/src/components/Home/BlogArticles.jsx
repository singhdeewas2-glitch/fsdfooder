import React from "react";
import style from "./BlogArticles.module.css";
import Button from "../Buttons/Buttons";
import Burger from "../../assets/burger.png";
import Fries from "../../assets/fries.png";
import Chicken from "../../assets/chicken.png";
import Cake from "../../assets/cake.png";
import Pizza from "../../assets/pizza.png";

export default function BlogArticles() {
  return (
    <section className={style.blog}>
      <div className={style.header}>
        <h1>Our Blog & Articles</h1>

        <li className={style.ton}>
          <Button btnTxt="Read All Articles" />
        </li>
      </div>

      <div className={style.container}>
        <div className={style.bigCard}>
          <img src={Burger} alt="Burger" />
          <p className={style.date}>January 3, 2023</p>
          <h2>
            The secret tips & tricks to prepare a perfect burger & pizza for our
            customers
          </h2>
          <p className={style.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque assumenda aperiam dolorum repellendus reprehenderit labore dicta eius sequi magni, beatae quaerat pariatur voluptatibus deleniti doloremque ea temporibus.
          </p>
        </div>
        <div className={style.smallCards}>
          <div className={style.card}>
            <img src={Fries} alt="Fries" />
            <p className={style.date}>January 3, 2023</p>
            <h3>How to prepare the perfect french fries in an air fryer</h3>
          </div>

          <div className={style.card}>
            <img src={Chicken} alt="Chicken" />
            <p className={style.date}>January 3, 2023</p>
            <h3>How to prepare delicious chicken tenders</h3>
          </div>

          <div className={style.card}>
            <img src={Cake} alt="Cake" />
            <p className={style.date}>January 3, 2023</p>
            <h3>7 delicious cheesecake recipes you can prepare</h3>
          </div>

          <div className={style.card}>
            <img src={Pizza} alt="Pizza" />
            <p className={style.date}>January 3, 2023</p>
            <h3>5 great pizza restaurants you should visit this city</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
