import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <React.Fragment>
      <div className="scroll-smooth">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default HomeLayout
