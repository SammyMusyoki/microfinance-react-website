import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidelinks from '../components/SideLinks'

const AboutLayout = () => {
  return (
    <React.Fragment>
      <div className='flex'>
        <Sidelinks/>
        <div className="relative isolate bg-gray-100 dark:bg-cyan-950 h-screen scroll-smooth scrollbar-hide max-sm:overflow-y-scroll max-md:overflow-y-scroll md:overflow-y-scroll w-full">
        <Outlet/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutLayout
