import React from 'react'
import style from './Menu.module.css'
import Button from "../Buttons/Buttons"
export default function Menu({btnTxt,variant}) {
  return (
    <section className={style.page}>
    <div className={style.button}>
      <li className={style.primary}>
    <Button btnTxt='Book A Table' />
    </li>
    <li className={style.secondary}>
     <Button btnTxt='Explore Menu'/>
     </li>
      
    </div>
    </section>
  )
}
