import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import Menu from '../components/Home/Menu'
import Brousermenu from '../components/Home/Brousermenu'
import Visitus from '../components/Home/Visitus'
import Uniqueservices from '../components/Home/Uniqueservices'
import Delevery from '../components/Home/Delevery'
import Customers from '../components/Home/Customers'
import BlogArticles from '../components/Home/BlogArticles'
export default function Home() {
  return (
    <div>
        <Buttons/>
        <Menu/>
        <Brousermenu/>
        <Visitus/>
        <Uniqueservices/>
        <Delevery/>
        <Customers/>
        <BlogArticles/>
      
    </div>
  )
}
