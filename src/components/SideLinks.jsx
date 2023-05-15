import React, { useState } from 'react'
import { aboutLinks } from '../data'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Sidelinks = () => {
  const [isActive, setIsActive] = useState(false)

  const handleActive = () => {
      setIsActive(isActive)
  }
  const [isShowing, setIsShowing] = useState(false)
  const handleClose = () => {
    setIsShowing(prev => !prev)
  }

  return (
    <React.Fragment>
      <button
        className="z-40 fixed top-32 right-5 inline-flex items-center justify-center lg:hidden 
            float-right shadow-xl h-10 w-10 rounded-full  bg-gray-900"
            onClick={handleClose}
      >
        {isShowing ? (
          <XMarkIcon className="text-gray-100 dark:text-cyan-500" />
        ) : (
          <Bars3Icon className="text-gray-100 dark:text-cyan-500 font-bold" />
        )}
      </button>

      <aside
        id="default-sidebar"
        className={`relative max-sm:absolute max-md:absolute max-sm:z-40 max-md:z-40 
         md:absolute md:z-40 lg:relative lg:w-64 left-0 h-screen 
        transition-transform sm:translate-x-0 md:translate-x-0 lg:translate-x-0
       ${isShowing ? "translate-x-0" : "-translate-x-full"} overflow-y-auto ease-in-out duration-1000`} tabIndex={-1}
      >
        <div className=" px-3 py-5 h-full overflow-y-0 border-r border-cyan-400 bg-gray-300 dark:bg-cyan-950">
          <ul className="space-y-2 font-medium text-sm md:text-md">
            {aboutLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  onClick={handleActive}
                  className="active:bg-cyan-200 focus:outline-none focus:ring focus:ring-cyan-100 flex items-center md: p-2 text-gray-100 rounded-full 
                  dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-cyan-100 dark:hover:text-gray-800 
                  group-hover:text-gray-800 dark:group-hover:text-gray-950"
                >
                  <span>{link.icon}</span>
                  <span className="ml-3">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default Sidelinks

