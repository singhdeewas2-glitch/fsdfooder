import React from "react";
import style from "./Botton.module.css";
import { Link } from "react-router-dom";
import img from "../../assets/logo1.png";
export default function Botton() {
  return (
    <nav className={style.navbar}>

      <div className={style.title}>
          <img src={img} className={style.logo} alt="logo" />
          <span className={style.tittle}>Deewas Resturent</span>
      </div>
      <ul className={style.pages}>
        <li className={style.home}>
          <Link to="/home">Home</Link>
        </li>
        <li className={style.about}>
          <Link to="/about">About</Link>
        </li>
        <li className={style.Menu}>
          <Link to="/menu">Menu</Link>
        </li>
        <li className={style.page}>
          <Link to="/pages">Pages</Link>
        </li>
        <li className={style.contact}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
        <button className={style.Book}>
             <Link to="/book">Book A Table</Link>

        </button>
    </nav>
  );
}
