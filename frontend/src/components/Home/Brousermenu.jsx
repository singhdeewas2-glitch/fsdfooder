import React from "react";
import style from "./Brousermenu.module.css";
import { Link } from "react-router-dom";
import Breakfast from "../../assets/breakfast.png";
import MainDishes from "../../assets/maindishes.png";
import Drinks from "../../assets/drinks.png";
import Dessert from "../../assets/dessert.png";
export default function Brousermenu() {
  return (
    <section>
      <div>
        <h1 className={style.browsemenu}>Browse Our Menu</h1>
      </div>
      <ul className={style.for}>
        <div className={style.card}>
          <li className={style.icon}>
            <img src={Breakfast} alt="breakfast" />
          </li>
          <h3>Breakfast</h3>
          <p>
            In the new era of technology we look in the future with certainty
            and pride for our life.
          </p>
          <Link to="/explore" className={style.explore}>
            Explore Menu
          </Link>
        </div>
        <div className={style.card}>
          <li className={style.icon}>
          <img src={MainDishes} alt="MainDishes" />
          </li>
          <h3>Main Dishes</h3>
          <p>
            In the new era of technology we look in the future with certainty
            and pride for our life.
          </p>
          <Link to="/explore" className={style.explore}>
            Explore Menu
          </Link>
        </div>
        <div className={style.card}>
          <li className={style.icon}>
           <img src={Drinks} alt="Drinks" />
          </li>
          <h3>Drinks</h3>
          <p>
            In the new era of technology we look in the future with certainty
            and pride for our life.
          </p>
          <Link to="/explore" className={style.explore}>
            Explore Menu
          </Link>
        </div>
        <div className={style.card}>
          <li className={style.icon}>
            <img src={Dessert} alt="Dessert" />
          </li>
          <h3>Dessert</h3>
          <p>
            In the new era of technology we look in the future with certainty
            and pride for our life.
          </p>
          <Link to="/explore" className={style.explore}>
            Explore Menu
          </Link>
        </div>
      </ul>
    </section>
  );
}
