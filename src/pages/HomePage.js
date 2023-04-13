import React from 'react'
import "../CSS/Home.css"
import Navbar from '../Componenets/Navbar'

function HomePage() {
  return (
    <div id='bigBoxHome'>
        <Navbar/>
         <div className="boxBtns">
         <a href='/createBook'><button id='btn2' className="btn btn-primary">Create Book</button></a>
         </div>
    </div>
  )
}

export default HomePage
