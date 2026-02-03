import React from "react";
import style from "./Uniqueservices.module.css";
import Caterings from "../../assets/caterings.png";
import Birthdays from "../../assets/birthday.png";
import Weddings from "../../assets/wedding.png";
import Events from "../../assets/event.png";
export default function Uniqueservices() {
  return (
    <section className={style.Unique}>
      <h1>We also offer unique services for your events</h1>
       <ul className={style.cards}>
      <div className={style.card}>
        <img src={Caterings} alt=" catering" />
        <h2>Caterings</h2>
        <p>
          In the new era of technology we look in the future with certainty for
          life.
        </p>
      </div>
       <div className={style.card}>
        <img src={Birthdays} alt="birthdays" />
        <h2>Birthdays</h2>
        <p>
          In the new era of technology we look in the future with certainty for
          life.
        </p>
      </div>
       <div className={style.card}>
           <img src={Weddings} alt="weddings" />
        <h2>Weddings</h2>
        <p>
          In the new era of technology we look in the future with certainty for
          life.
        </p>
      </div>
       <div className={style.card}>
           <img src={Events} alt="events" />
        <h2>Events</h2>
        <p>
          In the new era of technology we look in the future with certainty for
          life.
        </p>
      </div>
      </ul>

    </section>
  );
}
