import React from 'react'
import Visitus from '../components/About/Visit'
import Play from "../components/About/Play"
import Value from '../components/About/Value'
import Customers from '../components/About/Customers'
export default function About() {
  return (
    <div>
      <Visitus/>
      <Play/>
      <Value/>
      <Customers/>
    </div>
  )
}
