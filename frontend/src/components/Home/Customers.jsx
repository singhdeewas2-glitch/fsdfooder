import React from "react";
import style from "./Customers.module.css";
import user from "../../assets/User.png";
import user1 from "../../assets/User1.png";
import user2 from "../../assets/User2.png";
export default function Customers() {
  return (
    <section className={style.test}>
      <h1 className={style.heading}>What Our Customers Say</h1>
      

      <ul className={style.cards}>
        <div className={style.card}>
          <h2 className={style.quote}>“The best restaurant”</h2>
          <p className={style.text}>
            Last night, we dined at place and were simply blown away. From the
            moment we stepped in, we were enveloped in an inviting atmosphere
            and greeted with warm smiles..
          </p>
          <div className={style.divider}></div>
           <li className={style.dee} >
          <img src={user} className={style.user} alt="Sophie Robson" />
          <li className={style.column}>
          <p className={style.name}>Sophie Robson</p>
          <p className={style.location}>Los Angeles, CA</p>
          </li>
          </li>
        </div>

        <div className={style.card2}>
          <h2 className={style.quote}>“Simply delicious”</h2>
          <p className={style.text}>
            Place exceeded my expectations on all fronts. The ambiance was cozy
            and relaxed, perfect for an anniversary dinner.Each dish was
            prepared and beautifully presented.
          </p>
          <div className={style.divider}></div>
            <li  className={style.dee}>
          <img src={user1} className={style.user} alt="Matt Cannon" />
           <li className={style.column}>
          <p className={style.name}>Matt Cannon</p>
          <p className={style.location}>San Diego, CA</p>
           </li>
            </li>
        </div>

        <div className={style.card1}>
          <h2 className={style.quote}>“One of a kind restaurant”</h2>
          <p className={style.text}>
          The culinary experience at place is first to none. The atmosphere is vibrant, the food nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.
          </p>
          <div className={style.divider}></div>
          <li className={style.dee}>
          <img src={user2} className={style.user} alt="Andy Smith" />
           <li className={style.column}>
          <p className={style.name}>Andy Smith</p>
          <p className={style.location}>San Francisco, CA</p>
          </li>
          </li>
        </div>
      </ul>
    </section>
  );
}
